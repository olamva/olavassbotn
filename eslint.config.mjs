import pluginJs from "@eslint/js";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
	},
	pluginReactConfig,
	{
		settings: {
			react: {
				version: "detect",
			},
		},
		plugins: {
			"react-hooks": pluginReactHooks,
		},
		rules: {
			"no-const-assign": "error",
			"no-param-reassign": "error",
			"no-unneeded-ternary": "error",
			"no-unreachable": "error",
			"no-unused-expressions": "error",
			"no-useless-return": "error",
			"no-var": "error",
			"prefer-const": "error",
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "error",
			yoda: "error",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					vars: "all",
					args: "after-used",
					ignoreRestSiblings: true,
				},
			],
			"no-constant-binary-expression": "error",
			"no-undef": "error",
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
		},
	},
];
