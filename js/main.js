import { renderCountries } from "./searchCountries.js";
import { renderRegions } from "./searchRegion.js";

export async function getCountry() {
  const url =
    "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export let countryData = [];

getCountry().then((data) => {
  countryData = data;
  console.log(data);

  renderCountries(countryData);
  renderRegions([...new Set(data.map((country) => country.region))]);
});
