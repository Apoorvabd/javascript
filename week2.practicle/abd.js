let yscore=0;
let cscore=0;
let play=true;
let total=0;

let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissor=document.querySelector(".scissor");
let all=document.querySelectorAll("#q");
let love=document.querySelector("#love");
let cs=document.querySelector('#cscore');
let ys=document.querySelector('#yscore');
let res=document.querySelector('.result');

let cno=Math.random()*10;
rock.addEventListener('click',()=>{
    total++;
    let cno=Math.random()*10;
    if(cno>3.33 && cno<6.66){
       love.innerText="you lose this time";
       cscore++;
       cs.innerText=`com score: ${cscore}`;

    }
    else if(cno<10 && cno>6.66){
        love.innerText="you won this time";
        yscore++;
        ys.innerText=`Your score: ${yscore}`;
    }
    else{
        love.innerText="draw ~~~";
    }
    tcheck();

});

paper.addEventListener('click',()=>{
    total++;
    let cno=Math.random()*10;
    if(cno>3.33 && cno<6.66){
       love.innerText="you lose this time";
       cscore++;
       cs.innerText=`com score: ${cscore}`;

    }
    else if(cno<10 && cno>6.66){
        love.innerText="you won this time";
        yscore++;
        ys.innerText=`Your score: ${yscore}`;
    }
    else{
        love.innerText="draw ~~~";
    }
    tcheck();

});

scissor.addEventListener('click',()=>{
    total++;
    let cno=Math.random()*10;
    if(cno>3.33 && cno<6.66){
       love.innerText="you lose this time";
       cscore++;
       cs.innerText=`com score: ${cscore}`;

    }
    else if(cno<10 && cno>6.66){
        love.innerText="you won this time";
        yscore++;
        ys.innerText=`Your score: ${yscore}`;
    }
    else{
        love.innerText="draw ~~~";
    }
    tcheck();

});

function tcheck(){
    if(total>=5){
      if(yscore>cscore){
       res.innerText="you won finally";
       }
      else{
        res.innerText="computer won finally";
      }
      setTimeout(()=>{
          yscore=0;
          cscore=0;
          cs.innerText=`com score: ${cscore}`;
          ys.innerText=`Your score: ${yscore}`;
          love.innerText="";
          total=0;
          res.innerText="";
        },2000)

    }
}
