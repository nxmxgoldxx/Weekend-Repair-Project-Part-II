const button = document.querySelector("button");
const repairList = document.querySelector(".need-repair")


const createVehicle = function (type, numWheels, color) {
  const vehicle = [];
  vehicle.type = type;
  vehicle.numbers = numWheels;
  vehicle.color = color;

  return vehicle;
};

const car = createVehicle("car", 4, "blue");
const bike = createVehicle("bike", 2, "red");
const skateboard = createVehicle("skateboard", 4, "black");

const myvehicles = [car, bike, skateboard];

for (let vehicle of myvehicles) {
  for (let key in vehicle) {
    console.log(key, vehicle[key]);
    
    bike.needsRepair =  true;
    skateboard.needsRepair =  true;

    button.addEventListener("click", function(){
      repairList.innerHTML = "";  // Clear the list before populating it again

      // Grab our repair list })
      const vehicleRepairList = myVehicles.filter(function (vehicle) {
        return vehicle.needsRepair === true; 
      });

      for (let vehicle of vehicleRepairList) {
        let li = document.createElement("li");
        li.innerHTML = `My <span>${vehicle.type}</span> needs some 💛`;
        repairList.append(li);
      }
  });