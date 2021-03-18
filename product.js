window.onload = function () {
  const prod = [
    "2-channel-relay-module",
    "bluetooth-module",
    "breadboard-capacitor-resistor-led-switch",
    "conductive-thread",
    "esc",
    "finger-print-scanner",
    "gprs-module",
    "gryo",
    "ldr",
    "lidar",
    "multimeter",
    "oscilloscope",
    "pulse-sensor-amped",
    "solar-charge-controller",
    "soldering-kit",
    "wifi-module",
  ];

  // Generate product name string function
  const getNameString = function (name) {
    return name
      .split("-")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

  //Display all products
  let part = document.getElementById("parts");

  const displayAllProducts = (prod) => {
    let allProdHtml = "";

    prod.forEach(function (element) {
      allProdHtml += `<div class="card">
             <img src="assets/product-images/${element}.png" alt="" />
             <p>${getNameString(element)}</p>
           </div>`;
    });

    return allProdHtml;
  };

  part.innerHTML = displayAllProducts(prod);

  // search here for product - section
  let search = document.getElementById("searchTxt");
  search.addEventListener("input", function (e) {
    let inputVal = search.value.toLowerCase();
    let html = "";
    part.innerHTML = "";
    prod.forEach(function (element) {
      if (element.includes(inputVal)) {
        console.log(element);
        html += `<div class="card">
             <img src="assets/product-images/${element}.png" alt="" />
             <p>${getNameString(element)}</p>
           </div>`;
      }
      part.innerHTML = html;
    });
    if (search.value == "") {
      part.innerHTML = `${allProdHtml(prod)}`;
    }
  });
};
