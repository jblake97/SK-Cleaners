function sumTotal(){
    let x = document.getElementById("test1").value;
    let y = document.getElementById("test2").value;
    let z = +x + +y;

    document.getElementById("total").innerHTML = z;
    console.log('X is: ' + x + ' Y is: ' + y + ' Z is: ' + z);
}