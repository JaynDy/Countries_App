import { countryData } from "./main.js";

export function renderCountries(countries) {
  const countriesElement = document.getElementById("countries");
  countriesElement.innerHTML = "";

  countries.forEach((data) => {
    const country = document.createElement("div");
    country.classList.add("country");
    country.innerHTML = `
   <div class="country-card">
    <img src="${data.flags.png}">
    <h2 class="countryName">${data.name.common}</h2>
    <h3>Population: <span>${data.population.toLocaleString("en-US")}</span></h3>
    <h3 class="regionName">Region: <span>${data.region}</span></h3>
    <h3>Capital: <span>${data.capital}</span></h3>
   </div>
   `;
    countriesElement.appendChild(country);
  });
}

const search = document.querySelector(".search");

export function filterCountriesBySearch(countries, searchTerm) {
  return countries.filter((country) => {
    const name = country.name.common.toLowerCase();
    return name.includes(searchTerm);
  });
}

search.addEventListener("input", () => {
  const searchTerm = search.value.toLowerCase();
  const filteredCountry = filterCountriesBySearch(countryData, searchTerm);
  renderCountries(filteredCountry);
});
