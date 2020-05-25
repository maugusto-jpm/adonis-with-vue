// This file allows .tsx syntaxsupport in IDEs to write JSX-style typescript code

import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}

    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
