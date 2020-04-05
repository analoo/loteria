
// var tablas = [tabla1, tabla2, tabla3, tabla4, tabla5, tabla6, tabla7, tabla8, tabla9, tabla10];





var tabla1 = {
    displayName: "Tabla 1",
    images: [cards[0], cards[1]],
    won: false
}


function displayBoard(obj){
    $("#card0").attr("data-src", cards[0].location);
    $("#card0").text(cards[0].name);

}

displayBoard(tabla1)
