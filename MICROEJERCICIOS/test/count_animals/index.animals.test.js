import{ it, expect, describe} from 'vitest';
import { countAnimals } from '../../src/count-animals/index-animals.js';

describe('countAnimals', () => {
    it('solo ovejas: devuelve cantidad total', () => {
    expect(countAnimals([true, true])).toBe('There are 2 sheep in total');
  });

  it('solo lobos: devuelve mensaje de lobos', () => {
    expect(countAnimals([false, false, false])).toBe('UPS!!! A pack of hungry wolves');
  });

  it('más ovejas que lobos: ovejas escaparon', () => {
    expect(countAnimals([true, true, false])).toBe('2 sheep escaped!!!');
  });

  it('más lobos que ovejas: lobos comieron las ovejas', () => {
    expect(countAnimals([false, false, true])).toBe('UPS!!! Wolves ate all the sheep');
  });

  it('input no es un array: lanza error', () => {
    expect(() => countAnimals('hola')).toThrow('Invalid input: list must contain only boolean values');
  });

  it('array con valores no booleanos: lanza error', () => {
    expect(() => countAnimals([1, 2, 3])).toThrow('Invalid input: list must contain only boolean values');
  });

});