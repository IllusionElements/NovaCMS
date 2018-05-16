module.exports = {
    "parser": "babel-eslint",
    "extends": ["airbnb"],
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
    ],
    "rules": {
        "semi": ["error", "never"],
        "no-param-reassign": ["error", { "props": true, "ignorePropertyModificationsFor": ["acc", "filters", "params", "options", "accumulator", "doc", "e", "ctx", "req", "request", "res", "response", "$scope"] }],
        "no-underscore-dangle": ["error", { "allow": ["_id", "_ensureIndex"], "allowAfterThis": true, "allowAfterSuper": false, "enforceInMethodNames": false }],
        "import/no-absolute-path": 0,
        "import/extensions": ["error",  "ignorePackages"],
        "import/prefer-default-export": ["warn"]
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