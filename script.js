const carListings = document.getElementById("carListings");
const noResults = document.getElementById("noResults");

function displayCars(cars) {
  carListings.innerHTML = "";

  if (cars.length === 0) {
    noResults.style.display = "block";
    noResults.textContent =
      "No cars match your criteria. Please try adjusting the filters.";
    return;
  } else {
    noResults.style.display = "none";
  }

  cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.classList.add("car-card");
    carCard.innerHTML = `
      <h3>${car.year} ${car.make} ${car.model}</h3>
      <p><strong>Mileage:</strong> ${car.mileage} miles</p>
      <p><strong>Price:</strong> $${car.price}</p>
      <p><strong>Color:</strong> ${car.color}</p>
      <p><strong>Gas Mileage:</strong> ${car.gasMileage}</p>
    `;
    carListings.appendChild(carCard);
  });
}

function applyFilters() {
  const minYear = document.getElementById("minYear").value;
  const maxYear = document.getElementById("maxYear").value;
  const makes = Array.from(document.getElementById("make").selectedOptions).map(
    (opt) => opt.value
  );
  const maxMileage = document.getElementById("maxMileage").value;
  const minPrice = document.getElementById("minPrice").value;
  const maxPrice = document.getElementById("maxPrice").value;
  const colors = Array.from(
    document.getElementById("color").selectedOptions
  ).map((opt) => opt.value);

  const filteredCars = usedCars.filter((car) => {
    return (
      (!minYear || car.year >= parseInt(minYear)) &&
      (!maxYear || car.year <= parseInt(maxYear)) &&
      (!makes.length || makes.includes(car.make)) &&
      (!maxMileage || car.mileage <= parseInt(maxMileage)) &&
      (!minPrice || car.price >= parseInt(minPrice)) &&
      (!maxPrice || car.price <= parseInt(maxPrice)) &&
      (!colors.length || colors.includes(car.color))
    );
  });

  displayCars(filteredCars);
}

function clearFilters() {
  document.getElementById("minYear").value = "";
  document.getElementById("maxYear").value = "";
  document.getElementById("make").selectedIndex = -1;
  document.getElementById("maxMileage").value = "";
  document.getElementById("minPrice").value = "";
  document.getElementById("maxPrice").value = "";
  document.getElementById("color").selectedIndex = -1;

  displayCars(usedCars);
}

// Initial display of all cars
displayCars(usedCars);
