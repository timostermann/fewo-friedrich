export default {
  "*.{json,js,jsx,ts,tsx}": "npx prettier --write",
  "*.{js,jsx,ts,tsx}": "npm run eslint -- --fix",
};
