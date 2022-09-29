document.querySelector("#payment-btn").addEventListener("click", done);

function done(){
    if(document.querySelector("#name").value == ""){
        alert("Please Fill the First Name")
    }else if(document.querySelector("#surname").value == ""){
        alert("Please Fill the Last Name")
    }else if(document.querySelector("#country").value == ""){
        alert("Please Fill the Country Name")
    }else if(document.querySelector("#street").value == ""){
        alert("Please Fill the Street Name")
    }else if(document.querySelector("#city").value == ""){
        alert("Please Fill the City Name")
    }else if(document.querySelector("#state").value == ""){
        alert("Please Fill the State Name")
    }else if(document.querySelector("#pin").value == ""){
        alert("Please Fill the Pin Code")
    }else if(document.querySelector("#mobile").value == ""){
        alert("Please Fill the Mobile Number")
    }else if(document.querySelector("#email1").value == ""){
        alert("Please Fill the Email Id")
    }else{
        location.href="paymentsuccess.html"
    }
};

let dataArr = [];
dataArr.push(JSON.parse(localStorage.getItem("product-list")));

let list = localStorage.getItem("quantity")

function displaydata(dataArr){
    dataArr.forEach(function(ele,i){
        let row = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.innerText=ele.Name + " " + "(" + "x" + " " + list +")";

        let td2 = document.createElement("td")
        td2.innerText=ele.Price;

        row.append(td1, td2)
        document.querySelector("tbody").append(row)

        document.querySelector("#subprice").innerText="₹" + (ele.totprice * list);

        document.querySelector("#totalprice").innerText="₹" + (ele.totprice * list)
    })
}

displaydata(dataArr);

