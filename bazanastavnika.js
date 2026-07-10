const nastavnikOptions = [
    { value: "1", text: "1 Babić S.", tags: ["CEN", "Teorija cena", "IOR", "Industrijska organizacija"] },
    { value: "2", text: "2 Bajec" },
    { value: "3", text: "3 Backović", tags: ["EMM", "Ekonomsko matematički metodi i modeli", "OOI", "Osnovi operacionih istraživanja"] },
    { value: "5", text: "5 Božić"},
    { value: "6", text: "6 Boričić", tags: ["MAT", "Matematika", "DMT", "Diskretna matematika", "LIA", "Linearna algebra", "MMAT", "Matematika M", "MMNI", "Metodologija naučnog istraživanja", "MUPR", "Upravljanje rizicima M"] },
    { value: "7", text: "7 Vujović" },
    { value: "13", text: "13 Đukić", tags: ["BAN", "Bankarstvo"] },
    { value: "14", text: "14 Đuričin", tags: ["STM", "Strategijski menadžment", "MPR", "Menadžment projekata", "MRP", "Menadžment rizika preduzeća"] },
    { value: "15", text: "15 Živković B." },
    { value: "16", text: "16 Zarić", tags: ["OEK", "Osnovi ekonomije", "MEA", "Metodi ekonomske analize", "TTI", "Tržište i tržišne institucije"] },
    { value: "17", text: "17 Ivanišević" },
    { value: "18", text: "18 Jakšić", tags: ["ISE", "Istorija ekonomije", "MAA", "Makroekonomska analiza", "OMA", "Osnovi makroekonomije", "PME", "Primenjena makroekonomija", "MMAP", "Makroekonomija: analiza i politika", "MPME", "Politička makroekonomija"] },
    { value: "19", text: "19 Janićijević", tags: ["OOR", "Osnovi organizacije", "ORP", "Organizacija preduzeća", "UOP", "Upravljanje organizacionim promenama", "MORD", "Organizaciona teorija i dizajn", "MORK", "Organizaciona kultura", "MORP", "Organizaciono ponašanje"] },
    { value: "20", text: "20 Jovanović Gavrilović", tags: ["RAE", "Uvod u razvojnu ekonomiju", "NEK", "Nacionalna ekonomija", "MEPR", "Upravljanje prirodnim resursima i zaštita životne sredine", "MPZO", "Analiza penzijskog i zdravstvenog osiguranja", "MRAE", "Razvojna ekonomija", "MUDI", "Upravljanje društvenom infrastrukturom"] },
    { value: "22", text: "22 Joksimović", tags: ["EEO", "Ekonomika Evropske unije", "ETR", "Ekonomika tranzicije", "SPS", "Savremeni privredni sistemi"] },
    { value: "24", text: "24 Kovačević", tags: ["EOI", "Ekonomski odnosi Srbije sa inostranstvom", "MEF", "Međunarodne finansije", "MMEF", "Međunarodne finansije M"] },
    { value: "25", text: "25 Kozomara", tags: ["MPF", "Međunarodno poslovno finansiranje", "SPP", "Spoljnotrgovinsko poslovanje"] },
    { value: "26", text: "26 Kočović", tags: ["FAM", "Finansijska i aktuarska matematika", "AMO", "Aktuarski modeli u osiguranju", "OSG", "Osiguranje", "MAKM", "Aktuarska matematika", "MANO", "Analiza osiguranja", "MFIM", "Finansijska matematika", "MPZO", "Analiza penzijskog i zdravstvenog osiguranja"] },
    { value: "27", text: "27 Lovreta" },
    { value: "29", text: "29 Lukić R.", tags: ["RBO", "Računovodstvo u bankarstvu i osiguranju", "RTP", "Računovodstvo trgovinskih preduzeća", "SPR", "Specijalna računovodstva"] },
    { value: "30", text: "30 Maričić" },
    { value: "31", text: "31 Medojević" },
    { value: "32", text: "32 Milovanović", tags: ["CEN", "Teorija cena", "MIA", "Mikroekonomska analiza"] },
    { value: "33", text: "33 Mladenović", tags: ["EAV", "Ekonometrijska analiza vremenskih serija", "EKM", "Ekonometrija", "MAVS", "Analiza vremenskih serija", "MMAE", "Makroekonometrija", "MMAM", "Ekonometrijski metodi i modeli"] },
    { value: "34", text: "34 Pavličić" },
    { value: "35", text: "35 Paunović", tags: ["EKP", "Ekonomika preduzeća", "PUM", "Preduzetništvo i upravljanje malim preduzećem", "MEIP", "Evaluacija investicionih projekata", "MPAB", "Poslovna analiza i biznis plan", "MUPI", "Upravljanje investicijama", "MUPR", "Upravljanje rizicima M"] },
    { value: "36", text: "36 Petković G.", tags: ["KAM", "Kanali marketinga", "TMP", "Trgovinski marketing i menadžment prodaje", "TRM", "Trgovinski menadžment", "MBRM", "Brend menadžment", "MMPP", "Menadžment prodaje i prodaja", "MSKM", "Strategije kanala marketinga"] },
    { value: "37", text: "37 Petković M." },
    { value: "38", text: "38 Petrović Lj.", tags: ["TST", "Teorijska statistika", "TUP", "Teorija uzoraka i planiranje eksperimenata", "TVE", "Teorija verovatnoća", "MST2", "Statistika 2", "MSTT", "Statistika"] },
    { value: "39", text: "39 Petrović P." },
    { value: "41", text: "41 Popović D. <3", tags: ["MAM", "Makroekonomski modeli", "MEO", "Međunarodna ekonomija"] },
    { value: "42", text: "42 Radivojević", tags: ["DAN", "Demografska analiza", "MKRS", "Kretanje stanovništva", "MSST", "Strukture stanovništva"] },
    { value: "44", text: "44 Rakita", tags: ["MBM", "Međunarodni biznis i menadžment", "MEM", "Međunarodni marketing"] },
    { value: "45", text: "45 Rikalović", tags: ["RAE", "Uvod u razvojnu ekonomiju", "MEPR", "Upravljanje prirodnim resursima i zaštita životne sredine", "MGRP", "Globalizacija i razvoj poljoprivrede", "MREE", "Regionalna ekonomija", "NEK", "Nacionalna ekonomija"] },
    { value: "46", text: "46 Soldić-Aleksić", tags: ["ANP", "Analiza podataka", "APS", "Analiza podataka i statistički softver", "IPA", "Informacioni sistemi i poslovna analitika", "MNTA", "Napredne tehnike analize podataka"] },
    { value: "47", text: "47 Stankić", tags: ["ELP", "Elektronsko poslovanje", "EPS", "Elektronski platni sistemi", "ERP", "ERP softver", "BPP", "Bankarsko poslovanje i platni promet", "NIT", "Nove informacione tehnologije", "PIN", "Poslovna informatika", "RSV", "Razvoj softvera", "MPIT", "Poslovne informacione tehnologije"] },
    { value: "48", text: "48 Ušćumlić", tags: ["EKP", "Ekonomika preduzeća", "PUM", "Preduzetništvo i upravljanje malim preduzećem", "MEIP", "Evaluacija investicionih projekata", "MPAB", "Poslovna analiza i biznis plan", "MUPI", "Upravljanje investicijama", "MUPR", "Upravljanje rizicima M"] },
    { value: "49", text: "49 Cerović" },
    { value: "50", text: "50 Čupić" },
    { value: "51", text: "51 Škarić Jovanović" },
    { value: "52", text: "52 Arandarenko", tags: ["OEK", "Osnovi ekonomije", "ERA", "Ekonomija rada", "MIOR", "Industrijski odnosi i radno pravo", "MPZT", "Politika zapošljavanja i tržišta rada"] },
    { value: "53", text: "53 Aćimović", tags: ["MLO", "Marketing logistika", "ESA", "Ekonomika saobraćaja", "MMEL", "Međunarodna logistika", "MMLS", "Menadžment lanca snabdevanja", "MSAO", "Saobraćajna politika i razvoj"] },
    { value: "54", text: "54 Bogićević-Milikić", tags: ["MLR", "Menadžment ljudskih resursa", "OOR", "Osnovi organizacije", "ORP", "Organizacija preduzeća", "MORD", "Organizaciona teorija i dizajn", "MORP", "Organizaciono ponašanje", "MSML", "Strategijski menadžment ljudskih resursa", "MIML", "Internacionalni menadžment ljudskih resursa"] },
    { value: "56", text: "56 Gligorijević", tags: ["MAR", "Marketing", "PMA", "Poslovni marketing", "MIMK", "Integrisane marketinške komunikacije", "MPPO", "Poslovno pregovaranje i odnosi s kupcima", "MSTM", "Strategijski marketing"] },
    { value: "57", text: "57 Dabić", tags: ["PPR", "Poslovno pravo"]},
    { value: "58", text: "58 Živković A.", tags: ["BPP", "Bankarsko poslovanje i platni promet", "EPS", "Elektronski platni sistemi", "MOE", "Monetarna ekonomija", "MMOP", "Monetarni menadžment"]},
    { value: "59", text: "59 Jablan Stefanović", tags: ["INO", "Interni obračun", "RIS", "Računovodstveni informacioni sistemi", "RTR", "Računovodstvo troškova", "MORI", "Organizacija računovodstvenih informacionih sistema"] },
    { value: "60", text: "60 Malinić", tags: ["AFI", "Analiza finansijskih izveštaja", "UPR", "Upravljačko računovodstvo", "MSTK", "Strategijski kontroling", "MUKD", "Upravljanje korporativnim dobitkom"]},
    { value: "63", text: "63 Perović", tags: ["MPP", "Međunarodno privredno pravo", "MMPU", "Međunarodni poslovni ugovori", "MPEU", "Pravo EU"]},
    { value: "64", text: "64 Poznanić" },
    { value: "65", text: "65 Savić", tags: ["EIN", "Ekonomika industrije", "TRP", "Tehnološki razvoj i politika", "MIPR", "Industrijska politika i razvoj", "MNTP", "Naučno-tehnološka politika i razvoj", "MSTS", "Savremene tendencije u globalnoj ekonomiji"]},
    { value: "66", text: "66 Stojanović B.", tags: ["MIK", "Mikroekonomija", "TEP", "Teorija proizvodnje", "MEKR", "Ekonomika regulacije", "CEN", "Teorija cena"]},
    { value: "67", text: "67 Stojanović Ž.", tags: ["EAG", "Ekonomika agrara", "MAEP", "Agrarna ekonomija i politika", "MGRP", "Globalizacija i razvoj poljoprivrede", "MRBU", "Robna berza i upravljanje rizikom", "MREE", "Regionalna ekonomija"]},
    { value: "68", text: "68 Fabris", tags: ["OMA", "Osnovi makroekonomije", "TAP", "Teorija i analiza ekonomske politike", "MUEP", "Upravljanje ekonomskom politikom"] },
    { value: "69", text: "69 Filipović M.", tags: ["TRP", "Tehnološki razvoj i politika", "TRR", "Teorija rasta i razvoja", "MERA", "Ekonomski rast", "MMPR", "Makroekonomska politika i razvoj", "MNTP", "Naučno-tehnološka politika i razvoj"] },
    { value: "70", text: "70 Šoškić", tags: ["EST", "Ekonomska statistika", "FTR", "FT2", "Finansijska tržišta", "AHV", "Analiza hartija od vrednosti"] },
    { value: "71", text: "71 Arsić", tags: ["JAF", "Javne finansije", "PPO", "Poresko planiranje i optimizacija", "MOIF", "Oporezivanje imovine i finansijskih usluga", "MSJF", "Savremene javne finansije"] },
    { value: "72", text: "72 Bjelić", tags: ["EEO", "Ekonomika Evropske unije", "ELT", "Elektronska trgovina", "MET", "Međunarodna trgovina", "METE", "Elektronska trgovina i e-biznis", "MTPM", "Međunarodna trgovinska politika"] },
    { value: "73", text: "73 Bogetić", tags: ["KAM", "Kanali marketinga", "MOK", "Menadžment odnosa sa kupcima", "TMP", "Trgovinski marketing i menadžment prodaje", "TRM", "Trgovinski menadžment", "MSKM", "Strategije kanala marketinga", "MMLS", "Menadžment lanca snabdevanja", "MMPP", "Menadžment prodaje i prodaja"] },
    { value: "74", text: "74 Bošković" },
    { value: "75", text: "75 Vasić", tags: ["MAU", "Mašinsko učenje", "PNA", "Primenjena napredna analitika", "TUP", "Teorija uzoraka i planiranje eksperimenata", "MMVA", "Multivarijaciona analiza"]},
    { value: "76", text: "76 Veljković", tags: ["MAR", "Marketing", "MOK", "Menadžment odnosa sa kupcima", "MUS", "Marketing usluga", "MBRM", "Brend menadžment", "MDIM", "Direktni marketing"]},
    { value: "78", text: "78 Dragutinović-Mitrović", tags: ["OSA", "Osnovi statističke analiza", "MMIE", "Mikroekonometrija"] },
    { value: "79", text: "79 Đurović", tags: ["ENJ", "Engleski jezik 1", "EJE", "Engleski jezik za ekonomiste 2", "E3E", "Engleski jezik za ekonomiste 3", "E4E", "Engleski jezik za ekonomiste 4"] },
    { value: "80", text: "80 Zečević A.", tags: ["BPO", "Baze podataka", "ELP", "Elektronsko poslovanje", "ERP", "ERP softver", "NIT", "Nove informacione tehnologije", "OOP", "Objektno orijentisano programiranje", "PIN", "Poslovna informatika", "VED", "Veb dizajn", "MRPA", "Razvoj poslovnih aplikacija"]},
    { value: "81", text: "81 Zečević B.", tags: ["EKT", "Ekonomika turizma", "MTD", "Menadžment turističkih destinacija", "MTU", "Marketing u turizmu i hotelijerstvu", "MPST", "Poslovne strategije i inovacije u turizmu i hotelijerstvu", "MSDM", "Strateška pitanja destinacijskog menadžmenta"]},
    { value: "82", text: "82 Kaličanin", tags: ["MVR", "Menadžment vrednosti", "STM", "Strategijski menadžment", "EKP", "Ekonomika preduzeća", "MMEO", "Menadžersko odlučivanje", "MPOS", "Poslovna strategija", "MSTF", "Strategijske finansije"]},
    { value: "83", text: "83 Neka žena", tags: ["Krstić", "EST", "Ekonomska statistika", "MIOR", "Industrijski odnosi i radno pravo"] },
    { value: "84", text: "84 Lončar", tags: ["MPR", "Menadžment projekata", "STM", "Strategijski menadžment", "MINN", "Razvoj i finansiranje investicija u nekretnine", "MPAB", "Poslovna analiza i biznis plan", "MPOS", "Poslovna strategija"]},
    { value: "85", text: "85 Manić S.", tags: ["ETR", "Ekonomika tranzicije", "MEA", "Metodi ekonomske analize", "MMNI", "Metodologija naučnog istraživanja", "MPOK", "Politika konkurentnosti"] },
    { value: "86", text: "86 Milićević", tags: ["AFI", "Analiza finansijskih izveštaja", "UPR", "Upravljačko računovodstvo", "MSAT", "Strategijska analiza troškova", "MUKD", "Upravljanje korporativnim dobitkom", "MVRP", "Vrednovanje preduzeća"] },
    { value: "88", text: "88 Nojković", tags: ["EAV", "Ekonometrijska analiza vremenskih serija", "EKM", "Ekonometrija", "MMAE", "Makroekonometrija", "MMAM", "Ekonometrijski metodi i modeli", "MMIE", "Mikroekonometrija"] },
    { value: "89", text: "89 Ognjanov", tags: ["OJA", "Odnosi sa javnošću", "TKO", "Tržišno komuniciranje", "MIMK", "Integrisane marketinške komunikacije", "MPPO", "Poslovno pregovaranje i odnosi s kupcima", "MUOJ", "Upravljanje odnosima s javnošću"] },
    { value: "90", text: "90 Popović Z.", tags: ["OOI", "Osnovi operacionih istraživanja", "PAN", "Poslovna analitika", "TEI", "Teorija igara", "TOD", "Teorija odlučivanja", "MKPO", "Kvantitativni metodi za poslovno odlučivanje", "MOME", "Operacioni menadžment", "MPAN", "Poslovna analitika M", "EMM", "Ekonomsko matematički metodi i modeli"] },
    { value: "91", text: "91 Praščević", tags: ["ISE", "Istorija ekonomije", "MAA", "Makroekonomska analiza", "OMA", "Osnovi makroekonomije", "MMAP", "Makroekonomija: analiza i politika", "MPME", "Politička makroekonomija"] },
    { value: "92", text: "92 Prica", tags: ["IST", "Istraživanje tržišta"] },
    { value: "94", text: "94 Rajić", tags: ["OSA", "Osnovi statističke analize", "MAKM", "Aktuarska matematika"] },
    { value: "95", text: "95 Rakonjac-Antić", tags: ["OSG", "Osiguranje", "PZO", "Penzijsko i zdravstveno osiguranje", "MANO", "Analiza osiguranja", "MPZO", "Analiza penzijskog i zdravstvenog osiguranja", "MROK", "Računovodstvo osiguravajućih kompanija", "MUSO", "Upravljanje sredstvima osiguravajućih kompanija"] },
    { value: "96", text: "96 Silaški", tags: ["ENJ", "Engleski jezik 1", "EJE", "Engleski jezik za ekonomiste 2", "E3E", "Engleski jezik za ekonomiste 3", "E4E", "Engleski jezik za ekonomiste 4"] },
    { value: "97", text: "97 Todorović", tags: ["OPF", "Osnovi poslovnih finansija", "POF", "Poslovne finansije", "REP", "Restrukturiranje preduzeća", "REV", "Revizija", "MBIF", "Bihevioralne finansije", "MKFM", "Korporativni finansijski menadžment", "MRE2", "Revizija II", "MSTF", "Strategijske finansije"] },
    { value: "98", text: "98 Urošević", tags: ["FIM", "Finansijsko modeliranje", "OPI", "Operaciona istraživanja"] },
    { value: "102", text: "102 Azdejković", tags: ["MAT", "Matematika", "PAN", "Poslovna analitika", "TEI", "Teorija igara", "TOD", "Teorija odlučivanja", "OOI", "Osnovi operacionih istraživanja", "EMM", "Ekonomsko matematički metodi i modeli", "MMEO", "Menadžersko odlučivanje", "MPAN", "Poslovna analitika M", "MUPR", "Upravljanje rizicima M"] },
    { value: "103", text: "103 Aleksić Mirić", tags: ["OOR", "Osnovi organizacije", "ORP", "Organizacija preduzeća", "MMNM", "Multinacionalni menadžment", "MORD", "Organizaciona teorija i dizajn", "MORP", "Organizaciono ponašanje", "MUZN", "Upravljanje znanjem"] },
    { value: "104", text: "104 Babić J.", tags: ["KPP", "Komercijalno poznavanje proizvoda", "MKV", "Menadžment kvaliteta"] },
    { value: "106", text: "106 Vučković Milutinović", tags: ["EUR", "Etika u računovodstvu", "POR", "Poresko računovodstvo", "REV", "Revizija", "MRE2", "Revizija II", "RTP", "Računovodstvo trgovinskih preduzeća"] },
    { value: "107", text: "107 Đorđević A.", tags: ["EKT", "Ekonomika turizma", "MPT", "Menadžment hotelskih i turističkih preduzeća", "MVP", "Menadžment vrednosti potrošača", "POP", "Ponašanje potrošača"] },
    { value: "108", text: "108 Žarković-Rakić", tags: ["EJS", "Ekonomija javnog sektora", "MSPO", "Socijalna politika i ekonomija obrazovanja"] },
    { value: "109", text: "109 Jandrić", tags: ["OMA", "Osnovi makroekonomije", "TAP", "Teorija i analiza ekonomske politike", "MCDE", "Cirkularna i digitalna ekonomija", "MPZT", "Politika zapošljavanja i tržišta rada", "MUEP", "Upravljanje ekonomskom politikom"] },
    { value: "110", text: "110 Jović D.", tags: ["RAC", "Finansijsko računovodstvo", "RJS", "Računovodstvo javnog sektora", "MKFS", "Konsolidovani finansijski izveštaji - složeni problemi"] },
    { value: "111", text: "111 Knežević", tags: ["INO", "Interni obračun", "RIS", "Računovodstveni informacioni sistemi", "RTR", "Računovodstvo troškova", "MORI", "Organizacija računovodstvenih informacionih sistema"] },
    { value: "112", text: "112 Lukić V.", tags: ["BPP", "Bankarsko poslovanje i platni promet", "EPS", "Elektronski platni sistemi", "MOE", "Monetarna ekonomija", "MMOP", "Monetarni menadžment"] },
    { value: "113", text: "113 Manić E.", tags: ["EKG", "Ekonomska geografija", "GTU", "Geografija turizma", "MUPT", "Upravljanje prostorom u turizmu"] },
    { value: "114", text: "114 Mitić", tags: ["MEM", "Međunarodni marketing", "MIZP", "Izvozno poslovanje preduzeća", "MUMM", "Upravljanje međunarodnim marketingom"] },
    { value: "115", text: "115 Mitrović", tags: ["ATK", "Uvod u analizu troškova i koristi", "ETR", "Ekonomika tranzicije", "OEK", "Osnovi ekonomije", "MCDE", "Cirkularna i digitalna ekonomija", "MEJP", "Evaluacija javnih projekata"] },
    { value: "116", text: "116 Pantelić", tags: ["FII", "Finansijsko izveštavanje", "MKFI", "Korporativno finansijsko izveštavanje", "TPB", "Teorija i politika bilansa", "BPB", "Bilansi preduzeća i banaka"] },
    { value: "118", text: "118 Popović S.", tags: ["BPP", "Bankarsko poslovanje i platni promet", "EPS", "Elektronski platni sistemi", "MOE", "Monetarna ekonomija", "MMOP", "Monetarni menadžment"] },
    { value: "119", text: "119 Stojković", tags: ["ELT", "Elektronska trgovina", "KAM", "Kanali marketinga", "TMP", "Trgovinski marketing i menadžment prodaje", "TRM", "Trgovinski menadžment", "METE", "Elektronska trgovina i e-biznis", "MSKM", "Strategije kanala marketinga", "EKP", "Ekonomika preduzeća"] },
    { value: "120", text: "120 Trifunović", tags: ["IOR", "Industrijska organizacija", "TEI", "Teorija igara", "ZAK", "Zaštita konkurencije", "MIK", "Mikroekonomija", "CEN", "Teorija cena"] },
    { value: "125", text: "125 Miletić", tags: ["POR", "Poresko računovodstvo", "RTP", "Računovodstvo trgovinskih preduzeća", "MFOR", "Forenzičko računovodstvo", "MPFR", "Principi forenzičkog računovodstva", "MSAT", "Strategijska analiza troškova", "MVRP", "Vrednovanje preduzeća"] },
    { value: "126", text: "126 Radić", tags: ["ERP", "ERP softver", "RAC", "Finansijsko računovodstvo", "RBO", "Računovodstvo u bankarstvu i osiguranju", "SPR", "Specijalna računovodstva", "RFI", "Računovodstvo finansijskih institucija", "MSPF", "Specifična područja forenzičkog računovodstva", "MFOR", "Forenzičko računovodstvo", "MVRP", "Vrednovanje preduzeća"] },
    { value: "127", text: "127 Stanojević J.", tags: ["LIA", "Linearna algebra", "MAT", "Matematika", "TVE", "Teorija verovatnoća", "MMAT", "Matematika M", "MUPR", "Upravljanje rizicima M"] },
    { value: "128", text: "128 Gligorić Matić", tags: ["NEK", "Nacionalna ekonomija", "RAE", "Uvod u razvojnu ekonomiju", "MEPR", "Upravljanje prirodnim resursima i zaštita životne sredine", "MIRA", "Institucije i razvoj", "MRAE", "Razvojna ekonomija", "MUDI", "Upravljanje društvenom infrastrukturom"] },
    { value: "129", text: "129 Ristić", tags: ["IOR", "Industrijska organizacija", "TEI", "Teorija igara", "MARK", "Ekonomska analiza prava konkurencije", "ZAK", "Zaštita konkurencije", "MIK", "Mikroekonomija", "CEN", "Teorija cena"] },
    { value: "131", text: "131 Kuč", tags: ["MVR", "Menadžment vrednosti", "STM", "Strategijski menadžment", "MPOS", "Poslovna strategija", "MRP", "Menadžment rizika preduzeća", "PUM", "Preduzetništvo i upravljanje malim preduzećem"] },
    { value: "132", text: "132 Vuksanović Herceg", tags: ["MRP", "Menadžment rizika preduzeća", "STM", "Strategijski menadžment", "MSTF", "Strategijske finansije", "MPOS", "Poslovna strategija", "PUM", "Preduzetništvo i upravljanje malim preduzećem"] },
    { value: "133", text: "133 Marković", tags: ["MBM", "Međunarodni biznis i menadžment", "MMNM", "Multinacionalni menadžment", "MMSM", "Međunarodni strategijski menadžment", "MEM", "Međunarodni marketing"] },
    { value: "134", text: "134 Ranđelović", tags: ["JAF", "Javne finansije", "PPO", "Poresko planiranje i optimizacija", "MOIF", "Oporezivanje imovine i finansijskih usluga", "MSJF", "Savremene javne finansije"] },
    { value: "135", text: "135 Janković", tags: ["AHV", "Analiza hartija od vrednosti", "FTR", "Finansijska tržišta", "MPOM", "Portfolio menadžment", "MUHV", "Ulaganje u hartije od vrednosti"] },
    { value: "137", text: "137 Filipović J.", tags: ["DIM", "Digitalni marketing", "MUS", "Marketing usluga", "TKO", "Tržišno komuniciranje", "MIMK", "Integrisane marketinške komunikacije", "MINM", "Internet marketing"] },
    { value: "139", text: "139 Koprivica", tags: ["FAM", "Finansijska i aktuarska matematika", "AMO", "Aktuarski modeli u osiguranju", "OSG", "Osiguranje", "MAKM", "Aktuarska matematika", "MFIM", "Finansijska matematika", "MROK", "Računovodstvo osiguravajućih kompanija", "MUPR", "Upravljanje rizicima M"] },
    { value: "140", text: "140 Vladisavljević", tags: ["ANP", "Analiza podataka", "APS", "Analiza podataka i statistički softver", "DAN", "Demografska analiza", "MDAP", "Demografska analiza i projekcije", "MEPP", "Ekonometrija prostornih podataka", "MKRS", "Kretanje stanovništva", "MSST", "Strukture stanovništva"] },
    { value: "143", text: "143 Molnar", tags: ["EEN", "Ekonomika energetike", "RAE", "Uvod u razvojnu ekonomiju", "URE", "Urbana ekonomika", "MREE", "Regionalna ekonomija", "NEK", "Nacionalna ekonomija"] },
    { value: "144", text: "144 Tanasković", tags: ["ATK", "Uvod u analizu troškova i koristi", "OEK", "Osnovi ekonomije", "MCDE", "Cirkularna i digitalna ekonomija", "MEJP", "Evaluacija javnih projekata"] },
    { value: "172", text: "172 znači Chroneos znači Krasavac", tags: ["IST", "Istraživanje tržišta", "MDIM", "Direktni marketing"] },
    { value: "207", text: "207 Njegovan", tags: ["RAI", "Racionalni izbor", "TEI", "Teorija igara", "MJIZ", "Javni izbor", "MIK", "Mikroekonomija", "CEN", "Teorija cena"] },
    { value: "218", text: "218 Draganac", tags: ["OBF", "Osnove bihevioralnih finansija", "OPF", "Osnovi poslovnih finansija", "POF", "Poslovne finansije", "MBIF", "Bihevioralne finansije", "MKFM", "Korporativni finansijski menadžment", "MMNI", "Metodologija naučnog istraživanja", "MFFO", "Finansijska forenzika", "MKFI", "Korporativno finansijsko izveštavanje"] },
    { value: "219", text: "219 Glišić", tags: ["AFI", "Analiza finansijskih izveštaja", "UPR", "Upravljačko računovodstvo"] },
    { value: "231", text: "231 Sekerez", tags: ["KFI", "Konsolidovani finansijski izveštaji", "KOR", "Komparativno računovodstvo", "RAC", "Finansijsko računovodstvo", "MKFS", "Konsolidovani finansijski izveštaji - složeni problemi", "MVRP", "Vrednovanje preduzeća"] },
    { value: "343", text: "343 Spasić", tags: ["KFI", "Konsolidovani finansijski izveštaji", "SPB", "Specijalni bilansi", "MFOR", "Forenzičko računovodstvo", "MKFS", "Konsolidovani finansijski izveštaji - složeni problemi"] },
    { value: "345", text: "345 Muratović", tags: ["TZE", "Teorije zavere za ekonomiste", "TZ2", "Teorije zavere za ekonomiste 2"] },
    { value: "347", text: "347 Stojaković", tags: ["NEJ", "Nemački jezik 1", "NJE", "Nemački jezik za ekonomiste 2", "N3E", "Nemački jezik za ekonomiste 3", "N4E", "Nemački jezik za ekonomiste 4"] },
    { value: "398", text: "398 Filipović J." },
    { value: "399", text: "399 Ilić", tags: ["DMT", "Diskretna matematika", "LIA", "Linearna algebra", "MAT", "Matematika", "MMAT", "Matematika M", "MMNI", "Metodologija naučnog istraživanja", "MUPR", "Upravljanje rizicima M"] },
    { value: "400", text: "400 Popović Petrović", tags: ["EEO", "Ekonomika Evropske unije", "MPF", "Međunarodno poslovno finansiranje", "SPP", "Spoljnotrgovinsko poslovanje", "MMPS", "Međunarodno poslovanje"] },
    { value: "402", text: "402 Mijušković", tags: ["ESA", "Ekonomika saobraćaja", "MLO", "Marketing logistika", "MMEL", "Međunarodna logistika", "MSAO", "Saobraćajna politika i razvoj"] },
    { value: "407", text: "407 Stamenković", tags: ["OOI", "Osnovi operacionih istraživanja", "PAN", "Poslovna analitika", "TEI", "Teorija igara", "MKPO", "Kvantitativni metodi za poslovno odlučivanje", "MOME", "Operacioni menadžment", "MPAN", "Poslovna analitika M", "EMM", "Ekonomsko matematički metodi i modeli"] },
    { value: "422", text: "422 Božović", tags: ["FIE", "Finansijska ekonomija", "KVF", "Kvantitativne finansije", "MFIM", "Finansijska matematika", "MUSO", "Upravljanje sredstvima osiguravajućih kompanija"] },
    { value: "443", text: "443 Anić", tags: ["EST", "Ekonomska statistika", "EKM", "Ekonometrija"] },
    { value: "445", text: "445 Ješić", tags: ["MAA", "Makroekonomska analiza", "MAP", "Makroekonomske politike", "OMA", "Osnovi makroekonomije", "PME", "Primenjena makroekonomija", "MMAP", "Makroekonomija: analiza i politika", "MUEP", "Upravljanje ekonomskom politikom", "MEEP", "Energetski sistemi i energetska politika"] },
    { value: "447", text: "447 Hristov Stančić", tags: ["EKT", "Ekonomika turizma", "EBT", "Ekonomija i biznis u turizmu", "IPO", "Industrijska politika", "MPT", "Menadžment hotelskih i turističkih preduzeća", "TPR", "Turistička politika i razvoj", "TRP", "Tehnološki razvoj i politika", "UPT", "Upravljanje prihodima u turizmu i hotelijerstvu", "MSLU", "Strategija i razvoj luksuznih usluga", "MEPR", "Upravljanje prirodnim resursima i zaštita životne sredine", "MPST", "Poslovne strategije i inovacije u turizmu i hotelijerstvu", "MSDM", "Strateška pitanja destinacijskog menadžmenta", "MMKI", "Menadžment u kreativnim industrijama", "MMMD", "Menadžment i marketing događaja", "MOPT", "Optimizacija prihoda u turizmu"] },
    { value: "448", text: "448 Ivković", tags: ["ANP", "Analiza podataka", "OSA", "Osnovi statističke analize", "POI", "Poslovna inteligencija", "MDAP", "Demografska analiza i projekcije", "MMIE", "Mikroekonometrija", "MSTT", "Statistika", "MMVA", "Multivarijaciona analiza u poslovanju"] },
    { value: "452", text: "452 Mojić", tags: ["SOC", "Sociologija", "SSV", "Sociologija slobodnog vremena"] },
    { value: "461", text: "461 Živanović", tags: ["FII", "Finansijsko izveštavanje", "RBO", "Računovodstvo u bankarstvu i osiguranju", "SPR", "Specijalna računovodstva", "RFI", "Računovodstvo finansijskih institucija", "MKFI", "Korporativno finansijsko izveštavanje", "TPB", "Teorija i politika bilansa", "BPB", "Bilansi preduzeća i banaka"] },
    { value: "462", text: "462 Aleksić", tags: ["OEK", "Osnovi ekonomije"] },
    { value: "463", text: "463 Vuksanović", tags: ["OEK", "Osnovi ekonomije"] },
    { value: "475", text: "475 Adamović", tags: ["RUJ", "Ruski jezik 1", "RJE", "Ruski jezik za ekonomiste 2", "R3E", "Ruski jezik za ekonomiste 3", "R4E", "Ruski jezik za ekonomiste 4"] },
    { value: "498", text: "498 Berić", tags: ["NEJ", "Nemački jezik 1", "NJE", "Nemački jezik za ekonomiste 2", "N3E", "Nemački jezik za ekonomiste 3", "N4E", "Nemački jezik za ekonomiste 4"] },
    { value: "538", text: "538 Aničić", tags: ["EKP", "Ekonomika preduzeća", "PUM", "Preduzetništvo i upravljanje malim preduzećem", "UBI", "Uvod u biznis", "MEIP", "Evaluacija investicionih projekata", "MMNP", "Međunarodno preduzetništvo", "MKOU", "Korporativno upravljanje", "MUKV", "Upravljanje kvalitetom", "MUPI", "Upravljanje investicijama"] },
    { value: "540", text: "540 Kokeza", tags: ["EKP", "Ekonomika preduzeća"] },
    { value: "542", text: "542 Đorđević A.", tags: ["EOI", "Ekonomski odnosi Srbije sa inostranstvom", "MEF", "Međunarodne finansije", "MEO", "Međunarodna ekonomija", "MMEF", "Međunarodne finansije M"] },
    { value: "565", text: "565 Petrović D.", tags: ["SOC", "Sociologija", "MUOJ", "Upravljanje odnosima s javnošću i reputacijom"] },
    { value: "592", text: "592 Stakić", tags: ["DMT", "Diskretna matematika", "VED", "Veb dizajn", "KID", "Korisničko iskustvo i dizajn", "LIA", "Linearna algebra", "MAT", "Matematika", "NIT", "Nove informacione tehnologije", "OOP", "Objektno orijentisano programiranje", "POI", "Poslovna inteligencija", "TVE", "Teorija verovatnoće", "MPIT", "Poslovne informacione tehnologije", "MMN1", "Metodika nastave ekonomske grupe predmeta I"]},
    { value: "598", text: "598 Radović", tags: ["PPR", "Poslovno pravo"] },
    { value: "609", text: "609 Stanojević V.", tags: ["FRJ", "Francuski jezik 1", "FJE", "Francuski jezik za ekonomiste 2", "F3E", "Francuski jezik za ekonomiste 3", "F4E", "Francuski jezik za ekonomiste 4"] },
    { value: "611", text: "611 Kastratović", tags: ["MEO", "Međunarodna ekonomija", "MET", "Međunarodna trgovina", "MPF", "Međunarodno poslovno finansiranje", "MMPS", "Međunarodno poslovanje", "MTPM", "Međunarodna trgovinska politika"] },
    { value: "742", text: "742 Jović Ž.", tags: ["AMO", "Aktuarski modeli u osiguranju", "BAN", "Bankarstvo", "FAM", "Finansijska i aktuarska matematika", "MBAM", "Bankarski menadžment", "MAFM", "Finansijski i aktuarski menadžment", "MUSO", "Upravljanje sredstvima osiguravajućih kompanija"]},
    { value: "756", text: "756 Radojičić", tags: ["MAU", "Mašinsko učenje", "TST", "Teorijska statistika", "TUP", "Teorija uzoraka i planiranje eksperimenata", "MMNI", "Metodologija naučnog istraživanja", "MPMU", "Primenjeno mašinsko učenje", "MSTT", "Statistika", "MUBS", "Uvod u Bajesovsku statistiku"] },
    { value: "757", text: "757 Marinković", tags: ["IST", "Istraživanje tržišta", "MIPM", "Istraživanje potrošača u marketingu", "MOPT", "Optimizacija prihoda u turizmu"] },
    { value: "774", text: "774 Altiparmakov", tags: ["MAM", "Makroekonomski modeli", "MOP", "Makroekonomija otvorene privrede", "MJFO", "Javne finansije i održivi razvoj"] },
    { value: "0", text: "0 Provera spiska", tags: ["Apstraktni"] }
];

// Foldovanje kvačica: č ć š ž -> c c s z, đ -> dj
function foldSerbian(str) {
  return (str || "")
    .normalize("NFD")                 // deli č, ć, š, ž u osnovno slovo + kvačica
    .replace(/[\u0300-\u036f]/g, "")  // uklanja kvačicu
    .replace(/đ/g, "dj").replace(/Đ/g, "dj") // đ -> dj
    .toLowerCase()
    .trim();
}

// Indeks za pretragu:
// - ime (text) -> substring pretraga (nameHaystack)
// - dugi tagovi -> niz reči po tagu; višerečni upit mora da pogodi
//   uzastopne reči unutar JEDNOG taga (tagWordLists)
// - kratki tagovi (šifre, <= 4 znaka) -> samo potpuno poklapanje (exact)
const nastavnikIndex = nastavnikOptions.map((o) => {
  const tags = o.tags || [];
  const longTags = tags.filter((t) => t.length > 4);
  const shortTags = tags.filter((t) => t.length <= 4).map(foldSerbian);
  const tagWordLists = longTags.map((t) =>
    foldSerbian(t)
      .replace(/[^a-z0-9\s]/g, " ")   // izbaci znakove poput : i -
      .split(/\s+/)
      .filter(Boolean)
  );
  return {
    value: o.value,
    text: o.text,
    nameHaystack: foldSerbian(o.text),
    tagWordLists,
    exact: shortTags,
  };
});

(function initNastavnikSearch() {
  const input = document.getElementById("nastavnikSearch");
  const hidden = document.getElementById("nastavnik");
  const dropdown = document.getElementById("nastavnikDropdown");
  if (!input || !hidden || !dropdown) return;

  let matches = [];
  let activeIndex = -1;

  // Pravila poklapanja sa tagom:
  // - mora se uneti bar min(broj reči taga, 3) termina
  // - reči PRE poslednjeg unetog termina: prve dve cele, od treće početak reči
  // - poslednji uneti termin: uvek dovoljan početak reči
  function tagPhraseMatch(words, terms) {
    const n = words.length, m = terms.length;
    if (m > n) return false;
    const required = Math.min(n, 3);   // tag od 1 reči: 1, tag od 2 reči: 2, duži: bar 3 termina
    if (m < required) return false;
    for (let k = 0; k < m; k++) {
      if (k === m - 1) {
        if (!words[k].startsWith(terms[k])) return false; // poslednji termin: prefiks
      } else if (k < 2) {
        if (words[k] !== terms[k]) return false;          // završene prve dve reči: cele
      } else {
        if (!words[k].startsWith(terms[k])) return false; // ostale završene: prefiks
      }
    }
    return true;
  }

  function searchProfessors(query) {
    const q = foldSerbian(query);
    if (!q) return nastavnikIndex.slice();       // prazno polje -> prikaži sve
    const terms = q.replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
    return nastavnikIndex.filter(
      (o) =>
        // ime + šifre: svaki termin mora da pogodi ime (substring) ili celu šifru
        terms.every((t) => o.nameHaystack.includes(t) || o.exact.includes(t)) ||
        // dugi tagovi: ceo upit kao fraza unutar jednog taga
        o.tagWordLists.some((words) => tagPhraseMatch(words, terms))
    );
  }

  function renderList() {
    dropdown.innerHTML = "";
    activeIndex = -1;
    if (matches.length === 0) {
      const li = document.createElement("li");
      li.className = "no-results";
      li.textContent = "Nema rezultata";
      dropdown.appendChild(li);
      dropdown.hidden = false;
      return;
    }
    matches.forEach((m, i) => {
      const li = document.createElement("li");
      li.textContent = m.text;                  // originalno ime bez foldovanja kvačica
      li.addEventListener("mousedown", (e) => {
        e.preventDefault();                     // zadrži fokus tako da blur ne spreči klik
        choose(m);
      });
      dropdown.appendChild(li);
    });
    dropdown.hidden = false;
  }

  function choose(match) {
    hidden.value = match.value;                 // ovo čita output()
    input.value = match.text;
    dropdown.hidden = true;
  }

  function setActive(i) {
    const items = dropdown.querySelectorAll("li:not(.no-results)");
    items.forEach((li) => li.classList.remove("active"));
    if (i >= 0 && items[i]) {
      items[i].classList.add("active");
      items[i].scrollIntoView({ block: "nearest" });
    }
  }

  input.addEventListener("input", () => {
    hidden.value = "";                          // kucanje poništava prethodni izbor
    matches = searchProfessors(input.value);
    renderList();
  });

  input.addEventListener("focus", () => {
    matches = searchProfessors(input.value);
    renderList();
  });

  input.addEventListener("keydown", (e) => {
    if (dropdown.hidden) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIndex = Math.min(activeIndex + 1, matches.length - 1);
      setActive(activeIndex);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIndex = Math.max(activeIndex - 1, 0);
      setActive(activeIndex);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0) choose(matches[activeIndex]);
      else if (matches.length === 1) choose(matches[0]); // ako je samo jedan ostao -> uzmi
    } else if (e.key === "Escape") {
      dropdown.hidden = true;
    }
  });

  input.addEventListener("blur", () => {
    setTimeout(() => { dropdown.hidden = true; }, 150); // prvo spusti miša
  });
})();