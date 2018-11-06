function kalkulator() {
	let angka = document.querySelectorAll('input');
	let i1 = parseInt(angka[0].value) ;
	let i2 = parseInt(angka[1].value) ;
	angka[2].value = parseInt(i1) + parseInt(i2);
}

let tombol	= document.querySelector('button');
tombol.addEventListener('click', kalkulator);