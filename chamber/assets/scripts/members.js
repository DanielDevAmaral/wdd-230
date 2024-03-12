const url = "https://danieldevamaral.github.io/wdd230/data/members.json";

async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.empresas);
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle the error here, like displaying an error message to the user
  }
}

function displayCompanies(companies) {
  companies.forEach((company) => {
    const companyDiv = document.createElement("div");
    companyDiv.setAttribute("class", "company"); // Add a class for styling

    const image = document.createElement("img");
    image.setAttribute("src", `${company.image}`);

    const name = document.createElement("h3");
    name.textContent = `${company.name}`;

    const address = document.createElement("p");
    address.textContent = `${company.address}`;

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = `${company.phone_number}`;

    const website = document.createElement("p");
    website.textContent = `${company.website}`;

    const membershipLevel = document.createElement("h4");
    membershipLevel.textContent = `${company.membership_level}`;

    const additionalInformation = document.createElement("p");
    additionalInformation.textContent = `${company.additional_information}`;

    companyDiv.appendChild(image);
    companyDiv.appendChild(name);
    companyDiv.appendChild(address);
    companyDiv.appendChild(phoneNumber);
    companyDiv.appendChild(website);
    companyDiv.appendChild(membershipLevel);
    companyDiv.appendChild(additionalInformation);

    document.querySelector("main").appendChild(companyDiv);
  });
}

getData();
