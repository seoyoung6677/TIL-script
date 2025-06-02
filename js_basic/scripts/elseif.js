const aniImg = document.querySelector('main > img');
const topBtn = document.querySelector('.control .top');
const downBtn = document.querySelector('.control .down');
const leftBtn =document.querySelector('.control .left');
const rightBtn =document.querySelector('.control .right');
const inputMove =document.querySelector('.io input');
let currentY =0; //이미지의 y초기좌표
let currentX =0;
console.log(aniImg ,topBtn,downBtn,leftBtn,rightBtn );
//aniImg.style.transform='translate(50px, 20px)';
//↓버튼 클릭 시 이미지를 아래방향으로 20px 이동시키기
downBtn.addEventListener('click',downFunc);
topBtn.addEventListener('click',topFunc);
leftBtn.addEventListener('click',leftFunc);
rightBtn.addEventListener('click',rightFunc);
function downFunc(){
    currentY += 20;
    return aniImg.style.transform=`translate(${currentX}px, ${currentY}px)`;
}
function topFunc(){
    currentY -= 20;
    return aniImg.style.transform=`translate(${currentX}px, ${currentY}px)`;
}
function leftFunc(){
    currentX -= 20;
    return aniImg.style.transform=`translate(${currentX}px, ${currentY}px)`;
}
function rightFunc(){
    currentX += 20;
    return aniImg.style.transform=`translate(${currentX}px, ${currentY}px)`;
}

//input 입력창에 허용키를 입력하고 Enter를 누르면 캐릭터가 이동하는 알고리즘
//허용키 : 왼쪽, 오른쪽, 위, 아래
inputMove.addEventListener('keydown',function(e){
    if(e.key === 'Enter'){
        //console.log('엔터확인');
        //왼쪽 입력 후 Enter 실행 시 이미지가 왼쪽 20px 이동
        if(inputMove.value === '왼쪽'){ //조건1
            currentX -= 20;
            inputMoveFunc()
            //aniImg.style.transform=`translate(${currentX}px, ${currentY}px)`;
        }else if(inputMove.value ==='오른쪽' ){ //조건1 거짓일대 검사하는 조건2
            currentX += 20;
            inputMoveFunc()
            //aniImg.style.transform=`translate(${currentX}px, ${currentY}px)`;
        }else if(inputMove.value ==='위'){//조건1,2, 모두 거짓일때 검사하는 조건3
            currentY -= 20;
            inputMoveFunc()
            //aniImg.style.transform=`translate(${currentX}px, ${currentY}px)`;
        }else {//조건1,2,3 모두 거짓일때 실행 결과
            currentY += 20;
            inputMoveFunc()
            //aniImg.style.transform=`translate(${currentX}px, ${currentY}px)`;
        }
    }
})
function inputMoveFunc(){
    aniImg.style.transform = `translate(${currentX}px ,${currentY}px)`
    return inputMove.value = '';
}