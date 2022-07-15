// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;
const printphone = document.getElementById('Phonee');
let ComparePhones = [];
// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            buildTable(userData.toLocaleLowerCase());
        }
        emptyArray = phone.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
        
            return data.name.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
           
            return  `<li>${data.name}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray); 
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
       buildTable(selectData);
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
// Function buildTable
function buildTable(search){

    let s = `${search}`;
let table = document.getElementById("table-group-divider");

    for(var i = 0; i< phone.length ; i++){
        if(phone[i].name.toLocaleLowerCase()== s.toLocaleLowerCase()){
        ComparePhones.push(phone[i]);
        let j = 0;
        if(ComparePhones.length == 2){
        var row = `
            <tr>
            <th scope="col"></th>
            <th scope="col"><img src="./assets/img/${ComparePhones[j].name}.jpg" alt=""></th>
            <th scope="col"><img src="./assets/img/${ComparePhones[j+1].name}.jpg" alt=""></th>
            </tr>
            <tr>
            <th scope="col">Brand</th>
            <th scope="col">${ComparePhones[j].brand}</th>
            <th scope="col">${ComparePhones[j+1].brand}</th>
            </tr>
        <tr> 
        <th scope="col">Name</th>
        <td>${ComparePhones[j].name}</td>
        <td>${ComparePhones[j+1].name}</td>
        </tr>
        <tr> 
        <th scope="col">Released</th>
        <td>${ComparePhones[j].Released}</td>
        <td>${ComparePhones[j+1].Released}</td>
        </tr>
        <th scope="col">Connectivity</th>
        <td>${ComparePhones[j].Connectivity}</td>
        <td>${ComparePhones[j+1].Connectivity}</td>
        </tr>
        <tr> 
        <th scope="col">Size</th>
        <td>${ComparePhones[j].Size}</td>
        <td>${ComparePhones[j+1].Size}</td>
        </tr>
        <tr> 
        <th scope="col">Memory</th>
        <td>${ComparePhones[j].Memory}</td>
        <td>${ComparePhones[j+1].Memory}</td>
        </tr>
        <th scope="col">Resolution</th>
        <td>${ComparePhones[j].Resolution}</td>
        <td>${ComparePhones[j+1].Resolution}</td>
        </tr>
        <tr> 
        <th scope="col">Battery</th>
        <td>${ComparePhones[j].Battery} mAh</td>
        <td>${ComparePhones[j+1].Battery} mAh</td>
        </tr>
        `
        ComparePhones = [];
        table.innerHTML = ""; 
        table.innerHTML += row
        } else {
            var row = `
            <tr>
            <th scope="col"></th>
            <th scope="col"><img src="./assets/img/${ComparePhones[j].name}.jpg" alt=""></th>
           </tr>
            <tr>
            <th scope="col">Brand</th>
            <th scope="col">${ComparePhones[j].brand}</th>
            </tr>
            <tr> 
            <th scope="col">Name</th>
            <td>${ComparePhones[j].name}</td>
            </tr>
            <tr> 
            <th scope="col">Released</th>
            <td>${ComparePhones[j].Released}</td>
            </tr>
            <th scope="col">Connectivity</th>
            <td>${ComparePhones[j].Connectivity}</td>
            </tr>
            <tr> 
            <th scope="col">Size</th>
            <td>${ComparePhones[j].Size}</td>
            </tr>
            <tr> 
            <th scope="col">Memory</th>
            <td>${ComparePhones[j].Memory}</td>
            </tr>
            <tr> 
            <th scope="col">Resolution</th>
            <td>${ComparePhones[j].Resolution}</td>
            </tr>
            <tr> 
            <th scope="col">Battery</th>
            <td>${ComparePhones[j].Battery} mAh</td>

            </tr>
            `
            table.innerHTML = "";
            table.innerHTML += row
            }
        
        }}
}
// end of function buildTable
