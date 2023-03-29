
export default function getSpecialArray(obj) {
  const listSpecial = obj.special;
  const specialArray = [];
  for (const item of listSpecial) {
    const {
      id, name, icon, description = item.description || "Отсутствует описание",
    } = item;
    const objItem = {
      id, name, icon, description,
    };
    specialArray.push(objItem);
  }
  return specialArray;
}
