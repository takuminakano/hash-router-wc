import { HashRouter, HashRouterElement } from 'hash-router-wc';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

new HashRouterElement();

@customElement("about-component")
export class AboutComponent extends LitElement {
    render(){
        return html`<h1>About</h1>`;
    }
}

@customElement("home-component")
export class HomeComponent extends LitElement {
    render(){
        return html`<h1>Home</h1>`;
    }
}

@customElement("item-component")
export class ItemElement extends LitElement {
    @property() name;
    render(){
        //let locationname = window.location.params.name;
        return html`<h1>:name is ${this.name}</h1><a href='#items/abc'>abc</a>`;
    }
}

