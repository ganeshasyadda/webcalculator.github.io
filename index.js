function calculateArea() {
    // Get the input values
    let base = document.getElementById("base").value;
    let height = document.getElementById("height").value;

    // Calculate the area
    let area = 0.5 * base * height;

    // Display the result
    document.getElementById("result").innerHTML = "Area of Triangle: " + area + " cm2";
}
function perimeter() {
    // Get the input values
    let sideA = Number(document.getElementById("sideA").value);
    let sideB = Number(document.getElementById("sideB").value);
    let sideC = Number(document.getElementById("sideC").value);
    // Calculate the area
    let around = sideA + sideB + sideC;

    // Display the result
    document.getElementById("result2").innerHTML = "Perimeter of Triangle: " + around + " cm";
}
function calculateAreaParallelogram() {
    // Get the input values
    let base = Number(document.getElementById("base2").value);
    let height = Number(document.getElementById("height2").value);

    // Calculate the area
    let area = base * height;

    // Display the result
    document.getElementById("result3").innerHTML = "Area of Parallelogram: " + area + " cm2";
}
function calculatePeriParallelogram() {
    // Get the input values
    let base = Number(document.getElementById("base3").value);
    let angle = Number(document.getElementById("angle").value);

    // Calculate the area
    let area = 2 * (base + angle);

    // Display the result
    document.getElementById("result4").innerHTML = "Perimeter of Parallelogram: " + area + " cm";
}
function resetFields() {
    // Reset the input fields
    document.getElementById("base").value = "";
    document.getElementById("height").value = "";

    // Reset the result
    document.getElementById("result").innerHTML = "";
}
function resetFields2() {
    // Reset the input fields
    document.getElementById("sideA").value = "";
    document.getElementById("sideB").value = "";
    document.getElementById("sideC").value = "";

    // Reset the result
    document.getElementById("result2").innerHTML = "";
}
function resetFields3() {
    // Reset the input fields
    document.getElementById("base2").value = "";
    document.getElementById("height2").value = "";

    // Reset the result
    document.getElementById("result3").innerHTML = "";
}
function resetFields4() {
    // Reset the input fields
    document.getElementById("base3").value = "";
    document.getElementById("angle").value = "";

    // Reset the result
    document.getElementById("result4").innerHTML = "";
}