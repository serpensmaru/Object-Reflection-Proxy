function getDescription(item) {
  if (item.description === undefined) {
    return 'Описание недоступно';
  }
  return item.description;
}

export default function getSpecialArray(obj) {
  const listSpecial = obj.special;
  const specialArray = [];
  for (const item of listSpecial) {
    const {
      id, name, icon, description = getDescription(item),
    } = item;
    const objItem = {
      id, name, icon, description,
    };
    specialArray.push(objItem);
  }
  return specialArray;
}
