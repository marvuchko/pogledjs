"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("./core");
const paragraf = (0, core_1.template)(`
    <p>Test!</p>
`);
const app = document.querySelector('#app');
app.appendChild(paragraf.toHtmlNode());
//# sourceMappingURL=index.js.map