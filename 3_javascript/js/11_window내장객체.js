// window.setTimeout(함수, 지연시간(ms = * 1000))
// [동기화] : 작업들 사이의 수행 시기를 맞추는 것. 
// 사건이 동시에 일어나거나, 일정한 간격을 두고 일어나도록 
// 시간의 간격을 조정하는 것을 이른다. ( [비동기화]는 반대 )
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function(){


    // 이벤트 핸들러에서 this == 이벤트가 발생한 html 요소

    // 0초(클릭하자마자)
    this.style.backgroundColor = 'red';

    // 3초 후 orange로 변경
    window.setTimeout(function(){
        
        // window.setTimeout()에서 this == window 객체

        console.log(this);
        // this.style.backgroundColor = 'orange';
        btn1.style.backgroundColor = 'orange';
    }, 3000);

    console.log("중간에 출력");
    
    // 6초후에 yellow로 변경 ( '비동기'로 인해 전 orange코드가 덮힘
                            // = 동시에 모든코드를 실행하기때문에 )
    window.setTimeout(function(){
        btn1.style.backgroundColor = 'yellow';
    }, 6000);

    // 9초후에 green로 변경 
    window.setTimeout(function(){
        btn1.style.backgroundColor = 'green';
    }, 9000);



    // 10초후에 blue로 변경 
    window.setTimeout(function(){
        btn1.style.backgroundColor = 'blue';
    }, 10000);
    // 11초후에 navy로 변경 
    window.setTimeout(function(){
        btn1.style.backgroundColor = 'navy';
    }, 11000);
    // 12초후에 purple로 변경 
    window.setTimeout(function(){
        btn1.style.backgroundColor = 'purple';
    }, 12000);
});


/* ****************************************** */



//현재 시간을 반환(출력) 하는 함수
function currentTime(){
    const now = new Date(); // 현재 시간 정보를 저장하고 있는 객체 생성

    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    // 얻어온 시간 값이 10 미만일 경우 앞에 0을 추가하는 코드
    if(hour < 10) hour = "0" + hour;
    if(min < 10) min = "0" + min;
    if(sec < 10) sec = "0" + sec;

    return hour + " : " + min + " : " + sec;
}


const clock = document.getElementById("clock");
// 페이지가 로딩 되자마자 #clock에 현재 시간 출력 하는 코드
clock.innerText = currentTime(); 
// 이거 없으면 페이지새로고침하면 00:00:00 시작

// #clock에 1초마다 현재 시간을 출력하도록하는 코드
const interval = window.setInterval(function(){
    clock.innerText = currentTime();
}, 1000);



//window.clearInterval(setInterval()이 저장된 변수)
document.getElementById("stop").addEventListener("click",function(){
    window.clearInterval(interval);
});



/* ********************************************************************* */ 



// 팝업창 열기
const openPopup1 = document.getElementById("openPopup1");
const openPopup2 = document.getElementById("openPopup2");
const openPopup3 = document.getElementById("openPopup3");

openPopup1.addEventListener("click",function(){
    // 새 탭에서 열기 _blank
    window.open("09_배열.html");
});

openPopup2.addEventListener("click",function(){
    // 최소한의 팝업창 형태로 열기
    window.open("09_배열.html", "_blank", "popup");
});

openPopup3.addEventListener("click",function(){ // 가장 많이 쓰는 팝업의 형태 
                                                // (위치를 지정해서 띄움)   
    // 옵션이 지정된 팝업창

    // 옵션 작성 방법 : "K=V, K=V, K=V", 크기 단위 작성 X

    const options = "width=400, height=500, top=200, left=200";
    window.open("09_배열.html", "popupWindow", options)

});


// 팝업창(자식) 열기
document.getElementById("sendChild").addEventListener("click", function(){
    
    const options = "width=300, height=300, top=50, left=700";
    window.open("팝업.html", "popupWindow", options)

});