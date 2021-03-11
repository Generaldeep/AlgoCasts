const twoSum = require('./index.js');

test('twoSum function exists', () => {
    expect(typeof twoSum).toEqual('function');
});

test('return indices of two elements that adds up to the target', () => {
    const arr = [1, 2, 4, 3, 5, 8, 10, 72, 33];
    // const sum =  twoSum(arr, 6);
    // expect(sum).toEqual([0, 4])

    const sum =  twoSum(arr, 80);
    expect(sum).toEqual([5,7])
});

// [3,2,3]