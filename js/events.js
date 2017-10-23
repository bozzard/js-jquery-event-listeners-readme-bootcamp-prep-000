//define functions here

$('p').on('click', function getIt() {
    alert("Hey!");
});
$('img').on('load', function frameIt() {
    $('img').addClass(".tasty");
});
$(document).ready(function(){

// call functions here
getIt();
});
