import VueI18n from "vue-i18n";

declare class VueI18nDefault {
    // same as VueI18n.t() but with extra param defaultText
    // @see https://github.com/kazupon/vue-i18n/blob/44ff0b9c273870c1adb43968d0f9cf7ce95e09f0/types/index.d.ts#L237
    td(defaultText: string, key: VueI18n.Path, values?: VueI18n.Values): VueI18n.TranslateResult;
    td(defaultText: string, key: VueI18n.Path, locale: VueI18n.Locale, values?: VueI18n.Values): VueI18n.TranslateResult;
}

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
