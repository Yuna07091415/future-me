export const CAREERS_DATA = [
  {
    id: 'dasturchi',
    title: 'Dasturchi',
    category: 'Texnologiya va IT',
    categoryId: 'tech',
    iconName: 'Code2',
    accentColor: '#22D3EE',
    shortDescription: 'Kelajak dasturiy ta\'minotlari, sun\'iy intellekt tizimlari va veb-platformalarni yaratuvchi mutaxassis.',
    fullDescription: 'Dasturchilar zamonaviy dunyoning raqamli arxitektorlaridir. Ular biznes, ta\'lim, tibbiyot va kundalik hayotdagi muammolarni kod vositasida hal qilishadi. 2030 yilga borib dasturlash faqat kod yozish emas, balki sun\'iy intellekt agentlarini boshqarish va murakkab tizimlarni integratsiya qilish san\'atiga aylanadi.',
    matchCriteria: ['tech', 'engineering'],
    skills: ['JavaScript / TypeScript', 'Python', 'Algoritmlar va ma\'lumotlar tuzilmasi', 'React / Node.js', 'Git va GitHub', 'Bulutli texnologiyalar (AWS/GCP)'],
    softSkills: ['Algoritmik mantiqiy fikrlash', 'Muammolarni mustaqil hal qilish', 'Jamoada ishlash va muloqot', 'Uzluksiz ta\'lim olish'],
    education: [
      'TATU, Inha, Yangi O\'zbekiston Universiteti, Amity yoki xorijiy IT fakultetlari',
      'LeetCode, HackerRank, Coursera (CS50, Meta Frontend/Backend sertifikatlari)',
      'Ochiq kodli (Open Source) loyihalarga hissa qo\'shish va shaxsiy portfolio yaratish'
    ],
    facts: {
      demand2030: 'Global talab +28% o\'sishi bashorat qilingan',
      salaryRange: '$800 — $4,500+ / oyiga',
      growthTrend: 'Juda yuqori',
      futureRole: 'AI vositalari bilan birgalikda ishlaydigan Super-Dasturchi'
    },
    whyRecommended: 'Sizda kuchli mantiqiy fikrlash, muammolarni texnik usulda hal etishga ishtiyoq va zamonaviy raqamli tizimlarni tushunish qobiliyati yuqori darajada namoyon bo\'ldi.'
  },
  {
    id: 'ui-ux-dizayner',
    title: 'UI/UX dizayner',
    category: 'Ijodkorlik va Dizayn',
    categoryId: 'creative',
    iconName: 'Palette',
    accentColor: '#EC4899',
    shortDescription: 'Foydalanuvchilar uchun qulay, estetik va interaktiv raqamli mahsulotlar interfeysini loyihalovchi mutaxassis.',
    fullDescription: 'UI/UX dizayner inson psixologiyasi va raqamli san\'atni birlashtiradi. U veb-saytlar va mobil ilovalarni nafaqat ko\'rkam, balki maksimal darajada sodda va qulay qilish ustida ishlaydi. Har bir tugma joylashuvi va rang tanlovi orqasida chuqur foydalanuvchi tadqiqoti yotadi.',
    matchCriteria: ['creative', 'tech', 'social'],
    skills: ['Figma / FigJam', 'Prototip yaratish (Prototyping)', 'Dizayn tizimlari (Design Systems)', 'Foydalanuvchi tajribasi tadqiqotlari (UX Research)', 'Wireframing', 'Interaktiv animatsiyalar'],
    softSkills: ['Empatiya (odamlarni his qilish)', 'Vizual did va estetika', 'Kritik fikrlash', 'Taqdimot qilish qobiliyati'],
    education: [
      'Grafik dizayn, sanoat dizayni yoki kognitiv psixologiya yo\'nalishlari',
      'Google UX Design Professional Certificate (Coursera), Interaction Design Foundation (IxDF)',
      'Behance va Dribbble platformalarida shaxsiy keyslar (Case studies) portfelini yig\'ish'
    ],
    facts: {
      demand2030: 'Global ehtiyoj +23% ga kengayadi',
      salaryRange: '$700 — $3,500+ / oyiga',
      growthTrend: 'Doimiy barqaror o\'sish',
      futureRole: 'VR/AR interfeyslari va neyro-interfeyslar dizayneri'
    },
    whyRecommended: 'Sizda vizual go\'zallikni his etish, nozik did va insonlarning qulayligini o\'ylash (empatiya) xususiyatlari uyg\'unlashgan.'
  },
  {
    id: 'buxgalter',
    title: 'Buxgalter / Moliyaviy Auditor',
    category: 'Biznes va Moliya',
    categoryId: 'business',
    iconName: 'Calculator',
    accentColor: '#10B981',
    shortDescription: 'Korxona va kompaniyalarning moliyaviy hisobotlarini yurituvchi, soliq va auditi bo‘yicha ekspert.',
    fullDescription: 'Zamonaviy buxgalter shunchaki sonlarni yozib boruvchi emas, balki korxonaning moliyaviy xavfsizligini ta\'minlovchi strategdir. U xalqaro IFRS standartlari, 1C dasturlari va avtomatlashtirilgan audit tizimlaridan foydalanib daromad va xarajatlarni aniq hisoblab boradi.',
    matchCriteria: ['business', 'legal'],
    skills: ['1C Buxgalteriya 8.3', 'IFRS / MHXS xalqaro standartlari', 'Soliq kodeksi va hisobotlar', 'Murakkab Excel / Power Query', 'Moliyaviy audit va tahlil'],
    softSkills: ['O\'ta yuqori mas\'uliyat', 'Aniqlik va sinchkovlik', 'Konfidensiallik (sir saqlash)', 'Tashkilotchilik'],
    education: [
      'TDIU, Jahon Iqtisodiyoti va Diplomatiya Universiteti (JIDU), WIUT moliya-iqtisod fakultetlari',
      'ACCA (F1-F9), CIPA/CAP xalqaro professional sertifikatlari',
      'Auditorlik kompaniyalarida (Big 4) amaliyot o\'tash'
    ],
    facts: {
      demand2030: 'Avtomatlashtirish hisobiga intellektual auditorlarga talab +21% oshadi',
      salaryRange: '$600 — $3,000+ / oyiga',
      growthTrend: 'Doimiy barqaror va zarur',
      futureRole: 'AI asosidagi xalqaro moliyaviy nazoratchi va audit rahbari'
    },
    whyRecommended: 'Sizda sonlar, hisob-kitoblar va tartib-intizomga nisbatan kuchli qobiliyat bor. Har bir tafsilotni aniq tekshirishni yaxshi ko\'rasiz.'
  },
  {
    id: 'doktor',
    title: 'Shifokor / Doktor',
    category: 'Ilm-fan va Tibbiyot',
    categoryId: 'science',
    iconName: 'Stethoscope',
    accentColor: '#14B8A6',
    shortDescription: 'Inson salomatligini saqlovchi, kasalliklarni aniqlovchi va zamonaviy biotibbiyot texnologiyalari bilan davolovchi mutaxassis.',
    fullDescription: 'Shifokorlik — insoniyatning eng olijanob va mas\'uliyatli kasblaridan biri. 2030 yil shifokori ilg\'or genetik tahlillar, sun\'iy intellekt tashxislari, robotlashtirilgan jarrohlik va telemeditsina usullaridan foydalanib millionlab insonlar umrini uzaytiradi.',
    matchCriteria: ['science', 'social'],
    skills: ['Klinik diagnostika', 'Inson anatomiyasi va fiziologiyasi', 'Farmakologiya va davolash protokollari', 'Raqamli tibbiyot texnologiyalari', 'Tez tibbiy yordam ko‘rsatish'],
    softSkills: ['Cheksiz empatiya va mehr', 'Stressga yuqori chidamlilik', 'Tezkor va aniq qaror qabul qilish', 'Tinglash madaniyati'],
    education: [
      'Toshkent Tibbiyot Akademiyasi (TMA), Samarqand Davlat Tibbiyot Universiteti, xalqaro tibbiyot oliygohlari',
      'USMLE (AQSh) / PLAB (UK) xalqaro tibbiyot litsenziya imtihonlari',
      'Klinik ordinatura va nufuzli klinikalarda uzoq yillik stajirovka'
    ],
    facts: {
      demand2030: 'Global aholi o\'sishi bilan shifokorlarga ehtiyoj +35% oshadi',
      salaryRange: '$800 — $4,500+ / oyiga',
      growthTrend: 'Eng yuqori va o‘zgarmas talab',
      futureRole: 'Biotexnologik tibbiyot va robotik jarrohlik yetakchisi'
    },
    whyRecommended: 'Insonlarga yordam berish, biologik hodisalarni tushunish va hayot saqlab qolish sizning oliy maqsadingizga to‘liq mos keladi.'
  },
  {
    id: 'stuardessa',
    title: 'Styuardessa / Avia-hamroh',
    category: 'Ijtimoiy va Ta\'lim',
    categoryId: 'social',
    iconName: 'Plane',
    accentColor: '#38BDF8',
    shortDescription: 'Xalqaro aviaparvozlarda yo‘lovchilar xavfsizligi, qulayligi va oliy darajadagi servisni ta\'minlovchi elchi.',
    fullDescription: 'Styuardessa (bortkuzatuvchi) — bu nafaqat go‘zallik va xushmuomalalik, balki avia-xavfsizlik bo‘yicha professional qutqaruvchi, psixolog va mehmondo‘stlik ustasidir. Dunyo bo‘ylab sayohat qilish, turli millatlar vakillari bilan muloqot qilish bu kasbning eng ajoyib qirrasidir.',
    matchCriteria: ['social', 'legal'],
    skills: ['Chet tillarini mukammal bilish (Ingliz, Rus va qo‘shimcha)', 'Favqulodda vaziyatlarda qutqaruv protokollari', 'Bortdagi tibbiy tez yordam ko‘rsatish', 'Xalqaro aviatsiya xavfsizligi qoidalari (ICAO/IATA)', 'Protokol va servis etikasi'],
    softSkills: ['Stressga favqulodda chidamlilik', 'Muloqotchanlik va samimiyat', 'Jamoada ishonchli ishlash', 'Kutilmagan vaziyatlarda sovuqqonlik'],
    education: [
      'Fuqaro aviatsiyasi akademiyalari yoki xalqaro aviakompaniyalar o‘quv markazlari',
      'IELTS 6.5+ yoki erkin so‘zlashuv darajasidagi xalqaro til sertifikatlari',
      'Suzish, jismoniy tayyorgarlik va avariya holatlarida qutqarish amaliyoti'
    ],
    facts: {
      demand2030: 'Dunyo bo‘ylab sayohatlar va havo yo‘llari +30% ga kengaymoqda',
      salaryRange: '$1,200 — $4,000+ / oyiga (Xalqaro aviakompaniyalar: Emirates, Qatar, Uzbekistan Airways)',
      growthTrend: 'Yuqori nufuzli va sayohatlarga boy',
      futureRole: 'Xalqaro super-laynerlar bosh xizmat va xavfsizlik koordinatori'
    },
    whyRecommended: 'Siz sayohat qilishni, yangi madaniyatlarni kashf etishni va insonlar bilan ochiq muloqotda bo‘lib, ularga ko‘maklashishni sevasiz.'
  },
  {
    id: 'muhandis',
    title: 'Injener / Muhandis',
    category: 'Amaliy va Muhandislik',
    categoryId: 'engineering',
    iconName: 'Wrench',
    accentColor: '#06B6D4',
    shortDescription: 'Robototexnika, avtomatlashtirilgan mexanizmlar, elektrotexnika va sanoat qurilmalarini ixtiro qiluvchi muhandis.',
    fullDescription: 'Injenerlar ilmiy nazariyalarni amaliy mo\'jizalarga aylantiradi. Dronlar, elektromobillar, sanoat robotlari, quyosh panellari va kosmik apparatlarning har bir mexanik va elektron qismi injenerlar tafakkuri mevasidir.',
    matchCriteria: ['engineering', 'tech', 'science'],
    skills: ['Fizika va amaliy mexanika', 'Robototexnika va mikrokontrollerlar (Arduino, STM32)', 'SolidWorks / MATLAB / AutoCAD', 'Sxemotexnika va elektronika', 'PLC va sanoat dasturlash'],
    softSkills: ['Konstruktorlik tafakkuri', 'Sabrli tadqiqot', 'Qo\'l bilan ishlash chaqqonligi', 'Xavfsizlik qoidalariga sadoqat'],
    education: [
      'Toshkent Davlat Texnika Universiteti (TDTU), Turin Politexnika Universiteti (TTPU)',
      'IEEE a\'zoligi, Robototexnika musobaqalari (FIRST Robotics, WorldSkills)',
      'Ishchi prototiplar va apparat vositalari loyihalari'
    ],
    facts: {
      demand2030: 'Sanoat 4.0 va avtomatlashtirish sababli +27% talab',
      salaryRange: '$800 — $3,800+ / oyiga',
      growthTrend: 'Barqaror va texnologik',
      futureRole: 'Avtonom tizimlar va kiber-fizik mexanizmlar muhandisi'
    },
    whyRecommended: 'Mexanizmlar qanday ishlashini bilish, yangi qurilmalar yasash va fizika qonuniyatlarini amalda sinash sizni to\'lqinlantiradi.'
  },
  {
    id: 'advokat',
    title: 'Advokat',
    category: 'Huquq va Diplomatiya',
    categoryId: 'legal',
    iconName: 'Scale',
    accentColor: '#F59E0B',
    shortDescription: 'Fuqarolar va biznes manfaatlarini sudda himoya qiluvchi, qonun ustuvorligi posboni.',
    fullDescription: 'Advokat inson huquqlari va adolatning bosh himoyachisidir. U qonunlarni chuqur bilgan holda, sud jarayonlarida o‘z himoyasidagi shaxsni nohaqlikdan asraydi, dalillarni sinchkovlik bilan to‘playdi va o‘tkir mantiq bilan haqiqatni isbotlaydi.',
    matchCriteria: ['legal', 'social', 'business'],
    skills: ['Sud protsessi va himoya nutqi', 'Jinoyat, fuqarolik va iqtisodiy huquq', 'Yuridik hujjatlar va dalillar to‘plash', 'Muzokaralar olib borish mahorati', 'Kritik qonuniy tahlil'],
    softSkills: ['Notiqlik va ishontirish qobiliyati', 'Prinsiplarga sodiqlik va jasorat', 'Kuchli mantiqiy tafakkur', 'Murosasiz adolatparvarlik'],
    education: [
      'Toshkent Davlat Yuridik Universiteti (TDYU), JIDU xalqaro huquq fakulteti',
      'Advokatlik maqomi litsenziyasi va Advokatlar palatasi a\'zoligi',
      'Sud amaliyotida yirik keyslar bo‘yicha tajriba orttirish'
    ],
    facts: {
      demand2030: 'Raqamli biznes va xususiy mulk himoyasi kengayishi bilan +24% talab',
      salaryRange: '$900 — $5,000+ / oyiga',
      growthTrend: 'Yuksak nufuzli va daromadli',
      futureRole: 'Kiberhuquq va xalqaro arbitraj bosh advokati'
    },
    whyRecommended: 'Adolat tuyg‘usi sizda juda kuchli, bahslarda o‘z fikringizni mantiqiy isbotlashni va insonlarni himoya qilishni yoqtirasiz.'
  },
  {
    id: 'yurist',
    title: 'Yurist / Korporativ Huquqshunos',
    category: 'Huquq va Diplomatiya',
    categoryId: 'legal',
    iconName: 'FileText',
    accentColor: '#6366F1',
    shortDescription: 'Kompaniyalar, banklar va xalqaro korporatsiyalarning qonuniy faoliyatini boshqaruvchi yuridik maslahatchi.',
    fullDescription: 'Yurist har qanday muvaffaqiyatli biznesning poydevoridir. U shartnomalar tuzadi, investitsiya bitimlarini qonuniylashtiradi, davlat organlari bilan munosabatlarni tartibga soladi va kompaniyani katta jarima hamda xatarlardan himoya qiladi.',
    matchCriteria: ['legal', 'business'],
    skills: ['Korporativ va xo‘jalik huquqi', 'Xalqaro shartnomalar (Contracts Drafting)', 'Intellektual mulk va mualliflik huquqi', 'Legal Compliance va xavflar tahlili', 'Mehnat qonunchiligi'],
    softSkills: ['Tafsilotlarga cheksiz diqqatlilik', 'Mantiqiy izchillik', 'Ishonchlilik', 'Muzokarachilik'],
    education: [
      'TDYU, Jahon Iqtisodiyoti va Diplomatiya Universiteti (JIDU), Westminster (WIUT)',
      'LL.M (Xalqaro huquq magistraturasi) xorijiy universitetlarda',
      'Yirik yuridik firmalar yoki xalqaro konsaltingda amaliyot'
    ],
    facts: {
      demand2030: 'Fintech va global startaplar soni ko‘payishi sababli doimiy ehtiyoj',
      salaryRange: '$800 — $4,000+ / oyiga',
      growthTrend: 'Barqaror va xalqaro',
      futureRole: 'AI etika va global raqamli bitimlar bo‘yicha bosh yurist'
    },
    whyRecommended: 'Siz qoidalar, shartnomalar va qonuniy tartibni yaxshi tushunasiz, har qanday ishni xavfsiz va aniq qilishga moyilsiz.'
  },
  {
    id: 'diplomat',
    title: 'Diplomat / Xalqaro Elchi',
    category: 'Huquq va Diplomatiya',
    categoryId: 'legal',
    iconName: 'Globe',
    accentColor: '#8B5CF6',
    shortDescription: 'Davlatning xalqaro manfaatlari, elchixonalar va global muzokaralarda vakillik qiluvchi strategik yetakchi.',
    fullDescription: 'Diplomatlar urushlarning oldini oladi, xalqaro tinchlik, savdo bitimlari va madaniy aloqalarni o‘rnatadi. Ular bir necha tillarda erkin so‘zlashadi, diplomatik protokol qoidalariga rioya qiladi va davlat nufuzini butun dunyoda himoya qiladi.',
    matchCriteria: ['legal', 'social', 'business'],
    skills: ['Xalqaro huquq va munosabatlar', '3+ xorijiy tilni mukammal bilish', 'Diplomatik protokol va etiket', 'Murakkab ko‘p tomonlama muzokaralar', 'Geosiyosiy va strategik tahlil'],
    softSkills: ['Vazminlik va nozik sezgirlik', 'Xarizmatik yetakchilik', 'Keng dunyoqarash', 'Vatanparvarlik va sadoqat'],
    education: [
      'Jahon Iqtisodiyoti va Diplomatiya Universiteti (JIDU), Xalqaro munosabatlar institutlari (MGIMO, Fletcher, Sciences Po)',
      'Diplomatiya akademiyasi kurslari',
      'Tashqi ishlar vazirligi (TIV) va BMT/YEXHT missiyalarida amaliyot'
    ],
    facts: {
      demand2030: 'O‘zbekistonning jahon maydonidagi roli kuchayishi bilan yuqori talab',
      salaryRange: '$1,500 — $6,000+ / oyiga (Xorijdagi elchixonalar ta\'minoti bilan)',
      growthTrend: 'Elita va nufuzli',
      futureRole: 'Global iqlim va kosmik shartnomalar bo‘yicha maxsus vakil'
    },
    whyRecommended: 'Siz xalqaro siyosat, chet tillari va muzokaralar san\'atiga qiziqasiz, odamlar bilan murosaga kelish va elchilik mahoratingiz yuksak.'
  },
  {
    id: 'oshpaz',
    title: 'Shef-oshpaz / Restorator',
    category: 'Ijodkorlik va Dizayn',
    categoryId: 'creative',
    iconName: 'Utensils',
    accentColor: '#F97316',
    shortDescription: 'Yuqori gastronomiya, mualliflik taomlari va jahon kulinariya san\'atini yaratuvchi ijodkor oshpaz.',
    fullDescription: 'Zamonaviy shef-oshpaz shunchaki ovqat pishirmaydi, u haqiqiy san\'at asarini yaratadi. Ta\'mlar uyg‘unligi, ranglar gammasi, molekulyar oshxona usullari va zamonaviy restoran biznesi boshqaruvi aynan uning ijodiy tafakkuriga bog‘liq.',
    matchCriteria: ['creative', 'business'],
    skills: ['Milliy va jahon gastronomiya texnikasi', 'Molekulyar kulinariya asoslari', 'Menyu arxitekturasi va taomlar servirovkasi', 'Oziq-ovqat xavfsizligi va HACCP standartlari', 'Restoran kalkulyatsiyasi va boshqaruvi'],
    softSkills: ['Mukammal ta\'m va hid bilish qobiliyati', 'Tezlik va chaqqonlik', 'Jamoani boshqarish', 'Cheksiz pazandalik ilhomi'],
    education: [
      'Xalqaro kulinariya akademiyalari (Le Cordon Bleu, Paul Bocuse) yoki gastronomiya kollejlari',
      'Michelin yulduziga ega restoranlarda amaliyot o‘tash',
      'Mualliflik menyusi va taomlar taqdimoti tanlovlarida qatnashish'
    ],
    facts: {
      demand2030: 'Turizm va yuqori restoran sanoati har yili +25% ga o‘smoqda',
      salaryRange: '$700 — $4,000+ / oyiga (Mashhur sheflar uchun cheksiz)',
      growthTrend: 'Ijodiy va serdaromad',
      futureRole: 'Eko-gastronomiya va salomatlikka asoslangan kelajak taomlari bosh arxitektori'
    },
    whyRecommended: 'Siz o‘z qo‘llaringiz bilan ajoyib narsalar yaratishni, odamlarga quvonch va lazzat ulashishni sevasiz, ijodiy fantaziyangiz boy.'
  },
  {
    id: 'sudya',
    title: 'Sudya',
    category: 'Huquq va Diplomatiya',
    categoryId: 'legal',
    iconName: 'Gavel',
    accentColor: '#EC4899',
    shortDescription: 'Davlat nomidan qonuniy va adolatli qarorlar qabul qiluvchi, odil sudlov oliy vakili.',
    fullDescription: 'Sudya — jamiyatdagi eng mas\'uliyatli va hurmatga loyiq shaxslardan biridir. U faqat qonunga va o‘z vijdoniga bo‘ysungan holda nizolarni hal qiladi, haqiqatni nohaqlikdan ajratadi va jamiyatda tinchlik hamda adolat barqarorligini ta\'minlaydi.',
    matchCriteria: ['legal', 'social'],
    skills: ['Barcha sohaviy qonunlar va kodekslarni chuqur bilish', 'Dalillar va faktlarni xolis baholash', 'Sud majlislarini boshqarish madaniyati', 'Qonuniy qaror va ajrimlarni asoslab yozish', 'Huquqiy tahlil'],
    softSkills: ['Mutlaq xolislik va mustaqillik', 'Vijdon va qat\'iylik', 'Yuksak axloqiy fazilatlar', 'Hissiyotlarga berilmaslik'],
    education: [
      'Toshkent Davlat Yuridik Universiteti (TDYU)',
      'O‘zbekiston Respublikasi Sudyalar oliy maktabi',
      'Sud apparatida va yuridik sohada kamida 7-10 yillik qat\'iy talab qilinadigan staj'
    ],
    facts: {
      demand2030: 'Sud tizimini raqamlashtirish bilan professional sudyalar nufuzi doimiy 1-o‘rinda',
      salaryRange: '$1,200 — $4,500+ / oyiga (Davlat tomonidan to‘liq ta\'minlangan)',
      growthTrend: 'Yuksak davlat martabasi',
      futureRole: 'Raqamli odil sudlov va sun\'iy intellekt dalillari bo‘yicha bosh sudya'
    },
    whyRecommended: 'Siz har doim xolis, qat\'iy va adolatli fikrlashga intilasiz. Haqiqatni topish va to‘g‘ri qaror qabul qilish sizning qon-qoningizda bor.'
  },
  {
    id: 'oqituvchi',
    title: 'O‘qituvchi / Zamonaviy Pedagog',
    category: 'Ijtimoiy va Ta\'lim',
    categoryId: 'social',
    iconName: 'GraduationCap',
    accentColor: '#10B981',
    shortDescription: 'Yangi avlodni tarbiyalovchi, zamonaviy EdTech texnologiyalaridan foydalanib bilim ulashuvchi zamonaviy pedagog.',
    fullDescription: '2030 yil o\'qituvchisi — shunchaki darslikni o\'qib beruvchi emas, balki murabbiy (mentor), ilhomlantiruvchi yetakchi va shaxsiy ta\'lim trayektoriyasini tuzuvchi mutaxassisdir. U o\'yinlashtirish (gamification) va interaktiv metodlar bilan o\'qishni sarguzashtga aylantiradi.',
    matchCriteria: ['social', 'creative'],
    skills: ['Interaktiv pedagogik metodlar', 'EdTech platformalar (Canvas, Kahoot, Notion)', 'Dastur tuzish (Curriculum Design)', 'Ommaviy nutq va notiqlik', 'Individual yondashuv'],
    softSkills: ['Sabr-toqat', 'Ilhomlantirish qobiliyati', 'Moslashuvchanlik', 'Pozitiv energiya'],
    education: [
      'Toshkent xalqaro ta\'lim universiteti, Nizomiy, Webster universiteti magistraturasi',
      'CELTA / TESOL (tillar uchun), Zamonaviy pedagogika sertifikatlari',
      'O\'quv materiallari va ochiq darslar muallifligi'
    ],
    facts: {
      demand2030: 'Sifatli va zamonaviy o\'qituvchilarga talab doimiy 1-o\'rinda',
      salaryRange: '$600 — $2,500+ / oyiga',
      growthTrend: 'Barqaror yuqori',
      futureRole: 'Shaxsiylashtirilgan ta\'lim mentori va EdTech kreatori'
    },
    whyRecommended: 'O\'z bilimlaringizni boshqalar bilan bo\'lishish, kimgadir nimadir o\'rgatish va yoshlarning o\'sishini ko\'rish sizga kuch beradi.'
  },
  {
    id: 'malumotlar-tahlilchisi',
    title: 'Ma\'lumotlar tahlilchisi',
    category: 'Texnologiya va IT',
    categoryId: 'tech',
    iconName: 'LineChart',
    accentColor: '#A855F7',
    shortDescription: 'Katta hajmdagi raqamli ma\'lumotlarni tahlil qilib, biznes uchun strategik qarorlar topuvchi tahlilchi.',
    fullDescription: 'Ma\'lumotlar — XXI asrning eng qimmatli xomashyosidir. Ma\'lumotlar tahlilchisi millionlab yozuvlar, foydalanuvchilar harakati va moliyaviy ko\'rsatkichlar ichidan qonuniyatlarni topadi va kompaniya rahbarlariga to\'g\'ri yo\'nalishni ko\'rsatib beradi.',
    matchCriteria: ['tech', 'science', 'business'],
    skills: ['SQL va ma\'lumotlar bazalari', 'Python (Pandas, NumPy)', 'Power BI / Tableau', 'Ehtimollar nazariyasi va statistika', 'A/B testlash', 'Data Storytelling'],
    softSkills: ['Tahliliy fikrlash', 'Faktlarga asoslanish', 'Murakkab ma\'lumotlarni sodda tushuntirish', 'Diqqatlilik'],
    education: [
      'Amaliy matematika, statistika, iqtisodiy kibernetika yoki data science fakultetlari',
      'IBM Data Analyst Professional Certificate, Datacamp, Kaggle musobaqalari',
      'Haqiqiy biznes ma\'lumotlar to\'plamlari (datasets) bilan ishlangan tahliliy hisobotlar'
    ],
    facts: {
      demand2030: 'Eng tez o\'sayotgan sohalardan biri (+32%)',
      salaryRange: '$900 — $4,000+ / oyiga',
      growthTrend: 'Ekstremal yuqori',
      futureRole: 'AI ma\'lumotlar arxitektori va bashoratchi tahlilchi'
    },
    whyRecommended: 'Raqamlar, jadvallar va mantiqiy bog\'liqliklarni o\'rganish sizga zavq bag\'ishlaydi, tahliliy fikrlashingiz juda kuchli.'
  },
  {
    id: 'kiberxavfsizlik-mutaxassisi',
    title: 'Kiberxavfsizlik mutaxassisi',
    category: 'Texnologiya va IT',
    categoryId: 'tech',
    iconName: 'ShieldAlert',
    accentColor: '#EF4444',
    shortDescription: 'Raqamli tizimlar, ma\'lumotlar bazalari va tarmoqlarni kiberhujumlardan himoya qiluvchi xavfsizlik himoyachisi.',
    fullDescription: 'Har kuni dunyo bo\'ylab milliardlab kiberhujumlar sodir bo\'ladi. Kiberxavfsizlik mutaxassisi banklar, davlat idoralari va yirik korporatsiyalarning serverlarini xakerlardan himoya qiladi, zaifliklarni aniqlaydi va mustahkam xavfsizlik devorlarini quradi.',
    matchCriteria: ['tech', 'engineering'],
    skills: ['Tarmoq protokollari (TCP/IP, DNS, VPN)', 'Linux boshqaruvi', 'Penetration Testing (Ethical Hacking)', 'Kriptografiya asoslari', 'SIEM tizimlari', 'Python / Bash skriptlari'],
    softSkills: ['Strategik tafakkur', 'Stressga chidamlilik', 'Tafsilotlarga o\'ta e\'tiborlilik', 'Tezkor qaror qabul qilish'],
    education: [
      'Axborot xavfsizligi, kompyuter muhandisligi yo\'nalishlari',
      'CompTIA Security+, Certified Ethical Hacker (CEH), CISSP sertifikatlari',
      'TryHackMe, Hack The Box platformalarida amaliy laboratoriyalar'
    ],
    facts: {
      demand2030: 'Xalqaro miqyosda 3.5 million mutaxassis yetishmovchiligi mavjud',
      salaryRange: '$1,200 — $5,000+ / oyiga',
      growthTrend: 'O\'ta yuqori',
      futureRole: 'Kvanta xavfsizligi va AI tahdidlarini bartaraf etuvchi mutaxassis'
    },
    whyRecommended: 'Siz xavflarni oldindan ko\'ra bilish, himoya tizimlarini mustahkamlash va murakkab jumboqlarni yechishga moyilsiz.'
  },
  {
    id: 'arxitektor',
    title: 'Arxitektor',
    category: 'Amaliy va Muhandislik',
    categoryId: 'engineering',
    iconName: 'Building2',
    accentColor: '#F59E0B',
    shortDescription: 'Kelajak shaharlari, ekologik aqlli binolar va zamonaviy makonlarni loyihalovchi ijodkor muhandis.',
    fullDescription: 'Arxitektura — san\'at va fizika tutashgan nuqtadir. Arxitektor faqat chiroyli bino chizmaydi, balki insonlarning yashash sifati, energiya tejamkorligi va ekologik barqarorlikni ta\'minlaydigan kelajak makonini bunyod etadi.',
    matchCriteria: ['engineering', 'creative'],
    skills: ['AutoCAD, Revit, Archicad', '3D modellashtirish (3ds Max, Rhino, Blender)', 'Fazoviy geometriya', 'Ekologik qurilish standartlari (LEED)', 'BIM texnologiyalari', 'Materialshunoslik'],
    softSkills: ['Fazoviy tasavvur', 'Ijodiy qarash', 'Mijozlar bilan muzokara', 'Sabr va aniqlik'],
    education: [
      'Toshkent arxitektura-qurilish universiteti (TAQI), xalqaro arxitektura akademiyalari',
      'BIM modellash bo\'yicha xalqaro Autodesk sertifikatlari',
      'Haqiqiy shaharsozlik yoki bino konseptsiyalari aks etgan portfolio'
    ],
    facts: {
      demand2030: 'Aqlli shaharlar (Smart Cities) qurilishi tufayli +20% o\'sish',
      salaryRange: '$800 — $3,800+ / oyiga',
      growthTrend: 'Barqaror va nufuzli',
      futureRole: 'Eko-kelajak va barqaror shaharsozlik bosh arxitektori'
    },
    whyRecommended: 'Sizda mukammal fazoviy tasavvur, chizmachilikka qiziqish va atrof-muhitni go\'zal qilish istagi uyg\'un.'
  },
  {
    id: 'psixolog',
    title: 'Psixolog',
    category: 'Ijtimoiy va Ta\'lim',
    categoryId: 'social',
    iconName: 'HeartHandshake',
    accentColor: '#F43F5E',
    shortDescription: 'Inson ruhiyati, xulq-atvori va emotsional holatini tushunish hamda ruhiy salomatlikni mustahkamlash bo\'yicha mutaxassis.',
    fullDescription: 'Zamonaviy shiddatli hayotda insonlarning ruhiy salomatligi birinchi o\'ringa chiqmoqda. Psixolog insonlarga stressni yengish, o\'zini anglash, munosabatlarni yaxshilash va hayotiy qiyinchiliklardan chiqishga professional yo\'l ko\'rsatadi.',
    matchCriteria: ['social', 'science'],
    skills: ['Faol tinglash texnikalari', 'Kognitiv-xulq-atvor terapiyasi (KPT) asoslari', 'Psixodiagnostika testlari', 'Emotsional intellekt boshqaruvi', 'Konsultatsiya ko\'nikmalari'],
    softSkills: ['Cheksiz empatiya', 'Sir saqlash va etika', 'Hukm qilmaslik qobiliyati', 'Chuqur kuzatuvchanlik'],
    education: [
      'O\'zMU, Nizomiy nomidagi pedagogika universiteti psixologiya fakultetlari',
      'Xalqaro psixoterapiya va psixologik konsultatsiya akkreditatsiyalari',
      'Superviziya nazorati ostida amaliyot o\'tash'
    ],
    facts: {
      demand2030: 'Ruhiy salomatlikka e\'tibor oshishi hisobiga +30% o\'sish',
      salaryRange: '$600 — $3,000+ / oyiga',
      growthTrend: 'O\'ta yuqori o\'suvchi',
      futureRole: 'Korporativ farovonlik va kiber-psixologiya yetakchisi'
    },
    whyRecommended: 'Insonlarni tushunish, ularni eshita olish va ruhiy jihatdan qo\'llab-quvvatlash sizning eng kuchli tomoningizdir.'
  },
  {
    id: 'iqtisodchi',
    title: 'Iqtisodchi',
    category: 'Biznes va Moliya',
    categoryId: 'business',
    iconName: 'Coins',
    accentColor: '#EAB308',
    shortDescription: 'Kompaniyalar va davlat miqyosida moliyaviy resurslarni rejalashtiruvchi va bozorlarni tahlil qiluvchi mutaxassis.',
    fullDescription: 'Iqtisodchi — pul oqimlari, investitsiyalar va bozor tebranishlarini boshqaruvchi aql markazidir. U xarajatlarni optimallashtiradi, daromadni oshirish modellarini tuzadi va kelajakdagi moliyaviy inqirozlardan korxonalarni asrab qoladi.',
    matchCriteria: ['business', 'tech', 'science'],
    skills: ['Moliyaviy modellashtirish (Financial Modeling)', 'Murakkab Excel / Google Sheets', 'Makro va mikroiqtisodiy tahlil', 'Buxgalteriya va soliq qonunchiligi', 'Investitsiya baholash'],
    softSkills: ['Strategik hisob-kitob', 'Xavflarni baholash (Risk Management)', 'Muzokaralar olib borish', 'Aniqlik'],
    education: [
      'Toshkent Davlat Iqtisodiyot Universiteti (TDIU), WIUT, MDIST, Jahon Iqtisodiyoti va Diplomatiya Universiteti (JIDU)',
      'ACCA, CFA, CIMA xalqaro moliya sertifikatlari',
      'Investitsiya portfeli va bozor tahlili bo\'yicha amaliy ishlar'
    ],
    facts: {
      demand2030: 'Fintech va global iqtisodiyot rivoji bilan +22% talab',
      salaryRange: '$800 — $3,500+ / oyiga',
      growthTrend: 'Yuqori',
      futureRole: 'Fintech strategisti va AI asosidagi investitsiya boshqaruvchisi'
    },
    whyRecommended: 'Siz mantiqiy hisob-kitoblarni yaxshi ko\'rasiz, moliyaviy erkinlik va resurslarni oqilona taqsimlashga qiziqasiz.'
  },
  {
    id: 'tadbirkor',
    title: 'Tadbirkor / Startap Asoschisi',
    category: 'Biznes va Moliya',
    categoryId: 'business',
    iconName: 'Rocket',
    accentColor: '#38BDF8',
    shortDescription: 'Yangi biznes loyihalar, startaplar asoschisi va innovatsion yechimlarni bozorga olib chiquvchi yetakchi.',
    fullDescription: 'Tadbirkor imkoniyatlarni boshqalar muammo ko\'rgan joyda ko\'radi. U jamoani birlashtiradi, g\'oyani mahsulotga aylantiradi, tavakkal qiladi va yangi ish o\'rinlari yaratadi. Zamonaviy tadbirkorlik texnologik va global miqyosda fikrlashni talab etadi.',
    matchCriteria: ['business', 'social', 'creative'],
    skills: ['Biznes model qurish (Lean Canvas)', 'Moliya va unit-iqtisodiyot', 'Jamoani boshqarish (Leadership)', 'Sotuv va taqdimot mahorati (Pitching)', 'Mahsulot boshqaruvi (Product Management)'],
    softSkills: ['Tavakkalchilik jasorati', 'Liderlik va ishontirish', 'Krizis sharoitida tez qaror qilish', 'Mustahkam iroda'],
    education: [
      'Biznes boshqaruvi (BBA / MBA), Startap akseleratorlar (Y Combinator Startup School, IT Park)',
      'Harvard Business Publishing, Coursera Entrepreneurship dasturlari',
      'Haqiqiy startap prototipi va ilk mijozlar tajribasi'
    ],
    facts: {
      demand2030: 'Yangi ish o\'rinlarining 70% dan ortig\'i startaplar tomonidan yaratiladi',
      salaryRange: '$1,500 — $10,000+ / oyiga (cheklanmagan)',
      growthTrend: 'O\'ta yuqori',
      futureRole: 'Global texnologik startaplar va barqaror bizneslar asoschisi'
    },
    whyRecommended: 'Sizda liderlik xislatlari, mustaqillik, o\'z g\'oyalaringizni hayotga tatbiq etishga bo\'lgan kuchli ichki ishtiyoq bor.'
  },
  {
    id: 'biolog',
    title: 'Biolog / Biotexnolog',
    category: 'Ilm-fan va Tibbiyot',
    categoryId: 'science',
    iconName: 'Dna',
    accentColor: '#10B981',
    shortDescription: 'Tirik organizmlar, genetika, mikrobiologiya va ekologik tizimlarni o\'rganuvchi tadqiqotchi olim.',
    fullDescription: 'Zamonaviy biologiya laboratoriya mikroskopi bilan cheklanib qolmaydi. Bioinformatika, genetik muhandislik (CRISPR), ekologik toza oziq-ovqatlar yaratish va yangi dorilar sintezi biologlarning qo\'lidadir.',
    matchCriteria: ['science', 'tech'],
    skills: ['Molekulyar biologiya usullari', 'Genetik ketma-ketlik tahlili (Sequencing)', 'Bioinformatika asoslari (Python, R)', 'Laboratoriya uskunalari bilan ishlash', 'Ilmiy maqolalar yozish'],
    softSkills: ['Ilmiy qiziquvchanlik', 'Muntazamlik va sinchkovlik', 'Gipoteza ilgari surish', 'Ekologik fikrlash'],
    education: [
      'O\'zMU Biologiya fakulteti, Fanlar Akademiyasi institutlari, xorijiy biotexnologiya markazlari',
      'Nature, Science jurnallari tadqiqotlari bilan ishlash, Coursera Genetics kurslari',
      'Laboratoriya tajribalari va bioinformatik modellashtirish'
    ],
    facts: {
      demand2030: 'Biotexnologiyalar asrida +25% o\'sish kutilmoqda',
      salaryRange: '$700 — $3,200+ / oyiga',
      growthTrend: 'Ilmiy-istiqbolli',
      futureRole: 'Sintetik biologiya va uzoq umr ko\'rish (longevity) tadqiqotchisi'
    },
    whyRecommended: 'Tabiat qonunlari, hujayralar sirlari, DNK va hayotning kelib chiqishi siz uchun eng qiziqarli mavzulardandir.'
  },
  {
    id: 'grafik-dizayner',
    title: 'Grafik dizayner va 3D Rassom',
    category: 'Ijodkorlik va Dizayn',
    categoryId: 'creative',
    iconName: 'Sparkles',
    accentColor: '#F43F5E',
    shortDescription: 'Brend identifikatsiyasi, vizual illyustratsiyalar, 3D renderlar va reklama san\'atini yaratuvchi ijodkor.',
    fullDescription: 'Grafik dizayner brendlarga jon bag\'ishlaydi. Logotiplar, qadoqlash dizaynlari, ijtimoiy tarmoqlar uchun vizuallar va 3D modellar orqali mahsulotning xarakterini va ruhini millionlab odamlarga yetkazadi.',
    matchCriteria: ['creative'],
    skills: ['Adobe Photoshop, Illustrator, InDesign', 'Blender / Cinema 4D (3D)', 'Tipografika va ranglar nazariyasi', 'Brending va Identity yaratish', 'Motion Graphics (After Effects)'],
    softSkills: ['Kreativlik va yangilikka intilish', 'Mijoz talabini his qilish', 'Tanqidni to\'g\'ri qabul qilish', 'Vaqtni rejalashtirish (Deadline)'],
    education: [
      'Kamolliddin Behzod nomidagi Milliy rassomlik va dizayn instituti (MRDI)',
      'Adobe Certified Professional, Skillshare, Domestika master-klasslari',
      'Behance va ArtStation platformalarida taqdim etilgan to\'liq brending portfoliolari'
    ],
    facts: {
      demand2030: 'Vizual kontent talabi har yili +18% ga oshmoqda',
      salaryRange: '$600 — $3,000+ / oyiga',
      growthTrend: 'Barqaror ijodiy',
      futureRole: 'Generativ san\'at art-direktori va 3D virtual olamlar dizayneri'
    },
    whyRecommended: 'Sizning tasavvuringiz boy, ranglar va shakllar orqali his-tuyg\'ularni ifodalashni yaxshi ko\'rasiz.'
  },
  {
    id: 'marketing-mutaxassisi',
    title: 'Marketing mutaxassisi',
    category: 'Biznes va Moliya',
    categoryId: 'business',
    iconName: 'Megaphone',
    accentColor: '#8B5CF6',
    shortDescription: 'Mahsulotlarni ommalashtiruvchi, maqsadli auditoriyani jalb qiluvchi va raqamli reklama strategiyasini boshqaruvchi mutaxassis.',
    fullDescription: 'Dunyodagi eng zo\'r mahsulot ham yaxshi marketingsiz hech kimga yetib bormaydi. Zamonaviy marketolog — bu kreativ hikoyachi va sovuqqon raqamlar tahlilchisining birikmasidir. U SMM, SEO, Target, Influencer marketing va kontent strategiyasini mukammal boshqaradi.',
    matchCriteria: ['business', 'creative', 'social'],
    skills: ['Raqamli marketing (SMM, Targeted Ads)', 'Google Analytics / Meta Business Suite', 'Kopirayting va Storytelling', 'SEO optimallashtirish', 'Kompaniya brend strategiyasi'],
    softSkills: ['Auditoriyani his qilish', 'Ijodiy g\'oyalarni tez sinash', 'Muloqotchanlik', 'Trendlarni tez ilg\'ab olish'],
    education: [
      'Marketing, jamoatchilik bilan aloqalar (PR) yoki jurnalistika yo\'nalishlari',
      'HubSpot Academy, Meta Certified Digital Marketing Associate, Google Ads sertifikatlari',
      'Haqiqiy kompaniyalar uchun o\'tkazilgan muvaffaqiyatli reklama kampaniyalari keyslari'
    ],
    facts: {
      demand2030: 'E-commerce va global brendlar o\'sishi bilan +24% ehtiyoj',
      salaryRange: '$700 — $3,500+ / oyiga',
      growthTrend: 'Yuqori dinamik',
      futureRole: 'AI-kontent strategisti va o\'sish xakeri (Growth Hacker)'
    },
    whyRecommended: 'Siz odamlar bilan tez til topishasiz, ijtimoiy tarmoqlar trendlarini sezasiz va yangi mahsulotlarni ommaga taqdim etishni yoqtirasiz.'
  },
  {
    id: 'ilmiy-tadqiqotchi',
    title: 'Ilmiy tadqiqotchi / Olim',
    category: 'Ilm-fan va Tibbiyot',
    categoryId: 'science',
    iconName: 'Microscope',
    accentColor: '#3B82F6',
    shortDescription: 'Yangi bilimlarni kashf etuvchi, fundamental fanlarni rivojlantiruvchi va sun\'iy intellekt nazariyalarini tadqiq qiluvchi olim.',
    fullDescription: 'Ilmiy tadqiqotchi insoniyat bilimlari chegarasini kengaytiradi. Kosmos sirlari, kvant hisoblashlari, sun\'iy umumiy intellekt (AGI) yoki yangi energiya manbalarini kashf etish aynan tadqiqotchilar mehnati tufayli sodir bo\'ladi.',
    matchCriteria: ['science', 'tech'],
    skills: ['Ilmiy metodologiya va gipotezalarni tekshirish', 'Matematik modellashtirish', 'Akademik maqolalar yozish (LaTeX)', 'Katta ma\'lumotlar tahlili', 'Ilmiy grantlar bilan ishlash'],
    softSkills: ['Cheksiz intellektual chanqoqlik', 'Yillar davomida bir masala ustida ishlash sabri', 'Xolislik', 'Kritik ilmiy tafakkur'],
    education: [
      'Yetakchi jahon universitetlari (MIT, Oxford, Cambridge, KAIST) yoki O\'zbekiston Milliy Universiteti magistratura/doktorantura (PhD)',
      'Scopus va Web of Science jurnallarida chop etilgan nufuzli ilmiy maqolalar',
      'Xalqaro ilmiy konferensiyalarda ma\'ruzalar bilan ishtirok etish'
    ],
    facts: {
      demand2030: 'Chuqur ilmiy texnologiyalar (DeepTech) sababli +30% talab',
      salaryRange: '$1,000 — $6,000+ / oyiga (Grantlar va xalqaro laboratoriyalar)',
      growthTrend: 'Yuksak intellektual',
      futureRole: 'Sun\'iy umumiy intellekt (AGI) va Kvant hisoblashlari tadqiqot rahbari'
    },
    whyRecommended: 'Siz yuzaki bilimlardan qoniqmaysiz, har bir hodisaning tub mohiyatiga yetib borish va yangi narsalarni kashf etish sizning maqsadingizdir.'
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'Barcha yo‘nalishlar', iconName: 'Layers' },
  { id: 'tech', name: 'Texnologiya va IT', iconName: 'Cpu' },
  { id: 'creative', name: 'Ijodkorlik va Dizayn', iconName: 'Sparkles' },
  { id: 'business', name: 'Biznes va Moliya', iconName: 'TrendingUp' },
  { id: 'science', name: 'Ilm-fan va Tibbiyot', iconName: 'Atom' },
  { id: 'social', name: 'Ijtimoiy va Ta\'lim', iconName: 'Users' },
  { id: 'engineering', name: 'Amaliy va Muhandislik', iconName: 'Compass' },
  { id: 'legal', name: 'Huquq va Diplomatiya', iconName: 'Scale' }
];
