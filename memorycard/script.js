var arrImg = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffleArray(arrImg);

function playMusic(){
    var audio = document.getElementById("music-bg");
    audio.play();
    audio.loop = true;
}
function showProgressbar(){
    $('.progressbar').css('display', 'block');
}
function playMusicGame(kind){
    var audio = document.getElementById("music-" + kind);
    // audio.load();
    audio.play();
}

function hidemodal(modalName){
    $(modalName).css('display', 'none');
}
function showmodal(modalName) {
    $(modalName).css('display', 'block');
}
function creatCard(n){
    var arrTemp = []; 
    for (var i = 0; i <= n; i++) {
        arrTemp[i] = arrImg[i];
    };
    arrTemp = arrTemp.concat(arrTemp);
    shuffleArray(arrTemp);
    for (var i = 0; i < arrTemp.length; i++) {
        $(".grid").append('<div class="card"'+ 'data-name="' + arrTemp[i] + '"><div class="front"><img src="img/' + arrTemp[i] + '.jpg"></div><div class="back"><img src="img/card.jpg"></div></div>');
    };
}
function resetGame(){
    window.location.href = "index.html";
}
function playGame(n){
    var check = 0;
    var current = null;
    var win = 0;
    var remainingTime = 120;
    setInterval(function(){
        remainingTime--;
        $('progress').val(remainingTime);
        if (remainingTime == 0) {
            document.getElementById("music-bg").load();
            playMusicGame("over");
            setTimeout(function(){
                showmodal(".modal-end");
            }, 1000);
        }
        if (remainingTime == 10){
            playMusicGame("10s");
        }
        if (remainingTime == 5){
            playMusicGame("5s");
        }
    }, 1000);
    
    $(".card").click(function (){
        var temp = $(this);
        if (check == 0) {
            $(temp).children().addClass('fliped');
            check++;
            $(temp).css('pointer-events', 'none');
            current = temp;
        } else if (check == 1) {
            $(temp).children().addClass('fliped');
            $(".card").css('pointer-events', 'none');

            if ($(current).attr('data-name') == $(temp).attr('data-name')) {
                win++;
                $(".score p").html("Score: " + win);
                switch(win) {
                    case 1:
                    playMusicGame("kill1");
                    break;
                    case 2:
                    playMusicGame("kill2");
                    break;
                    case 3:
                    playMusicGame("kill3");
                    break;
                    case 4:
                    playMusicGame("kill4");
                    break;
                    case 5:
                    playMusicGame("kill5");
                    break;
                    case 6:
                    playMusicGame("kill6");
                    break;
                    case 7:
                    playMusicGame("kill7");
                    break;
                    case 8:
                    playMusicGame("kill8");
                    break;
                    default:
                    playMusicGame("kill9");
                }
                setTimeout(function(){
                    $(current).css('visibility', 'hidden');
                    $(temp).css('visibility', 'hidden');
                    current = null;
                    check = 0;
                }, 100)
                setTimeout(function(){
                    if (win == (n+1)) {
                        document.getElementById("music-bg").load();
                        playMusicGame("win");
                        setTimeout(function(){
                            alert("Chuc Mung Ban Da Chien Thang!!");
                            window.location.href = 'index.html';
                        }, 3000)
                    }
                }, 1000)
            } else {
                playMusicGame("incorrect");
                setTimeout(function(){
                    $(".card").children().removeClass('fliped');
                    current = null;
                    check = 0;
                }, 1000);

            }

            setTimeout(function(){
                $('.card').css('pointer-events', 'auto');
            }, 1000);

        }
        console.log(win);
    })
}
function startEasy(){
    hidemodal(".modal-start");
    showProgressbar();
    playMusic();
    creatCard(4);
    playGame(4);
}

function startNormal(){
    hidemodal(".modal-start");
    showProgressbar();
    playMusic();
    creatCard(9);
    playGame(9);
}

function startHard(){
    hidemodal(".modal-start");
    showProgressbar();
    playMusic();
    creatCard(14);
    playGame(14);
}




















