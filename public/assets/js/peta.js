let lokasi = [-8.701660,115.169856];
let sponsor = "Restoran Spanyol";

let places= [
	{"lokasi": [-8.69999, 115.17517], "sponsor" : "Restoran Spanyol"},
	{"lokasi": [-8.7044, 115.19139], "sponsor" : "Warung Kopi"},
	{"lokasi": [-8.69346, 115.1744], "sponsor" : "Depot Ikan Bakar"},
	{"lokasi": [-8.71, 115.17251], "sponsor" : "Gudang STEAK"},
	{"lokasi": [-8.71051, 115.16813], "sponsor" : "Seafood!!"}
];

for(var p of places) {
	var marker = L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
}	