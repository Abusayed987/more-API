const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}
const displayCountry = countries => {
    const countriesContainer = document.getElementById('countries_container')
    countries.forEach(country  => {
        console.log(country.capital);
        const countriesDiv = document.createElement('div')
        countriesDiv.classList.add('countries')
        countriesDiv.innerHTML= `
        <h3>Name : ${country.name.common}</h3>
        <p> Capital : ${country.capital} </p>
        `
        countriesContainer.appendChild(countriesDiv);

    });
}




loadCountry()