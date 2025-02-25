import { countryData } from "./main.js";
import { renderCountries } from "./searchCountries.js";

const regionsElement = document.querySelector(".drop-down-con");

export function renderRegions(regions) {
  regionsElement.innerHTML = "";

  const dropDown = document.createElement("div");
  dropDown.classList.add("drop-down");
  dropDown.innerHTML = `
      <p>Region</p> 
      <div class="img-chevron"></div>
      <div class="drop showDropDown">
        <p class="region">All</p>
        ${regions.map((region) => `<p class="region">${region}</p>`).join("")}
      </div>
`;
  regionsElement.appendChild(dropDown);

  const dropElem = document.querySelector(".drop");
  const imgChevron = document.querySelector(".img-chevron");

  dropDown.addEventListener("click", () => {
    console.log(dropElem);
    dropElem.classList.toggle("showDropDown");
    imgChevron.classList.toggle("rotate");
  });

  const region = document.querySelectorAll(".region");
  if (region.length > 0) {
    region.forEach((element) => {
      element.classList.remove("last-region");
    });
    region[region.length - 1].classList.add("last-region");
  }
}

function filterRegion(searchTerm) {
  const filteredCountries = countryData.filter((country) => {
    return (
      country.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      searchTerm === "all"
    );
  });
  renderCountries(filteredCountries);
}

regionsElement.addEventListener("click", (event) => {
  if (event.target.classList.contains("region")) {
    console.log(event.target);
    const selectedRegion = event.target.textContent;

    if (selectedRegion === "All") {
      renderCountries(countryData);
    } else {
      filterRegion(selectedRegion);
    }
  }
});
