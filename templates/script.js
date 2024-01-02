function buttonClick(z) {
    //get all buttons in this row of table - if first button positive
    console.log(z)
    quanId = getRowId();
    x = document.getElementById(quanId).innerHTML;
    if(z == 0){
        x = (+x + 1)
    }
    else{
        x = (+x - 1)
    }
    //x = (+x + 1) * document.getElementById("button+").value;
    document.getElementById(quanId).innerHTML = x;
    updateTotal();
}

function updateTotal() {
    //need to query for all 'cost' columns in each row and 'quantity' values in each row
    //should be in loop, locate each one, multiply, add together to a total, then update total value in p element

    numRows = document.querySelectorAll('.quan-data').length;
    let total = 0;

    for (let i = 1; i <= numRows; i++){
        let data = document.getElementById(i).querySelectorAll("td.row-data");
        //console.log(price[1].innerHTML);

        let quant = data[2].querySelectorAll("p.quan-data");
        //console.log(quant[0].innerHTML);             

        let temp = data[1].innerHTML * quant[0].innerHTML;
        total = +total + +temp;
    }
    document.getElementById("total").innerHTML = total;
}

function getRowId() {
    var rowId = event.target.parentNode.parentNode.id;
    //console.log(rowId);

    //this gives id of tr whose button was clicked

    let quanId = "v" + rowId;

    //console.log(quanId);
    //console.log(document.getElementById(rowId));

    //var data = document.getElementById(rowId).querySelectorAll("td.row-data");
    /*returns array of all elements with
    "row-data" class within the row with given id*/

            //console.log(data);

    //var name = data[0].innerHTML;
    //var age = data[1].innerHTML;
    //console.log("Name: " + name + "\nAge: " + age);

    return quanId;
}

function sendMail() {
    (function () {
        emailjs.init("-WHLAgw3FXcxzvs9R"); // account public key
    }) ();

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value 
    }

    var serviceID = "service_jn9bj55"; //serviceID
    var templateID = "template_qk4e16p"; //templateID

    emailjs.send(serviceID, templateID, params)
    .then( res => {
        alert("Email sent successfully!")
    })
    .catch();
}