import Template from "./template.js";

export const template = (html: string): Template => new Template(html);