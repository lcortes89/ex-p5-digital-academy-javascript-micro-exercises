import { it, expect } from 'vitest';
import { contieneEnglish } from '../../src/word_exist/index.js';

it('debería devolver true  para "abcEnglishdef"', () => {
    expect(contieneEnglish('abcEnglishdef')).toBe(true);
});

it('deberia devolver false para "abcnEnglishsef"', () => {
    expect(contieneEnglish('abcnEglishsef')).toBe(false);
});
    
