/* let num = 0; //0, 400, 800 출력을 위한 변수
const slideContainer =document.querySelector('.slide_container');
slideContainer.style.transition ='transform 0.3s';
const sliderTimer =setInterval(()=>{
    num++;
    if(num>2){num=0}
    slideContainer.style.transform = `translateX(-${400*num}px)`
    console.log(`현재 num${num}, x축값:${400*num}`)
},3000)

 */
let num = 2; //0, 400, 800 출력을 위한 변수
const slideContainer =document.querySelector('.slide_container');
slideContainer.style.transition ='transform 0.3s';
const sliderTimer =setInterval(()=>{
    num--;
    if(num>2){num=0}
    slideContainer.style.transform = `translateX(-${400*num}px)`
    console.log(`현재 num${num}, x축값:${400*num}`)
},3000)



/* setInterval(numTimer, 2000)
function numTimer(){
    num++;
    console.log(num);
} */
/* const numTimer =setInterval(function(){
    num++;
    console.log(num);
},2000) */
/* const numTimer =setInterval(function()=>{
    num++;
    console.log(num);
},2000)
 */
//이벤트의 다양한 함수 호출 방법(콜백, 화살표 함수, 악명함수 순서)
//DOM.addEventListener('event', 콜백함수)
//DOM.addEventListener('event', ()=>{})
//DOM.addEventListener('event', function(){})

//타이머의 다양한 함수 작성방법
//setInterval(콜백함수, 밀리초);
//(위) 특징: 콜백 함수를 재사용할수 있다.
//const 변수명 =setInterval(익명함수, 밀리초); 
//(위) 특징: 타이머를 담은 변수명으로 타이머 정지, 다시 재생 등의 제어를 할 수 있다.
