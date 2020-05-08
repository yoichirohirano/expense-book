/**
 * Genericsの引数にわたすファイルが全て関数の場合、関数の戻り値を取得するヘルパー型
 * ※ReturnType型:typeofと併用することで関数型から返り値の型を推論できる、組み込みUtilityTypes
 */
type ReturnTypes<T> = {
  [K in keyof T]: T[K] extends (...args: Array<any>) => any
    ? ReturnType<T[K]>
    : never;
};

/**
 * オブジェクトの子ノードの型を抽出するヘルパー型
 */
type Unbox<T> = T extends { [K in keyof T]: infer U } ? U : never;

type T = Unbox<{ a?: "typeA"; b: string }>; // type T = typeA | string

/**
 * ActionCreatorsをGenericsとして渡すことで、Action型に相当する型をUnionTypesで取得する
 */
export type CreatorsToActions<T> = Unbox<ReturnTypes<T>>;
