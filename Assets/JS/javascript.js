function AfficheRésultat(){
var shoeSize = document.getElementById("shoeSize").value;
var yearOfBirth = document.getElementById("yearOfBirth").value;
var result = (((( shoeSize * 2 + 5 )) * 50 ) - yearOfBirth ) + 1766;
if(isNaN (shoeSize) || isNaN(yearOfBirth)){
alert("Vous devez entrer un nombre");
}else{
alert(result);;
}
}
