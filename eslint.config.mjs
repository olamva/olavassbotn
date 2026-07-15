import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		rules: {
			"no-param-reassign": "error",
			"no-unneeded-ternary": "error",
			"no-unused-expressions": "error",
			"no-useless-return": "error",
			"no-var": "error",
			"prefer-const": "error",
			yoda: "error",
		},
	},
];
