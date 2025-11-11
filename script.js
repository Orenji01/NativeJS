fetch('https://api.spacexdata.com/v5/launches')
    .then((response) => response.json())
    .then((result) => {
        console.log(result)
    })

/* för eventet gör så att man kan trycka på en knapp som gör att den visar om
launches va succesful eller inte */
