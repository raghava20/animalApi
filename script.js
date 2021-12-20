let process = document.querySelector(".cat-list");

async function animalApi() {
    let data;
    for (let i = 1; i <= 10; i++) {
        data = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
        let response = await data.json();
        displayResult(response);
    }

}
animalApi();

async function displayResult(response) {
    process.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src="${await response.image_link}" class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title">${await response.name}</h4>
        <h6 class="card-text">${await response.animal_type}</h6>
        <p class="card-text">Habitat: ${await response.habitat}</p>
        <p class="card-text">Diet: ${await response.diet}</p>
        </div>
    </div>`
}
let reload = () => {
    process.innerHTML = ""
    animalApi();
}
