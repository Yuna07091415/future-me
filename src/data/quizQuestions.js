export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Bo‘sh vaqtingizda sizni eng ko‘p nima ilhomlantiradi va o‘ziga jalb qiladi?",
    subtitle: "O‘zingizga eng yaqin bo‘lgan faoliyat turini tanlang",
    options: [
      {
        text: "Yangi dasturlar, ilovalar yoki kompyuter kodini o‘rganish va sinash",
        scores: { tech: 3, engineering: 1 }
      },
      {
        text: "Chiroyli illyustratsiyalar, interfeyslar yoki ijodiy dizaynlar chizish",
        scores: { creative: 3 }
      },
      {
        text: "Startap g‘oyalari, biznes strategiyalar va muvaffaqiyat hikoyalarini tahlil qilish",
        scores: { business: 3 }
      },
      {
        text: "Insonlar psixologiyasini tushunish, do‘stlarga qiyin damlarda maslahat va yordam berish",
        scores: { social: 3 }
      }
    ]
  },
  {
    id: 2,
    question: "Maktab yoki universitetda sizga qaysi fanlar guruhini o‘rganish osonroq va yoqimliroq tuyuladi?",
    subtitle: "Bilimlarni qabul qilish uslubingizga ko‘ra",
    options: [
      {
        text: "Informatika, algebra, mantiq va algoritmik masalalar",
        scores: { tech: 3, science: 1 }
      },
      {
        text: "Tasviriy san'at, chizmachilik, adabiyot va chet tillari",
        scores: { creative: 3 }
      },
      {
        text: "Biologiya, kimyo, fizika va tabiat sirlari laboratoriyalari",
        scores: { science: 3, engineering: 1 }
      },
      {
        text: "Iqtisodiyot, geografiya, huquq va jamoat ishlari",
        scores: { business: 2, social: 2 }
      }
    ]
  },
  {
    id: 3,
    question: "Do‘stlaringiz bilan birgalikda katta loyiha qilayotganingizda, o‘zingizga qaysi vazifani tanlardingiz?",
    subtitle: "Jamoada o‘z rolingizni belgilang",
    options: [
      {
        text: "Boshqaruv, rejani tuzish, vazifalarni taqsimlash va jamoani ruhlantirish",
        scores: { business: 3, social: 1 }
      },
      {
        text: "Loyihaning texnik qismi, serverlar, kod yoki mexanizmlarni sozlash",
        scores: { tech: 3, engineering: 1 }
      },
      {
        text: "Taqdimot slaydlarini tayyorlash, ranglar, logotip va vizual ko‘rinishni loyihalash",
        scores: { creative: 3 }
      },
      {
        text: "Loyihani odamlarga yetkazish, notiqlik, foydalanuvchilar bilan suhbat o‘tkazish",
        scores: { social: 2, business: 2 }
      }
    ]
  },
  {
    id: 4,
    question: "Kutilmagan murakkab muammoga duch kelganingizda, uni qanday hal qilishga odatlangansiz?",
    subtitle: "Muammolarni yechish falsafangiz",
    options: [
      {
        text: "Muammoni mayda qismlarga ajratib, qadamma-qadam algoritm tuzaman",
        scores: { tech: 2, science: 2 }
      },
      {
        text: "Standart qoidalardan chetga chiqib, nostandart va ijodiy yechim o‘ylab topaman",
        scores: { creative: 3 }
      },
      {
        text: "Mavjud resurslar va xarajatlarni hisoblab, eng tez va tejamkor yo‘lni tanlayman",
        scores: { business: 3 }
      },
      {
        text: "Boshqalar bilan maslahatlashib, umumiy kelishuv va hamjihatlik bilan yechaman",
        scores: { social: 3 }
      }
    ]
  },
  {
    id: 5,
    question: "Sizga dunyoni yaxshiroq tomonga o‘zgartirish imkoniyati berilsa, qaysi sohaga e'tibor qaratardingiz?",
    subtitle: "Sizning global orzuingiz",
    options: [
      {
        text: "Sun'iy intellekt va robotlar orqali insonlarning og‘ir mehnatini yengillatish",
        scores: { tech: 3, engineering: 2 }
      },
      {
        text: "Kasalliklarni butunlay yo‘q qiladigan yangi dorilar va biotibbiyot texnologiyalari",
        scores: { science: 3, social: 1 }
      },
      {
        text: "Har bir bolaga zamonaviy va sifatli ta'lim olish imkoniyatini yaratish",
        scores: { social: 3, creative: 1 }
      },
      {
        text: "Aqlli va ekologik toza shaharlar, me'moriy mo‘jizalar qurish",
        scores: { engineering: 3, creative: 1 }
      }
    ]
  },
  {
    id: 6,
    question: "Biror yangi buyum yoki mahsulot ko‘rganingizda, xayolingizga birinchi bo‘lib qanday savol keladi?",
    subtitle: "Qiziqish vektoringiz",
    options: [
      {
        text: "Bu qurilma ichi qanday tuzilgan va mexanizmi qanday ishlaydi?",
        scores: { engineering: 3, tech: 1 }
      },
      {
        text: "Buning dizayni qanchalik chiroyli va inson qo‘liga qanchalik qulay tushadi?",
        scores: { creative: 3 }
      },
      {
        text: "Buni ishlab chiqarish tannarxi qancha va undan qanday foyda olsa bo‘ladi?",
        scores: { business: 3 }
      },
      {
        text: "Bu mahsulot insonlarning qaysi dardi yoki ehtiyojini qondiradi?",
        scores: { social: 3 }
      }
    ]
  },
  {
    id: 7,
    question: "Qaysi ish muhitida o‘zingizni eng qulay va baxtli his qilgan bo‘lardingiz?",
    subtitle: "Kelajakdagi orzuingizdagi ish joyi",
    options: [
      {
        text: "Zamonaviy IT-ofis, 2-3 ta monitor, qahva va sevimli musiqa bilan kod yozish",
        scores: { tech: 3 }
      },
      {
        text: "San'at studiyasi, grafik planshet, erkin muhit va cheksiz ijod",
        scores: { creative: 3 }
      },
      {
        text: "Yirik biznes markazining baland qavati, muzokaralar zali va xalqaro uchrashuvlar",
        scores: { business: 3 }
      },
      {
        text: "Zamonaviy ilmiy laboratoriya, mikroskoplar va kashfiyotlar maydoni",
        scores: { science: 3, engineering: 1 }
      }
    ]
  },
  {
    id: 8,
    question: "Sizga 100 million so‘m beg‘araz grant berilsa, uni nima maqsadga yo‘naltirardingiz?",
    subtitle: "Moliyaviy va hayotiy prioritetingiz",
    options: [
      {
        text: "Kelajak texnologiyalariga asoslangan yangi startap loyihani ishga tushirardim",
        scores: { business: 3, tech: 1 }
      },
      {
        text: "Zamonaviy kompyuter va professional uskunalar olib, ijodiy mahsulot yaratardim",
        scores: { creative: 2, tech: 2 }
      },
      {
        text: "Ilmiy tadqiqot o‘tkazib, ixtiro yoki foydali ilmiy kashfiyot ustida ishlardim",
        scores: { science: 3 }
      },
      {
        text: "Muhtoj bolalar uchun bepul o‘quv markazi yoki xayriya fondi ochardim",
        scores: { social: 3 }
      }
    ]
  },
  {
    id: 9,
    question: "Odamlar sizdagi qaysi ijobiy xislatni eng ko‘p e'tirof etishadi?",
    subtitle: "Sizning eng kuchli tomoningiz",
    options: [
      {
        text: "Har doim mantiqiy va sovuqqon fikrlashim, faktlarga tayanishim",
        scores: { tech: 2, science: 2 }
      },
      {
        text: "Har qanday narsadan go‘zallik va o‘zgacha uslub yarata olishim",
        scores: { creative: 3 }
      },
      {
        text: "Odamlar bilan tez do‘stlashishim, tushunishim va sirdosh bo‘lishim",
        scores: { social: 3 }
      },
      {
        text: "Tashabbuskorligim, yetakchiligim va tavakkal qilishdan qo‘rqmasligim",
        scores: { business: 3 }
      }
    ]
  },
  {
    id: 10,
    question: "Qaysi mashg‘ulot bilan shug‘ullanganingizda vaqt qanday o‘tib ketganini sezmay qolasiz?",
    subtitle: "Oqim holati (Flow state)",
    options: [
      {
        text: "Qurilmalarni yig‘ish, tuzatish, modellar yasash yoki texnikani sozlash",
        scores: { engineering: 3, tech: 1 }
      },
      {
        text: "Kitoblar, ilmiy maqolalar mutolaa qilish yoki yangi faktlarni tadqiq qilish",
        scores: { science: 3 }
      },
      {
        text: "Rasm chizish, video montaj qilish, animatsiya yoki musiqa yaratish",
        scores: { creative: 3 }
      },
      {
        text: "Bozor tahlili, yangi xizmatlar ko‘rsatish va foydali kelishuvlar tuzish",
        scores: { business: 3 }
      }
    ]
  },
  {
    id: 11,
    question: "Kelajakda qaysi turdagi muvaffaqiyat siz uchun eng qadrli bo‘lar edi?",
    subtitle: "Shaxsiy muvaffaqiyat mezoni",
    options: [
      {
        text: "Millionlab odamlar har kuni foydalanadigan innovatsion platforma yaratish",
        scores: { tech: 3, business: 1 }
      },
      {
        text: "Menga o‘xshagan yuzlab yoshlarga yo‘l ko‘rsatib, ularni buyuk inson qilib tarbiyalash",
        scores: { social: 3 }
      },
      {
        text: "Insoniyat tarixiga kiradigan buyuk ilmiy kashfiyot yoki ixtiro muallifi bo‘lish",
        scores: { science: 3, engineering: 1 }
      },
      {
        text: "Xalqaro darajada e'tirof etilgan jahon brendi va korporatsiya qurish",
        scores: { business: 3 }
      }
    ]
  },
  {
    id: 12,
    question: "Internetda qanday videoroliklar yoki maqolalarni eng ko‘p ko‘rasiz?",
    subtitle: "Axborot iste'moli odatlaringiz",
    options: [
      {
        text: "Dasturlash darslari, sun'iy intellekt yangiliklari, yangi gadjetlar obzori",
        scores: { tech: 3 }
      },
      {
        text: "Kosmos, kvant fizikasi, inson miyasi sirlari va biologik tajribalar",
        scores: { science: 3 }
      },
      {
        text: "Dizayn trendlari, arxitektura durdonalari, 3D grafikalar va san'at",
        scores: { creative: 2, engineering: 2 }
      },
      {
        text: "Biznes tahlillar, investitsiyalar, psixologiya va yetakchilik ma'ruzalari",
        scores: { business: 2, social: 2 }
      }
    ]
  },
  {
    id: 13,
    question: "Katta jamoada ishlaganda o‘zingizni qanday qulayroq his qilasiz?",
    subtitle: "Muloqot va hamkorlik uslubi",
    options: [
      {
        text: "Aniq texnik topshiriq olib, diqqatni to‘liq sifatli natijaga qaratish",
        scores: { tech: 2, engineering: 2 }
      },
      {
        text: "Har doim odamlar orasida bo‘lish, ularni tinglash va ruhlantirish",
        scores: { social: 3 }
      },
      {
        text: "Umumiy strategiyani belgilash, maqsadlarni qo‘yish va jamoani yo‘naltirish",
        scores: { business: 3 }
      },
      {
        text: "G‘oyalar miya hujumida (Brainstorming) qatnashib, yangicha yondashuvlar berish",
        scores: { creative: 3 }
      }
    ]
  },
  {
    id: 14,
    question: "Xavfsizlik va barqarorlik haqida nima deb o‘ylaysiz?",
    subtitle: "Tavakkalchilik va xavfsizlik balansi",
    options: [
      {
        text: "Har qanday tizimda xavflarni oldindan ko‘rib, uni maksimal himoya qilish shart",
        scores: { tech: 2, engineering: 2 }
      },
      {
        text: "Katta natijaga erishish uchun tavakkal qilish va yangi yo‘llarni sinash zarur",
        scores: { business: 3 }
      },
      {
        text: "Eng asosiysi — atrofimizdagi insonlarning tinchligi, osoyishtaligi va birdamligi",
        scores: { social: 3 }
      },
      {
        text: "Doimiy qoidalarga bog‘lanib qolmasdan, erkinlik va ijodiy izlanish muhimroq",
        scores: { creative: 3 }
      }
    ]
  },
  {
    id: 15,
    question: "O‘zingizni 2030 yilda qanday tasavvur qilasiz?",
    subtitle: "Yakuniy kelajak nigohi",
    options: [
      {
        text: "Global texnologiya kompaniyasida yuqori darajadagi IT/AI muhandisi yoki yetakchisi",
        scores: { tech: 3, engineering: 1 }
      },
      {
        text: "Mashhur dizayn agentligi asoschisi yoki xalqaro nufuzli ijodkor",
        scores: { creative: 3 }
      },
      {
        text: "Muvaffaqiyatli tadbirkor, investor yoki yirik biznes imperiyasi egasi",
        scores: { business: 3 }
      },
      {
        text: "Odamlarning hayotini saqlab qoluvchi shifokor, olim yoki mehrli ustoz",
        scores: { social: 2, science: 2 }
      }
    ]
  }
];
