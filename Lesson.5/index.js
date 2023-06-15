"use strict"

// Mantiqiy operatorlar =====================================================================================================

const htmlPassed = true;
const cssPassed = true;
let message = '';

if ( htmlPassed && cssPassed ) {
    message = 'Siz Bootsrap kursini boshlashingiz mumkin!';
} else if (htmlPassed || cssPassed ) {
    message = 'Iltimos ikkinchi kursni ham tugating!';
} else {
    message = 'Iltimos brinchi ikkala kursni ham tugatib chiqing!';
}
console.log(message);

// Type conversion ==============================================================================================

const yosh = '23'; // String
console.log(yosh); // String
console.log(Number(yosh)); // Number

console.log(yosh + 1); // ( concatenation )
console.log(Number(yosh) + 1); // 24

const ism = 'Xojiakbar';
console.log(Number(ism)); // NaN

const yil = 2021; // Number
console.log(yil); // Number
console.log(String(yil)); // String

console.log('Men ' + 2006 + 'chi yilda tavallud  topganman');
console.log('30' - '10' - 3);

// Truthy va Falsy ===================================================================================================

// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(0n));

// // Truthy qiymatlari 
// console.log(Boolean('Ulugbek'));
// console.log(Boolean(23));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean('0'));
// console.log(Boolean('false'));


let ism3 = String(prompt('Ismingizni kiriting'));

const ism2 = '';
if (ism) {
    console.log('Sizning ismingiz: ' + ism3);
}else{
    console.log('Iltimos ism Kriting');
}
