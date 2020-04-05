// Boards.js

let randomCardIndexSets = [
    // https://www.random.org/integer-sets/?sets=10&num=16&min=0&max=53&seqnos=on&commas=on&order=index&format=html&rnd=new
    [51, 23, 36, 13, 11, 50, 15, 6, 53, 4, 37, 3, 25, 39, 12, 14],
    [42, 39, 17, 11, 34, 33, 9, 47, 49, 28, 12, 21, 50, 52, 4, 13],
    [7, 43, 14, 44, 47, 29, 12, 16, 17, 41, 0, 26, 8, 36, 3, 1],
    [49, 5, 44, 21, 3, 26, 32, 6, 31, 14, 17, 34, 2, 28, 30, 46],
    [34, 40, 14, 39, 28, 38, 6, 18, 44, 16, 29, 25, 3, 15, 36, 9],
    [31, 47, 26, 29, 53, 36, 7, 16, 12, 15, 52, 4, 3, 37, 2, 35],
    [44, 12, 2, 20, 7, 30, 1, 35, 8, 47, 27, 16, 0, 36, 21, 33],
    [43, 4, 10, 12, 18, 39, 8, 34, 52, 50, 37, 5, 28, 22, 35, 24],
    [27, 32, 31, 34, 6, 33, 0, 26, 28, 49, 51, 8, 29, 19, 12, 17],
    [14, 47, 20, 23, 3, 43, 6, 11, 0, 28, 15, 42, 34, 12, 27, 10],
];

var tablas = [];
for (let i = 0; i < randomCardIndexSets.length; i++) {
    var cardIndexSet = randomCardIndexSets[i];
    tablas.push({
        displayName: "Tabla " + (i+1),
        cards: cardIndexSet.map(x => cards[x])
    });
}


function displayBoard(obj){
    for (let i=0 ; i < 16 ; i++){
        $("#card"+i).append("<p>" + obj.cards[i].number +"</p>");
        $("#card"+i).append($("<img>").attr("data-src", obj.cards[i].location)
                                    .attr("width", 150)
                                    .attr("uk-img", ""));
        $("#card"+i).append("<p>" + obj.cards[i].name +"</p>");

    }
    
}

displayBoard(tablas[0]);
