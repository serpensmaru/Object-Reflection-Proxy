function getProp(obj, n, l) {
  const nameObj = {},
        levelObj = {};
  nameObj[n] = '',
  levelObj[l] = '';
  const otherListPropSort = Object.keys(obj).sort(),
        otherObj = {};
  for (let key of otherListPropSort) {
    otherObj[key] = obj[key];
  }
  const mergePropObj = { ...nameObj, ...levelObj, ...otherObj };
  return mergePropObj;
}

export default function orderByProps(obj, params) {
  let mergePropObj = getProp(obj, params[0], params[1]);

  const listObj = [];
  for (let item of Object.entries(mergePropObj)) {
    const itemObj = { key: item[0], value: item[1] };
    listObj.push(itemObj);
  }
  return listObj;
}
