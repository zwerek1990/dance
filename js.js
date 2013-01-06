var x = new Array();
var y = new Array();

var a=300;
var Mx=600;
var My=350;

document.click = function(){
    setTimeout(function(){alert(1)},100);
};
document.onkeydown = function(){
    var canvas = document.getElementById("canvas");
    var bmp = canvas.getContext("2d");

    bmp.fillStyle='rgba(0,0,0,1)';
    bmp.fillRect(0,0,1200,800);

    bmp.lineWidth=3;
    bmp.strokeStyle="rgba(60,200,20,0.9)";
    for(var i=0;i<10;i++){
    console.log(Mx+" "+My);
        bmp.beginPath();
        bmp.bezierCurveTo(Mx+a*Math.random()-a*Math.random(),My+a*Math.random()-a*Math.random(),
            Mx+a*Math.random()-a*Math.random(),My+a*Math.random()-a*Math.random(),
            Mx+a*Math.random()-a*Math.random(),My+a*Math.random()-a*Math.random());
        bmp.stroke();
        bmp.closePath();
    }

    bmp.fillStyle='rgba(60,200,20,1)';
    bmp.beginPath();
    bmp.arc(Mx,My-a/2,a*0.2,0,2*Math.PI,0);
    bmp.fill();
    bmp.closePath();

    bmp.fillStyle='rgba(255,255,255,1)';
    bmp.beginPath();
    var eye1X=Mx+a*0.15*(Math.random());
    var eye1Y=My-a/2+a*0.15*(Math.random()-Math.random());
    var eye2X=Mx+a*0.15*(-Math.random());
    var eye2Y=My-a/2+a*0.15*(Math.random()-Math.random());
    bmp.arc(eye1X,eye1Y,a*0.04,0,2*Math.PI,0);
    bmp.arc(eye2X,eye2Y,a*0.04,0,2*Math.PI,0);
    bmp.fill();
    bmp.closePath();

    bmp.fillStyle='rgba(0,0,0,1)';
    bmp.beginPath();
    bmp.arc(eye1X+a*0.03*(Math.random()-Math.random()),eye1Y+a*0.03*(Math.random()-Math.random()),a*0.01,0,2*Math.PI,0);
    bmp.arc(eye2X+a*0.03*(Math.random()-Math.random()),eye2Y+a*0.03*(Math.random()-Math.random()),a*0.01,0,2*Math.PI,0);
    bmp.fill();
    bmp.closePath();

//    bmp.fillRect(10,10,100,100);
};
//alert(2);

function draw(){
    var canvas = document.getElementById("canvas");
    var bmp = canvas.getContext("2d");

    bmp.fillStyle='rgba(0,0,0,1)';
    bmp.fillRect(0,0,1200,800);

    bmp.lineWidth=3;
    bmp.strokeStyle="rgba(60,200,20,0.9)";
    for(var i=0;i<10;i++){
        console.log(Mx+" "+My);
        bmp.beginPath();
        bmp.bezierCurveTo(Mx+a*Math.random()-a*Math.random(),My+a*Math.random()-a*Math.random(),
            Mx+a*Math.random()-a*Math.random(),My+a*Math.random()-a*Math.random(),
            Mx+a*Math.random()-a*Math.random(),My+a*Math.random()-a*Math.random());
        bmp.stroke();
        bmp.closePath();
    }

    bmp.fillStyle='rgba(60,200,20,1)';
    bmp.beginPath();
    bmp.arc(Mx,My-a/2,a*0.2,0,2*Math.PI,0);
    bmp.fill();
    bmp.closePath();

    bmp.fillStyle='rgba(255,255,255,1)';
    bmp.beginPath();
    var eye1X=Mx+a*0.15*(Math.random());
    var eye1Y=My-a/2+a*0.15*(Math.random()-Math.random());
    var eye2X=Mx+a*0.15*(-Math.random());
    var eye2Y=My-a/2+a*0.15*(Math.random()-Math.random());
    bmp.arc(eye1X,eye1Y,a*0.04,0,2*Math.PI,0);
    bmp.arc(eye2X,eye2Y,a*0.04,0,2*Math.PI,0);
    bmp.fill();
    bmp.closePath();

    bmp.fillStyle='rgba(0,0,0,1)';
    bmp.beginPath();
    bmp.arc(eye1X+a*0.03*(Math.random()-Math.random()),eye1Y+a*0.03*(Math.random()-Math.random()),a*0.01,0,2*Math.PI,0);
    bmp.arc(eye2X+a*0.03*(Math.random()-Math.random()),eye2Y+a*0.03*(Math.random()-Math.random()),a*0.01,0,2*Math.PI,0);
    bmp.fill();
    bmp.closePath();

}