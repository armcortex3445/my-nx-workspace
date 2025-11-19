import { getRandomItem } from '@ts-demo/util';
export function animal(): string {
  return 'animal';
}

export interface Animal {
  name: string;
  sound: string;
}

const animals: Animal[] = [
  { name: 'cow', sound: 'moo' },
  { name: 'dog', sound: 'woof' },
  { name: 'pig', sound: 'oink' },
  { name: 'cat', sound: 'meow' },
];

export function getRandomAnimal(): Animal {
  return getRandomItem(animals);
}