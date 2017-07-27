alert('file linked');

/*function Control(questions)
 {
	this.score=0;
	this.questions=questions;
	this.questionIndex=0;
}

Control.prototype.getQuestionindex = function() 
{
	return this.questions[this.questionIndex];
}

Control.prototype.isEnded=function()
{
	 return this.questions.length==this.questionIndex;
}

Control.prototype.guess=function(answer)
{
	 this.questionIndex++;

	 if(this.getQuestionIndex().correctAnswer(answer))
	 {
	 	this.score++;
	 }
}