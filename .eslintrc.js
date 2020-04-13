module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "node": true,
      "jest": true,
  },
  "extends": "eslint:recommended",
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaVersion": 2019,
      "sourceType": "module"
  },
  "rules": {
      "semi": ["error", "always"],
      "quotes": ["error", "single"]
  },
  "eslintConfig": {
    "extends": ["strict/es5"],
    "rules": {
      "no-debugger": 0
    }
  }
};
