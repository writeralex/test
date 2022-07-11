import { capitalize } from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
    throw new Error('Функция работает неправильно');
}

if (capitalize('') !== '') {
    throw new Error('Функция работает неправильно');
}

console.log('Все тесты пройдены!');