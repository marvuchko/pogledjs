export default class Template {

    private template: HTMLTemplateElement;

    constructor(html: string) {
        this.template = document.createElement('template');
        this.template.innerHTML = html;
    }

    public toHtmlNode(): Node {
        return this.template.content.cloneNode(true);
    }

}