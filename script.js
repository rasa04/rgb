function si(color, change) {
    function inc(color) {
        document.getElementById(color).stepUp()
        de()
    }
    function dec(color) {
        document.getElementById(color).stepDown()
        de()
    }
    switch (change) {
        case 'inc':
            mi = setInterval(inc, 70, color)
            break;
        case 'dec':
            mi = setInterval(dec, 70, color)
            break;
        default:
            break;
    }
}
function csi() {
    clearInterval(mi)
}


function de(){
    let a = document.getElementById('red').value
    let b = document.getElementById('green').value
    let c = document.getElementById('blue').value
    if (a > 255) {
        document.getElementById("red").value = 255
    }
    if (b > 255){
        document.getElementById("green").value = 255
    }
    if (c > 255){
        document.getElementById("blue").value = 255
    }
    document.getElementById("color").style.backgroundColor = ('rgb(' + [a,b,c].join(',') + ')');
}