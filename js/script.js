function perimeter() {
    var perimeter = Number(document.getElementById("side of farm").value) * 4
    document.getElementById("perimeter of farm").value = perimeter
}

function area() {
    var area = Number(document.getElementById("side of farm").value) *
        Number(document.getElementById("side of farm").value)
    document.getElementById("area of farm").value = area
}

function calculate() {
    document.getElementById("area of farm").value = area
    document.getElementById("perimeter of farm").value = perimeter
}