let gold, silver, agri, real, vehicle, business, total, zakat, zakatDisplay, zakatAmount;
document.getElementById("submit-btn").onclick = function () {
  gold = document.getElementById("gold-input").value;
  silver = document.getElementById("silver-input").value;
  real = document.getElementById("real-input").value;
  business = document.getElementById("business-input").value;
  vehicle = document.getElementById("vehicle-input").value;
  agri = document.getElementById("agri-input").value;

  gold = Number(gold);
  silver = Number(silver);
  agri = Number(agri);
  real = Number(real);
  vehicle = Number(vehicle);
  business = Number(business);


  total = Number(total);
   
  total = gold + silver + vehicle + real + business;
  
  zakat = 2.5;
  zakatAmount = total * zakat / 100;
  alert(`The total amount of zakat you have to pay is Rs.${zakatAmount}`);


  
}