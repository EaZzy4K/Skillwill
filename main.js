// #1
function myFunction(a, b) {
    if (a===b) {
        return "ტოლია";
    } else {
        return "არ არის ტოლი";\
     }
}
// მაგალითი:
console.log(myFunction(2,5))

// #2
function mySecondFunction(Farenheit) {
    const Celsius = (Farenheit-32)*5/9;

    if(isNaN(Farenheit)) {
        return false;
    } else {
        return Celsius;
    }
}
    console.log(mySecondFunction(60))
    
    // #3
    const operators = ['+', '-', '*', '/'];
function myThirdFunction(a, b, operation) {
    if (isNaN(a) || isNaN(b)) {
        return false;
    }
    if (operation === '+') {
        return a+b;
    } else if (operation === '-') {
        return a-b;
    } else if (operation === '*') {
        return a*b;
    } else if (operation === '/') {
        return a/b;
      } else {
        return false;
    }
} 
console.log(myThirdFunction(10,5,operators[2]))
// სრულდება 10*5 გამრავლება და ვღებულობთ 50. 
// P.S, operation ცვლადს გადავარქვი operators და არგუმენტად operation დავტოვე, ლოგიკაში ასე უფრო ჩაჯდა და მეკომფორტულა.
