/* 연산자 25/05/16*/
//증감 연산자(단항)
let a = 1;
let b = 10;
//console.log(a,b); /* a=1,b=10 */
b = a++; /* a를 먼저 연산(+1)진행 후 d에 대입 2,2*/
//console.log(a,b);
a = --b;/* b를 먼저 a에 대입한 후 (-1)연산 2,1 */
//console.log(a,b);
//=================예제2
let x = 5;
//let y = ++x; //1증가된 x값을 대입받는 y변수
//증감연산은 x변수 자제에 영향을 주기 때문에 일회성더하기 연산자로 +1을 붙여서 계산하고 x에 영향을 주지 않게 y에 대입한다
let y = x+1; //1증가된 x값을 대입받는 y변수
console.log(x,y); /* x=5, y=6 */
y = x++;
console.log(x,y);/* x=6, y=5 */
x = ++y;
console.log(x,y); /* x=6,y=6 */
x++;
console.log(x,y); /* x=7,y=6 */
--y; //증감 연산자는 대입이 없어도 변수에 영향을 준다.
console.log(x,y); /* x=7,y=5 */
x+1; //더하기,빼기,곱하기, 나누기 등 일반 산술연산자는 대입연산자가 없으면 변수에 영향을 주지 않는다.
console.log(x,y); /* x=7,y=5 */
//==========================중간 연산자 문제
let num1= 10;
let num2= 20;
let num3= 30;
let num4= 40;
//num1, num2, num3, num4의 값은? 11,19,31,39
num1++; //11
num2--; //19
num3++; //31
num4--; //39
console.log(num1,num2,num3,num4);
//num1, num2, num3, num4의 값은?21, 20, 31, 39
num1=++num2; // n1=20, n2=20
num2=num1++; // n1=21, n2=20
console.log(num1,num2,num3,num4);
//num1, num2, num3, num4의 값은?21,20,42,42
num3 = num1+num2 //n1=21, n2=20,  n3=41
num4 = ++num3; //n1=21, n2=20 ,n3=42, n4=42
console.log(num1,num2,num3,num4);
//num1, num2, num3, num4의 값은?53,42,43,41
num1 = ++num3 + 10;  //n1=53, n2=, n3=43, n4=
num2 = --num4+ 1;    //n1=, n2=42, n3=, n4=41
console.log(num1,num2,num3,num4);

//=================복합 대입 연산자
console.log('========================')
let number = 10;
//number = 15; //기존값을 제거하고 단순 새로운 값 삽입x
//number = 5; //위와 동일
//number = number +5; //기존 값을 유지하고 원하는 계산 추가 o
number += 5; //복합대입 활용(위와 결과 동일)
console.log(number); //15
number -= 5; //빼기복합 number = number-5;
console.log(number); //10
number *= 5; //곱하기 복합 number = number*5;
console.log(number); //50
number /=5; //나누기 복합 number = number/5;
console.log(number); //10
number %= 5; //나머지복합 number = number%5
console.log(number); //0

