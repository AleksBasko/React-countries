export const menu = [
    'Континенты',
    'Государства',
    'Города', //с фильтром по столицам
    'Фильтры' // блоки структуры формы правления
];

export const countries = [
    {
        id: '1',
        type: 'country',
        name: 'Германия',
        image: {
            flag: '/image/Flag_of_Germany.png',
            flagText: 'Флаг',
            coatArms: '/image/Coat_of_arms_of_Germany.png',
            coatArmsText: 'Герб',
            geography: '/image/Coat_of_arms_of_Germany.png',
            geographyText: '',
        },
        shortArticle: 'Официальное название — Федерати́вная Респу́блика Герма́ния (нем. Bundesrepublik Deutschland), ФРГ (нем. BRD) — государство в Центральной Европе. По государственному устройству является федеративным государством в составе 16 административно-территориальных единиц — федеральных земель. Форма государственного правления — парламентская республика. Пост Федерального канцлера ФРГ с 22 ноября 2005 года занимает Ангела Меркель (ХДС), с 19 марта 2017 года должность Федерального президента ФРГ занимает Франк-Вальтер Штайнмайер (СДПГ). Расположенная в центре Европейского союза, Германия омывается водами Балтийского и Северного морей. Граничит с Данией на севере, Польшей и Чехией на востоке, Австрией и Швейцарией на юге, Францией, Люксембургом, Бельгией и Нидерландами на западе. Будучи мировым лидером в ряде промышленных и технологических секторов, она является третьим в мире экспортером и импортером товаров. Германия — развитая страна с очень высоким уровнем жизни (14 место в мировом рейтинге). Она поддерживает социальное обеспечение и универсальную систему здравоохранения, охрану окружающей среды и бесплатное высшее образование. Германия является одной из стран-основателей и членом Европейского союза, членом НАТО, входит в «Большую семёрку».',
        details: {
            continent: 'Europe',
            capital: 'Берлин',
            largestCity: [
                'Гамбург',
                'Мюнхен',
                'Кёльн',
                'Франкфурт-на-Майне',
                'Дюссельдорф'
            ],
            officialLanguage: 'Немецкий',
            area: '357 168',
            population: '82 800 000',
            currency: {
                currencyName: 'Евро',
                currencyCode: 'EUR'
            },
            webDomen:	'.de'
        },
        historyArticle: 'The discovery of the Mauer 1 mandible shows that ancient humans were present in Germany at least 600,000 years ago. The oldest complete hunting weapons found anywhere in the world were discovered in a coal mine in Schöningen where three 380,000-year-old wooden javelins were unearthed. The Neander Valley was the location where the first ever non-modern human fossil was discovered; the new species of human was called the Neanderthal. The Neanderthal 1 fossils are known to be 40,000 years old. Evidence of modern humans, similarly dated, has been found in caves in the Swabian Jura near Ulm. The finds include 42,000-year-old bird bone and mammoth ivory flutes which are the oldest musical instruments ever found, the 40,000-year-old Ice Age Lion Man which is the oldest uncontested figurative art ever discovered, and the 35,000-year-old Venus of Hohle Fels which is the oldest uncontested human figurative art ever discovered. The Nebra sky disk is a bronze artifact created during the European Bronze Age attributed to a site near Nebra, Saxony-Anhalt. It is part of UNESCO\'s Memory of the World Programme. The Germanic tribes are thought to date from the Nordic Bronze Age or the Pre-Roman Iron Age. From southern Scandinavia and north Germany, they expanded south, east and west from the 1st century BC, coming into contact with the Celtic tribes of Gaul as well as Iranian, Baltic, and Slavic tribes in Central and Eastern Europe. Under Augustus, Rome began to invade Germania (an area extending roughly from the Rhine to the Ural Mountains). In 9 AD, three Roman legions led by Varus were defeated by the Cheruscan leader Arminius. By 100 AD, when Tacitus wrote Germania, Germanic tribes had settled along the Rhine and the Danube (the Limes Germanicus), occupying most of the area of modern Germany. However, Austria, Baden Württemberg, southern Bavaria, southern Hessen and the western Rhineland had been conquered and incorporated into Roman provinces: Noricum, Raetia, Germania Superior, and Germania Inferior. Frankish Realm and its expansion. As it was partitioned in 843, West Francia (blue) and East Francia (red) became predecessors of France and Germany, respectively. In the 3rd century a number of large West Germanic tribes emerged: Alemanni, Franks, Chatti, Saxons, Frisii, Sicambri, and Thuringii. Around 260, the Germanic peoples broke into Roman-controlled lands. After the invasion of the Huns in 375, and with the decline of Rome from 395, Germanic tribes moved farther southwest. Simultaneously several large tribes formed in what is now Germany and displaced or absorbed smaller Germanic tribes. Large areas known since the Merovingian period as Austrasia, Neustria, and Aquitaine were conquered by the Franks who established the Frankish Kingdom, and pushed farther east to subjugate Saxony and Bavaria. Areas of what is today the eastern part of Germany were inhabited by Western Slavic tribes of Sorbs, Veleti and the Obotritic confederation.',
    },
    {
        id: '2',
        type: 'country',
        name: 'Austria',
        flag: '/image/Flag_of_Austria.png',
        coatArms: '/image/Coat_of_arms_of_Austria.png',
        image: '/image/Coat_of_arms_of_Germany.png',
        imageText: '',
        shortArticle: 'Austria officially the Republic of Austria (German: Republik Österreich, About this sound listen (help·info)), is a federal republic and a landlocked country of over 8.7 million people in Central Europe. It is bordered by the Czech Republic and Germany to the north, Hungary and Slovakia to the east, Slovenia and Italy to the south, and Switzerland and Liechtenstein to the west. The territory of Austria covers 83,879 km2 (32,386 sq mi).',
        details: {
            continent: 'Europe',
            capital: 'Vienna',
            largestCity: [
                ''
            ],
            officialLanguage: 'German',
            area: '83 879 km2',
            population: '8 794 267'
        },
        historyArticle: 'Settled in ancient times, the Central European land that is now Austria was occupied in pre-Roman times by various Celtic tribes. The Celtic kingdom of Noricum was later claimed by the Roman Empire and made a province. Present-day Petronell-Carnuntum in eastern Austria was an important army camp turned capital city in what became known as the Upper Pannonia province. Carnuntum was home for 50,000 people for nearly 400 years. After the fall of the Roman Empire, the area was invaded by Bavarians, Slavs, and Avars. Charlemagne, King of the Franks, conquered the area in AD 788, encouraged colonization, and introduced Christianity. As part of Eastern Francia, the core areas that now encompass Austria were bequeathed to the house of Babenberg. The area was known as the marchia Orientalis and was given to Leopold of Babenberg in 976. The first record showing the name Austria is from 996, where it is written as Ostarrîchi, referring to the territory of the Babenberg March. In 1156, the Privilegium Minus elevated Austria to the status of a duchy. In 1192, the Babenbergs also acquired the Duchy of Styria. With the death of Frederick II in 1246, the line of the Babenbergs was extinguished. As a result, Ottokar II of Bohemia effectively assumed control of the duchies of Austria, Styria, and Carinthia. His reign came to an end with his defeat at Dürnkrut at the hands of Rudolph I of Germany in 1278. Thereafter, until World War I, Austria\'s history was largely that of its ruling dynasty, the Habsburgs.',
    }
];

export const continents = [
    {
        id: '1',
        name: 'Европа',
        image: '/image/Coat_of_arms_of_Germany.png',
        imageText: '',
        shortArticle: 'Официальное название — Федерати́вная Респу́блика Герма́ния (нем. Bundesrepublik Deutschland), ФРГ (нем. BRD) — государство в Центральной Европе. По государственному устройству является федеративным государством в составе 16 административно-территориальных единиц — федеральных земель. Форма государственного правления — парламентская республика. Пост Федерального канцлера ФРГ с 22 ноября 2005 года занимает Ангела Меркель (ХДС), с 19 марта 2017 года должность Федерального президента ФРГ занимает Франк-Вальтер Штайнмайер (СДПГ). Расположенная в центре Европейского союза, Германия омывается водами Балтийского и Северного морей. Граничит с Данией на севере, Польшей и Чехией на востоке, Австрией и Швейцарией на юге, Францией, Люксембургом, Бельгией и Нидерландами на западе. Будучи мировым лидером в ряде промышленных и технологических секторов, она является третьим в мире экспортером и импортером товаров. Германия — развитая страна с очень высоким уровнем жизни (14 место в мировом рейтинге). Она поддерживает социальное обеспечение и универсальную систему здравоохранения, охрану окружающей среды и бесплатное высшее образование. Германия является одной из стран-основателей и членом Европейского союза, членом НАТО, входит в «Большую семёрку».',
        details: {
            area: '357 168',
            population: '82 800 000',
            numberCountries: '555',
            oceans: [ 'Тихий Океан'
            ],
            rivers: [ 'Тихий Океан'
            ],
            peaks : ['Еверест'
            ]
        },
        historyArticle: 'The discovery of the Mauer 1 mandible shows that ancient humans were present in Germany at least 600,000 years ago. The oldest complete hunting weapons found anywhere in the world were discovered in a coal mine in Schöningen where three 380,000-year-old wooden javelins were unearthed. The Neander Valley was the location where the first ever non-modern human fossil was discovered; the new species of human was called the Neanderthal. The Neanderthal 1 fossils are known to be 40,000 years old. Evidence of modern humans, similarly dated, has been found in caves in the Swabian Jura near Ulm. The finds include 42,000-year-old bird bone and mammoth ivory flutes which are the oldest musical instruments ever found, the 40,000-year-old Ice Age Lion Man which is the oldest uncontested figurative art ever discovered, and the 35,000-year-old Venus of Hohle Fels which is the oldest uncontested human figurative art ever discovered. The Nebra sky disk is a bronze artifact created during the European Bronze Age attributed to a site near Nebra, Saxony-Anhalt. It is part of UNESCO\'s Memory of the World Programme. The Germanic tribes are thought to date from the Nordic Bronze Age or the Pre-Roman Iron Age. From southern Scandinavia and north Germany, they expanded south, east and west from the 1st century BC, coming into contact with the Celtic tribes of Gaul as well as Iranian, Baltic, and Slavic tribes in Central and Eastern Europe. Under Augustus, Rome began to invade Germania (an area extending roughly from the Rhine to the Ural Mountains). In 9 AD, three Roman legions led by Varus were defeated by the Cheruscan leader Arminius. By 100 AD, when Tacitus wrote Germania, Germanic tribes had settled along the Rhine and the Danube (the Limes Germanicus), occupying most of the area of modern Germany. However, Austria, Baden Württemberg, southern Bavaria, southern Hessen and the western Rhineland had been conquered and incorporated into Roman provinces: Noricum, Raetia, Germania Superior, and Germania Inferior. Frankish Realm and its expansion. As it was partitioned in 843, West Francia (blue) and East Francia (red) became predecessors of France and Germany, respectively. In the 3rd century a number of large West Germanic tribes emerged: Alemanni, Franks, Chatti, Saxons, Frisii, Sicambri, and Thuringii. Around 260, the Germanic peoples broke into Roman-controlled lands. After the invasion of the Huns in 375, and with the decline of Rome from 395, Germanic tribes moved farther southwest. Simultaneously several large tribes formed in what is now Germany and displaced or absorbed smaller Germanic tribes. Large areas known since the Merovingian period as Austrasia, Neustria, and Aquitaine were conquered by the Franks who established the Frankish Kingdom, and pushed farther east to subjugate Saxony and Bavaria. Areas of what is today the eastern part of Germany were inhabited by Western Slavic tribes of Sorbs, Veleti and the Obotritic confederation.',
    },
    {
        id: '2',
        continent: 'Europe',
        name: 'Северная Америка',
        image: '/image/Coat_of_arms_of_Germany.png',
        imageText: '',
        shortArticle: 'Austria officially the Republic of Austria (German: Republik Österreich, About this sound listen (help·info)), is a federal republic and a landlocked country of over 8.7 million people in Central Europe. It is bordered by the Czech Republic and Germany to the north, Hungary and Slovakia to the east, Slovenia and Italy to the south, and Switzerland and Liechtenstein to the west. The territory of Austria covers 83,879 km2 (32,386 sq mi).',
        details: {
            capital: 'Vienna',
            largestCity: [
                ''
            ],
            officialLanguage: 'German',
            area: '83 879 km2',
            population: '8 794 267'
        },
        historyArticle: 'Settled in ancient times, the Central European land that is now Austria was occupied in pre-Roman times by various Celtic tribes. The Celtic kingdom of Noricum was later claimed by the Roman Empire and made a province. Present-day Petronell-Carnuntum in eastern Austria was an important army camp turned capital city in what became known as the Upper Pannonia province. Carnuntum was home for 50,000 people for nearly 400 years. After the fall of the Roman Empire, the area was invaded by Bavarians, Slavs, and Avars. Charlemagne, King of the Franks, conquered the area in AD 788, encouraged colonization, and introduced Christianity. As part of Eastern Francia, the core areas that now encompass Austria were bequeathed to the house of Babenberg. The area was known as the marchia Orientalis and was given to Leopold of Babenberg in 976. The first record showing the name Austria is from 996, where it is written as Ostarrîchi, referring to the territory of the Babenberg March. In 1156, the Privilegium Minus elevated Austria to the status of a duchy. In 1192, the Babenbergs also acquired the Duchy of Styria. With the death of Frederick II in 1246, the line of the Babenbergs was extinguished. As a result, Ottokar II of Bohemia effectively assumed control of the duchies of Austria, Styria, and Carinthia. His reign came to an end with his defeat at Dürnkrut at the hands of Rudolph I of Germany in 1278. Thereafter, until World War I, Austria\'s history was largely that of its ruling dynasty, the Habsburgs.',
    },
    {
        id: '2',
        continent: 'Europe',
        name: 'Южная Америка',
        image: '/image/Coat_of_arms_of_Germany.png',
        imageText: '',
        shortArticle: 'Austria officially the Republic of Austria (German: Republik Österreich, About this sound listen (help·info)), is a federal republic and a landlocked country of over 8.7 million people in Central Europe. It is bordered by the Czech Republic and Germany to the north, Hungary and Slovakia to the east, Slovenia and Italy to the south, and Switzerland and Liechtenstein to the west. The territory of Austria covers 83,879 km2 (32,386 sq mi).',
        details: {
            capital: 'Vienna',
            largestCity: [
                ''
            ],
            officialLanguage: 'German',
            area: '83 879 km2',
            population: '8 794 267'
        },
        historyArticle: 'Settled in ancient times, the Central European land that is now Austria was occupied in pre-Roman times by various Celtic tribes. The Celtic kingdom of Noricum was later claimed by the Roman Empire and made a province. Present-day Petronell-Carnuntum in eastern Austria was an important army camp turned capital city in what became known as the Upper Pannonia province. Carnuntum was home for 50,000 people for nearly 400 years. After the fall of the Roman Empire, the area was invaded by Bavarians, Slavs, and Avars. Charlemagne, King of the Franks, conquered the area in AD 788, encouraged colonization, and introduced Christianity. As part of Eastern Francia, the core areas that now encompass Austria were bequeathed to the house of Babenberg. The area was known as the marchia Orientalis and was given to Leopold of Babenberg in 976. The first record showing the name Austria is from 996, where it is written as Ostarrîchi, referring to the territory of the Babenberg March. In 1156, the Privilegium Minus elevated Austria to the status of a duchy. In 1192, the Babenbergs also acquired the Duchy of Styria. With the death of Frederick II in 1246, the line of the Babenbergs was extinguished. As a result, Ottokar II of Bohemia effectively assumed control of the duchies of Austria, Styria, and Carinthia. His reign came to an end with his defeat at Dürnkrut at the hands of Rudolph I of Germany in 1278. Thereafter, until World War I, Austria\'s history was largely that of its ruling dynasty, the Habsburgs.',
    },
    {
        id: '2',
        name: 'Азия',
        image: '/image/Coat_of_arms_of_Germany.png',
        imageText: '',
        shortArticle: 'Austria officially the Republic of Austria (German: Republik Österreich, About this sound listen (help·info)), is a federal republic and a landlocked country of over 8.7 million people in Central Europe. It is bordered by the Czech Republic and Germany to the north, Hungary and Slovakia to the east, Slovenia and Italy to the south, and Switzerland and Liechtenstein to the west. The territory of Austria covers 83,879 km2 (32,386 sq mi).',
        details: {
            continent: 'Europe',
            capital: 'Vienna',
            largestCity: [
                ''
            ],
            officialLanguage: 'German',
            area: '83 879 km2',
            population: '8 794 267'
        },
        historyArticle: 'Settled in ancient times, the Central European land that is now Austria was occupied in pre-Roman times by various Celtic tribes. The Celtic kingdom of Noricum was later claimed by the Roman Empire and made a province. Present-day Petronell-Carnuntum in eastern Austria was an important army camp turned capital city in what became known as the Upper Pannonia province. Carnuntum was home for 50,000 people for nearly 400 years. After the fall of the Roman Empire, the area was invaded by Bavarians, Slavs, and Avars. Charlemagne, King of the Franks, conquered the area in AD 788, encouraged colonization, and introduced Christianity. As part of Eastern Francia, the core areas that now encompass Austria were bequeathed to the house of Babenberg. The area was known as the marchia Orientalis and was given to Leopold of Babenberg in 976. The first record showing the name Austria is from 996, where it is written as Ostarrîchi, referring to the territory of the Babenberg March. In 1156, the Privilegium Minus elevated Austria to the status of a duchy. In 1192, the Babenbergs also acquired the Duchy of Styria. With the death of Frederick II in 1246, the line of the Babenbergs was extinguished. As a result, Ottokar II of Bohemia effectively assumed control of the duchies of Austria, Styria, and Carinthia. His reign came to an end with his defeat at Dürnkrut at the hands of Rudolph I of Germany in 1278. Thereafter, until World War I, Austria\'s history was largely that of its ruling dynasty, the Habsburgs.',
    }
];

export const capitals = [
    {
        id: '1',
        name: 'Берлин',
        flag: '/image/Flag_of_Germany.png',
        flagText: 'Флаг',
        coatArms: '/image/Coat_of_arms_of_Germany.png',
        coatArmsText: 'Герб',
        shortArticle: 'Официальное название — Федерати́вная Респу́блика Герма́ния (нем. Bundesrepublik Deutschland), ФРГ (нем. BRD) — государство в Центральной Европе. По государственному устройству является федеративным государством в составе 16 административно-территориальных единиц — федеральных земель. Форма государственного правления — парламентская республика. Пост Федерального канцлера ФРГ с 22 ноября 2005 года занимает Ангела Меркель (ХДС), с 19 марта 2017 года должность Федерального президента ФРГ занимает Франк-Вальтер Штайнмайер (СДПГ). Расположенная в центре Европейского союза, Германия омывается водами Балтийского и Северного морей. Граничит с Данией на севере, Польшей и Чехией на востоке, Австрией и Швейцарией на юге, Францией, Люксембургом, Бельгией и Нидерландами на западе. Будучи мировым лидером в ряде промышленных и технологических секторов, она является третьим в мире экспортером и импортером товаров. Германия — развитая страна с очень высоким уровнем жизни (14 место в мировом рейтинге). Она поддерживает социальное обеспечение и универсальную систему здравоохранения, охрану окружающей среды и бесплатное высшее образование. Германия является одной из стран-основателей и членом Европейского союза, членом НАТО, входит в «Большую семёрку».',
        details: {
            area: '891.7 km2',
            population: '3 671 000',
            country: 'Germany',
            continent: 'Europe'
        },
        historyArticle: 'The discovery of the Mauer 1 mandible shows that ancient humans were present in Germany at least 600,000 years ago. The oldest complete hunting weapons found anywhere in the world were discovered in a coal mine in Schöningen where three 380,000-year-old wooden javelins were unearthed. The Neander Valley was the location where the first ever non-modern human fossil was discovered; the new species of human was called the Neanderthal. The Neanderthal 1 fossils are known to be 40,000 years old. Evidence of modern humans, similarly dated, has been found in caves in the Swabian Jura near Ulm. The finds include 42,000-year-old bird bone and mammoth ivory flutes which are the oldest musical instruments ever found, the 40,000-year-old Ice Age Lion Man which is the oldest uncontested figurative art ever discovered, and the 35,000-year-old Venus of Hohle Fels which is the oldest uncontested human figurative art ever discovered. The Nebra sky disk is a bronze artifact created during the European Bronze Age attributed to a site near Nebra, Saxony-Anhalt. It is part of UNESCO\'s Memory of the World Programme. The Germanic tribes are thought to date from the Nordic Bronze Age or the Pre-Roman Iron Age. From southern Scandinavia and north Germany, they expanded south, east and west from the 1st century BC, coming into contact with the Celtic tribes of Gaul as well as Iranian, Baltic, and Slavic tribes in Central and Eastern Europe. Under Augustus, Rome began to invade Germania (an area extending roughly from the Rhine to the Ural Mountains). In 9 AD, three Roman legions led by Varus were defeated by the Cheruscan leader Arminius. By 100 AD, when Tacitus wrote Germania, Germanic tribes had settled along the Rhine and the Danube (the Limes Germanicus), occupying most of the area of modern Germany. However, Austria, Baden Württemberg, southern Bavaria, southern Hessen and the western Rhineland had been conquered and incorporated into Roman provinces: Noricum, Raetia, Germania Superior, and Germania Inferior. Frankish Realm and its expansion. As it was partitioned in 843, West Francia (blue) and East Francia (red) became predecessors of France and Germany, respectively. In the 3rd century a number of large West Germanic tribes emerged: Alemanni, Franks, Chatti, Saxons, Frisii, Sicambri, and Thuringii. Around 260, the Germanic peoples broke into Roman-controlled lands. After the invasion of the Huns in 375, and with the decline of Rome from 395, Germanic tribes moved farther southwest. Simultaneously several large tribes formed in what is now Germany and displaced or absorbed smaller Germanic tribes. Large areas known since the Merovingian period as Austrasia, Neustria, and Aquitaine were conquered by the Franks who established the Frankish Kingdom, and pushed farther east to subjugate Saxony and Bavaria. Areas of what is today the eastern part of Germany were inhabited by Western Slavic tribes of Sorbs, Veleti and the Obotritic confederation.',
    },
    {
        id: '2',
        name: 'Vienna',
        flag: '/image/Flag_of_Austria.png',
        coatArms: '/image/Coat_of_arms_of_Austria.png',
        shortArticle: 'Austria officially the Republic of Austria (German: Republik Österreich, About this sound listen (help·info)), is a federal republic and a landlocked country of over 8.7 million people in Central Europe. It is bordered by the Czech Republic and Germany to the north, Hungary and Slovakia to the east, Slovenia and Italy to the south, and Switzerland and Liechtenstein to the west. The territory of Austria covers 83,879 km2 (32,386 sq mi).',
        details: {
            area: '414.65 km2',
            population: '1 889 083',
            country: 'Austria',
            continent: 'Europe'
        },
        historyArticle: 'Settled in ancient times, the Central European land that is now Austria was occupied in pre-Roman times by various Celtic tribes. The Celtic kingdom of Noricum was later claimed by the Roman Empire and made a province. Present-day Petronell-Carnuntum in eastern Austria was an important army camp turned capital city in what became known as the Upper Pannonia province. Carnuntum was home for 50,000 people for nearly 400 years. After the fall of the Roman Empire, the area was invaded by Bavarians, Slavs, and Avars. Charlemagne, King of the Franks, conquered the area in AD 788, encouraged colonization, and introduced Christianity. As part of Eastern Francia, the core areas that now encompass Austria were bequeathed to the house of Babenberg. The area was known as the marchia Orientalis and was given to Leopold of Babenberg in 976. The first record showing the name Austria is from 996, where it is written as Ostarrîchi, referring to the territory of the Babenberg March. In 1156, the Privilegium Minus elevated Austria to the status of a duchy. In 1192, the Babenbergs also acquired the Duchy of Styria. With the death of Frederick II in 1246, the line of the Babenbergs was extinguished. As a result, Ottokar II of Bohemia effectively assumed control of the duchies of Austria, Styria, and Carinthia. His reign came to an end with his defeat at Dürnkrut at the hands of Rudolph I of Germany in 1278. Thereafter, until World War I, Austria\'s history was largely that of its ruling dynasty, the Habsburgs.',
    }
];

// export const continents = [
//     'Европа',
//     'Северная Америка',
//     'Южная Америка',
//     'Азия',
//     'Африка',
//     'Австралия', //с фильтром по столицам
//     'Антарктида' // блоки структуры формы правления
// ];


// Filters
// United Nations, NATO, the G7, the G20, and the OECD, Places Europa Asia
