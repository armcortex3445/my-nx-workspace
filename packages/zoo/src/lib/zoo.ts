import { getRandomAnimal } from '@ts-demo/animal';

export function zoo(): string {
  const result = getRandomAnimal();
  return `${result.name} says ${result.sound}!`;
}
