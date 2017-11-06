module.exports = {
  "extends": [
    "react-app",
    "airbnb",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "plugins": [
    "react",
    "jsx-a11y"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "commonjs": true
  },
  "rules": {
    "array-callback-return": "warn",
    "arrow-body-style": "warn",
    "class-methods-use-this": "warn",
    "comma-dangle": ["warn", "never"],
    "max-len": ["error", 130, 2, { "ignoreComments": true, "ignoreRegExpLiterals": true }],
    "consistent-return": "warn",
    "import/no-unresolved": ["off",{"ignore": ['core/modules/']}],
    "import/extensions": "off","import/first": "off",
    "import/no-extraneous-dependencies": "off",
    "no-unused-vars": "warn",
    "no-unused-expressions": "warn",
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
  },
};
