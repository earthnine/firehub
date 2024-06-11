
console.log('firebase file');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// firebase 설정 객체 : 내 파이어베이스에 대한 정보

  const firebaseConfig = {

    apiKey: "AIzaSyA0F5toKChR2ZvbfvtwK4NcZdJdfCygtAo",
    authDomain: "fir-test-36abd.firebaseapp.com",
    databaseURL: "https://fir-test-36abd-default-rtdb.firebaseio.com",
    projectId: "fir-test-36abd",
    storageBucket: "fir-test-36abd.appspot.com",
    messagingSenderId: "103265534737",
    appId: "1:103265534737:web:26338bab3ff8a80b98c2b0",
    measurementId: "G-P32NNC72CN"
    //위의 부분은 개인마다 바뀌는 부분
  };

  // Initialize Firebase
  // firebase 앱 초기화
  const app = firebase.initializeApp(firebaseConfig);

  // firebase 의 실시간 데이터베이스 가져오기
  const database = firebase.database()

  // 위의 값은 이미 파이어베이스에서 만들어놓은 코드라서 그다지 이해하지 않아도 무관합니다..

  // firebase에 데이터 쓰기
  const writeUserData = (userId, name, email) => {  //매개변수 부분 이해하셔야합니다..
    firebase.database().ref('users/'+userId).set({
        name : name ,
        email : email
    })
  } 

  // firebase에 있는 데이터 읽기
  const readUserData = (userId) => {
    const userRef = firebase.database().ref('users/') // 'users/' 라는 경로의 참조를 가져옴.
    userRef.once('value').then((res)=>{
        const data = res.val() 
        console.log(data);
    })

  }


/* Mission!
1. addUserBtn 이라는 id를 가진 버튼을 클릭 시
2. 사용자가 input에 입력한 세개의 데이터를 각각 console.log에 출력
3. JS실전폴더 -> 03, 04 실습참고 04만 참고하셔도 될듯
 
*/

let addUserBtn = document.getElementById('addUserBtn')
let frm = document.frm.elements
//함수는 이해해주세요,....
addUserBtn.addEventListener('click', () => {
    console.log(frm[0].value);
    console.log(frm[1].value);
    console.log(frm[2].value);

    writeUserData(frm[0].value, frm[2].value, frm[1].value) //이메일 이름 위치가 바낌 ㅎ;;
})

let getUserBtn = document.getElementById('getUserBtn')
getUserBtn.addEventListener('click', () => {
    console.log('유저 가져오기 ck');
    readUserData('dasf')
})


