function randomQaote()
{
var result;
var qaote=["“We must be free not because we claim freedom, but because we practice it.”", 
           "The truth will set you free." ,
           "Neither a man nor a crowd nor a nation can be trusted to act humanely or to think sanely under the influence of a great fear.”",
           "“When a man is denied the right to live the life he believes in, he has no choice but to become an outlaw.”" ,
            "That is all I want in life: for this pain to seem purposeful."];

var writeQaote=["--William Faulkner" ,
                "--David Foster Wallace" ,
                "--Bertrand Russell",
                " --Nelson Mandela" ,
                 "--Elizabeth Wurtzel"];


     result= Math.floor(Math.random() * qaote.length);
     // console.log(result);
document.getElementById("p1").innerHTML= qaote[result]  ;
document.getElementById("p2").innerHTML=writeQaote[result] ;

}

