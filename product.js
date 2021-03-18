window.onload = function () {
    const prod = ["2-channel-relay-module", "bluetooth-module", "breadboard-capacitor-resistor-led-switch", "conductive-thread", "esc", "finger-print-scanner",
        "gprs-module", "gryo", "ldr", "lidar", "multimeter", "oscilloscope", "pulse-sensor-amped", "solar-charge-controller", "soldering-kit", "wifi-module"];

    // search here for product - section
    let part = document.getElementById('parts');
    let search = document.getElementById('searchTxt');
    search.addEventListener('input', function (e) {
        let inputVal = search.value;
        let html;
        part.innerHTML = "";
        prod.forEach(function (element) {
            if (element.includes(inputVal)) {
                html += `<div class="card">
             <img src="assets/product-images/${element}.png" alt="" />
             <p>${element}</p>
           </div>`

            }
            part.innerHTML = html;
        })
        if (search.value == null) {
            part.innerHTML = `<div class="card">  
        <img src="assets/product-images/solar-charge-controller.png" alt="" />
        <p>Solar Charge Controller</p>
      </div>
      <div class="card">
        <img src="assets/product-images/lidar.png" alt="" />
        <p>LIDAR</p>
      </div>
      <div class="card">
        <img src="assets/product-images/gryo.png" alt="" />
        <p>Gryo</p>
      </div>
      <div class="card">
        <img src="assets/product-images/gryo.png" alt="" />
        <p>Gryo</p>
      </div>

      <div class="card">
        <img src="assets/product-images/lidar.png" alt="" />
        <p>LIDAR</p>
      </div>   `;
        }
    });

}
