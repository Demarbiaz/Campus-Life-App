
const btn = document.getElementById("welcomeBtn");
if (btn) {
  btn.addEventListener("click", () => {
    document.getElementById("message").innerText =
      "Welcome to your Campus Life App MVP!";
  });
}


const loadEvents = document.getElementById("loadEvents");
if (loadEvents) {
  loadEvents.addEventListener("click", () => {
    const events = [
      "Basketball Game - Friday",
      "Career Fair - Tuesday",
      "Campus Concert - Saturday"
    ];

    const list = document.getElementById("eventList");
    list.innerHTML = "";

    events.forEach(e => {
      const li = document.createElement("li");
      li.textContent = e;
      list.appendChild(li);
    });
  });
}


const loadFood = document.getElementById("loadFood");
if (loadFood) {
  loadFood.addEventListener("click", () => {
    const foodPlaces = [
      "Campus Grill",
      "Pizza Station",
      "Healthy Bites Café"
    ];

    const container = document.getElementById("foodList");
    container.innerHTML = "";

    foodPlaces.forEach(place => {
      const div = document.createElement("div");
      div.textContent = place;
      container.appendChild(div);
    });
  });
}
