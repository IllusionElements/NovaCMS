module.exports = {
    "parser": "babel-eslint",
    "extends": ["airbnb"],
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "flowtype",
    ],
    "rules": {
        "semi": ["error", "never"],
        "no-param-reassign": ["error", { "props": true, "ignorePropertyModificationsFor": ["acc", "filters", "params", "options", "accumulator", "doc", "e", "ctx", "req", "request", "res", "response", "$scope"] }],
        "no-underscore-dangle": ["error", { "allow": ["_id", "_ensureIndex"], "allowAfterThis": true, "allowAfterSuper": false, "enforceInMethodNames": false }],
        "import/no-absolute-path": 0,
        "import/extensions": ["error",  "ignorePackages"],
        "import/prefer-default-export": ["warn"],
        "flowtype/define-flow-type": 1,
		"flowtype/delimiter-dangle": [
			2,
			"never"
		],
		"flowtype/generic-spacing": [
			2,
			"never"
		],
		"flowtype/no-primitive-constructor-types": 2,
		"flowtype/no-types-missing-file-annotation": 2,
		"flowtype/no-weak-types": 2,
		"flowtype/object-type-delimiter": [
			2,
			"comma"
		],
		"flowtype/require-parameter-type": 2,
		"flowtype/require-return-type": [
			2,
			"always",
			{
                "annotateUndefined": "never",
                "excludeArrowFunctions": true,
			}
		],
		"flowtype/require-valid-file-annotation": 2,
		"flowtype/semi": [
			2,
			"always"
		],
		"flowtype/space-after-type-colon": [
			2,
			"always"
		],
		"flowtype/space-before-generic-bracket": [
			2,
			"never"
		],
		"flowtype/space-before-type-colon": [
			2,
			"never"
		],
		"flowtype/type-id-match": [
			2,
			"^([A-Z][a-z0-9]+)+Type$"
		],
		"flowtype/union-intersection-spacing": [
			2,
			"always"
		],
		"flowtype/valid-syntax": 1
    },
    "env": {
      "mocha": true,
    },
    "settings": {
        "import/resolver": {
          "meteor": {
            "extensions": [
              ".js",
              ".jsx",
              ".es6",
              ".coffee"
            ],
            "moduleDirectory": [
              "node_modules",
              "bower_components",
              "imports"
            ]
          }
        }
      },

}