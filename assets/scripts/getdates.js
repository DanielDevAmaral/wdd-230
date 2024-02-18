
lastmod = `Last modified: ${document.lastModified}`
flag = `<img src="assets\\images\\flag.webp" alt="Brazil Flag">`
footerDetails = `&copy${new Date().getFullYear()} | Daniel Amaral | Brazil <img class="flag" src="assets\\images\\flag.png" alt="Brazil Flag">`
document.querySelector("#currentYear").innerHTML += footerDetails;
document.querySelector("#lastModified").innerHTML = lastmod;

