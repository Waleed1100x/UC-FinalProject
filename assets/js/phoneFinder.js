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








// buildTable function start  
function buildTable(search){

    let s = `${search}`;
let table = document.getElementById("table-group-divider");

    for(var i = 0; i< phone.length ; i++){
        if(phone[i].name.toLocaleLowerCase().trim()== s.toLocaleLowerCase().trim() ){
        ComparePhones.push(phone[i]);
        let j = 0;
        if(ComparePhones.length == 2){
    
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
            fetchPhoneNews(ComparePhones[j].name);
            ComparePhones = [];
            table.innerHTML = "";
            table.innerHTML += row;
        }

        
        }}
    }
    // end of buildTable 


    // start of news 
    //APIS
const API_KEY = "ccd468e609094c18b054a6205515443b";
const newstype = document.getElementById("newstype");
const newsdetails = document.getElementById("newdetails");

const fetchPhoneNews = async (phone) => {
    var url = `https://newsapi.org/v2/everything?q=${phone}&apiKey=`;
    const response = await fetch(url+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
   
    displayNews();
}
function displayNews(){
   
    newsdetails.innerHTML = "";

    // if(newsDataArr.length == 0) {
    //     newsdetails.innerHTML = "<h5>No data found.</h5>"
    //     return;
    // }

    newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");
        
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });
}
