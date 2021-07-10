import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement("hash-router")
export class HashRouterElement extends LitElement {
    hashRouter: HashRouter;
    firstUpdated(){
        this.hashRouter = new HashRouter(this.shadowRoot.getElementById("root"));
        let routes = [];
        for(let childNode of Array.from(this.children)){
            routes.push({hash: childNode.getAttribute("on"), component: childNode.tagName});
        }
        //this.hashRouter.setRoutes(routePaths);
        this.hashRouter.routes = routes;
    }
    render(){
        return html`<div id="root"></div>`;
    }
}
export class HashRouter {
    root: HTMLElement;
    _routes: {[key: string] : string} [] = [];
    constructor(root: HTMLElement){
        this.root = root;
        this.registerOnPopState();
        window.onload = (event) =>{
            this.onPopState(event);
        }
    }
    registerOnPopState(){
        window.onpopstate = (event) =>{
            this.onPopState(event);
        }
    }
    onPopState(event){
        let [matchedRoute, matchedParams] = this.getMatchedRoute(window.location.hash);
        if (matchedRoute !== null){
            if (matchedParams === null){
                this.root.innerHTML = "<" + matchedRoute.component + "></" + matchedRoute.component + ">";
            } else {
                //let matchedParamsAttribute = "";
                let matchedParamsAttributes: string[] = [];
                for(let matchedParam in matchedParams){
                    matchedParamsAttributes.push(matchedParam + "=" + matchedParams[matchedParam]);
                }
                this.root.innerHTML = "<" + matchedRoute.component + " " + matchedParamsAttributes.join(" ") + "></" + matchedRoute.component + ">";
            }
        } else {
            this.root.innerHTML = "";
        }
    }

    getMatchedRoute(hash: string){
        for(let route of this._routes){
            if (route.hash === hash){
                return [route, null];
            }
            let hashTokens = hash.substring(1).split("/");
            let routeTokens = route.hash.substring(1).split("/");
            if (hashTokens.length !== routeTokens.length) continue;
            let hashParams = {};
            let matched = true;
            for(let i=0; i<hashTokens.length; i++){
                if (routeTokens[i].startsWith(":")) {
                    hashParams[routeTokens[1].substring(1)] = hashTokens[i];
                } else {
                    if (routeTokens[i] !== hashTokens[i]){
                        matched = false;
                        break;
                    }
                }
            }
            if (matched){
                return [route, hashParams];
            }
        }
        return [null, null];
    }
    set routes(routes: {[key: string] : string}[]){
        this._routes = routes;
    }
}
