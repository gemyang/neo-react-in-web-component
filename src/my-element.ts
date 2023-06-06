import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

import { Composer } from './components';

class WCHeader extends HTMLElement {
  rootForReactChild: any;
  connectedCallback() {
    this.rootForReactChild = createRoot(this);
    this.rootForReactChild.render(
      createElement(Composer, { text: 'Using Neo React inside an Element' })
    );
  }

  disconnectedCallback() {
    this.rootForReactChild.unmount();
  }
}

customElements.define('my-element', WCHeader);
