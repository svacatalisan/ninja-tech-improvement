/**
 * Created by alexcatalisan on 03.11.2017.
 */

/* Based on defined state dependencies create the return object
 * param state: current state
 * param propsFromState: properties that need to be read from state
 */
export function createStateToPropsMapping(state, propsFromState) {
    if (!propsFromState) return {};

    const mapToReturn = {};
    Object.keys(propsFromState).map((key) => {
        propsFromState[key].map((value) => {
            if (!value) return;
            mapToReturn[value] = state[key][value];
        });
    });

    return mapToReturn;
}

/* JSON unflat */
export function flatten(data) {
    var result = {};

    function recurse(cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
            for (var i = 0, l = cur.length; i < l; i++)
                recurse(cur[i], prop ? prop + "." + i : "" + i);
            if (l === 0)
                result[prop] = [];
        } else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop + "." + p : p);
            }
            if (isEmpty)
                result[prop] = {};
        }
    }
    recurse(data, "");
    return result;
}

/* JSON unflat */
export function unflatten(data) {
    if (Object(data) !== data || Array.isArray(data))
        return data;
    var result = {},
        cur, prop, parts, idx;
    for (var p in data) {
        cur = result;
        prop = "";
        parts = p.split(".");
        for (var i = 0; i < parts.length; i++) {
            idx = !isNaN(parseInt(parts[i], 10));
            cur = cur[prop] || (cur[prop] = (idx ? [] : {}));
            prop = parts[i];
        }
        cur[prop] = data[p];
    }
    return result[""];
}