module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/test", "<rootDir>/lambdas"],
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@node_modules/(.*)$":
      "<rootDir>/lambdas/layers/base/nodejs/node_modules/$1",
    "^@layer/(.*)$": "<rootDir>/lambdas/layers/base/$1",
  },
};
