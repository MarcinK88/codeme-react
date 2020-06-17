const zmienna3 = 'zmienna 3';
const zmienna4 = ['zmienna 4', 'aaaaa', 'bbbbb'];

export const zmienna = 'Ala ma kota z eksportu';
export const zmienna2 = {
    a: 'pole a',
    b: 'pole b',
};

export function testowa(a) {
    alert(a);
}

export function testowa2() {
    return 'jakas wartosc z funkcji testowej';
}

export {
    zmienna3,
    zmienna4
}

export default function () {
    return 'domyslny export'
}