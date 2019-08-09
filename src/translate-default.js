// import _get from 'lodash-es/get';
import decode from 'entity-decode';

export default function translateDefaultFactory(i18nPath) {
    /**
     *
     * @param defaultText
     * @param path
     * @param otherArgs
     * @return {*}
     */
    return function td(defaultText, path, ...otherArgs) {
        // const hasTranslation = _get(this[i18nPath].messages[this[i18nPath].locale], path);
        const hasTranslation = this[i18nPath].te(path);
        return decode(hasTranslation ? this[i18nPath].t(path, ...otherArgs) : defaultText);
    };
}
