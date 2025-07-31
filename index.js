let menuanimation = 0
let Characteranimation = 0
let b1=0
let b2=775
let b3=1550
let b4=2325
let f1=0
let f2=225
let f3=450
let f4=675
let f5=900
let f6=1125
let f7=1350
let f8=1575
let f9=1800
let f10=2025
let floorspeed = 10
let Backspeed = floorspeed/8
let customize = false
let floorspin =true
let Backspin = true
let menu = true
let menutimer=false
let Character =false
let Charactertimer = false
let Char_1=true;
let Char_2=false;
let Char_3=false;
let Char_4=false;
let Char_5=false;
let Char_6=false;
let Char_7=false;
let Char_8=false;
let Char_9=false;
let Char_10=false;
let Char_11=false;
let clickcooldown = 0
let levelselect = false
var context, controller, player, loop;
context = document.querySelector("canvas").getContext("2d");
context.canvas.height = 600
context.canvas.width = 1200;

//mouse cords
function coordinate(event) {
  let xxx = event.clientX;
  let yyy = event.clientY;
  document.getElementById("X").value = xxx;
  document.getElementById("Y").value = yyy;

}

function clear(){


  context.drawImage(Backroundimage, b1, 0);
  context.drawImage(Backroundimage, b2, 0);
  context.drawImage(Backroundimage, b3, 0);
  context.drawImage(Backroundimage, b4, 0);
  context.drawImage(floor, f1, 500);
  context.drawImage(floor, f2, 500);
  context.drawImage(floor, f3, 500);
  context.drawImage(floor, f4, 500);
  context.drawImage(floor, f5, 500);
  context.drawImage(floor, f6, 500);
  context.drawImage(floor, f7, 500);
  context.drawImage(floor, f8, 500);
  context.drawImage(floor, f9, 500);
  context.drawImage(floor, f10, 500);

}
player = {

  height:32,
  jumping:true,
  width:32,
  x:100, // center of the canvas
  x_velocity:0,
  y:400,
  y_velocity:0

};
controller = {

left:false,
right:false,
up:false,
};
//loading images
Play = new Image();
Play.src = 'Play.png';
gradiant = new Image();
gradiant.src = 'Gradiant.png';
Corner1 = new Image();
Corner1.src = 'TopLeftCorner.png';
Corner2 = new Image();
Corner2.src = 'TopRightCorner.png';
Corner3 = new Image();
Corner3.src = 'BottomLeftCorner.png';
Corner4 = new Image();
Corner4.src = 'BottomRightCorner.png';
Backarrow = new Image();
Backarrow.src = 'BackChar.png';
Char1 = new Image();
Char1.src = 'Char 1.png';
Char2 = new Image();
Char2.src = 'Char 2.png';
Char3 = new Image();
Char3.src = 'Char 3.png';
Char4 = new Image();
Char4.src = 'Char 4.png';
Char5 = new Image();
Char5.src = 'Char 5.png';
Char6 = new Image();
Char6.src = 'Char 6.png';
Char7 = new Image();
Char7.src = 'Char 7.png';
Char8 = new Image();
Char8.src = 'Char 8.png';
Char9 = new Image();
Char9.src = 'Char 9.png';
Char10 = new Image();
Char10.src = 'Char 10.png';
Char11 = new Image();
Char11.src = 'Char 11.png';
loop = function() {
Backroundimage = new Image();
Backroundimage.src = 'Backround.png';
floor = new Image();
floor.src = 'Floor.png';
clear();

//click
document.onclick= function(event) {
  if (event===undefined) event= window.event;
  var target= 'target' in event? event.target : event.srcElement;
//if click is that

if(event.clientX>520 && event.clientX<680 &&  event.clientY>220 && event.clientY<380 && clickcooldown<0 &&menu==true){

menutimer=true
clickcooldown=10
}
if(event.clientX>290 && event.clientX<420 &&  event.clientY>230 && event.clientY<360 && clickcooldown<0 &&menu==true){
  Charactertimer=true
  clickcooldown=10
  }
  if(event.clientX>30 && event.clientX<80 &&  event.clientY>30 && event.clientY<80 && clickcooldown<0 &&Character==true){
menu=true
Character=false
    clickcooldown=10
    }
  if(event.clientX>210 && event.clientX<280 &&  event.clientY>360 && event.clientY<420 && clickcooldown<0 && Character==true){
    Char_1=true;
    Char_2=false;
    Char_3=false;
    Char_4=false;
    Char_5=false;
    Char_6=false;
    Char_7=false;
    Char_8=false;
    Char_9=false;
    Char_10=false;
    Char_11=false;
    clickcooldown=10
    }
  if(event.clientX>290 && event.clientX<350 &&  event.clientY>360 && event.clientY<420 && clickcooldown<0 && Character==true){
    Char_1=false;
    Char_2=true;
    Char_3=false;
    Char_4=false;
    Char_5=false;
    Char_6=false;
    Char_7=false;
    Char_8=false;
    Char_9=false;
    Char_10=false;
    Char_11=false;
    clickcooldown=10
    }
  if(event.clientX>350 && event.clientX<410 &&  event.clientY>360 && event.clientY<420 && clickcooldown<0 && Character==true){
    Char_1=false;
    Char_2=false;
    Char_3=true;
    Char_4=false;
    Char_5=false;
    Char_6=false;
    Char_7=false;
    Char_8=false;
    Char_9=false;
    Char_10=false;
    Char_11=false;
    clickcooldown=10
    }
  if(event.clientX>430 && event.clientX<490 &&  event.clientY>360 && event.clientY<420 && clickcooldown<0 && Character==true){
    Char_1=false;
    Char_2=false;
    Char_3=false;
    Char_4=true;
    Char_5=false;
    Char_6=false;
    Char_7=false;
    Char_8=false;
    Char_9=false;
    Char_10=false;
    Char_11=false;
    clickcooldown=10
    }
  if(event.clientX>500 && event.clientX<570 &&  event.clientY>360 && event.clientY<420 && clickcooldown<0 && Character==true){
    Char_1=false;
    Char_2=false;
    Char_3=false;
    Char_4=false;
    Char_5=true;
    Char_6=false;
    Char_7=false;
    Char_8=false;
    Char_9=false;
    Char_10=false;
    Char_11=false;
    clickcooldown=10
    }
  if(event.clientX>580 && event.clientX<640 &&  event.clientY>360 && event.clientY<420 && clickcooldown<0 && Character==true){
    Char_1=false;
    Char_2=false;
    Char_3=false;
    Char_4=false;
    Char_5=false;
    Char_6=true;
    Char_7=false;
    Char_8=false;
    Char_9=false;
    Char_10=false;
    Char_11=false;
    clickcooldown=10
    }
  if(event.clientX>660 && event.clientX<710 &&  event.clientY>360 && event.clientY<420 && clickcooldown<0 && Character==true){
    Char_1=false;
    Char_2=false;
    Char_3=false;
    Char_4=false;
    Char_5=false;
    Char_6=false;
    Char_7=true;
    Char_8=false;
    Char_9=false;
    Char_10=false;
    Char_11=false;
    clickcooldown=10
    }
  if(event.clientX>730 && event.clientX<780 &&  event.clientY>360 && event.clientY<420 && clickcooldown<0 && Character==true){
    Char_1=false;
    Char_2=false;
    Char_3=false;
    Char_4=false;
    Char_5=false;
    Char_6=false;
    Char_7=false;
    Char_8=true;
    Char_9=false;
    Char_10=false;
    Char_11=false;
    clickcooldown=10
    }
  if(event.clientX>800 && event.clientX<860 &&  event.clientY>360 && event.clientY<420 && clickcooldown<0 && Character==true){
    Char_1=false;
    Char_2=false;
    Char_3=false;
    Char_4=false;
    Char_5=false;
    Char_6=false;
    Char_7=false;
    Char_8=false;
    Char_9=true;
    Char_10=false;
    Char_11=false;
    clickcooldown=10
    }
  if(event.clientX>880 && event.clientX<940 &&  event.clientY>360 && event.clientY<420 && clickcooldown<0 && Character==true){
    Char_1=false;
    Char_2=false;
    Char_3=false;
    Char_4=false;
    Char_5=false;
    Char_6=false;
    Char_7=false;
    Char_8=false;
    Char_9=false;
    Char_10=true;
    Char_11=false;
    clickcooldown=10
    }
    if(event.clientX>960 && event.clientX<1010 &&  event.clientY>360 && event.clientY<420 && clickcooldown<0 && Character==true){
      Char_1=false;
      Char_2=false;
      Char_3=false;
      Char_4=false;
      Char_5=false;
      Char_6=false;
      Char_7=false;
      Char_8=false;
      Char_9=false;
      Char_10=false;
      Char_11=true;
      clickcooldown=10
      }
}




if(menu==true){
//menu display and animation
if(1>0){
if(menuanimation==0){
context.drawImage(Play, 500, 200,212.5,212.5);
}
if(menuanimation<0 && menuanimation>-10){
context.drawImage(Play, 516.25, 216.25,180,180);
}
if(menuanimation<-10 && menuanimation>-20){
context.drawImage(Play, 500, 200,212.5,212.5);
}
if(menuanimation==-20){menu=false; menutimer =false; menuanimation=0;  levelselect=true;}
}
// Character display and animation
if(1>0){
  Character = new Image();
Character.src = 'Character.png';
  if(Characteranimation==0){
    context.drawImage(Character, 275, 225,175,175);
    }
    if(Characteranimation<0 && Characteranimation>-10){
      context.drawImage(Character, 287.5, 237.5,150,150);
    }
    if(Characteranimation<-10 && Characteranimation>-20){
      context.drawImage(Character, 275, 225,175,175);
    }
    if(Characteranimation==-20){menu=false; Charactertimer =false ;Character=true;Characteranimation=0;  }


}

}
//character menu
if(Character==true){
  context.fillStyle = "#808080";
  context.fillRect(0, 0, 1200, 600);
  context.drawImage(gradiant, 0, 0,1200,600);
  context.drawImage(Corner1, 0, 0,400,400);
  context.drawImage(Corner2, 800, 0,400,400);
  context.drawImage(Corner3, 0,200,400,400);
  context.drawImage(Corner4, 800, 200,400,400);
  context.globalAlpha = 0.5;
  context.fillStyle = "#000000";
  context.fillRect(200, 350, 830, 90);
  context.globalAlpha = 1;
  context.fillStyle = "#ffffff";
  context.fillRect(300, 280, 600, 5);
  context.drawImage(Backarrow, 25, 25,70,70);
  context.drawImage(Char1, 220, 370,50,50);
  context.drawImage(Char2, 295, 370,50,50);
  context.drawImage(Char3, 360, 370,50,50);
  context.drawImage(Char4, 435, 370,50,50);
  context.drawImage(Char5, 510, 370,50,50);
  context.drawImage(Char6, 585, 370,50,50);
  context.drawImage(Char7, 660, 370,50,50);
  context.drawImage(Char8, 735, 370,50,50);
  context.drawImage(Char9, 810, 370,50,50);
  context.drawImage(Char10, 885, 370,50,50);
  context.drawImage(Char11, 960, 370,50,50);

  if(Char_1==true){
    context.drawImage(Char1, 550, 170,100,100);
    context.fillStyle = "#000000";
    context.fillRect(650, 170, 3, 100);

  }
  if(Char_2==true){
    context.drawImage(Char2, 550, 170,100,100);
  }
  if(Char_3==true){
    context.drawImage(Char3, 550, 170,100,100);
  }
  if(Char_4==true){
    context.drawImage(Char4, 550, 170,100,100);
  }
  if(Char_5==true){
    context.drawImage(Char5, 550, 170,100,100);
  }
  if(Char_6==true){
    context.drawImage(Char6, 550, 170,100,100);
  }
  if(Char_7==true){
    context.drawImage(Char7, 550, 170,100,100);
  }
  if(Char_8==true){
    context.drawImage(Char8, 550, 170,100,100);
  }
  if(Char_9==true){
    context.drawImage(Char9, 550, 170,100,100);
  }
  if(Char_10==true){
    context.drawImage(Char10, 550, 170,100,100);
  }
  if(Char_11==true){
    context.drawImage(Char11, 550, 170,100,100);
  }

}
//level select
if(levelselect==true){
  context.fillStyle = "#0200e7";
  context.fillRect(0, 0, 1200, 600);
  context.drawImage(Backarrow, 25, 25,70,70);
}












//moving floor reset
if(f1<-230){f1=f10+225}
if(f2<-230){f2=f1+225}
if(f3<-230){f3=f2+225}
if(f4<-230){f4=f3+225}
if(f5<-230){f5=f4+225}
if(f6<-230){f6=f5+225}
if(f7<-230){f7=f6+225}
if(f8<-230){f8=f7+225}
if(f9<-230){f9=f8+225}
if(f10<-230){f10=f9+225}
//moving Back reset
if(b1<-780){b1=b4+1000}
if(b2<-780){b2=b1+775}
if(b3<-780){b3=b2+775}
if(b4<-780){b4=b3+775}
// call update when the browser is ready to draw again
window.requestAnimationFrame(loop);
if(floorspin==true){
f1=f1-floorspeed
f2=f2-floorspeed
f3=f3-floorspeed
f4=f4-floorspeed
f5=f5-floorspeed
f6=f6-floorspeed
f7=f7-floorspeed
f8=f8-floorspeed
f9=f9-floorspeed
f10=f10-floorspeed
}
if(Backspin==true){
b1=b1-Backspeed;
b2=b2-Backspeed;
b3=b3-Backspeed;
b4=b4-Backspeed;
}
//timer
if(1>0){
if(menutimer==true){
  menuanimation=menuanimation-1
}
if(Charactertimer==true){
Characteranimation=Characteranimation-1
}

clickcooldown=clickcooldown-1


}
};
window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);
//do a animation for click using menuanimation
//use photo shop and pencil with big squares to make corner