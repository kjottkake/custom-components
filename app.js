class XHello extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this._shadowRoot.innerHTML = `<h1>Hello, I'm a custom element called XHello!</h1>`;

      //adding custom css (doesn't work)
      this._shadowRoot.style.border = '1px solid black';
      // this._shadowRoot.style.borderRadius = '5px';
      // this._shadowRoot.innerHTML = `<h1>test!</h1>`;
    }
  }
  customElements.define('x-hello', XHello);

class YHello extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.innerHTML = `<h1>I'm another custom element called YHello</h1><p>I'm an additional custom element</p>`;
    //adding custom css (doesn't work)
    // this._shadowRoot.style.border = '1px solid black';
    // this._shadowRoot.style.borderRadius = '5px';
    // this._shadowRoot.innerHTML = `<h1>test!</h1>`;
  }
}
  customElements.define('y-hello', YHello);


  //chatGPT example
  class MyList extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<ul> </ul>`;
      const items = ["item 1", "item 2", "item 3"];
      const list = this.querySelector("ul");
      items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
      });
    }
  }
  customElements.define("my-list", MyList);


