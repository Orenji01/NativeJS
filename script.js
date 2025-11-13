fetch('https://api.spacexdata.com/v5/launches')
    .then((response) => response.json())
    .then((result) => {
        console.log(result)
        for (i = 1; i < 11; i++) {
            launchInfoContainers[i].childNodes[0].textContent = result[i].name
            launchInfoContainers[i].childNodes[1].textContent = result[i].id
            launchInfoContainers[i].childNodes[2].textContent = result[i].flight_number
            launchInfoContainers[i].childNodes[3].textContent = result[i].date_local
        }
    })

const launchSection = document.querySelector("#launch-section")

for (i = 0; i < 10; i++) {
    let launchInfoContainer = document.createElement("div")
    for (j = 0; j < 4; j++) {
        let launchInfo = document.createElement("p")
        launchInfoContainer.appendChild(launchInfo)
    }
    launchSection.appendChild(launchInfoContainer)
}

const launchInfoContainers = document.querySelectorAll("#launch-section > div")

console.log(launchInfoContainers[1].childNodes[0]);




/* for (i = 0; i < 10; i++) {
    launchInfoContainers[i].childNodes[0].textContent =
        launchInfoContainers[i].childNodes[1]
    launchInfoContainers[i].childNodes[2]
    launchInfoContainers[i].childNodes[3]
}
 */
console.log(document.querySelectorAll("#launch-section > div"));
console.log(document.querySelectorAll("div > p"));



// for (i = 0; i < )

/* Skapa en loop där man lägger in info från varje array */

/* för eventet gör så att man kan trycka på en knapp som gör att den visar om
launches va succesful eller inte */

//gör en loop där du target specifika childelements beroende på info