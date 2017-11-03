/**
 * Created by alexcatalisan on 03.11.2017.
 */

export function createCookie() {
  return {}
}

export function getCookie() {
  return {}
}

export function deleteCookie() {
  return {};
}

/* get data from server */
export function get(payload) {
  return {};
}

/* send data on server */
export function post(payload) {
  return {};
}

/* JSON unflat */
export function flatten(data) {
  var result = {};
  function recurse (cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur;
    } else if (Array.isArray(cur)) {
      for(var i=0, l=cur.length; i<l; i++)
        recurse(cur[i], prop ? prop+"."+i : ""+i);
      if (l == 0)
        result[prop] = [];
    } else {
      var isEmpty = true;
      for (var p in cur) {
        isEmpty = false;
        recurse(cur[p], prop ? prop+"."+p : p);
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
  "use strict";
  if (Object(data) !== data || Array.isArray(data))
    return data;
  var result = {}, cur, prop, parts, idx;
  for(var p in data) {
    cur = result, prop = "";
    parts = p.split(".");
    for(var i=0; i<parts.length; i++) {
      idx = !isNaN(parseInt(parts[i]));
      cur = cur[prop] || (cur[prop] = (idx ? [] : {}));
      prop = parts[i];
    }
    cur[prop] = data[p];
  }
  return result[""];
}
