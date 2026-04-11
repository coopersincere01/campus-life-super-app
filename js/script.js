const tipBtn = document.getElementById("tip-btn");
const tipText = document.getElementById("tip-text");

if (tipBtn && tipText) {
  tipBtn.addEventListener("click", () => {
    tipText.textContent =
      "Student tip: check events and dining hours early in the day so you are not scrambling later.";
  });
}

const loadWeatherBtn = document.getElementById("load-weather-btn");
const weatherOutput = document.getElementById("weather-output");

if (loadWeatherBtn && weatherOutput) {
  loadWeatherBtn.addEventListener("click", async () => {
    weatherOutput.innerHTML = "<p>Loading weather...</p>";

    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=43.0500&longitude=-87.9500&current=temperature_2m,wind_speed_10m"
      );

      const data = await response.json();
      const current = data.current;
      const tempC = current.temperature_2m;
      const tempF = (tempC * 9) / 5 + 32;
      const windKmh = current.wind_speed_10m;
      const windMph = windKmh * 0.621371;

      weatherOutput.innerHTML = `
        <div class="weather-box">
          <h3 class="panel-heading">Current Milwaukee Weather</h3>
          <p class="mb-2"><strong>Temperature:</strong> ${tempF.toFixed(1)}°F</p>
          <p class="mb-2"><strong>Wind Speed:</strong> ${windMph.toFixed(1)} mph</p>
          <p class="mb-0">Live weather data loaded through the API.</p>
        </div>
      `;
    } catch (error) {
      weatherOutput.innerHTML = "<p>Weather could not be loaded right now.</p>";
      console.error("Weather API error:", error);
    }
  });
}

const allEventsBtn = document.getElementById("all-events-btn");
const clubsBtn = document.getElementById("clubs-btn");
const sportsBtn = document.getElementById("sports-btn");
const socialBtn = document.getElementById("social-btn");
const eventItems = document.querySelectorAll(".event-item");

function filterEvents(category) {
  eventItems.forEach((item) => {
    if (category === "all" || item.dataset.category === category) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

if (allEventsBtn) {
  allEventsBtn.addEventListener("click", () => filterEvents("all"));
}

if (clubsBtn) {
  clubsBtn.addEventListener("click", () => filterEvents("clubs"));
}

if (sportsBtn) {
  sportsBtn.addEventListener("click", () => filterEvents("sports"));
}

if (socialBtn) {
  socialBtn.addEventListener("click", () => filterEvents("social"));
}

const learnMoreBtn = document.getElementById("learn-more-btn");
const eventDetailOutput = document.getElementById("event-detail-output");

if (learnMoreBtn && eventDetailOutput) {
  learnMoreBtn.addEventListener("click", () => {
    eventDetailOutput.textContent =
      "Student Leadership Mixer: Thursday at 5:30 PM in Alumnae Hall. This event is meant to help students connect with campus organizations, get involved, and meet new people.";
  });
}

const eventDetailButtons = document.querySelectorAll(".event-detail-btn");

eventDetailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const eventName = button.dataset.event;

    if (eventDetailOutput) {
      if (eventName === "WiCyS Meet Up") {
        eventDetailOutput.textContent =
          "WiCyS Meet Up: A student networking event for people interested in cybersecurity, leadership, and building community in tech.";
      } else if (eventName === "Flag Football Interest Workout") {
        eventDetailOutput.textContent =
          "Flag Football Interest Workout: A beginner-friendly workout and interest session for students wanting to get involved before the season starts.";
      } else if (eventName === "Late Night Student Social") {
        eventDetailOutput.textContent =
          "Late Night Student Social: A campus social event with snacks, music, and activities designed to help students relax and connect.";
      }
    }
  });
});

const breakfastBtn = document.getElementById("breakfast-btn");
const lunchBtn = document.getElementById("lunch-btn");
const dinnerBtn = document.getElementById("dinner-btn");
const menuDisplay = document.getElementById("menu-display");

if (breakfastBtn && lunchBtn && dinnerBtn && menuDisplay) {
  breakfastBtn.addEventListener("click", () => {
    menuDisplay.textContent =
      "Breakfast preview: eggs, pancakes, fruit, yogurt, cereal, toast, and coffee.";
  });

  lunchBtn.addEventListener("click", () => {
    menuDisplay.textContent =
      "Lunch preview: pizza station, soup and salad bar, sandwiches, stir-fry, drinks, and dessert.";
  });

  dinnerBtn.addEventListener("click", () => {
    menuDisplay.textContent =
      "Dinner preview: hot meal line, vegetables, side dishes, dessert options, and drinks.";
  });
}

const hallSelect = document.getElementById("hall-select");
const hallDescription = document.getElementById("hall-description");

if (hallSelect && hallDescription) {
  hallSelect.addEventListener("change", () => {
    if (hallSelect.value === "alumnae") {
      hallDescription.textContent =
        "The Alumnae Dining Room is the main dining space with flexible meal options and variety.";
    } else if (hallSelect.value === "cyber") {
      hallDescription.textContent =
        "The Cyber Café is a quick campus option for sandwiches, salads, coffee, and baked treats.";
    } else if (hallSelect.value === "vending") {
      hallDescription.textContent =
        "Campus vending machines offer grab-and-go snacks, drinks, and lighter meal options.";
    }
  });
}