//11. 상품 옵션 선택 시 색상 선택 후(클릭(x) 변경(O)) 사이즈 선택 가능, 색상 미선택시 사이즈 선택 불가
//t색상, 사이즈 select태그 변수 선언
const colorSelect =document.querySelector('select[name=color]')
const sizeSelect =document.querySelector('select[name=size]')
const orderColor =document.querySelector('.order_select .color')
const orderSize =document.querySelector('.order_select .size')
console.log(colorSelect,sizeSelect);
sizeSelect.disabled = true; //사이주 비활성화 초기값 설정
//색상 select를 변경했을때 이벤트 생성
/* colorSelect.addEventListener('change',changeFunc)
function changeFunc(){ //색상이 변경되었을때 호출하는 함수
    return sizeSelect.disabled = false; //변경 시 사이즈 재활성화
} */
console.log('--------------------------12번')
//## 12. 색상 -> 사이즈 선택 시 선택한 정보가 아래 새로운 요소에 수량, 가격과 함께 출력
//## 12-1. 위(12) 진행 전 새로운 요소(.order_select) 숨기기
const orderSelect = document.querySelector('.order_select');
console.log(orderSelect);
orderSelect.style.display = 'none'
//## 12-1. 위 (12) 색상->사이즈 선택시 새로윤 요소(.order_select) 보이기
//색상 -> 사이즈 선택시 이벤트와 함수 생성
colorSelect.addEventListener('change',orderFunc)
sizeSelect.addEventListener('change',orderFunc)
function orderFunc(){
    /* console.log(0) */ //정상확인
    //console.log(colorSelect.value);//선택한 색상 값확인
    //console.log(sizeSelect.value); //선택한 사이즈값 확인
    sizeSelect.disabled = false; //사이즈 활성화
    //특정 상황에서 아래 orderSelect 출력되고 싶다면? 상황을 조건문으로 작성해야 한다!
    //orderSelect 출력조건 -> color의 value값이 존재하는 option선택 후 size의 value값이 존재하는 option을 추가로 선택했을 경우
    //orderSelect.style.display = 'block';
    //조건문 연습
    //if(조건식){조건식이 참일 경우 실행되는 명령}
    //if('블랙'){console.log('조건실행테스트')}
    console.log(Boolean(colorSelect.value))
    //사용자가 선택한 color, size의 값(value)이 모두 참일때 조건 실행(value=""빈문자열이면 거짓)
    if(colorSelect.value && sizeSelect.value){
        orderSelect.style.display = 'block'; //주문영역 보이기
        //order_select의 color안에 선택한 colorSelect 값 대입하기
        orderColor.textContent =colorSelect.value;
        //order_select의 size안에 선택한 sizeSelect 값 대입하기
        orderSize.textContent =sizeSelect.value;

    }
}
// 13. 수량 조정 시 1~9999개까지 선택 가능 기능
// 13-1. `-` 버튼 클릭 시 수량값이 1보다 작으면 1~9999개까지 선택가능합니다 메세지 출력
// 13-2. `+` 버튼 클릭 시 수량값이 1보다 작으면 1~9999개까지 선택가능합니다 메세지 출력
//13-3 `-`,`+` 버튼 클릭 시 수량이 범위 값안에서 1씩 감소 또는 증가
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const orderNum = document.querySelector('input[name=user_num]');
const totalPrice =document.querySelector('.order_select .price em')
let num = 1; //초기수량
let price = 39900; //초기가격
let total = 0; //수량에 따라 가격 계산하는 최종변수
console.log(minusBtn ,plusBtn, orderNum,totalPrice)

//초기 설정
orderNum.value = num;
//증가 + 버튼 클릭 시 수량이 1씩 증가되면서 orderNum 출력
plusBtn.addEventListener('click',()=>{
    num++;
//증가 수량이 999보다 큰 경우 경고메세지 출력
    if(num > 9999){alert('1~9999개까지 선택가능합니다.')}
    if(num >= 1 && num <= 9999){
        total= num*price;
        orderNum.value = num;
        totalPrice.textContent = total.toLocaleString('ko-kr');
    }
})
//감소 -버튼 클릭 시 수량이 1씩 감소되면서 orderNum 출력
minusBtn.addEventListener('click',()=>{
    num--;
    
    //감소 수량이 1보다 작은 경우 경고메세지 출력
    if(num < 1){alert('1~9999개까지 선택가능합니다.')}
    if(num >= 1){
        total= num*price;
        orderNum.value = num;
        totalPrice.textContent = total.toLocaleString('ko-kr');
    }
})
//## 15. 위 (12)번에서 나온 박스의 x 클릭 시 주문 정보 모두 삭제
const removeBtn =document.querySelector('.order_select .close');
console.log(removeBtn);
removeBtn.addEventListener('click',()=>{
    orderSelect.style.display='none';
})

//장바구니 클릭 시 '장바구니 담겼습니다'메세지 출력 alert ------------
const cartBtn =document.querySelector('#cart_btn');
/* cartBtn.addEventListener('click',()=>{
    alert('장바구니 담겼습니다');
}) */
/* cartBtn.addEventListener('click',cartMes)
function cartMes(){
    return alert('장바구니 담겼습니다.')
} */
cartBtn.addEventListener('click',function(){this
    alert('장바구니 담겼습니다.');
});

//바로구매 클릭 시 '로그인이 필요합니다'메세지 출력--------------------
const buyBtn =document.querySelector('#buy_btn');
/* console.log(cartBtn,buyBtn);
buyBtn.addEventListener('click',()=>{
    alert('로그인이 필요합니다');
}) */
/* buyBtn.addEventListener('click',function(){//익명함수 this
    alert('로그인이 필요합니다');
}) */
buyBtn.addEventListener('click',buyMes); //함수호출 반복
function buyMes(){
    return alert('로그인이 필요합니다');
}