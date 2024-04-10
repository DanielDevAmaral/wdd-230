var closeBt = document.querySelector("#closeButton")

function isBannerDay() {
    var today = new Date();
    var day = today.getDay();
    return day >= 1 && day <= 3; 
  }
  
  function toggleBanner() {
    var banner = document.getElementById('banner');
    if (isBannerDay()) {
      banner.style.display = 'flex';
    } else {
      banner.style.display = 'none';
    }
  }

  function closeBanner() {
    var banner = document.getElementById('banner');
    banner.style.display = 'none';
  }

  
  window.onload = toggleBanner;
  closeBt.addEventListener("click", closeBanner)

  