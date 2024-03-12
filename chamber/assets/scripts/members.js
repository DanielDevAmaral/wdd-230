const url = "https://danieldevamaral.github.io/wdd230/";
const linksURL = "https://danieldevamaral.github.io/wdd230/data/members.json";

const main = document.querySelector("main");

const displayCompanies = (companies) => {
  companies.forEach((company) => {
    const image = document.createElement("img");
    image.setAttribute("src", `${company.image}`); // Corrected attribute

    const name = document.createElement("h3");
    name.textContent = `${company.name}`;

    const address = document.createElement("p");
    address.textContent = `${company.address}`;

    const phoneNumber = document.createElement("p"); // Corrected spelling
    phoneNumber.textContent = `${company.phone_number}`;

    const website = document.createElement("p");
    website.textContent = `${company.website}`;

    const membershipLevel = document.createElement("h4"); // Corrected CamelCase
    membershipLevel.textContent = `${company.membership_level}`;

    const additionalInformation = document.createElement("p");
    additionalInformation.textContent = `${company.additional_information}`;

    const companyDiv = document.createElement("div");
    companyDiv.setAttribute("class", "companies");

    companyDiv.appendChild(image);
    companyDiv.appendChild(name);
    companyDiv.appendChild(address);
    companyDiv.appendChild(phoneNumber);
    companyDiv.appendChild(website);
    companyDiv.appendChild(membershipLevel);
    companyDiv.appendChild(additionalInformation);

    main.appendChild(companyDiv);
  });
};

async function getData() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayCompanies(data.empresas);
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle the error here, like displaying an error message to the user
  }
}

getData();
