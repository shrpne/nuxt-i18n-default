// import _get from 'lodash-es/get';
import decode from 'entity-decode';

/**
 * @param i18nPath
 * @returns {VueI18nDefault.td}
 */
export default function translateDefaultFactory(i18nPath) {
    /**
     * @type {VueI18nDefault.td}
     */
    return function td(defaultText, path, ...otherArgs) {
        // const hasTranslation = _get(this[i18nPath].messages[this[i18nPath].locale], path);
        const hasTranslation = this[i18nPath].te(path);
        const translation = hasTranslation ? this[i18nPath].t(path, ...otherArgs) : defaultText;
        return typeof translation === 'string' ? decode(translation) : translation;
    };
}
