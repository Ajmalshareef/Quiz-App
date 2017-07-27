
function populate()
  {
     
  	 if(quiz.isEnded())
  	 {
        showScores();
   	 }
   	 else
   	 {
      var element=document.getElementById("question");
   	  element.innerHTML=quiz.getQuestionIndex().text;
      var choices=quiz.getQuestionIndex().choices;
      for(var i=0;i< choices.length;i++)
         {
           
            var element=document.getElementById("choice"+i);
            element.innerHTML=choices[i];
            guess("btn"+i,choices[i]);
             

         }   
         showprogress();	 
             
       }
};

function guess(id,guess)
   {
    var button=document.getElementById(id);
    button.onclick=function()
    {
      quiz.guess(guess);
      populate();
    }
   }

function showprogress()
  {
     var currentqn=quiz.questionIndex +1;

  }

function showScores()
 {
   var gameover="<h1>RESULT</h1>";
   gameover +="<h2 id='score'>YOUR SCORE:"+quiz.score +"</h2>";
   var element = document.getElementById("quiz");
   element.innerHTML=gameover;
}



var quest = [new Question("FORTRAN STANDS FOR ?",["FOR TRANSITION","FORMULA TRANSLATION","FORUM TRANSFER","FACE TEXT"],"FORMULA TRANSLATION"),new Question("WHICH IS NOT OBJECT ORIENTED",["C++","JAVA","C#","C"],"C")];
var quiz= new Quiz(quest);
populate(); 

