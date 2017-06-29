var initializationTime=(new Date()).getTime();
    function showLeftTime(){
        var now=new Date();
        var year=now.getFullYear();
        var month=now.getMonth();
        var day=now.getDate();
        var xingqi=now.getDay();
        var hours=now.getHours();
        var minutes=now.getMinutes();
        var second=now.getSeconds();
        if(minutes<10){
            minutes='0'+minutes
        }
        
        switch (xingqi){
                case(0):
                    xingqi="星期日"
                    break;
                case(1):
                    xingqi="星期一"
                    break;
                case(2):
                    xingqi="星期二"
                    break;
                case(3):
                    xingqi="星期三"
                    break;
                case(4):
                    xingqi="星期四"
                    break;
                case(5):
                    xingqi="星期五"
                    break;
                case(6):
                    xingqi="星期六"
                    break;
               }
        
        var seconds=now.getSeconds();
        
        document.all.show.innerHTML=""+hours+":"+minutes;
//        document.all.day.innerHTML=year+"年"+month+"月"+day+"日"+" "+xingqi
        
        
}
//一秒刷新一次显示时间
setInterval(showLeftTime,1000);


function wodeJump(num){
       
    switch (num){
            
        case (1):
             window.location.href='./wode.html';
            break;
        case (2):
             window.location.href='./wode2.html';
            break;
        case (3):
             window.location.href='./wode3.html';
            break;
        }
}

var x;
window.onload = init;

function init() { //设置，页面载入完毕之后，5秒不进行页面操作就会跳转	
    x = setTimeout("location.href = \'./pingbao.html'",600000); 
    document.onmousemove = moved;
    document.onkeydown = moved;
    document.onmousedown = moved;
    document.ontouchstart = moved;
    document.ontouchmove = moved;
    document.ontouchend = moved;
}

function moved() { //操作了，取消页面跳转	
    clearTimeout(x); //从现在开始重新计时，如果到了5秒还是要跳转	
    x = setTimeout("location.href = \'./pingbao.html'", 600000);
}