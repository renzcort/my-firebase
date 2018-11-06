var a = 100;
if (a > 0) {
	var a = 900;
	console.log(a);
}
console.log(a);

let b = 100;
if (b > 0) {
	let b = 900;
	console.log(b);
}
console.log(b);

let g = function () {
	console.log("Fungsi Annonymous");
}
g();

let salam = function(nama) {
	console.log(`hallo ${nama}, Selamat jumpa dengan kami`);
}
salam('rendi');

let myf = (a) => { return a * a }
myf();
myf(2);

var obj = function() {
	return {
		nama : 'Budi',
		alamat : 'Jalan Permata',
		kota : 'Jakarta'
	}
}
obj;
obj();
var peg = obj();
peg;
typeof peg;
peg.nama;
peg.kota;

var pegawai = (
	function() {
		return {
			nama : 'Rendi',
			alamat : 'Jalan Binrta',
			kota : 'Bekasi'
		}
	}
)();
pegawai;
pegawai.kota;

var pegawai = (
		function() {
			let honor = 5000;
			return {
				nama : 'Agung',
				alamat : 'Bojong',
				Kota : 'Depok'
				getHonor : function() { return honor },
				setHonor : function(new_honor) { honor = new_honor }
			}
		}
	) ();
pegawai.getHonor();
pegawai.setHonor(100000);
pegawai.getHonor();

var pegawai = (
		function() {
			let honor = 5000;
			function getHonor() {
				return honor;
			};
			function sethonor(new_honor) {
				honor = new_honor;
			};
			return {
				nama : 'Putra',
				alamat : 'Jalan ITC',
				kota : 'Jambi',
				getHonor : getHonor,
				setHonor : sethonor
			}
		}
	)();
pegawai.getHonor;
pegawai.getHonor();
pegawai.setHonor(200000)
pegawai.getHonor();