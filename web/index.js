
var Greet = document.getElementById('greet');
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
    else if(((h>12)||(h=12))&&(h<18)){
        strs = 'good afternoon'
    }
    else if((h>18)||(h=18)){
        strs = 'Good evening';
    }
    return strs ;
}
Greet.innerText = Timer();
var Lau = document.getElementsByClassName('Language')[0];
var Lau1 = document.getElementsByClassName('Language')[1];
var Lau2= document.getElementsByClassName('Language')[2];
var Lau3 = document.getElementsByClassName('Language')[3];
var lauLi = Lau.getElementsByTagName('li');
var lauLi1 = Lau1.getElementsByTagName('li');
var lauLi2 = Lau2.getElementsByTagName('li');
var lauLi3= Lau3.getElementsByTagName('li');
var Content = document.getElementById('content');
var ContentLi =  Content.getElementsByTagName('li')[0];
var ContentLi1 = Content.getElementsByTagName('li')[4];
var ContentLi2 = Content.getElementsByTagName('li')[8];
var ContentLi3 = Content.getElementsByTagName('li')[12];
var ContentP =  ContentLi.getElementsByTagName('p');
var ContentP1 =  ContentLi1.getElementsByTagName('p');
var ContentP2 =  ContentLi2.getElementsByTagName('p');
var ContentP3 =  ContentLi3.getElementsByTagName('p');
console.log(ContentLi1)
for(var i =0; i<lauLi.length;i++){
    lauLi[i].index=i;
    lauLi[i].onclick=function () {
        for(var j =0; j<lauLi.length;j++){
            ContentP[j].className='';
            lauLi[j].className=''
        }
        console.log(ContentP)
        this.className = 'selected1';
        ContentP[this.index].className='selected2';
    }
}
for(var i =0; i<lauLi1.length;i++){
    lauLi1[i].index=i;
    console.log(ContentLi1)
    console.log(ContentP1)
    lauLi1[i].onclick=function () {
        for(var j =0; j<lauLi1.length;j++){
            ContentP1[j].className='';
            lauLi1[j].className='';
        }
        console.log(ContentP1)
        this.className = 'selected1';
        ContentP1[this.index].className='selected2';
    }
}
for(var i =0; i<lauLi.length;i++){
    lauLi2[i].index=i;
    lauLi2[i].onclick=function () {
        for(var j =0; j<lauLi.length;j++){
            ContentP2[j].className='';
            lauLi2[j].className=''
        }
        this.className = 'selected1'
        ContentP2[this.index].className='selected2';
    }
}
for(var i =0; i<lauLi.length;i++){
    lauLi3[i].index=i;
    lauLi3[i].onclick=function () {
        for(var j =0; j<lauLi.length;j++){
            ContentP3[j].className='';
            lauLi3[j].className=''
        }
        this.className = 'selected1'
        ContentP3[this.index].className='selected2';
    }
}
var ConvasHtml = document.getElementById('html5');
var ConvasCss = document.getElementById('css');
var ConvasPHP = document.getElementById('php');
var ConvasJS = document.getElementById('js');
var cxtHtml = ConvasHtml.getContext('2d');
var cxtCss = ConvasCss.getContext('2d');
var cxtPHP = ConvasPHP.getContext('2d');
var cxtJS = ConvasJS.getContext('2d');
cxtHtml.beginPath();
cxtHtml.arc(120,120,100,0,2*Math.PI,true);
cxtHtml.strokeStyle='#7973733b';
cxtHtml.lineWidth=4;
cxtHtml.lineCap='round';
cxtHtml.stroke();
cxtHtml.beginPath();
cxtHtml.arc(120,120,100,-Math.PI/2,-2.3*Math.PI,true);
cxtHtml.strokeStyle='#31c7ad';
cxtHtml.stroke();
cxtCss.beginPath();
cxtCss.arc(120,120,100,0,2*Math.PI,true);
cxtCss.strokeStyle='#7973733b';
cxtCss.lineWidth=4;
cxtCss.lineCap='round';
cxtCss.stroke();
cxtCss.beginPath();
cxtCss.arc(120,120,100,-Math.PI/2,-2*Math.PI,true);
cxtCss.strokeStyle='#9721c9';
cxtCss.stroke();
cxtPHP.beginPath();
cxtPHP.arc(120,120,100,0,2*Math.PI,true);
cxtPHP.strokeStyle='#7973733b';
cxtPHP.lineWidth=4;
cxtPHP.lineCap='round';
cxtPHP.stroke();
cxtPHP.beginPath();
cxtPHP.arc(120,120,100,-Math.PI/2,-1.8*Math.PI,true);
cxtPHP.strokeStyle='#1875b2';
cxtPHP.stroke();
cxtJS.beginPath();
cxtJS.arc(120,120,100,0,2*Math.PI,true);
cxtJS.strokeStyle='#7973733b';
cxtJS.lineWidth= 4;
cxtJS.lineCap='round';
cxtJS.stroke();
cxtJS.beginPath();
cxtJS.arc(120,120,100,-Math.PI/2,-1.8*Math.PI,true);
cxtJS.strokeStyle='#e4941f';
cxtJS.stroke();

