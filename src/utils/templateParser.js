/* eslint-disable */
/*
 * Created by alexcatalisan on 03.11.2017.
 */
/*
 * Receiving a json which has the values as external objects,
 * parse the json and use interpolation to set the values as external object values.
 */
export const generateTemplateString = (function() {
    const cache = {};

    function generateTemplate(template) {
        let fn = cache[template];
        if (!fn) {
            // Replace ${expressions} (etc) with ${map.expressions}.
            const sanitized = template
                .replace(/\$\{([\s]*[^;\s\{]+[\s]*)\}/g, (_, match) => `\$\{map.${match.trim()}\}`)
                // Afterwards, replace anything that's not ${map.expressions}' (etc) with a blank string.
                .replace(/(\$\{(?!map\.)[^}]+\})/g, '');
            fn = Function('map', `return \`${sanitized}\``);
        }
        return fn;
    }
    return generateTemplate;
}());