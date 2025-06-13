//회원가입 버튼클릭 시 join_msg에 '가입축하합니다' 메세지 출력되고
const joinBtn =document.querySelector('#join');
const joinMsg =document.querySelector('.join_msg')
console.log(joinBtn);
joinMsg.classList.add('hide'); //초기상태 (숨기기)
joinBtn.addEventListener('click',joinMsgFunc)
function joinMsgFunc(){
    joinMsg.classList.remove('hide');
    joinMsg.textContent ='가입축하합니다'
    //3초후 메세지 자동 사라지기
    const hideMsg = setTimeout(()=>{
        joinMsg.classList.add('hide'); 
    },3000)
}
//알림 메세지 후 다른 페이지로 이동
const payBtn =document.querySelector('#pay');
const payMsg =document.querySelector('.pay_msg');
const payResetBtn =document.querySelector('#pay_reset');
let payMsgOut;
/* console.log(payBtn,payMsg); */
payMsg.classList.add('hide'); //초기 숨기기
payResetBtn.classList.add('hide');
payBtn.addEventListener('click',()=>{
    payMsg.classList.remove('hide'); //숨기는 클래스 제거로 보이게 하기
    payResetBtn.classList.remove('hide');
    payMsg.textContent = '결제완료되셨습니다 5초 후 광고 사이트로 이동합니다';
    payMsgOut = setTimeout(()=>{
        window.location.href ='./timer3.html'//광고
    },5000)
})

payResetBtn.addEventListener('click',()=>{
    clearTimeout(payMsgOut);
    console.log('setTimeout 이동삭제완료')
})