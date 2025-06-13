//HTML li상품 1개 준비 후 js를 이용한 다수의 상품 복제 준비
//1. 복제 전 복제 대상 선택
const productLi =document.querySelector('.product_list li');

//2. 위 오류 없는거 확인 후 복제변수 생성
//const productLiClone = productLi.cloneNode(true);
//3. (위) 복제 후 붙야넣기 할 위치 변수 선택
const productUl =document.querySelector('.product_list');
//4.(위) 오루없으면 마지막 붙여넣기 진행
//productUl.appendChild(productLiClone)
//console.log(productLi,productLiClone, prouductUl);

//반복문 활용 7개 붙여넣기
for(let i=0; i<7; i++){
    const prouductLiClone = productLi.cloneNode(true);
    productUl.appendChild(prouductLiClone);
}

//슬라이드 애니메이션(타이머함수 활용)
const slideContainer =document.querySelectorAll('.slide_container');
let num=0;
console.log(slideContainer)
/* 1920 / 4 = 480px */
//0 =480*0
//480 = 480*1
//960 = 480*2 ...5
const productTimer =setInterval(()=>{
    //12345012345012345
    num++;
    if(num>5){num=0}
    //console.log(num, num*480);
    for(let i of slideContainer)
    i.style.transform = `translateX(-${num*480}px)`
},3000)

//동기와 비동기 출력 연습
//console.log('A');
//console.log('B');
//console.log('C');
//(위) 동기 작업은 순차적으로 콜스택에 쌓이며 실행된다.

console.log('A');
setTimeout(()=>{
    console.log('B')
},2000)
console.log('c');
//(위) 동기(a,c)와 비동기(b)는 순차적으로 실행되지 않는다
//동기작업(a,c)는 콜스택에 바로 쌓이며 즉시 실행되고
//비동기작업(b)는 콜백 큐에 저장되고 준비가 되면 순차적 순서 상관없이 독립적으로 실행된다.

//clearInterval(setInterval변수명)
//카운트 다운 버튼 클릭 시 10초 카운트다운 시작
//1초 간격으로 10->9->8 ...숫자가 감소되고 0초가되면 타이머가 멈추고'이벤트 종료' 메세지 출력
const saleTimer = document.querySelector('.sale_timer em');
const saleBtn = document.querySelector('#timer_btn');
console.log(saleBtn,saleTimer)

//함수명 startCountDownFunc
function startCountDownFunc(){
    let num= 10;
    const startCountDown =setInterval(()=>{
        if(num < 0){
            clearInterval(startCountDown);//타이머 종료 clearInterval은 타이머를 멈추고 싶을때
            console.log('종료');
            alert('종료');
        }else{
            console.log(num);
            saleTimer.textContent =num;
            num--;

        }
    },1000)
}

saleBtn.addEventListener('click', startCountDownFunc)