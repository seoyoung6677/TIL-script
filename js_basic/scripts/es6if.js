//삼항조건연산자기본문법
//조건? 조건이 참일때 결과: 조건이 거짓일때 결과;
let x=5;
let y=x+10;
//삼항 조건의 참or거짓 결과가 콘솔로그에 출력되는 형태
console.log(y==15 ? 'o':'x'); //
let total = x>10? 'o':'x';
console.log(total);
//alert(total)
//연습2. 성인/미성년자 구분하기
//18살 이상이면 '성인입니다' 아니면 '미성년자입니다'
/* const useAge = prompt('당신의 나이는?');
total= useAge>=18 ? '성인입니다':'미성년자입니다'
console.log(total) */

//봄 500점, 여름 600점
const game_score = [{
    name:'봄', //game=score[0].name
    score:500,//game=score[0].score
},{
    name :'여름',//game=score[1].name
    score:600,   //game=score[1].score
}]
console.log(game_score);
//오늘의 1등은 00이고 점수는 000입니다!
//조건예시) 봄이가 여름보다 점수가 큰가?
//크면 봄이가 1등
//작으면 여름이가 1등
total = game_score[0].score > game_score[1].score? game_score[0] : game_score[1];//조건 ? 참:거짓;
console.log(`오늘의 1등은 ${total.name}이고 점수는 ${total.score}입니다`);

//-----------삼항조건 + 리뷰 JS
const re = document.querySelector('textarea[name=re]');
const reBtn = document.querySelector('#re_btn');
console.log(re, reBtn);
reBtn.addEventListener('click',()=>{
    //콘솔테스트 : 리뷰내용 출력
    console.log(re.value)
    //콘솔테스트: 리뷰 글자 수 출력
    console.log(re.value.length)
    //result = 조건 ? 참:거짓 ;
    //리뷰내용이 100자 이상인가?
    //100자 이상이면 등록 완료
    //아니면 '100자 이상 입력하세요'
    result = re.value.length >= 100 ? '등록완료': '100자이상 입력하세요'
    alert(result)
})

//쇼핑 수량과 가격알고리즘
//1갸 가격 기준 12500원
//쇼핑몰 상품 데이터 베이스
const productDB = [{
    name:'떡닭도리탕',//
    price:12500,//
    stock:10, //재고슈량(최대갯수)
},{
    name:'꼬막비빔장',//productDB[1].name
    price:5800, //productDB[1].price
    stock:20, //productDB[1].stock

}]
console.log(productDB);
//DOM 변수
const numInput = document.querySelector('input[name=num]');
const minusBtn= document.querySelector('#minus')
const plusBtn= document.querySelector('#plus')
const priceP= document.querySelector('.price')
let num =1;//주문수량
let result = ''; //결과 담을 변수
console.log(numInput, minusBtn, plusBtn, priceP);
//초기 주문수량 표시
numInput.value =num;
//증가 버튼 클릭 시 재고수량만큼 증가하고 재고수량 오버 시 '최대구매수량입니다' 경고장출력
plusBtn.addEventListener('click',()=>{
    //조건: 현재 수량이 상품수량보다 크거나 같은가
    result= num >= productDB[0].stock? '최대구매수량입니다':++num; //조건 ? 참 : 거짓 
    //참이면 '최대구매수량입니다'
    //거짓이면 '수량증가'
    numInput.value = num;
    priceP.textContent = (num*productDB[0].price).toLocaleString('ko-kr')+'원';
    console.log(result);
    numOperatorFunc(0);
    
})
//감소버튼 클릭 시 현재 수량이 1보다 작거나 같으면 '최소구매수량압니다' 아니면 수량감소
minusBtn.addEventListener('click',()=>{
    result = num <= 1? '최소구매수량입니다':--num;
    /* numInput.value = num;
    priceP.textContent = (num*productDB[0].price).toLocaleString('ko-kr')+'원';
    console.log(result); */
    numOperatorFunc(0);
})
//증가, 감소 버튼 시 반복 실행하는 함수(0,1로 매번 다른 인덱스로 매개변수 처리)
function numOperatorFunc(index){
    numInput.value = num;
    priceP.textContent = (num*productDB[index].price).toLocaleString('ko-kr')+'원';
    console.log(result); 
}