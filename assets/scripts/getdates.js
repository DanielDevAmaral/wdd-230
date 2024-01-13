
lastmod = `Last modified: ${document.lastModified}`
footerDetails = `&copy${new Date().getFullYear()} | Daniel Amaral | Brazil`
document.querySelector("#currentYear").innerHTML += footerDetails;
document.querySelector("#lastModified").innerHTML = lastmod;

