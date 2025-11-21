/* fetch('https://avancera.app/cities/')
    .then(response => response.json())
    .then(result => {
        console.log(result)
        document.querySelector("#view").addEventListener("click", () => {
            for (i = 0; i < result.length; i++) {
                console.log(city.value);
                console.log(result[i].id);
                if (city.value === result[i].id) {
                    viewCity.textContent = result[i].name
                }
            }
        })
    }) */

const city = document.querySelector("#name")
const viewCity = document.querySelector("p")

document.querySelector("#view").addEventListener("click", () => {
    for (i = 0; i < result.length; i++) {
        console.log(city.value);
        console.log(result[i].id);
        if (city.value === result[i].id) {
            viewCity.textContent = result[i].name
        }
    }
})

document.querySelector("#add").addEventListener("click", () => {

})

document.querySelector("#edit").addEventListener("click", () => {

})

document.querySelector("#delete").addEventListener("click", () => {

})