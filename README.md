```html
<!--local script-->
<script src="http://localhost:5173/src/main.js"></script>

<!--github pages script-->
<script>
  if (typeof vite === "undefined") {
    // add css to head
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://getonnet.github.io/ads-calculator-2024-custom-code/dist/assets/index.css";
    document.head.appendChild(link);

    // add JS code to end of body
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://getonnet.github.io/ads-calculator-2024-custom-code/dist/assets/index.js";
    document.body.appendChild(script);
  }
</script>
```

`git acp` is a custom git alias for `git add`, `git commit` & `git push`.
If you dont create a customa alias, that command wont work. In this case
you can run `pnpm build` and then, push to github manually.