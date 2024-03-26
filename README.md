# ads-calculator-2024-custom-code

Add following code in webflow page script section.

```html
<!--CSS-->
<!--<link rel="stylesheet" href="https://getonnet.github.io/bidder-calc/dist/app.css">-->

<!--JavaScript-->
<script src="http://localhost:1234/script.js"></script>

<script>
  // checks if the parceled variable from app.js is undefined
  // meaning local host isn't up and running
  // so, loads from the github pages
  if (typeof parceled === "undefined") {
    // add JS code to end of body
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://getonnet.github.io/ads-calculator-2024-custom-code/dist/script.js";
    document.body.appendChild(script);
  }
</script>
```