function myFunction(){
    
var num1 = Math.floor((Math.random()*6)+1);

var num2 = Math.floor((Math.random()*6)+1);


  if(num1){ if(num1 == 1){
    document.querySelectorAll("img")[0].setAttribute("src","/dice1.png") ;
    }else if(num1 == 2){
        document.querySelectorAll("img")[0].setAttribute("src","/dice2.png") ;
    }else if(num1 == 3){
        document.querySelectorAll("img")[0].setAttribute("src","/dice3.png") ;
    }else if(num1 == 4){
        document.querySelectorAll("img")[0].setAttribute("src","/dice4.png") ;
    }else if(num1 == 5){
        document.querySelectorAll("img")[0].setAttribute("src","/dice5.png") ;
    }else if(num1 == 6){
        document.querySelectorAll("img")[0].setAttribute("src","/dice6.png") ;
    }
  }
  if(num2){ if(num2 == 1){
    document.querySelectorAll("img")[1].setAttribute("src","/dice1.png") ;
    }else if(num2 == 2){
        document.querySelectorAll("img")[1].setAttribute("src","/dice2.png") ;
    }else if(num2 == 3){
        document.querySelectorAll("img")[1].setAttribute("src","/dice3.png") ;
    }else if(num2 == 4){
        document.querySelectorAll("img")[1].setAttribute("src","/dice4.png") ;
    }else if(num2 == 5){
        document.querySelectorAll("img")[1].setAttribute("src","/dice5.png") ;
    }else if(num2 == 6){
        document.querySelectorAll("img")[1].setAttribute("src","/dice6.png") ;
    }
  }

   }

