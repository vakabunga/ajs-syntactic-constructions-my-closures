import findBy from '../findBy';

describe('findBy', () => {
  test('shoul show object which contains required element', () => {
    const arr = [
      { name: 'маг', type: 'character', description: ' ' },
      { name: 'заклинание', type: 'attack', description: ' ' },
      { name: 'урон', type: 'help', description: ' ' },
    ];
    const result = arr.filter(findBy('name', 'урон'));
    expect(result).toEqual([{ name: 'урон', type: 'help', description: ' ' }]);
  });
});
