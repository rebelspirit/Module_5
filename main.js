
const keyboard = {
	layouts: {
		en: {
			topRow: ['q','w','e','r','t','y','u','i','o','p','[',']'],
			middleRow: ['a','s','d','f','g','h','j','k','l',';','\''],
			bottomRow: ['z','x','c','v','b','n','m',',','.','/']
		},
		ru: {
			topRow: ['й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\'],
			middleRow: ['ф','ы','в','а','п','р','о','л','д','ж','э'],
			bottomRow: ['я','ч','с','м','и','т','ь','б','ю','.']
		},
		ua: {
			topRow: ['й','ц','у','к','е','н','г','ш','щ','з','х','ї','\\'],
			middleRow: ['ф','і','в','а','п','р','о','л','д','ж','є'],
			bottomRow: ['я','ч','с','м','и','т','ь','б','ю','.']
		}
	},
	langs: ['en', 'ru', 'ua'],
	currentLang: ''
};

let selectedLang = (lang) => {
	let chooseLang = prompt('Выберите язык. 0 = EN, 1 = RU, 2 = UA');
	let a = parseInt(chooseLang, 10);

	if (chooseLang !== null){
		if (a >= 0 && a <= 2) {
			switch (a) {
  			case 0 : keyboard.currentLang = '0 это EN'; break;
  			case 1 : keyboard.currentLang = '1 это RU'; break;
  			case 2 : keyboard.currentLang = '2 это UA'; break;
  			default : ;
  		};
		} else {
			alert("Такого языка не существует");
			selectedLang();
		};
	} else {
		alert('Ok..')
	};
	return
};
selectedLang()

let getRandCharInAlph = () => {
	let arr = new Array();
	let letter;
	let i;
	let y;
	if (keyboard.currentLang === '0 это EN'){
		for (let key in keyboard.layouts.en){
			arr.push(keyboard.layouts.en[key]);
		};
		i = Math.floor(Math.random() * (2 - 0) + 0);
		y = Math.floor(Math.random() * (9 - 0) + 0);
		letter = arr[i][y];
		return console.log(letter);	

	}else if (keyboard.currentLang === '1 это RU'){
		for (let key in keyboard.layouts.ru){
			arr.push(keyboard.layouts.ru[key]);
		};
		i = Math.floor(Math.random() * (2 - 0) + 0);
		y = Math.floor(Math.random() * (9 - 0) + 0);
		letter = arr[i][y];
		return console.log(letter);

	}else {
		for (let key in keyboard.layouts.ua){
			arr.push(keyboard.layouts.ua[key]);
		};
		i = Math.floor(Math.random() * (2 - 0) + 0);
		y = Math.floor(Math.random() * (9 - 0) + 0);
		letter = arr[i][y];
		return console.log(letter);
	};
};
getRandCharInAlph()

