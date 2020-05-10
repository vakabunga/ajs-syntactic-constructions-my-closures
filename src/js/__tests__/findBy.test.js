import findBy from '../app';

describe('findBy', () => {
  test('shoul show object which contains required element', () => {
    const arr = [
      { name: 'маг', type: 'character', description: ' ' },
      { name: 'заклинание', type: 'attack', description: ' ' },
      { name: 'урон', type: 'help', description: ' ' },
    ];
    const finder = findBy('name', 'урон');
    const result = arr.filter(finder);
    expect(result).toEqual([{ name: 'урон', type: 'help', description: ' ' }]);
  });
});
