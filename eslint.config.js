import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  { ignores: ["build", "functions", "node_modules", "storybook-static"] },
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: { "react-hooks": reactHooks },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // 旧設定 (@typescript-eslint v2 recommended) と同じく警告扱いにする
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      // 旧設定になかったルール。既存コードの修正は別途行う
      "@typescript-eslint/no-unused-expressions": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
      "no-useless-assignment": "warn",
    },
  },
  prettierRecommended
);
