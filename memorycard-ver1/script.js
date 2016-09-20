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

var arrTemp = [];
for (var i = 0; i <= 14; i++) {
    arrTemp[i] = arrImg[i];
};

for (var i = 0; i <= 14; i++) {
    arrTemp.push(arrTemp[i]);
};

shuffleArray(arrTemp);

console.log(arrImg);
console.log(arrTemp);

for (var i = 0; i <= 29; i++) {
    $(".grid").append('<div class="card"><div class="front"><img src="img/' + arrTemp[i] + '.jpg"></div><div class="back"><img src="img/card.jpg"></div></div>');
};

$(".card").click(function (){
    $(this).children(".front").css('transform', 'rotateY(0deg)');
    $(this).children(".back").css('transform', 'rotateY(180deg)');
})