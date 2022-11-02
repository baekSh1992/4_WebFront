// 전역 변수
const num1 = document.getElementById("num1"); // 요소 추적 O , 값, 속성 추적 X
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function plus(){ // 함수 정의 (코드가 있다는 것을 인식하고 호출 전까지 수행 X)

    // 함수가 호출 되었을 때 내부 코드가 해석되면서 수행
    console.log(num1.value); 
    console.log(num2.value);

    console.log( Number(num1.value) + Number(num2.value) );
    result.innerHTML = Number(num1.value) + Number(num2.value)
}
function minus(){
    console.log(num1.value);
    console.log(num2.value);

    console.log( Number(num1.value) - Number(num2.value) );
    result.innerHTML = Number(num1.value) - Number(num2.value)
}
function gop(){
    console.log(num1.value);
    console.log(num2.value);

    console.log( Number(num1.value) * Number(num2.value) );
    result.innerHTML = Number(num1.value) * Number(num2.value)
}
function nanum(){
    console.log(num1.value);
    console.log(num2.value);

    console.log( Number(num1.value) / Number(num2.value) );
    result.innerHTML = Number(num1.value) / Number(num2.value)
}
function namuge(){
    console.log(num1.value);
    console.log(num2.value);

    console.log( Number(num1.value) % Number(num2.value) );
    result.innerHTML = Number(num1.value) % Number(num2.value)
}



        // typeBox.innerHTML = ""; // typeBox 요소 내부의 내용을 빈 문자열로 바꿔라 라는 뜻 
        //                         // == 내부 내용 삭제를 뜻함





// function calculate(n1, operator, n2) {
//     let result = 0;
//     if(operator === '+') {
//       result = Number(num1) + Number(num2); // '+'버튼을 눌렀을 때
//       console.log( Number(num1.value) + Number(num2.value) );
//     }
//     else if(operator === '-') {
//        result = Number(num1) - Number(num2); // '-'버튼을 눌렀을 때
//        console.log( Number(num1.value) - Number(num2.value) );
//     }
//     else if(operator === '*') {
//        result = Number(num1) * Number(num2); // '*'버튼을 눌렀을 때
//        console.log( Number(num1.value) * Number(num2.value) );
//     }
//     else if(operator === '/') {
//        result = Number(num1) / Number(num2); // '/'버튼을 눌렀을 때
//        console.log( Number(num1.value) / Number(num2.value) );
//     }
//     else if(operator === '%') {
//        result = Number(num1) % Number(num2); // '%'버튼을 눌렀을 때
//        console.log( Number(num1.value) % Number(num2.value) );
//     }
//     return result;
// }