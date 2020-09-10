import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

admin.initializeApp();
export const db = admin.firestore();

type ContextParams = {
  userId: string;
  categoryId: string;
};

export type Category = {
  id: string;
  name: string;
};

export const onFirestore = {
  updateCategoryInAllDocuments: functions.firestore
    .document("users/{userId}/categories/{categoryId}")
    .onUpdate(
      async (
        change: functions.Change<FirebaseFirestore.QueryDocumentSnapshot>,
        context: functions.EventContext
      ): Promise<void> => {
        const { name } = change.after.data() as Category;
        const { userId, categoryId } = context.params as ContextParams;
        const batch = db.batch();
        const expenseQuerySnapshot = await db
          .collection("users")
          .doc(userId)
          .collection("expenses")
          .where("category.id", "==", categoryId)
          .get();
        const budgetQuerySnapshot = await db
          .collectionGroup("categoryBudgets")
          // userIdによってフィルタリングしていないが、セキュリティルールによって担保する
          .where("category.id", "==", categoryId)
          .get();
        const docs = [
          ...expenseQuerySnapshot.docs,
          ...budgetQuerySnapshot.docs,
        ];
        docs.forEach((doc) => {
          batch.update(doc.ref, {
            category: {
              id: categoryId,
              name,
            },
          });
        });
        await batch.commit();
      }
    ),
};
