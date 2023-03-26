function getProp(obj, n, l) {
  const nameObj = {}; const
    levelObj = {};
  nameObj[n] = '';
  levelObj[l] = '';
  const otherListPropSort = Object.keys(obj).sort();
  const otherObj = {};
  for (const key of otherListPropSort) {
    otherObj[key] = obj[key];
  }
  const mergePropObj = { ...nameObj, ...levelObj, ...otherObj };
  return mergePropObj;
}

function getPropV2(obj, n, l) {
  const nameObj = {}; const levelObj = {}; const
    otherObj = {};
  nameObj[n] = '';
  levelObj[l] = '';
  for (const prop in obj) {
    if (prop !== n || prop !== l) {
      otherObj[prop] = obj[prop];
    }
  }
  const otherObjSort = Object.keys(otherObj).sort().reduce((obj, key) => {
    obj[key] = otherObj[key];
    return obj;
  }, {});
  const mergePropObj = { ...nameObj, ...levelObj, ...otherObjSort };
  return mergePropObj;
}

export default function orderByProps(obj, params, p = true) {
  let mergePropObj;
  if (p) {
    mergePropObj = getProp(obj, params[0], params[1]);
  } else {
    mergePropObj = getPropV2(obj, params[0], params[1]);
  }
  const listObj = [];
  for (const item of Object.entries(mergePropObj)) {
    const itemObj = { key: item[0], value: item[1] };
    listObj.push(itemObj);
  }
  return listObj;
}
