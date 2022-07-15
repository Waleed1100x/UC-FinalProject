let brandMenu = document.getElementById("brandMenu");
let Connectivity = document.getElementById("Connectivity");

//brand menu display
let brandArray = [];
phone.forEach((data) => {
    if(!brandArray.includes(data.brand)){
        brandArray.push(data.brand);
    }
});
for(var i = 0;i<brandArray.length;i++){
    brandMenu.innerHTML += 
   ` <option value="${brandArray[i]}">${brandArray[i]}</option>`
;
}
// end of brand menu

// Connectivity menu display
let connectivityArray = [];
phone.forEach((data) => {
    if(!connectivityArray.includes(data.Connectivity)){
        connectivityArray.push(data.Connectivity);
    }
});
for(var i = 0;i<connectivityArray.length;i++){
    Connectivity.innerHTML += 
   ` <option value="${connectivityArray[i]}">${connectivityArray[i]}</option>`
;
}
//end of Connectivity menu

function getSelectedValue(id){
    let selectedValue = document.getElementById(`${id}`).value;
    console.log(selectedValue);

}
