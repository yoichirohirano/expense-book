import * as functions from "firebase-functions";

export const onFirestore = {
  updateCategoryInAllDocuments: functions.firestore
    .document("users/{userId}/categories/{categoryId}")
    .onUpdate((change, context): any => {
      return true;
    }),
};
