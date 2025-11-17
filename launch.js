fetch('https://api.spacexdata.com/v5/launches')
    .then((response) => response.json())
    .then((result) => {
        console.log(result)
        button.addEventListener("click", () => {
            statusInfo.textContent = "ACCOMPLISHMENT: " + result[1].details;
        })


    })

console.log(document.querySelector("button"));

const button = document.querySelector("button");

const statusInfo = document.querySelector("#status>h3")
