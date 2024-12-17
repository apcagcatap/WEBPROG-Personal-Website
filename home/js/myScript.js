function myFunction() {
    document.getElementById("demo").innerHTML="BANG MAGIC BOOM MAGIC !!!!";
}

function myFunction2() {
    const element = document.getElementsByTagName("p");

    document.getElementById("demo").innerHTML = 'The text in first paragraph (index 0) is: ' + element[0].innerHTML;
}