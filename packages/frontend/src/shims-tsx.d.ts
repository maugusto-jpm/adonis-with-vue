// This file allows .tsx syntaxsupport in IDEs to write JSX-style typescript code

import Vue, { VNode } from 'vue'
import VueRouter from 'vue-router'

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}

    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter
  }
}
