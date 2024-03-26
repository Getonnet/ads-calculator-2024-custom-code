```html
<!--local script-->
<script src="http://localhost:5173/main.js"></script>

<!--github pages script-->

<script>
  if (typeof vite === "undefined") {
    // add JS code to end of body
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://getonnet.github.io/ads-calculator-2024-custom-code/dist/script.js";
    document.body.appendChild(script);
  }
</script>
```