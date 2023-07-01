﻿const nastavnikOptions = [
    { value: "1", text: "1 Stojan Babić" },
    { value: "2", text: "2 Jurij Bajec" },
    { value: "3", text: "3 Marko Backović" },
    { value: "5", text: "5 Vladan Božić" },
    { value: "6", text: "6 Branislav Boričić" },
    { value: "7", text: "7 Sreten Vujović" },
    { value: "13", text: "13 Đorđe Đukić" },
    { value: "14", text: "14 Dragan Đuričin" },
    { value: "15", text: "15 Boško Živković" },
    { value: "16", text: "16 Siniša Zarić" },
    { value: "17", text: "17 Milorad Ivanišević" },
    { value: "18", text: "18 Miomir Jakšić" },
    { value: "19", text: "19 Nebojša Janićijević" },
    { value: "20", text: "20 Biljana Jovanović Gavrilović" },
    { value: "22", text: "22 Ljubinka Joksimović" },
    { value: "24", text: "24 Radovan Kovačević" },
    { value: "25", text: "25 Jelena Kozomara" },
    { value: "26", text: "26 Jelena Kočović" },
    { value: "27", text: "27 Stipe Lovreta" },
    { value: "29", text: "29 Radojko Lukić" },
    { value: "30", text: "30 Branko Maričić" },
    { value: "31", text: "31 Branko Medojević" },
    { value: "32", text: "32 Milić Milovanović" },
    { value: "33", text: "33 Zorica Mladenović" },
    { value: "34", text: "34 Dubravka Pavličić" },
    { value: "35", text: "35 Blagoje Paunović" },
    { value: "36", text: "36 Goran Petković" },
    { value: "37", text: "37 Mirjana Petković" },
    { value: "38", text: "38 Ljiljana Petrović" },
    { value: "39", text: "39 Pavle Petrović" },
    { value: "41", text: "41 Danica Popović <3" },
    { value: "42", text: "42 Biljana Radivojević" },
    { value: "44", text: "44 Branko Rakita" },
    { value: "45", text: "45 Gojko Rikalović" },
    { value: "46", text: "46 Jasna Soldić-Aleksić" },
    { value: "47", text: "47 Rade Stankić" },
    { value: "48", text: "48 Dušanka Ušćumlić" },
    { value: '49', text: '49 Božidar Cerović'},
    { value: '50', text: '50 Čedomir Čupić'},
    { value: '51', text: '51 Kata Škarić Jovanović'},
    { value: '52', text: '52 Mihail Arandarenko'},
    { value: '53', text: '53 Slobodan Aćimović'},
    { value: '54', text: '54 Biljana Bogićević-Milikić'},
    { value: '56', text: '56 Mirjana Gligorijević'},
    { value: '57', text: '57 Ljubiša Dabić'},
    { value: '58', text: '58 Aleksandar Živković'},
    { value: '59', text: '59 Radmila Jablan Stefanović'},
    { value: '60', text: '60 Dejan Malinić'},
    { value: '63', text: '63 Jelena Perović'},
    { value: '64', text: '64 Vladimir Poznanić'},
    { value: '65', text: '65 Ljubodrag Savić'},
    { value: '66', text: '66 Božo Stojanović'},
    { value: '67', text: '67 Žaklina Stojanović'},
    { value: '68', text: '68 Nikola Fabris'},
    { value: '69', text: '69 Milorad Filipović'},
    { value: '70', text: '70 Dejan Šoškić'},
    { value: '71', text: '71 Milojko Arsić'},
    { value: '72', text: '72 Predrag Bjelić'},
    { value: '73', text: '73 Zoran Bogetić'},
    { value: '74', text: '74 Olgica Bošković'},
    { value: '75', text: '75 Vladimir Vasić'},
    { value: '76', text: '76 Saša Veljković'},
    { value: '78', text: '78 Radmila Dragutinović-Mitrović'},
    { value: '79', text: '79 Tatjana Đurović'},
    { value: '80', text: '80 Aleksandra Zečević'},
    { value: '81', text: '81 Bojan Zečević'},
    { value: '82', text: '82 Đorđe Kaličanin'},
    { value: '84', text: '84 Dragan Lončar'},
    { value: '85', text: '85 Slavica Manić' },
    { value: '86', text: '86 Vlade Milićević' },
    { value: '88', text: '88 Aleksandra Nojković' },
    { value: '89', text: '89 Galjina Ognjanov' },
    { value: '90', text: '90 Zoran Popović' },
	{ value: '91', text: '91 Aleksandra Praščević' },
    { value: '92', text: '92 Ivana Prica' },
    { value: '95', text: '95 Tatjana Rakonjac-Antić' },
    { value: '96', text: '96 Nadežda Silaški' },
    { value: '97', text: '97 Miroslav Todorović' },
    { value: '98', text: '98 Branko Urošević' },
    { value: '102', text: '102 Dragan Azdejković' },
    { value: '104', text: '104 Jasna Babić' },
    { value: '106', text: '106 Savka Vučković Milutinović' },
    { value: '107', text: '107 Aleksandar Đorđević' },
    { value: '108', text: '108 Jelena Žarković-Rakić' },
    { value: '109', text: '109 Maja Jandrić' },
    { value: '110', text: '110 Danica Jović' },
    { value: '111', text: '111 Vladan Knežević' },
	{ value: '112', text: '112 Velimir Lukić' },
    { value: '113', text: '113 Emilija Manić' },
    { value: '114', text: '114 Sanja Mitić' },
    { value: '115', text: '115 Đorđe Mitrović' },
    { value: '116', text: '116 Marija Pantelić' },
    { value: '118', text: '118 Svetlana Popović' },
    { value: '120', text: '120 Dejan Trifunović' },
    { value: '125', text: '125 Snežana Miletić' },
    { value: '126', text: '126 Siniša Radić' },
    { value: '127', text: '127 Jelena Stanojević' },
    { value: '128', text: '128 Filip Muratović' },
    { value: '129', text: '129 Bojan Ristić' },
	{ value: '131', text: '131 Vukašin Kuč' },
    { value: '132', text: '132 Iva Vuksanović Herceg' },
    { value: '133', text: '133 Dušan Marković' },
    { value: '134', text: '134 Saša Ranđelović' },
    { value: '140', text: '140 Marko Vladisavljević' },
    { value: '144', text: '144 Svetozar Tanasković' },
    { value: '172', text: '172 Biljana Chroneos Krasavac' },
    { value: '207', text: '207 Nikola Njegovan' },
	{ value: '219', text: '218 Dragana Draganac' },
	{ value: '219', text: '219 Milan Glišić' },
    { value: '231', text: '231 Vojislav Sekerez' },
    { value: '343', text: '343 Dejan Spasić' },
    { value: '347', text: '347 Danka Stojaković' },
    { value: '398', text: '398 Jovan Filipović' },
    { value: '400', text: '400 Ivana Popović Petrović' },
    { value: '402', text: '402 Veljko Mijušković' },
    { value: '422', text: '422 Miloš Božović' },
	{ value: '443', text: '443 Aleksandra Anić' },
    { value: '445', text: '445 Milutin Ješić' },
    { value: '452', text: '452 Dušan Mojić' },
    { value: '461', text: '461 Milutin Živanović' },
    { value: '462', text: '462 Dragan Aleksić' },
    { value: '475', text: '475 Mirjana Adamović' },
    { value: '498', text: '498 Andrijana Berić' },
	{ value: '540', text: '540 Gordana Kokeza' },
    { value: '598', text: '598 Vuk Radović' },
    { value: '609', text: '609 Veran Stanojević'}
];

const selectNastavnik = document.getElementById("nastavnik");
nastavnikOptions.forEach((option) => {
  const optionElement = document.createElement("option");
  optionElement.value = option.value;
  optionElement.text = option.text;
  selectNastavnik.appendChild(optionElement);
});

