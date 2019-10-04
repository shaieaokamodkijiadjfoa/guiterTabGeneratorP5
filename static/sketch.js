var threadRatio = 45.5/100;
var wid = 1080;
var hei = 400;
var widthSpacing = 80;
var heightSpacing = 20;
var topRatio = 4.3/100;
var bottomRatio = 5.1/100;

var otoBuffer = [["F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5"],
                ["C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4"],
                ["G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4"],
                ["D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4"],
                ["A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3"],
                ["F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3"]];

var threadLength = ((wid-widthSpacing)*threadRatio)*2;
var topLength = ((hei-heightSpacing)*topRatio)*12;
var bottomLength = ((hei-heightSpacing)*bottomRatio)*12;

var otoIndex;
var stringsIndex;
var stringsChara;
var otoChara;
var saveOto;
var saveStrings;
var otoEnable = false;

var g1=g2=g3=g3=g4=g5=g6= 127;

var r1=r2=r3=r4=r5=r6= 0;

var s1 = 1.2;
var s2 = 1.4;
var s3 = 1.6;
var s4 = 1.8;
var s5 = 2;
var s6 = 2.2;

var testE;
var testb;
var testg;
var testd;
var testa;
var teste;

var checke = false;
var checkB = false;
var checkG = false;
var checkD = false;
var checkA = false;
var checkE = false;

var stringOffsetXLeft = [[],[],[],[],[],[]];
var stringOffsetXRight = [[],[],[],[],[],[]];;
var stringOffsetYUp = [[],[],[],[],[],[]];;
var stringOffsetYDown = [[],[],[],[],[],[]];;

var kc;

var editEnable = true;
var editClear = false;
var editAlpha = 150;
var clearAlpha = 150;
var enableAlpha = 240;
var disableAlpha = 100;
var allClearAlpha = 150;
var randomAllClearAlpha = 200;
var allClearEnableAlpha = 240;
var allClearDisableAlpha = 100;
var allClearCheck = false;
var savePngCheck = false;
var savePngEnableAlpha = 240;
var savePngDisableAlpha = 100;
var savePngAlpha = 150;
var randomSavePngAlpha = 200;

var keyCalculator = function(){
  this.fredRatioBuffer = [0, 3.4, 3.4, 3.4, 3.1, 2.8, 2.6, 2.6, 2.2, 2.2, 2.1, 2.0, 1.8, 1.8, 1.6, 1.6, 1.5, 1.4, 1.3, 1.3, 1.3, 1.1, 1];
  this.v1 = [];
  this.v2 = [];
  this.v3 = [];
  this.r = [];
  this.cosTheta = [];
  this.sinTheta = [];
  this.sum = 0;
  this.fredR = [];
  this.fredX = [];
  this.fredY = [];
  this.offsetR = [];

  this.keyCalculate = function(){
    for(var i = 0; i < 6; i++){
      this.v1[i] = createVector(widthSpacing+threadLength,(hei/2)-(bottomLength/2)+((bottomLength/7)*(i+1)));
      this.v2[i] = createVector(widthSpacing,(hei/2)-(topLength/2)+((topLength/7)*(i+1)));
      this.v3[i] = this.v1[i].sub(this.v2[i]);
      this.r[i] = this.v3[i].mag();
      this.v3[i].mult(-1);
      this.cosTheta[i] = this.v3[i].x/this.r[i];
      this.sinTheta[i] = this.v3[i].y/this.r[i];
      for(var j = 0; j < this.fredRatioBuffer.length; j++ ){
        this.sum += this.fredRatioBuffer[j];
        this.fredR[j] = this.r[i] * ((45.5-this.sum)/45.5);
        this.fredX[j] = this.fredR[j] * this.cosTheta[i];
        this.fredY[j] = this.fredR[j] * this.sinTheta[i];
        if(j==0){
          this.offsetR[j] = 20.00;
        }else if(j>=1&&j<4){
          this.offsetR[j] = 21.00;
        }else if(j==4){
          this.offsetR[j] = 20.55;
        }else if(j==5){
          this.offsetR[j] = 20.10;
        }else if(j==6||j==7){
          this.offsetR[j] = 19.80;
        }else if(j==8||j==9){
          this.offsetR[j] = 19.20;
        }else if(j==10){
          this.offsetR[j] = 19.05;
        }else if(j==11){
          this.offsetR[j] = 18.90;
        }else if(j==12||j==13){
          this.offsetR[j] = 18.60;
        }else if(j==14||j==15){
          this.offsetR[j] = 18.30;
        }else if(j==16){
          this.offsetR[j] = 18.15;
        }else if(j==17){
          this.offsetR[j] = 18.00;
        }else if(j==18||j==19||j==20){
          this.offsetR[j] = 17.85;
        }else if(j==21){
          this.offsetR[j] = 17.55;
        }else if(j==22){
          this.offsetR[j] = 17.40;
        }
        stringOffsetXLeft[i][j] = ((this.fredX[j]+(widthSpacing+threadLength))-7.5)-(this.offsetR[j]/2);
        stringOffsetXRight[i][j] = ((this.fredX[j]+(widthSpacing+threadLength))-7.5)+(this.offsetR[j]/2);
        stringOffsetYUp[i][j] = (this.fredY[j]+((hei/2)-(bottomLength/2)+((bottomLength/7)*(i+1))))-this.offsetR[j]/2;
        stringOffsetYDown[i][j] = (this.fredY[j]+((hei/2)-(bottomLength/2)+((bottomLength/7)*(i+1))))+this.offsetR[j]/2;
      }
      this.sum = 0;
    }
  };
};


var fredNumberPotisionCalculator = function(){
  var fredRatioArray = [0, 3.4, 3.4, 3.4, 3.1, 2.8, 2.6, 2.6, 2.2, 2.2, 2.1, 2.0, 1.8, 1.8, 1.6, 1.6, 1.5, 1.4, 1.3, 1.3, 1.3, 1.1, 1];
  var vn1 = createVector(widthSpacing-3,(hei/2)-(topLength/2)-8);
  var vn2 = createVector(widthSpacing+threadLength-6,((hei/2)-(topLength/2))-30);
  vn2.sub(vn1);
  var m = vn2.mag();
  vn2.mult(-1);
  var ct = vn2.x / m;
  var st = vn2.y / m;
  var vn3 = createVector(widthSpacing-3,(hei/2)+(topLength/2)+2);
  var vn4 = createVector(widthSpacing+threadLength-6,(((hei/2)+(bottomLength/2)))+4);
  vn4.sub(vn3);
  var mb = vn4.mag();
  vn4.mult(-1);
  var bct = vn4.x / mb;
  var bst = vn4.y / mb;
  var sumNum = 0;
  fredRatioArray.forEach(function(n,i){
    sumNum += n;
    var tempR = m * ((45.5-sumNum)/45.5);
    var tempX = tempR * ct;
    var tempY = tempR * st;
    var tempRb = mb * ((45.5-sumNum)/45.5);
    var tempXb = tempRb * bct;
    var tempYb = tempRb * bst;
    if(i==0||i==3||i==5||i==7||i==9||i==12||i==15||i==17||i==19){
      fill(250,120,0);
      // fill(255*0.8,255*0.125,0);
    }else{
      fill(0,240,180);
    }
    text(i,tempX+(widthSpacing+threadLength-6),tempY+(((hei/2)-(topLength/2))-30));
    text(i,tempXb+(widthSpacing+threadLength-6),tempYb+(((hei/2)+(bottomLength/2))+20));
  });
}

var guiterOutside = function(){
  strokeWeight(3);
  //hieght
  stroke(200,80,0);
  line(widthSpacing,(hei/2)-(topLength/2),widthSpacing,((hei/2)-(topLength/2))+topLength);
  stroke(70*1.5,24*1.5,0);
  line(widthSpacing+threadLength,(hei/2)-(bottomLength/2),widthSpacing+threadLength,((hei/2)-(bottomLength/2))+bottomLength);
  //width
  line(widthSpacing,(hei/2)-(topLength/2),widthSpacing+threadLength,(hei/2)-(bottomLength/2));
  line(widthSpacing,((hei/2)-(topLength/2))+topLength,widthSpacing+threadLength,((hei/2)-(bottomLength/2))+bottomLength);

  //Fred1~3
  for(var i = 1;i<4;i++){
    if(i==3){
      stroke(180,60,20);
    }else{
      stroke(70*1.5,24*1.5,0);
    }
    strokeWeight(3);
    line(widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(i*3.4/45.5)),(hei/2)-(topLength/2)-i,widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(i*3.4/45.5)),((hei/2)-(topLength/2))+topLength+(i*1.45));
  }
  //Fred4
  stroke(70*1.5,24*1.5,0);
  strokeWeight(3);
  line(widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)),(hei/2)-(topLength/2)-4,widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)),((hei/2)-(topLength/2))+topLength+(4*1.48));
  //Fred5
  stroke(180,60,20);
  strokeWeight(3);
  line(widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)),(hei/2)-(topLength/2)-5,widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)),((hei/2)-(topLength/2))+topLength+(5*1.38));

  //Fred6
  stroke(70*1.5,24*1.5,0);
  strokeWeight(3);
  line(widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)),(hei/2)-(topLength/2)-6,widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)),((hei/2)-(topLength/2))+topLength+(6*1.30));

  //Fred7
  stroke(180,60,20);
  strokeWeight(3);
  line(widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)),(hei/2)-(topLength/2)-7,widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)),((hei/2)-(topLength/2))+topLength+(7*1.28));

  //Fred8
  stroke(70*1.5,24*1.5,0);
  strokeWeight(3);
  line(widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)),(hei/2)-(topLength/2)-8,widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)),((hei/2)-(topLength/2))+topLength+(8*1.26));

  //Fred9
  stroke(180,60,20);
  strokeWeight(3);
  line(widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)),(hei/2)-(topLength/2)-9,widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)),((hei/2)-(topLength/2))+topLength+(9*1.22));

  //Fred10
  stroke(70*1.5,24*1.5,0);
  strokeWeight(3);
  line(widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)+(threadLength*2.1/45.5)),(hei/2)-(topLength/2)-10,widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)+(threadLength*2.1/45.5)),((hei/2)-(topLength/2))+topLength+(10*1.16));

  //Fred11
  stroke(70*1.5,24*1.5,0);
  strokeWeight(3);
  line(widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)+(threadLength*2.1/45.5)+(threadLength*2/45.5)),(hei/2)-(topLength/2)-11,widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)+(threadLength*2.1/45.5)+(threadLength*2/45.5)),((hei/2)-(topLength/2))+topLength+(11*1.12));

  //Fred12
  stroke(180,60,20);
  strokeWeight(3);
  line(widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)+(threadLength*2.1/45.5)+(threadLength*2/45.5)+(threadLength*1.8/45.5)),(hei/2)-(topLength/2)-12,widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)+(threadLength*2.1/45.5)+(threadLength*2/45.5)+(threadLength*1.8/45.5)),((hei/2)-(topLength/2))+topLength+(12*1.08));

  //Fred13
  stroke(70*1.5,24*1.5,0);
  strokeWeight(3);
  line(widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)+(threadLength*2.1/45.5)+(threadLength*2/45.5)+(threadLength*1.8/45.5)+(threadLength*1.8/45.5)),(hei/2)-(topLength/2)-13,widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)+(threadLength*2.1/45.5)+(threadLength*2/45.5)+(threadLength*1.8/45.5)+(threadLength*1.8/45.5)),((hei/2)-(topLength/2))+topLength+(13*1.04));

  //Fred14
  stroke(70*1.5,24*1.5,0);
  strokeWeight(3);
  line(widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)+(threadLength*2.1/45.5)+(threadLength*2/45.5)+(threadLength*1.8/45.5)+(threadLength*1.8/45.5)+(threadLength*1.6/45.5)),(hei/2)-(topLength/2)-14,widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)+(threadLength*2.1/45.5)+(threadLength*2/45.5)+(threadLength*1.8/45.5)+(threadLength*1.8/45.5)+(threadLength*1.6/45.5)),((hei/2)-(topLength/2))+topLength+(14*1.00));

  //Fred15
  stroke(180,60,20);
  strokeWeight(3);
  line(widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)+(threadLength*2.1/45.5)+(threadLength*2/45.5)+(threadLength*1.8/45.5)+(threadLength*1.8/45.5)+(threadLength*1.6/45.5)+(threadLength*1.6/45.5)),(hei/2)-(topLength/2)-15,widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)+(threadLength*2.1/45.5)+(threadLength*2/45.5)+(threadLength*1.8/45.5)+(threadLength*1.8/45.5)+(threadLength*1.6/45.5)+(threadLength*1.6/45.5)),((hei/2)-(topLength/2))+topLength+(15*0.96));

  //Fred16
  stroke(70*1.5,24*1.5,0);
  strokeWeight(3);
  line(widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)+(threadLength*2.1/45.5)+(threadLength*2/45.5)+(threadLength*1.8/45.5)+(threadLength*1.8/45.5)+(threadLength*1.6/45.5)+(threadLength*1.6/45.5)+(threadLength*1.5/45.5)),(hei/2)-(topLength/2)-16,widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)+(threadLength*2.1/45.5)+(threadLength*2/45.5)+(threadLength*1.8/45.5)+(threadLength*1.8/45.5)+(threadLength*1.6/45.5)+(threadLength*1.6/45.5)+(threadLength*1.5/45.5)),((hei/2)-(topLength/2))+topLength+(16*0.92));

  //Fred17
  stroke(180,60,20);
  strokeWeight(3);
  line(widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)+(threadLength*2.1/45.5)+(threadLength*2/45.5)+(threadLength*1.8/45.5)+(threadLength*1.8/45.5)+(threadLength*1.6/45.5)+(threadLength*1.6/45.5)+(threadLength*1.5/45.5)+(threadLength*1.4/45.5)),(hei/2)-(topLength/2)-17+0.9,widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)+(threadLength*2.1/45.5)+(threadLength*2/45.5)+(threadLength*1.8/45.5)+(threadLength*1.8/45.5)+(threadLength*1.6/45.5)+(threadLength*1.6/45.5)+(threadLength*1.5/45.5)+(threadLength*1.4/45.5)),((hei/2)-(topLength/2))+topLength+(17*0.88));

  //Fred18~20
  for(var i = 18; i<21; i++){
    if(i==19){
      stroke(180,60,20);
    }else{
      stroke(70*1.5,24*1.5,0);
    }
    strokeWeight(3);
    line(widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)+(threadLength*2.1/45.5)+(threadLength*2/45.5)+(threadLength*1.8/45.5)+(threadLength*1.8/45.5)+(threadLength*1.6/45.5)+(threadLength*1.6/45.5)+(threadLength*1.5/45.5)+(threadLength*1.4/45.5)+((i-17)*(threadLength*1.3/45.5))),(hei/2)-(topLength/2)-i+1.9,widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)+(threadLength*2.1/45.5)+(threadLength*2/45.5)+(threadLength*1.8/45.5)+(threadLength*1.8/45.5)+(threadLength*1.6/45.5)+(threadLength*1.6/45.5)+(threadLength*1.5/45.5)+(threadLength*1.4/45.5)+((i-17)*(threadLength*1.3/45.5))),((hei/2)-(topLength/2))+topLength+((i*0.82)-((i-17)*0.02)));

  }
  //Fred21
  stroke(70*1.5,24*1.5,0);
  strokeWeight(3);
  line(widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)+(threadLength*2.1/45.5)+(threadLength*2/45.5)+(threadLength*1.8/45.5)+(threadLength*1.8/45.5)+(threadLength*1.6/45.5)+(threadLength*1.6/45.5)+(threadLength*1.5/45.5)+(threadLength*1.4/45.5)+(3*(threadLength*1.3/45.5))+(threadLength*1.1/45.5)),(hei/2)-(topLength/2)-18,widthSpacing+(((wid-widthSpacing)*threadRatio)*2*(3*3.4/45.5)+(threadLength*3.1/45.5)+(threadLength*2.8/45.5)+(threadLength*2.6/45.5)+(threadLength*2.6/45.5)+(threadLength*2.2/45.5)+(threadLength*2.2/45.5)+(threadLength*2.1/45.5)+(threadLength*2/45.5)+(threadLength*1.8/45.5)+(threadLength*1.8/45.5)+(threadLength*1.6/45.5)+(threadLength*1.6/45.5)+(threadLength*1.5/45.5)+(threadLength*1.4/45.5)+(3*(threadLength*1.3/45.5))+(threadLength*1.1/45.5)),((hei/2)-(topLength/2))+topLength+(21*0.72));

  //Fred22
  stroke(70*1.5,24*1.5,0);
  strokeWeight(3);

}


var guiterStringHiE = function(){
  stroke(r1,0,0);
  strokeWeight(s1);
  line(widthSpacing,(hei/2)-(topLength/2)+((topLength/7)*1),widthSpacing+threadLength,(hei/2)-(bottomLength/2)+((bottomLength/7)*1));

}

var guiterStringB = function(){
  stroke(r2,0,0);
  strokeWeight(s2);
  line(widthSpacing,(hei/2)-(topLength/2)+((topLength/7)*2),widthSpacing+threadLength,(hei/2)-(bottomLength/2)+((bottomLength/7)*2));

}

var guiterStringG = function(){
  stroke(r3,0,0);
  strokeWeight(s3);
  line(widthSpacing,(hei/2)-(topLength/2)+((topLength/7)*3),widthSpacing+threadLength,(hei/2)-(bottomLength/2)+((bottomLength/7)*3));

}

var guiterStringD = function(){
  stroke(r4,0,0);
  strokeWeight(s4);
  line(widthSpacing,(hei/2)-(topLength/2)+((topLength/7)*4),widthSpacing+threadLength,(hei/2)-(bottomLength/2)+((bottomLength/7)*4));

}

var guiterStringA = function(){
  stroke(r5,0,0);
  strokeWeight(s5);
  line(widthSpacing,(hei/2)-(topLength/2)+((topLength/7)*5),widthSpacing+threadLength,(hei/2)-(bottomLength/2)+((bottomLength/7)*5));
;
}

var guiterStringLowE = function(){
  stroke(r6,0,0);
  strokeWeight(s6);
  line(widthSpacing,(hei/2)-(topLength/2)+((topLength/7)*6),widthSpacing+threadLength,(hei/2)-(bottomLength/2)+((bottomLength/7)*6));

}


function setup(){
  createCanvas(wid,hei).parent('canvasHolder');
  frameRate(24);
  console.log("threadLength : " + threadLength);
  console.log("topLength : " + topLength);
  console.log("bottomLength : " + bottomLength);

  teste = new TestHiE();
  testb = new TestB();
  testg = new TestG();
  testd = new TestD();
  testa = new TestA();
  testE = new TestLowE();
  kc = new keyCalculator();
  kc.keyCalculate();
}

function draw(){
  // background(15,15,20);  //PC.
  background(90,90,111); //tablet.
  // background(127); //tablet another.
  guiterOutside();
  guiterStringHiE();
  guiterStringB();
  guiterStringG();
  guiterStringD();
  guiterStringA();
  guiterStringLowE();

  teste.testHiEUpdate();
  teste.testHiEShow();
  testb.testBUpdate();
  testb.testBShow();
  testg.testGUpdate();
  testg.testGShow();
  testd.testDUpdate();
  testd.testDShow();
  testa.testAUpdate();
  testa.testAShow();
  testE.testLowEUpdate();
  testE.testLowEShow();

  editButton();
  if(allClearCheck){
    allClearAlpha = random(200,255);
  }
  if(savePngCheck){
    savePngAlpha = random(200,255);
  }
  fredNumberPotisionCalculator();
}

function editButton(){

  fill(240,40,0,editAlpha);
  noStroke();
  ellipse(widthSpacing/4+20,heightSpacing+10,30,30);
  text("Strings Edit.",(widthSpacing/4)-10,heightSpacing*3);

  fill(0,175,240,clearAlpha);
  noStroke();
  ellipse(widthSpacing*2-10,heightSpacing+10,30,30);
  text("Strings Clear.",(widthSpacing*2-40),heightSpacing*3);

  fill(40,240,60,allClearAlpha);
  noStroke();
  ellipse(widthSpacing/4+20,hei-40,30,30);
  text("All Clear.",(widthSpacing/4)-5,hei-10);
  fill(255,255,255,allClearDisableAlpha);

  fill(255,0,255,savePngAlpha);
  noStroke();
  ellipse(widthSpacing*2-10,hei-40,30,30);
  text("Save PNG.",(widthSpacing*2-40),hei-10);
  fill(255,255,255,savePngDisableAlpha);
}

var TestHiE = function(){
  this.fredRatioBuffer = [3.4, 3.4, 3.4, 3.1, 2.8, 2.6, 2.6, 2.2, 2.2, 2.1, 2.0, 1.8, 1.8, 1.6, 1.6, 1.5, 1.4, 1.3, 1.3, 1.3, 1.1, 1];
  this.fredNumburB = 0;

  this.testHiEUpdate = function(){
    if(stringsIndex==1||keyCode==DELETE){
      this.fredNumburB = otoIndex;
    }
    push();
    this.vb1 = createVector(widthSpacing+threadLength,(hei/2)-(bottomLength/2)+((bottomLength/7)*1));
    this.vb2 = createVector(widthSpacing,(hei/2)-(topLength/2)+((topLength/7)*1));
    this.vb3 = this.vb1.sub(this.vb2);
    this.Br = this.vb3.mag();

    this.vb3.mult(-1);

    this.BcosTheta = this.vb3.x/this.Br;

    this.BsinTheta = this.vb3.y/this.Br;

    this.findSumNumberB = 22-this.fredNumburB;
    this.sum = 0;
    for(var i = 0; i < this.fredRatioBuffer.length-this.findSumNumberB; i++ ){
      this.sum += this.fredRatioBuffer[i];
    }
    this.Bfred1R = this.Br * ((45.5-this.sum)/45.5);

    this.Bfred1X = this.Bfred1R * this.BcosTheta;

    this.Bfred1Y = this.Bfred1R * this.BsinTheta;

    if(this.fredNumburB==0){
      this.r = 20.00;
    }else if(this.fredNumburB>=1&&this.fredNumburB<4){
      this.r = 21.00;
    }else if(this.fredNumburB==4){
      this.r = 20.55;
    }else if(this.fredNumburB==5){
      this.r = 20.10;
    }else if(this.fredNumburB==6||this.fredNumburB==7){
      this.r = 19.80;
    }else if(this.fredNumburB==8||this.fredNumburB==9){
      this.r = 19.20;
    }else if(this.fredNumburB==10){
      this.r = 19.05;
    }else if(this.fredNumburB==11){
      this.r = 18.90;
    }else if(this.fredNumburB==12||this.fredNumburB==13){
      this.r = 18.60;
    }else if(this.fredNumburB==14||this.fredNumburB==15){
      this.r = 18.30;
    }else if(this.fredNumburB==16){
      this.r = 18.15;
    }else if(this.fredNumburB==17){
      this.r = 18.00;
    }else if(this.fredNumburB==18||this.fredNumburB==19||this.fredNumburB==20){
      this.r = 17.85;
    }else if(this.fredNumburB==21){
      this.r = 17.55;
    }else if(this.fredNumburB==22){
      this.r = 17.40;
    }
    pop();
  };

  this.testHiEShow = function(){
    push();

    if(stringsIndex==1||keyCode==DELETE){
      this.fredNumburB = otoIndex;
    }

    translate(widthSpacing+threadLength,(hei/2)-(bottomLength/2)+((bottomLength/7)*1));

    if(this.fredNumburB == 0&&checke==true){
      stroke(255,0,0);
    }else{
      noStroke();
    }
    if(this.fredNumburB>0&&this.fredNumburB<23){
      stroke(255,50,25);
    }

    line(0,0,this.Bfred1X,this.Bfred1Y);

    if(this.sum==0&&checke==true){
      noFill();
    }else if(this.fredNumburB==0&&checke==false){
      noFill();
    }else{
      fill(25,50,255);
    }
    noStroke();
    ellipse(this.Bfred1X-7.5,this.Bfred1Y,this.r,this.r);

    this.BstringKeyBuffer = ["E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5"];
    if(this.fredNumburB==0){
      fill(0,240,180);
    }else{
      fill(255);
    }
    text(this.BstringKeyBuffer[this.fredNumburB],this.Bfred1X-15, this.Bfred1Y+3.75);
    pop();
  };
};

var TestB = function(){
  this.fredRatioBuffer = [3.4, 3.4, 3.4, 3.1, 2.8, 2.6, 2.6, 2.2, 2.2, 2.1, 2.0, 1.8, 1.8, 1.6, 1.6, 1.5, 1.4, 1.3, 1.3, 1.3, 1.1, 1];
  this.fredNumburB = 0;

  this.testBUpdate = function(){
    push();
    if(stringsIndex==2||keyCode==DELETE){
      this.fredNumburB = otoIndex;
    }
    this.vb1 = createVector(widthSpacing+threadLength,(hei/2)-(bottomLength/2)+((bottomLength/7)*2));
    this.vb2 = createVector(widthSpacing,(hei/2)-(topLength/2)+((topLength/7)*2));
    this.vb3 = this.vb1.sub(this.vb2);
    this.Br = this.vb3.mag();

    this.vb3.mult(-1);

    this.BcosTheta = this.vb3.x/this.Br;

    this.BsinTheta = this.vb3.y/this.Br;

    this.findSumNumberB = 22-this.fredNumburB;
    this.sum = 0;
    for(var i = 0; i < this.fredRatioBuffer.length-this.findSumNumberB; i++ ){
      this.sum += this.fredRatioBuffer[i];
    }
    this.Bfred1R = this.Br * ((45.5-this.sum)/45.5);

    this.Bfred1X = this.Bfred1R * this.BcosTheta;

    this.Bfred1Y = this.Bfred1R * this.BsinTheta;

    if(this.fredNumburB==0){
      this.r = 0.00;
    }else if(this.fredNumburB>=1&&this.fredNumburB<4){
      this.r = 21.00;
    }else if(this.fredNumburB==4){
      this.r = 20.55;
    }else if(this.fredNumburB==5){
      this.r = 20.10;
    }else if(this.fredNumburB==6||this.fredNumburB==7){
      this.r = 19.80;
    }else if(this.fredNumburB==8||this.fredNumburB==9){
      this.r = 19.20;
    }else if(this.fredNumburB==10){
      this.r = 19.05;
    }else if(this.fredNumburB==11){
      this.r = 18.90;
    }else if(this.fredNumburB==12||this.fredNumburB==13){
      this.r = 18.60;
    }else if(this.fredNumburB==14||this.fredNumburB==15){
      this.r = 18.30;
    }else if(this.fredNumburB==16){
      this.r = 18.15;
    }else if(this.fredNumburB==17){
      this.r = 18.00;
    }else if(this.fredNumburB==18||this.fredNumburB==19||this.fredNumburB==20){
      this.r = 17.85;
    }else if(this.fredNumburB==21){
      this.r = 17.55;
    }else if(this.fredNumburB==22){
      this.r = 17.40;
    }
    pop();
  };
  this.testBShow = function(){
    push();
    if(stringsIndex==2||keyCode==DELETE){
      this.fredNumburB = otoIndex;
    }
    translate(widthSpacing+threadLength,(hei/2)-(bottomLength/2)+((bottomLength/7)*2));

    if(this.fredNumburB == 0&&checkB==true){
      stroke(255,0,0);
    }else{
      noStroke();
    }
    if(this.fredNumburB>0&&this.fredNumburB<23){
      stroke(255,50,25);
    }

    line(0,0,this.Bfred1X,this.Bfred1Y);
    if(this.sum==0&&checkB==true){
      noFill();
    }else{
      fill(25,50,255);
    }
    noStroke();
    ellipse(this.Bfred1X-7.5,this.Bfred1Y,this.r,this.r);

    this.BstringKeyBuffer = ["B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4"];
    if(this.fredNumburB==0){
      fill(0,240,180);
    }else{
      fill(255);
    }
    text(this.BstringKeyBuffer[this.fredNumburB],this.Bfred1X-15, this.Bfred1Y+3.75);
    pop();
  };
};

var TestG = function(){
  this.fredRatioBuffer = [3.4, 3.4, 3.4, 3.1, 2.8, 2.6, 2.6, 2.2, 2.2, 2.1, 2.0, 1.8, 1.8, 1.6, 1.6, 1.5, 1.4, 1.3, 1.3, 1.3, 1.1, 1];
  this.fredNumburG = 0;

  this.testGUpdate = function(){
    push();
    if(stringsIndex==3||keyCode==DELETE){
      this.fredNumburG = otoIndex;
    }
    this.vg1 = createVector(widthSpacing+threadLength,(hei/2)-(bottomLength/2)+((bottomLength/7)*3));
    this.vg2 = createVector(widthSpacing,(hei/2)-(topLength/2)+((topLength/7)*3));
    this.vg3 = this.vg1.sub(this.vg2);
    this.Gr = this.vg3.mag();

    this.vg3.mult(-1);

    this.GcosTheta = this.vg3.x/this.Gr;

    this.GsinTheta = this.vg3.y/this.Gr;

    this.findSumNumberG = 22-this.fredNumburG;
    this.sum = 0;
    for(var i = 0; i < this.fredRatioBuffer.length-this.findSumNumberG; i++ ){
      this.sum += this.fredRatioBuffer[i];
    }
    this.Gfred1R = this.Gr * ((45.5-this.sum)/45.5);

    this.Gfred1X = this.Gfred1R * this.GcosTheta;

    this.Gfred1Y = this.Gfred1R * this.GsinTheta;

    if(this.fredNumburG==0){
      this.r = 0.00;
    }else if(this.fredNumburG>=1&&this.fredNumburG<4){
      this.r = 21.00;
    }else if(this.fredNumburG==4){
      this.r = 20.55;
    }else if(this.fredNumburG==5){
      this.r = 20.10;
    }else if(this.fredNumburG==6||this.fredNumburG==7){
      this.r = 19.80;
    }else if(this.fredNumburG==8||this.fredNumburG==9){
      this.r = 19.20;
    }else if(this.fredNumburG==10){
      this.r = 19.05;
    }else if(this.fredNumburG==11){
      this.r = 18.90;
    }else if(this.fredNumburG==12||this.fredNumburG==13){
      this.r = 18.60;
    }else if(this.fredNumburG==14||this.fredNumburG==15){
      this.r = 18.30;
    }else if(this.fredNumburG==16){
      this.r = 18.15;
    }else if(this.fredNumburG==17){
      this.r = 18.00;
    }else if(this.fredNumburG==18||this.fredNumburG==19||this.fredNumburG==20){
      this.r = 17.85;
    }else if(this.fredNumburG==21){
      this.r = 17.55;
    }else if(this.fredNumburG==22){
      this.r = 17.40;
    }
    pop();
  };

  this.testGShow = function(){
    push();
    if(stringsIndex==3||keyCode==DELETE){
      this.fredNumburG = otoIndex;
    }
    translate(widthSpacing+threadLength,(hei/2)-(bottomLength/2)+((bottomLength/7)*3));

    if(this.fredNumburG == 0&&checkG==true){
      stroke(255,0,0);
    }else{
      noStroke();
    }
    if(this.fredNumburG>0&&this.fredNumburG<23){
      stroke(255,50,25);
    }

    line(0,0,this.Gfred1X,this.Gfred1Y);

    if(this.sum==0&&checkG==true){
      noFill();
    }else{
      fill(25,50,255);
    }
    noStroke();
    ellipse(this.Gfred1X-7.5,this.Gfred1Y,this.r,this.r);

    this.GstringKeyBuffer = ["G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4"];
    if(this.fredNumburG==0){
      fill(0,240,180);
    }else{
      fill(255);
    }
    text(this.GstringKeyBuffer[this.fredNumburG],this.Gfred1X-15, this.Gfred1Y+3.75);
    pop();
  };
};

var TestD = function(){
  this.fredRatioBuffer = [3.4, 3.4, 3.4, 3.1, 2.8, 2.6, 2.6, 2.2, 2.2, 2.1, 2.0, 1.8, 1.8, 1.6, 1.6, 1.5, 1.4, 1.3, 1.3, 1.3, 1.1, 1];
  this.fredNumburD = 0;

  this.testDUpdate = function(){
    push();
    if(stringsIndex==4||keyCode==DELETE){
      this.fredNumburD = otoIndex;
    }
    this.vd1 = createVector(widthSpacing+threadLength,(hei/2)-(bottomLength/2)+((bottomLength/7)*4));
    this.vd2 = createVector(widthSpacing,(hei/2)-(topLength/2)+((topLength/7)*4));
    this.vd3 = this.vd1.sub(this.vd2);
    this.Dr = this.vd3.mag();

    this.vd3.mult(-1);

    this.DcosTheta = this.vd3.x/this.Dr;

    this.DsinTheta = this.vd3.y/this.Dr;

    this.findSumNumberD = 22-this.fredNumburD;
    this.sum = 0;
    for(var i = 0; i < this.fredRatioBuffer.length-this.findSumNumberD; i++ ){
      this.sum += this.fredRatioBuffer[i];
    }
    this.Dfred1R = this.Dr * ((45.5-this.sum)/45.5);

    this.Dfred1X = this.Dfred1R * this.DcosTheta;

    this.Dfred1Y = this.Dfred1R * this.DsinTheta;

    if(this.fredNumburD==0){
      this.r = 0.00;
    }else if(this.fredNumburD>=1&&this.fredNumburD<4){
      this.r = 21.00;
    }else if(this.fredNumburD==4){
      this.r = 20.55;
    }else if(this.fredNumburD==5){
      this.r = 20.10;
    }else if(this.fredNumburD==6||this.fredNumburD==7){
      this.r = 19.80;
    }else if(this.fredNumburD==8||this.fredNumburD==9){
      this.r = 19.20;
    }else if(this.fredNumburD==10){
      this.r = 19.05;
    }else if(this.fredNumburD==11){
      this.r = 18.90;
    }else if(this.fredNumburD==12||this.fredNumburD==13){
      this.r = 18.60;
    }else if(this.fredNumburD==14||this.fredNumburD==15){
      this.r = 18.30;
    }else if(this.fredNumburD==16){
      this.r = 18.15;
    }else if(this.fredNumburD==17){
      this.r = 18.00;
    }else if(this.fredNumburD==18||this.fredNumburD==19||this.fredNumburD==20){
      this.r = 17.85;
    }else if(this.fredNumburD==21){
      this.r = 17.55;
    }else if(this.fredNumburD==22){
      this.r = 17.40;
    }
    pop();
  };

  this.testDShow = function(){
    push();
    if(stringsIndex==4||keyCode==DELETE){
      this.fredNumburD = otoIndex;
    }
    translate(widthSpacing+threadLength,(hei/2)-(bottomLength/2)+((bottomLength/7)*4));

    if(this.fredNumburD == 0&&checkD==true){
      stroke(255,0,0);
    }else{
      noStroke();
    }
    if(this.fredNumburD>0&&this.fredNumburD<23){
      stroke(255,50,25);
    }

    line(0,0,this.Dfred1X,this.Dfred1Y);

    if(this.sum==0&&checkD==true){
      noFill();
    }else{
      fill(25,50,255);
    }
    noStroke();
    ellipse(this.Dfred1X-7.5,this.Dfred1Y,this.r,this.r);

    this.DstringKeyBuffer = ["D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4"];
    if(this.fredNumburD==0){
      fill(0,240,180);
    }else{
      fill(255);
    }
    text(this.DstringKeyBuffer[this.fredNumburD],this.Dfred1X-15, this.Dfred1Y+3.75);
    pop();
  };
};

var TestA = function(){
  this.fredRatioBuffer = [3.4, 3.4, 3.4, 3.1, 2.8, 2.6, 2.6, 2.2, 2.2, 2.1, 2.0, 1.8, 1.8, 1.6, 1.6, 1.5, 1.4, 1.3, 1.3, 1.3, 1.1, 1];
  this.fredNumburD = 0;

  this.testAUpdate = function(){
    push();
    if(stringsIndex==5||keyCode==DELETE){
      this.fredNumburD = otoIndex;
    }
    this.vd1 = createVector(widthSpacing+threadLength,(hei/2)-(bottomLength/2)+((bottomLength/7)*5));
    this.vd2 = createVector(widthSpacing,(hei/2)-(topLength/2)+((topLength/7)*5));
    this.vd3 = this.vd1.sub(this.vd2);
    this.Dr = this.vd3.mag();

    this.vd3.mult(-1);

    this.DcosTheta = this.vd3.x/this.Dr;

    this.DsinTheta = this.vd3.y/this.Dr;

    this.findSumNumberD = 22-this.fredNumburD;
    this.sum = 0;
    for(var i = 0; i < this.fredRatioBuffer.length-this.findSumNumberD; i++ ){
      this.sum += this.fredRatioBuffer[i];
    }
    this.Dfred1R = this.Dr * ((45.5-this.sum)/45.5);

    this.Dfred1X = this.Dfred1R * this.DcosTheta;

    this.Dfred1Y = this.Dfred1R * this.DsinTheta;

    if(this.fredNumburD==0){
      this.r = 0.00;
    }else if(this.fredNumburD>=1&&this.fredNumburD<4){
      this.r = 21.00;
    }else if(this.fredNumburD==4){
      this.r = 20.55;
    }else if(this.fredNumburD==5){
      this.r = 20.10;
    }else if(this.fredNumburD==6||this.fredNumburD==7){
      this.r = 19.80;
    }else if(this.fredNumburD==8||this.fredNumburD==9){
      this.r = 19.20;
    }else if(this.fredNumburD==10){
      this.r = 19.05;
    }else if(this.fredNumburD==11){
      this.r = 18.90;
    }else if(this.fredNumburD==12||this.fredNumburD==13){
      this.r = 18.60;
    }else if(this.fredNumburD==14||this.fredNumburD==15){
      this.r = 18.30;
    }else if(this.fredNumburD==16){
      this.r = 18.15;
    }else if(this.fredNumburD==17){
      this.r = 18.00;
    }else if(this.fredNumburD==18||this.fredNumburD==19||this.fredNumburD==20){
      this.r = 17.85;
    }else if(this.fredNumburD==21){
      this.r = 17.55;
    }else if(this.fredNumburD==22){
      this.r = 17.40;
    }
    pop();
  };

  this.testAShow = function(){
    push();
    if(stringsIndex==5||keyCode==DELETE){
      this.fredNumburD = otoIndex;
    }
    translate(widthSpacing+threadLength,(hei/2)-(bottomLength/2)+((bottomLength/7)*5));

    if(this.fredNumburD == 0&&checkA==true){
      stroke(255,0,0);
    }else{
      noStroke();
    }
    if(this.fredNumburD>0&&this.fredNumburD<23){
      stroke(255,50,25);
    }

    line(0,0,this.Dfred1X,this.Dfred1Y);

    if(this.sum==0&&checkA==true){
      noFill();
    }else{
      fill(25,50,255);
    }
    noStroke();
    ellipse(this.Dfred1X-7.5,this.Dfred1Y,this.r,this.r);

    this.DstringKeyBuffer = ["A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3"];
    if(this.fredNumburD==0){
      fill(0,240,180);
    }else{
      fill(255);
    }
    text(this.DstringKeyBuffer[this.fredNumburD],this.Dfred1X-15, this.Dfred1Y+3.75);
    pop();
  };
};

var TestLowE = function(){

  this.fredRatioBuffer = [3.4, 3.4, 3.4, 3.1, 2.8, 2.6, 2.6, 2.2, 2.2, 2.1, 2.0, 1.8, 1.8, 1.6, 1.6, 1.5, 1.4, 1.3, 1.3, 1.3, 1.1, 1];
  this.fredNumburD = 0;

  this.testLowEUpdate = function(){
    push();

    if(stringsIndex==6||keyCode==DELETE){
      this.fredNumburD = otoIndex;
    }

    this.vd1 = createVector(widthSpacing+threadLength,(hei/2)-(bottomLength/2)+((bottomLength/7)*6));
    this.vd2 = createVector(widthSpacing,(hei/2)-(topLength/2)+((topLength/7)*6));
    this.vd3 = this.vd1.sub(this.vd2);
    this.Dr = this.vd3.mag();

    this.vd3.mult(-1);

    this.DcosTheta = this.vd3.x/this.Dr;

    this.DsinTheta = this.vd3.y/this.Dr;

    this.findSumNumberD = 22-this.fredNumburD;
    this.sum = 0;
    for(var i = 0; i < this.fredRatioBuffer.length-this.findSumNumberD; i++ ){
      this.sum += this.fredRatioBuffer[i];
    }
    this.Dfred1R = this.Dr * ((45.5-this.sum)/45.5);

    this.Dfred1X = this.Dfred1R * this.DcosTheta;

    this.Dfred1Y = this.Dfred1R * this.DsinTheta;

    if(this.fredNumburD==0){
      this.r = 0.00;
    }else if(this.fredNumburD>=1&&this.fredNumburD<4){
      this.r = 21.00;
    }else if(this.fredNumburD==4){
      this.r = 20.55;
    }else if(this.fredNumburD==5){
      this.r = 20.10;
    }else if(this.fredNumburD==6||this.fredNumburD==7){
      this.r = 19.80;
    }else if(this.fredNumburD==8||this.fredNumburD==9){
      this.r = 19.20;
    }else if(this.fredNumburD==10){
      this.r = 19.05;
    }else if(this.fredNumburD==11){
      this.r = 18.90;
    }else if(this.fredNumburD==12||this.fredNumburD==13){
      this.r = 18.60;
    }else if(this.fredNumburD==14||this.fredNumburD==15){
      this.r = 18.30;
    }else if(this.fredNumburD==16){
      this.r = 18.15;
    }else if(this.fredNumburD==17){
      this.r = 18.00;
    }else if(this.fredNumburD==18||this.fredNumburD==19||this.fredNumburD==20){
      this.r = 17.85;
    }else if(this.fredNumburD==21){
      this.r = 17.55;
    }else if(this.fredNumburD==22){
      this.r = 17.40;
    }
    pop();
  };

  this.testLowEShow = function(){
    push();

    if(stringsIndex==6||keyCode==DELETE){
      this.fredNumburD = otoIndex;
    }

    translate(widthSpacing+threadLength,(hei/2)-(bottomLength/2)+((bottomLength/7)*6));

    if(this.fredNumburD == 0&&checkE==true){
      stroke(255,0,0);
    }else{
      noStroke();
    }
    if(this.fredNumburD>0&&this.fredNumburD<23){
      stroke(255,50,25);
    }

    line(0,0,this.Dfred1X,this.Dfred1Y);

    if(this.sum==0&&checkE==true){
      noFill();
    }else{
      fill(25,50,255);
    }
    noStroke();
    ellipse(this.Dfred1X-7.5,this.Dfred1Y,this.r,this.r);

    this.DstringKeyBuffer = ["E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3"];
    if(this.fredNumburD==0){
      fill(0,240,180);
    }else{
      fill(255);
    }
    text(this.DstringKeyBuffer[this.fredNumburD],this.Dfred1X-15, this.Dfred1Y+3.75);

    pop();
  };
};

function keyPressed() {
  if(key=='p'||key=='P'){
    checke = true;
  }
  if(key=='o'||key=='O'){
    checkB = true;
  }
  if(key=='i'||key=='I'){
    checkG = true
  }
  if(key=='l'||key=='L'){
    checkD = true;
  }
  if(key=='k'||key=='K'){
    checkA = true;
  }
  if(key=='m'||key=='M'){
    checkE = true;
  }

  if(key=='j'||key=='J'){
    stringsIndex=6;
    otoIndex=0;
    checkE=false;
  }
  if(key=='h'||key=='H'){
    stringsIndex=5;
    otoIndex=0;
    checkA=false;
  }
  if(key=='g'||key=='G'){
    stringsIndex=4;
    otoIndex=0;
    checkD=false;
  }
  if(key=='u'||key=='U'){
    stringsIndex=3;
    otoIndex=0;
    checkG=false;
  }
  if(key=='y'||key=='Y'){
    stringsIndex=2;
    otoIndex=0;
    checkEB=false;
  }
  if(key=='t'||key=='T'){
    stringsIndex=1;
    otoIndex=0;
    checke=false;
  }

  if(keyCode == DELETE){
    setInterval(1000);

    stringsChara = '';
    otoChara = '';

    r1=r2=r3=r4=r5=r6=0;

    s1 = 1.2;
    s2 = 1.4;
    s3 = 1.6;
    s4 = 1.8;
    s5 = 2;
    s6 = 2.2;

    g1=g2=g3=g3=g4=g5=g6= 127;

    stringsIndex=0;
    otoIndex=0;

    //ADD
    teste = new TestHiE();
    stringsIndex = 1;
    otoIndex = 0;
    testb = new TestB();
    stringsIndex = 2;
    otoIndex = 0;
    testg = new TestG();
    stringsIndex = 3;
    otoIndex = 0;
    testd = new TestD();
    stringsIndex = 4;
    otoIndex = 0;
    testa = new TestA();
    stringsIndex = 5;
    otoIndex = 0;
    testE = new TestLowE();
    stringsIndex = 6;
    otoIndex = 0;

    checke = false;
    checkB = false;
    checkG = false;
    checkD = false;
    checkA = false;
    checkE = false;

    //ADD
    allClearAlpha = 200;

    console.log("All DELETED.");
  }
  if(keyCode==ENTER){
    stringsSearch();
    otoSearch();
    otoCheck();
  }
}

function mousePressed(){
  editStringEnable();
  editString();
  clearStringEnable();
  clearString();

  doAllClear();
  doSavePng();
}

function editString(){
  if(mouseX>stringOffsetXLeft[0][0]&&mouseX<stringOffsetXRight[0][0]&&mouseY>stringOffsetYUp[0][0]&&mouseY<stringOffsetYDown[0][0]&&editEnable==true&&editClear==false){
    checke = true;
  }
  if(mouseX>stringOffsetXLeft[1][0]&&mouseX<stringOffsetXRight[1][0]&&mouseY>stringOffsetYUp[1][0]&&mouseY<stringOffsetYDown[1][0]&&editEnable==true&&editClear==false){
    checkB = true;
  }
  if(mouseX>stringOffsetXLeft[2][0]&&mouseX<stringOffsetXRight[2][0]&&mouseY>stringOffsetYUp[2][0]&&mouseY<stringOffsetYDown[2][0]&&editEnable==true&&editClear==false){
    checkG = true;
  }
  if(mouseX>stringOffsetXLeft[3][0]&&mouseX<stringOffsetXRight[3][0]&&mouseY>stringOffsetYUp[3][0]&&mouseY<stringOffsetYDown[3][0]&&editEnable==true&&editClear==false){
    checkD = true;
  }
  if(mouseX>stringOffsetXLeft[4][0]&&mouseX<stringOffsetXRight[4][0]&&mouseY>stringOffsetYUp[4][0]&&mouseY<stringOffsetYDown[4][0]&&editEnable==true&&editClear==false){
    checkA = true;
  }
  if(mouseX>stringOffsetXLeft[5][0]&&mouseX<stringOffsetXRight[5][0]&&mouseY>stringOffsetYUp[5][0]&&mouseY<stringOffsetYDown[5][0]&&editEnable==true&&editClear==false){
    checkE = true;
  }

  for(var i = 0; i < 6; i++){
    for(var j = 0; j < 23; j++){
      if(mouseX>stringOffsetXLeft[i][j]&&mouseX<stringOffsetXRight[i][j]&&mouseY>stringOffsetYUp[i][j]&&mouseY<stringOffsetYDown[i][j]&&editEnable==true&&editClear==false){
        stringsIndex = i+1;
        otoIndex = j;
      }
    }
  }
}

function clearString(){
  if(mouseX>stringOffsetXLeft[0][0]&&mouseX<stringOffsetXRight[0][0]&&mouseY>stringOffsetYUp[0][0]&&mouseY<stringOffsetYDown[0][0]&&editEnable==false&&editClear==true){
    stringsIndex=1;
    otoIndex=0;
    checke=false;
  }
  if(mouseX>stringOffsetXLeft[1][0]&&mouseX<stringOffsetXRight[1][0]&&mouseY>stringOffsetYUp[1][0]&&mouseY<stringOffsetYDown[1][0]&&editEnable==false&&editClear==true){
    stringsIndex=2;
    otoIndex=0;
    checkB=false;
  }
  if(mouseX>stringOffsetXLeft[2][0]&&mouseX<stringOffsetXRight[2][0]&&mouseY>stringOffsetYUp[2][0]&&mouseY<stringOffsetYDown[2][0]&&editEnable==false&&editClear==true){
    stringsIndex=3;
    otoIndex=0;
    checkG=false;
  }
  if(mouseX>stringOffsetXLeft[3][0]&&mouseX<stringOffsetXRight[3][0]&&mouseY>stringOffsetYUp[3][0]&&mouseY<stringOffsetYDown[3][0]&&editEnable==false&&editClear==true){
    stringsIndex=4;
    otoIndex=0;
    checkD=false;
  }if(mouseX>stringOffsetXLeft[4][0]&&mouseX<stringOffsetXRight[4][0]&&mouseY>stringOffsetYUp[4][0]&&mouseY<stringOffsetYDown[4][0]&&editEnable==false&&editClear==true){
    stringsIndex=5;
    otoIndex=0;
    checkA=false;
  }
  if(mouseX>stringOffsetXLeft[5][0]&&mouseX<stringOffsetXRight[5][0]&&mouseY>stringOffsetYUp[5][0]&&mouseY<stringOffsetYDown[5][0]&&editEnable==false&&editClear==true){
    stringsIndex=6;
    otoIndex=0;
    checkE=false;
  }
}

function editStringEnable(){
  if(mouseX>10&&mouseX<70&&mouseY>10&&mouseY<60){
    editEnable=true;
    editClear=false;
    editAlpha = enableAlpha;
    clearAlpha = disableAlpha;
  }
}

function clearStringEnable(){
  if(mouseX>120&&mouseX<180&&mouseY>10&&mouseY<60){
    editEnable=false;
    editClear=true;
    editAlpha = disableAlpha;
    clearAlpha = enableAlpha;
  }
}

function doAllClear(){
  if(mouseX>10&&mouseX<70&&mouseY<390&&mouseY>330&&keyCode!=DELETE){ 
    setInterval(1000);

    stringsChara = '';
    otoChara = '';

    r1=r2=r3=r4=r5=r6=0;

    s1 = 1.2;
    s2 = 1.4;
    s3 = 1.6;
    s4 = 1.8;
    s5 = 2;
    s6 = 2.2;

    g1=g2=g3=g3=g4=g5=g6= 127;

    teste = new TestHiE();
    stringsIndex = 1;
    otoIndex = 0;
    testb = new TestB();
    stringsIndex = 2;
    otoIndex = 0;
    testg = new TestG();
    stringsIndex = 3;
    otoIndex = 0;
    testd = new TestD();
    stringsIndex = 4;
    otoIndex = 0;
    testa = new TestA();
    stringsIndex = 5;
    otoIndex = 0;
    testE = new TestLowE();
    stringsIndex = 6;
    otoIndex = 0;

    checke = false;
    checkB = false;
    checkG = false;
    checkD = false;
    checkA = false;
    checkE = false;


    allClearAlpha = 200;


    console.log("All DELETED.");
  }
}

function doSavePng(){
  if(mouseX>120&&mouseX<180&&mouseY<390&&mouseY>330){
    saveCanvas('tab_score', 'png');
    savePngDisableAlpha = 150;
    savePngAlpha = 200;
  }
}


function keyTyped(){
  if(key!=1&&key!=2&&key!=3&&key!=4&&key!=5&&key!=6&&key!='p'&&key!='P'&&key!='o'&&key!='O'&&key!='i'&&key!='I'&&key!='l'&&key!='L'&&key!='k'&&key!='K'&&key!='m'&&key!='M'&&keyCode!=DELETE&&keyCode!=ENTER&&keyCode!=SHIFT&&keyCode!=CONTROL){
    otoChara = key;
    console.log(key);
  }
  if(key==1||key==2||key==3||key==4||key==5||key==6){
    stringsChara = key;
    console.log(key);
  }
}

function keyReleased() {
  if (keyCode == CONTROL) saveCanvas('tab_score', 'png');
}

function otoSearch(){
  switch (otoChara) {
                case 'q':
                otoIndex = 1;
                break;
                case 'Q':
                otoIndex = 2;
                break;
                case 'a':
                otoIndex = 3;
                break;
                case 'A':
                otoIndex = 4;
                break;
                case 'z':
                otoIndex = 5;
                break;
                case 'Z':
                otoIndex = 6;
                break;
                case 'w':
                otoIndex = 7;
                break;
                case 'W':
                otoIndex = 8;
                break;
                case 's':
                otoIndex = 9;
                break;
                case 'S':
                otoIndex = 10;
                break;
                case 'x':
                otoIndex = 11;
                break;
                case 'X':
                otoIndex = 12;
                break;
                case 'e':
                otoIndex = 13;
                break;
                case 'E':
                otoIndex = 14;
                break;
                case 'd':
                otoIndex = 15;
                break;
                case 'D':
                otoIndex = 16;
                break;
                case 'c':
                otoIndex = 17;
                break;
                case 'C':
                otoIndex = 18;
                break;
                case 'r':
                otoIndex = 19;
                break;
                case 'R':
                otoIndex = 20;
                break;
                case 'f':
                otoIndex = 21;
                break;
                case 'F':
                otoIndex = 22;
                break;
  }
  var temp = str(otoIndex);
  console.log("otoIndex is : " + temp);
}

function stringsSearch(){
    switch (stringsChara) {
      case '1':
        stringsIndex = 1;
        break;
      case '2':
        stringsIndex = 2;
        break;
      case '3':
        stringsIndex = 3;
        break;
      case '4':
        stringsIndex = 4;
        break;
      case '5':
        stringsIndex = 5;
        break;
      case '6':
        stringsIndex = 6;
        break;
      }
    var temp = str(stringsIndex);
    console.log("stringsIndex is : " + temp);
}

function otoCheck(){
  var b1 = stringsIndex;
  var b2 = otoIndex;
  if((b1==1||b1==2||b1==3||b1==4||b1==5||b1==6)&&(b2==1||b2==2||b2==3||b2==4||b2==5||b2==6||b2==7||b2==8||b2==9||b2==10||b2==11||b2==12||b2==13||b2==14||b2==15||b2==16||b2==17||b2==18||b2==19||b2==20||b2==21||b2==22)){
    otoEnable = true;
  }else{
    otoEnable = false;
  }
  if(otoEnable){
    console.log("oto is : " + otoBuffer[stringsIndex-1][otoIndex-1]);
  }
}
