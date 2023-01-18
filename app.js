class XHello extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this._shadowRoot.innerHTML = `<h1>Hello, World!</h1>`;

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
    this._shadowRoot.innerHTML = `<h1>Why Hello, World!</h1><h2>This is my second component</h2>`;
    //adding custom css (doesn't work)
    // this._shadowRoot.style.border = '1px solid black';
    // this._shadowRoot.style.borderRadius = '5px';
    // this._shadowRoot.innerHTML = `<h1>test!</h1>`;
  }
}
  customElements.define('y-hello', YHello);


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
