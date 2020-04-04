
// var tablas = [tabla1, tabla2, tabla3, tabla4, tabla5, tabla6, tabla7, tabla8, tabla9, tabla10];





var tabla1 = {
    displayName: "Tabla 1",
    images: [roosterCard, socialMediaCard],
    won: false
}


function displayBoard(obj){
    $("#1-1").attr("data-src", roosterCard.location);
    $("#1-1").text(roosterCard.name);

}

displayBoard(tabla1)