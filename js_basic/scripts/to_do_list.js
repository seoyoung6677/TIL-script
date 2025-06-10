//to_do_list
//오늘의 할일(나중에 난이도 낮춰서시험)
//1.할일 입력 후 
//2. 등록 버튼 클릭(클릭 이벤트 내에서 1번 입력값 인식)
//3. "여기에 할 일이 등록됩니다." 기존 li의 다음 형제 위치에 입력한 정보 등록
//위 알고리즘 3번 작성 시 주의사항
//ul 태그의 마지막 자식 위치(appendChild)로 li추가("<li>"X, creatElement()가능)
const toInput = document.querySelector('.to');
const toBtn = document.querySelector('#to_btn');
const ul = document.querySelector('ul');
console.log(toBtn,toInput,ul);

toBtn.addEventListener('click',()=>{
    if(toInput.value ==''){ //input의 값이 입력되지 않앗을 경우
        //경고창으로 "입력 후 등록해야 합니다" 메세지 출력하기
        alert('입력후 등록해야 합니다')
    }else{
        //console.log(toInput.value)
    //ul.appendChild("<li>abcs</li>") //문자열삽입에러 X
    let li =document.createElement('li');
    li.innerHTML = `<span>${toInput.value}<button type="button" class="del_btn">X</button></span>`;
    console.log(li); //<li></li>
    ul.appendChild(li);
    //입력초기화 
    toInput.value=''

    //등록된 할일 옆 X 클릭 시 내 부모 li제거하기
    const close =document.querySelectorAll('.del_btn');
    for(let i of close){
            console.log(i); //배열형태가 아닌 객체 형태로 출력되서 바로 사용가능한 형태인지 확인
            i.addEventListener('click',()=>{
                i.parentNode.remove(); //내 부모를 제거하겠다.
            })
        }
        const span=document.querySelectorAll('li span');
        for(let i of span){
             //배열형태가 아닌 객체 형태로 출력되서 바로 사용가능한 형태인지 확인
            console.log(i);
            i.addEventListener('click',()=>{
                i.parentNode.style.textDecoration = 'line-through';//내 부모를 제거하겠다.
                })
            }
            
    }// 조건문 else(거짓) 사용자가 값을 입력했을때 블록 위치

})//toBtn 이벤트 종료(블록)위치

