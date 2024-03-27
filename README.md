```html
<!--local script-->
<script src="http://localhost:5173/src/main.js"></script>

<!--github pages script-->
<script>
  if (typeof vite === "undefined") {
    // add css to head
    let stylesheet = document.createElement("style");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "https://getonnet.github.io/ads-calculator-2024-custom-code/dist/assets/index.css";
    document.head.appendChild(stylesheet);

    // add JS code to end of body
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://getonnet.github.io/ads-calculator-2024-custom-code/dist/assets/index.js";
    document.body.appendChild(script);
  }
</script>
```