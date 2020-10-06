let userscore = 0;
let comscore = 0;
const userscore_span = document.getElementById("userscore");
const comscore_span = document.getElementById("comscore");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p"); //若存進result會覆蓋先前設定 所以有一層p來放字
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getcomchoice() {
    const choices = ['r', 'p', 's'];
    const randomnum = Math.floor(Math.random() * 3);
    return choices[randomnum]
    //Math.random從0~1取一個數_可加減乘除 floor變整數
}

function converttoword(lt) {
    if (lt === "r") return "rock";
    if (lt === "p") return "paper";
    return "scissors" //如果是return就不用else
}



function win(user, com) {
    userscore++;
    userscore_span.innerHTML = userscore; //上傳變數上html
    comscore_span.innerHTML = comscore;
    const smallcom = '(com)'.fontsize(3).sub(); //js設定文字方法 (sup上 sub下
    const smalluser = '(user)'.fontsize(3).sub();
    result_p.innerHTML = `${converttoword(user)}${smalluser} beats ${converttoword(com)} ${smallcom}！！`; //`裡面都當成string`
    document.getElementById(user).classList.add('greenglow');
    setTimeout(() =>
        document.getElementById(user).classList.remove('greenglow'), 300); /*(ES5)function(){...} = (ES6)()=>... */
}



function lose(user, com) {
    comscore++;
    userscore_span.innerHTML = userscore; //上傳變數上html
    comscore_span.innerHTML = comscore;
    const smallcom = '(com)'.fontsize(3).sub(); //js設定文字方法 (sup上 sub下
    const smalluser = '(user)'.fontsize(3).sub();
    result_p.innerHTML = `${converttoword(com)} ${smallcom} beats ${converttoword(user)}${smalluser}！！`; //`裡面都當成string`
    document.getElementById(user).classList.add('redglow');
    setTimeout(function () {
        document.getElementById(user).classList.remove('redglow')
    }, 300);
}

function draw(user, com) {
    userscore_span.innerHTML = userscore; //上傳變數上html
    comscore_span.innerHTML = comscore;
    result_p.innerHTML = `It's a draw`; //`裡面都當成string`
    document.getElementById(user).classList.add('greyglow');
    setTimeout(function () {
        document.getElementById(user).classList.remove('greyglow')
    }, 300);
}

function game(userchoice) {
    const comchoice = getcomchoice();
    switch (userchoice + comchoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userchoice, comchoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userchoice, comchoice);
            break;
        case "rr":
        case "rp":
        case "ss":
            draw(userchoice, comchoice);
            break;
    }
}

function main() {


    rock_div.addEventListener('click', function () {
        game("r");
    })
    paper_div.addEventListener('click', function () {
        game("p")
    })
    scissors_div.addEventListener('click', function () {
        game("s");
    })
}


main();