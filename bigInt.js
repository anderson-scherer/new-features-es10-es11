
/**
 * BigInt
 */
 
typeof 123;
// 'number'
typeof 123n;
// 'bigint'
 
42n == 42;
// true
42n === 42;
// false
42n === BigInt(42);
// true
 
// work equal to numbers for comparison tests
if (0n) {
    console.log('verdadeiro');
} else {
    console.log('falso');
}
 
console.log((7 + 6 - 5) * 4 ** 3 / 2 % 3);
// 1
console.log((7n + 6n - 5n) * 4n ** 3n / 2n % 3n);
// 1n
 
console.log(10 / 4);
// 2.5
console.log(10n / 4n);
// 2n
 
25+25n;
//TypeError: Cannot mix BigInt and other types, use explicit conversions