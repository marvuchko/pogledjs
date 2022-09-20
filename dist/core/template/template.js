"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Template {
    constructor(html) {
        this.template = document.createElement('template');
        this.template.innerHTML = html;
    }
    toHtmlNode() {
        return this.template.content.cloneNode(true);
    }
}
exports.default = Template;
//# sourceMappingURL=template.js.map