function getAkanName() {
    var gender = document.getElementById("gender").value;
    var date = document.getElementById("mydate").value;

    var CC = parseInt(date.substr(0, 2));
    var YY = parseInt(date.substr(2, 3));
    var MM = parseInt(date.substr(5, 7));
    var DD = parseInt(date.substr(8, 9));
    var d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
    alert(d)
}