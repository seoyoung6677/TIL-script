//작은 썸네일 이미지 마우스 올렷을시 큰 이미지 변경
const thumNails = document.querySelectorAll('.small a');
const bigThum = document.querySelector('.big img');
console.log(thumNails,bigThum); //5개 모두 출력
//콘솔 확인 시 1개의 DOM요소가 아닌 [index]표시된 여러개 DOM 요소로 출력될때는 실제 사용 시 요소[index]를 붙여서 사용해야 한다.
//thum2에 마우스 올렷을 시 big 이미지가 big2로변경
/* thumNails[0].addEventListener('mouseover',function(){bigThumSrc(1)})
thumNails[1].addEventListener('mouseover',function(){bigThumSrc(2)})
thumNails[2].addEventListener('mouseover',function(){bigThumSrc(3)})
thumNails[3].addEventListener('mouseover',function(){bigThumSrc(4)})
thumNails[4].addEventListener('mouseover',function(){bigThumSrc(5)})
function bigThumSrc(num){
    //return bigThum.src = "./images/big"+num+".jpg"
    return bigThum.src = `./images/big${num}.jpg`
} */

//테두리 활성화 추가ver
//첫번째 썸네일 활성화 디자인(css)
thumNails[0].style.border = '3px solid #0aa5ff'
thumNails[0].addEventListener('mouseover',function(){ bigThumSrcBorder(1, this)})
thumNails[1].addEventListener('mouseover',function(){ bigThumSrcBorder(2, this)})
thumNails[2].addEventListener('mouseover',function(){ bigThumSrcBorder(3, this)})
thumNails[3].addEventListener('mouseover',function(){ bigThumSrcBorder(4, this)})
thumNails[4].addEventListener('mouseover',function(){ bigThumSrcBorder(5, this)})
function bigThumSrcBorder(num,target){
    //사용자가 마우스 올리는 순서를 정의할 수 없기 때문에 전부 초기화 기준으로 설정
    thumNails[0].style.border = '0'
    thumNails[1].style.border = '0'
    thumNails[2].style.border = '0'
    thumNails[3].style.border = '0'
    thumNails[4].style.border = '0'
    //현재 마우스 올린 작은썸변수에 테두리 생성
    target.style.border = '3px solid #0aa5ff';
    return bigThum.src = `./images/big${num}.jpg`;
}
//this 
// * 특정 DOM요소 이벤트(click, mouseover) 내에서 작성하는 키워드
// 이벤트 요소가 달라도 this는 이벤트 내에서 해당 요소를 가리키는 통합명칭으로 사용할 수 있기 때문에 쉬운 선언이 가능하다.
// 주의점) 화살표 함수에서는 사용이 안되며 익명함수에서만 사용가능하다.
// DOM.이벤트리스너(이벤트, ()=>{this}) //X
// DOM.이벤트리스너(이벤트, function(){this}) //O
//주의점 2) 이벤트 내에 호출하는 함수라해도 함수 내부에 this 를 직접적으로 작성해서 안되며 이벤트 익명함수 내에서 작성해야 한다.
//DOM.이벤트리스너(이벤트,익명함수(){함수호출(this)})  //O
//function 호출한 함수명(){this} //X