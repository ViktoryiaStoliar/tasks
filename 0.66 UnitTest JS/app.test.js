const { doDegree, multiplay, doProduct } = require('./app');

describe('doDegree:', () => {
    test('', () => {
        const result = doDegree(2, 3);
        expect(result).toBe(8)
    });

    test('', () => {
        const result = doDegree('2', '3')
        expect(result).toBe('arg are not number')
    })

    test('', () => {
        const result = doDegree(2, '3')
        expect(result).toBe('arg are not number')
    });
});

describe('multiplay:', () => {
    test('', () => {
        const result = multiplay([1, 2, 3])
        expect(result).toBe(6)
    });

    test('', () => {
        const result = multiplay([1, "2", 3])
        expect(result).toBe('elements array not a number')
    });

    test('', () => {
        const result = multiplay([])
        expect(result).toBe('array is empty')
    })
});

describe('doProduct', () => {
    const array = [
        { id: 1, title: 'Часы', count: 10, price: 500, producer: 'Германия' },
        { id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
        { id: 3, title: 'Моноблок', count: 6, price: 2200, producer: 'Германия' },
        { id: 4, title: 'Ноутбук', count: 13, price: 3000, producer: 'Китай' },
        { id: 5, title: 'Планшет', count: 22, price: 2100, producer: 'Китай' },
        { id: 6, title: 'Телевизор', count: 4, price: 4100, producer: 'Германия' },
        { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }
    ];

    test('', () => {
        const result = doProduct(array);
        expect(result).toEqual([{ id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
        { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }])
    });

    test('', () => {
        const array_bag = array;
        array_bag[0].count = '10';
        const result = doProduct(array_bag);
        expect(result).toBe('count must be a number')
    });
})