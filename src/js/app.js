// TODO: write your code here
export default function findBy(name, value) {
  // eslint-disable-next-line consistent-return
  return function findInArr(elem) {
    for (const prop in elem) {
      if (prop === name && elem[prop] === value) return true;
    }
  };
}
