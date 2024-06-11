
// 프로세스
// 1. 각각의 div를 해당하는 키보드로 입력했을 때! div에게 클래스를 추가해주기
// -> 디자인의 모습을 바꾸기 위해서
// 2. 각각의 div에 키보드를 땠을 때, 클래스를 제거

window.addEventListener("keydown",(e)=>{
    // 사용자가 입력한 키값이 1이면 -> div의 1번째 영역에 class를 추가
    // 사용자가 입력한 키값이 2라면 -> div의 2번째 영역에 class를 추가
    const div = document.getElementById(e.key); //123 다 쳐줄 수 없으니, 이벤트의 키를 가져오겠다 선언
    div.classList.add("pressed");
})                   
window.addEventListener("keyup",(e)=>{
    const div = document.getElementById(e.key);
    div.classList.remove("pressed");
})

// ***실습정리
// 이벤트객체를 통해서 다양한 동적인 코딩이 가능하다.
// 동적인 코딩이란, 사용자가 입력한 값을 받아서 => 컴퓨터가 알아서 처리할 수 있게 만든다.
// 리듬게임 등 과 같은 사용자의 입력이 필요한 경우 반드시 이벤트 객체가 필요하다. 

