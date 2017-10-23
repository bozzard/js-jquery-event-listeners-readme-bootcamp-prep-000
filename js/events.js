//define functions here

$('p').on('click', function getIt() {
    alert("Hey!");
});

function frameIt(){
$('img').on('load', function() {
    $('img').addClass("tasty");
});
}
$(document).ready(function(){

// call functions here
getIt();
frameIt();
});
