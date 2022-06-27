const btn = document.getElementById("btn");
const countriesConteiner = document.getElementById("countriesConteiner");
const searchInput = document.getElementById("searchInput");
btn.addEventListener("click", handleBtnClick);
let userCountry;
function getCountry(country) {
  let url = `https://restcountries.com/v2/name/${country}`;

  
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();
  
  request.addEventListener("load", function () {
    console.log(this.responseText);
    const [data] = JSON.parse(this.responseText); 
    console.log(data);

    const card = `
 <div class=" m-3 card  myCard countries" style="width: 14rem;">
  <img src= "${data.flag}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> ${data.nativeName}   / ${data.name}</h5>
    <p class="card-text"></p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">  Capital City: <span>${data.capital}</span> </li>
     <li class="list-group-item">Languages: <br>  ${data.languages[0].name}</li>
    <li class="list-group-item">Population: ${data.population}</li>
 

   
  </ul>
 
</div>`;

    countriesConteiner.innerHTML += card;
    countriesConteiner.style.opacity = 1;
  });
}

function handleBtnClick() {
  userCountry = searchInput.value;
  getCountry(userCountry);
}

function resetCards() {
  countriesConteiner.innerHTML = ``;
}
