// import _get from 'lodash-es/get';
import decode from 'entity-decode';

/**
 * @returns {VueI18nDefault.td}
 */
export default function translateDefaultFactory() {
    /**
     * @type {VueI18nDefault.td}
     */
    return function td(defaultText, path, ...otherArgs) {
        // this.$te - vue app vm
        // this.$i18n.te - nuxt3 app context
        // this.i18n.te - nuxt2 app context
        const $te = this.$te || this.$i18n?.te || this.i18n?.te;
        const $t = this.$t || this.$i18n?.t || this.i18n?.t;
        // const hasTranslation = _get(this[i18nPath].messages[this[i18nPath].locale], path);
        const hasTranslation = $te(path);
        const translation = hasTranslation ? $t(path, ...otherArgs) : defaultText;
        return typeof translation === 'string' ? decode(translation) : translation;
    };
}
