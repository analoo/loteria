
// var tablas = [tabla1, tabla2, tabla3, tabla4, tabla5, tabla6, tabla7, tabla8, tabla9, tabla10];





var tabla1 = {
    displayName: "Tabla 1",
    images: [cards[0], cards[1]],
    won: false
};


function displayBoard(obj){
    $("#card0").append($("<img>").attr("data-src", cards[0].location)
                                 .attr("width", 150)
                                 .attr("height", 400)
                                 .attr("uk-img", ""));
    $("#card0").append("<p>" + cards[0].name +"</p>");
}

displayBoard(tabla1)
