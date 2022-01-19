To reproduce:

```
git clone git@github.com:LeBenLeBen/vuepress-tailwindcss-bug.git
cd vuepress-tailwindcss-bug
npm install
npm run docs:dev
```

Then change something in `docs/README.md` and save it.

👉️ Hot reload didn’t work, the page is fully refreshed.
