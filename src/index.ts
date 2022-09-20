import { template } from './core';

const paragraf = template(`
    <p>Test!</p>
`);

const app = document.querySelector('#app'); 
app.appendChild(paragraf.toHtmlNode());