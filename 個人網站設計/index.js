<script src="../jquery/jquery-1.12.4.js"></script>
    <script src="jquery-1.12.4.js"></script>
    <script>
    $('body').mouseover(function () {
        $('#index ul li').eq(0) .css('display','block')
        setTimeout(function () {
            $('#index ul li').eq(1) .css('display','block')
        },300)
        setTimeout(function () {
            $('#index ul li').eq(2) .css('display','block')
        },800)
        setTimeout(function () {
            $('#index ul li').eq(3) .css('display','block')
        },1200)
        $('#ballon').css({display:'block'}).animate({
            bottom:370,
            left:120

        },2000,function () {
        })
        $('#index a').fadeIn(2000,function () {

            setInterval(function () {
                if(parseInt($('#index a').css('font-size'))<30){
                    $('#index a').css({
                        'font-size':'+=.5'
                    })
                }
            },200)
        });
    })
var nowTimer = document.getElementById('timer');
var nowYear = new Date();
var blank =document.createElement('text');
var indexCenter = document.getElementById('index-center');
var indexTimer = indexCenter.getElementsByTagName('span')[0];
blank.innerText = ' ';
var str = `${nowYear.getFullYear()}&nbsp;&nbsp;&nbsp;&nbsp;${nowYear.getMonth()+1}&nbsp;&nbsp;&nbsp;&nbsp;${nowYear.getDate()} `;
$(nowTimer).html(str);
var Timer = function () {
    var  nowTime = new Date();
    var h = nowTime.getHours();
    var m = nowTime.getMinutes();
    var s = nowTime.getSeconds();
    var checkTimer = function (x) {
        var strs = '' ;
        if(x<10){
            x = '0'+x;
        }
        return x;
    }
    m =checkTimer(m);
    s =checkTimer(s);
    if(h>1&&h<12){
        strs = 'Good morning';
    }
    else if(h>12&&h<18&&m<30){
        strs = 'good afternoon'
    }
    else if((h>18&&m>30)||(h=18&&m>30)){
        strs = 'Good evening';
    }
    return strs ;
}
indexTimer.innerText = Timer();
</script>