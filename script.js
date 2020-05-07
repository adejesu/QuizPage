
var quizBox=document.getElementById('questionBox');
    var op1=document.getElementById('op1');
    var op2=document.getElementById('op2');
    var op3=document.getElementById('op3');

var app{
    questions:[
                {q:'Which is the longest bridge in Nigeria?',
                options:['Ibeto bridge','River Niger bridgr','Third mainland bridge'],answer:3},
            ],
            index:0,
            load:function(){
                    quizBox.innerHTML=this.questions[this.index],q;
            }

        }


window.onload=app.load();
