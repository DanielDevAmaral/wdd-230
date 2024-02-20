const p = document.querySelector(".windchill");

        document.getElementById("calculate").addEventListener("click", function() {
            const temperature = parseFloat(document.querySelector(".temp").value);
            const windspeed = parseFloat(document.querySelector(".wind").value);

            if (temperature > 50.0 && windspeed > 3.0){
                p.textContent = "N/A";
            } else {
                const windchill = 35.74 + 0.6215*temperature - 35.75*windspeed**0.16 + 0.4275*temperature*windspeed**0.16;
                p.textContent = windchill.toFixed(2);
            }
        });