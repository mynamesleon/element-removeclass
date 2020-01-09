const REGEX_TRIM = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
const trim = str => (str == null ? '' : (str + '').replace(REGEX_TRIM, ''));

/**
 * @description remove class(es) from element(s) - support pre `classList`
 * @param {Element|Element[]} elem
 * @param {String} classes - space delimitted class(es) to remove
 */
export default function removeClass(elem, classes) {
    if (elem && typeof elem.length === 'number') {
        for (let i = 0, l = elem.length; i < l; i += 1) {
            removeClass(elem[i], classes);
        }
        return;
    }

    // make sure first argument is an element
    if (!elem || !elem.nodeType) {
        return;
    }

    // use current class with spaces each side for string checking
    const curValue = (elem.getAttribute && elem.getAttribute('class')) || '';
    let finalValue = ` ${curValue} `;

    // split at spaces for checking multiple classes to remove
    for (let i = 0, cs = classes.split(' '), l = cs.length; i < l; i += 1) {
        finalValue = finalValue.replace(` ${cs[i]} `, ' ');
    }

    // trim final value for html validity
    finalValue = trim(finalValue);
    if (curValue !== finalValue) {
        elem.setAttribute('class', finalValue);
    }
}
