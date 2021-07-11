# Hash Router for web components

Hash router for web components, which works without server side route settings.
## Usage example
```html
<hash-router>
  <main-component on="#"></main-component>
  <about-component on="#about"></about-component>
  <item-component on="#items/:name"></item-component>
</hash-router>
<a href="#about">About</a>
<a href="#items/abc">abc</a>
```
This renders
`<main-component></main-component>` for `#`, `<about-component></about-component>` for `#about`, and `<item-component name="abc"></item-component>` for `#items/abc`.

Use normal links (`<a href="#about/abc">Link</a>`) for navigation.

## Sample
run `npm install`, `cd sample` and `npm run start`.

## Install
`npm install takuminakano/hash-router-wc`
