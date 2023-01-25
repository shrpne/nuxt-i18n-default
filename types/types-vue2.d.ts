import type {VueI18nDefault} from './default'

// @see https://typescript.nuxtjs.org/cookbook/plugins/#ii-inject-into-context
declare module 'vue/types/vue' {
    // this.$td inside Vue components
    interface Vue {
        $td: typeof VueI18nDefault.prototype.td;
    }
}

// @see https://typescript.nuxtjs.org/cookbook/plugins/#ii-inject-into-context
declare module '@nuxt/types' {
    // nuxtContext.app.$td inside asyncData, fetch, plugins, middleware, nuxtServerInit
    interface NuxtAppOptions {
        $td: typeof VueI18nDefault.prototype.td;
    }
}
