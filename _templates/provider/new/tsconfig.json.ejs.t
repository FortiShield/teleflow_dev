---
    to: providers/<%= name %>/tsconfig.json
---

{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "build/main",
    "rootDir": "src",
    "types": ["node", "jest"]
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules/**"]
}
