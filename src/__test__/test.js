import orderByProps from '../orderByProps';
import defineProperties from '../destructFunc';

test('test order by props', () => {
  const orderOrig = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const orderAmount = [{ key: 'name', value: 'мечник' }, { key: 'level', value: 2 }, { key: 'attack', value: 80 }, { key: 'defence', value: 40 }, { key: 'health', value: 10 }];
  const orderResultTrue = orderByProps(orderOrig, ['name', 'level'], true);
  const orderResultFalse = orderByProps(orderOrig, ['name', 'level'], false);
  expect(orderResultTrue).toEqual(orderAmount);
  expect(orderResultFalse).toEqual(orderAmount);
});

test('test destruc obj', () => {
  const arayOrig = {
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };
  const arrayAmount = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ];

  const arrayResult = defineProperties(arayOrig);
  expect(arrayResult).toEqual(arrayAmount);
});
