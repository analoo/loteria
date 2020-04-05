
// var tablas = [tabla1, tabla2, tabla3, tabla4, tabla5, tabla6, tabla7, tabla8, tabla9, tabla10];





var tabla1 = {
    displayName: "Tabla 1",
    images: [cards[0], cards[1]],
    won: false
};


function displayBoard(obj){
    for (let i=0 ; i < 16 ; i++){
        $("#card"+i).append("<p>" + obj.cards[i].number +"</p>");
        $("#card"+i).append($("<img>").attr("data-src", obj.images[i].location)
                                    .attr("width", 150)
                                    .attr("height", 400)
                                    .attr("uk-img", ""));
        $("#card"+i).append("<p>" + obj.cards[i].name +"</p>");

    }
    
}

displayBoard(tabla1)
