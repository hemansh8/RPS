var rock_div = document.getElementById('rock');
var paper_div = document.getElementById('paper');
var scissor_div = document.getElementById('scissor');
var lizard_div = document.getElementById('lizard');
var spock_div = document.getElementById('spock');


//version control
var version = 3;
var versionAdjust =1; 
var newProcess= document.querySelectorAll('.newVersion')
version_button=document.getElementById('versionButton');
version_button.addEventListener('click',function(){
    changeVersion();
})


function changeVersion(){
    versionAdjust++;
    if(versionAdjust%2==0){
        version=5;
        version_button.innerText="Old Version";
        for (var i = 0; i < newProcess.length; i++) {
            newProcess[i].style.display = "inline-block";
        }
    }
    else{
        version=3;
        version_button.innerText="New Version";
        for (var j = 0; j < newProcess.length; j++) {
            newProcess[j].style.display = "none";
        }
    }
    changerules();
}


function changerules(){
    if(versionAdjust%2==0){
        document.querySelector('#rules>img').src="./newrules.jpg"
    }
   
    else{
        document.querySelector('#rules>img').src="./oldrules.png"
    }
}



rock_div.addEventListener('click',function(){
    rock_div.classList.add('selection');
    setTimeout(() => {
        rock_div.classList.remove('selection');
    }, 300);
    result_function('Rock')
});

paper_div.addEventListener('click',function(){
    paper_div.classList.add('selection');
    setTimeout(() => {
        paper_div.classList.remove('selection');
    }, 300);
    result_function('Paper')
});

scissor_div.addEventListener('click',function(){
    scissor_div.classList.add('selection');
    setTimeout(() => {
        scissor_div.classList.remove('selection');
    }, 300);
    result_function('Scissor')
});


lizard_div.addEventListener('click',function(){
    lizard_div.classList.add('selection');
    setTimeout(() => {
        lizard_div.classList.remove('selection');
    }, 300);
    result_function('Lizard')
});

spock_div.addEventListener('click',function(){
    spock_div.classList.add('selection');
    setTimeout(() => {
        spock_div.classList.remove('selection');
    }, 300);
    result_function('Spock')
});


function get_comp_choice(){
    console.log(version);
    const rand= Math.floor(Math.random()*version);
    const arr = ['Rock','Paper', 'Scissor','Lizard','Spock'];
    return arr[rand];
}


function result_function(userOption) {
    //user
    image_dispay('userChoice',userOption);

    //comp
    const compOption= get_comp_choice();
    image_dispay('compChoice',compOption);
    //score
    score_update(userOption,compOption);
    document.getElementById('userVS').innerText=userOption;
    document.getElementById('compVS').innerText=compOption;
}


function score_update(op1,op2) {
   var write_result = document.getElementById('result');
   
    switch(op1+op2){
        
        case 'ScissorPaper':
        case 'PaperRock':
        case 'RockLizard':
        case 'LizardSpock':
        case 'SpockScissor':             case 'PaperSpock':
        case 'ScissorLizard':
        case 'SpockRock':
        case 'LizardPaper':
        case 'RockScissor':
            win();
            write_result.innerText='YOU WIN!';
            break;
        case 'PaperScissor':
        case 'RockPaper':
        case 'LizardRock':
        case 'SpockLizard':
        case 'ScissorSpock':             case 'SpockPaper':
        case 'LizardScissor':
        case 'RockSpock':
        case 'PaperLizard':
        case 'ScissorRock':
            lose();
            write_result.innerText='YOU LOSE!';                   break;
        default:
                write_result.innerText=`IT's A DRAW!`;

    }
}


function win()
{
    var userScore = document.getElementById('userScore');
    var userSc = userScore.innerText;
    userSc++;
    userScore.innerText=userSc;
}


function lose()
{
    var compScore = document.getElementById('compScore');
    var compSc = compScore.innerText;
    compSc++;
    compScore.innerText=compSc;
}


function image_dispay(player,imageChosen){
    
    document.querySelector('#'+player+'>img').src = "./" + imageChosen + ".png";
}
