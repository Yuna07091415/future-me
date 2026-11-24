export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Bo‘sh vaqtingizda sizni eng ko‘p nima ilhomlantiradi va o‘ziga jalb qiladi?",
    subtitle: "O‘zingizga eng yaqin bo‘lgan faoliyat turini tanlang",
    options: [
      {
        text: "Yangi dasturlar, kod yozish yoki elektronika/qurilmalar sozlash",
        scores: { tech: 3, engineering: 2 }
      },
      {
        text: "Oshxonada yangi lazzatli taomlar tayyorlash yoki vizual san'at va dizayn yaratish",
        scores: { creative: 3 }
      },
      {
        text: "Moliya, daromad-xarajatlar hisobi va biznes rejalarni tahlil qilish",
        scores: { business: 3 }
      },
      {
        text: "Bahslarda adolatni himoya qilish, qonunlar yoki xalqaro siyosatni o‘rganish",
        scores: { legal: 3 }
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
        text: "Huquq asoslari, tarix, jamiyatshunoslik va xorijiy chet tillari",
        scores: { legal: 3, social: 1 }
      },
      {
        text: "Biologiya, anatomiya, kimyo va inson salomatligi",
        scores: { science: 3 }
      },
      {
        text: "Fizika, chizmachilik, mexanika va amaliy modellashtirish",
        scores: { engineering: 3 }
      }
    ]
  },
  {
    id: 3,
    question: "Do‘stlaringiz bilan birgalikda katta loyiha qilayotganingizda, o‘zingizga qaysi vazifani tanlardingiz?",
    subtitle: "Jamoada o‘z rolingizni belgilang",
    options: [
      {
        text: "Barcha moliyaviy hisob-kitoblar, smeta va byudjetni aniq yuritish",
        scores: { business: 3 }
      },
      {
        text: "Loyiha shartnomalarini tuzish, qoidalarni belgilash va kelishmovchiliklarni xolis yechish",
        scores: { legal: 3 }
      },
      {
        text: "Texnik mexanizmlar, qurilmalar yoki dasturiy platformani sozlash",
        scores: { tech: 2, engineering: 2 }
      },
      {
        text: "Mehmonlarni kutib olish, jamoani qo‘llab-quvvatlash va muloqotni oliy darajada tashkil qilish",
        scores: { social: 3 }
      }
    ]
  },
  {
    id: 4,
    question: "Kutilmagan murakkab muammoga duch kelganingizda, uni qanday hal qilishga odatlangansiz?",
    subtitle: "Muammolarni yechish falsafangiz",
    options: [
      {
        text: "Mavjud qonunlar, qoidalar va dalillarga tayangan holda xolis hukm chiqaraman",
        scores: { legal: 3 }
      },
      {
        text: "Muammoni mayda qismlarga ajratib, qadamma-qadam muhandislik algoritmini tuzaman",
        scores: { tech: 2, engineering: 2 }
      },
      {
        text: "Standart qoidalardan chetga chiqib, nostandart va ijodiy/kulinariya yechim o‘ylab topaman",
        scores: { creative: 3 }
      },
      {
        text: "Vaziyatni sovuqqonlik bilan tahlil qilib, insonlar xavfsizligi va tinchligini birinchi o‘ringa qo‘yaman",
        scores: { social: 2, science: 2 }
      }
    ]
  },
  {
    id: 5,
    question: "Sizga dunyoni yaxshiroq tomonga o‘zgartirish imkoniyati berilsa, qaysi sohaga e'tibor qaratardingiz?",
    subtitle: "Sizning global orzuingiz",
    options: [
      {
        text: "Dunyo bo‘ylab adolatni o‘rnatish, inson huquqlarini himoya qilish va xalqaro tinchlik",
        scores: { legal: 3, social: 1 }
      },
      {
        text: "Odamlarni og‘ir kasalliklardan qutqaradigan ilg‘or tibbiyot va davolash usullari",
        scores: { science: 3 }
      },
      {
        text: "Avtomatlashtirilgan aqlli mashinalar, robotlar va ekologik energiya tizimlarini qurish",
        scores: { engineering: 3, tech: 1 }
      },
      {
        text: "Yoshlarga mehr bilan ta'lim berish va ularning qobiliyatlarini uyg‘otish",
        scores: { social: 3 }
      }
    ]
  },
  {
    id: 6,
    question: "Biror yangi tashkilot yoki korxonaga borganingizda, diqqatingizni birinchi nima tortadi?",
    subtitle: "Kuzatuvchanlik vektoringiz",
    options: [
      {
        text: "U yerda moliyaviy oqimlar, hisob-kitoblar va kassa tizimi qanday yo‘lga qo‘yilganligi",
        scores: { business: 3 }
      },
      {
        text: "Xodimlarning kiyinish madaniyati, xushmuomalaligi va mijozlarga xizmat ko‘rsatish servisi",
        scores: { social: 3 }
      },
      {
        text: "Qonuniy talablarga rioya etilishi, shartnomalar va tartib-intizomning mustahkamligi",
        scores: { legal: 3 }
      },
      {
        text: "Binodagi texnik qurilmalar, konditsioner, yoritish va avtomatika qanday ishlashi",
        scores: { engineering: 3 }
      }
    ]
  },
  {
    id: 7,
    question: "Qaysi ish muhitida o‘zingizni eng qulay va ilhomlangan his qilgan bo‘lardingiz?",
    subtitle: "Kelajakdagi orzuingizdagi ish joyi",
    options: [
      {
        text: "Sud zali, elchixona yoki nufuzli yuridik konsalting idorasi",
        scores: { legal: 3 }
      },
      {
        text: "Zamonaviy shifoxona, operatsiya xonasi yoki tibbiy-diagnostika markazi",
        scores: { science: 3 }
      },
      {
        text: "Xalqaro samolyot borti, doimiy parvozlar va dunyo poytaxtlarida sayohat",
        scores: { social: 3 }
      },
      {
        text: "Mashhur restoran oshxonasi, eng yangi kulinariya uskunalari va ijodiy muhit",
        scores: { creative: 3 }
      }
    ]
  },
  {
    id: 8,
    question: "Sizga 100 million so‘m beg‘araz grant berilsa, uni qaysi maqsadga yo‘naltirardingiz?",
    subtitle: "Moliyaviy va hayotiy prioritetingiz",
    options: [
      {
        text: "Muhtojlarga bepul huquqiy yordam beruvchi advokatlik yoki inson huquqlari markazi ochish",
        scores: { legal: 3 }
      },
      {
        text: "Eng yangi kulinariya akademiyasida o‘qib, o‘z mualliflik restoran-brendimni yaratish",
        scores: { creative: 2, business: 2 }
      },
      {
        text: "Zamonaviy tibbiy asbob-uskunalar olib, shifokorlik mahoratimni oshirish",
        scores: { science: 3 }
      },
      {
        text: "Robototexnika laboratoriyasini jihozlab, yangi muhandislik qurilmasini sinash",
        scores: { engineering: 3 }
      }
    ]
  },
  {
    id: 9,
    question: "Odamlar sizdagi qaysi xarakter xususiyatini eng ko‘p qadrlashadi?",
    subtitle: "Sizning eng kuchli tomoningiz",
    options: [
      {
        text: "Xolisligim, har qanday vaziyatda adolatni himoya qila olishim va printsipialligim",
        scores: { legal: 3 }
      },
      {
        text: "Hisob-kitobdagi aniqligim, tejamkorligim va har bir tiyinga mas'uliyatim",
        scores: { business: 3 }
      },
      {
        text: "Xushmuomalaligim, tabassumim va har qanday sharoitda odamlarga xush kayfiyat berishim",
        scores: { social: 3 }
      },
      {
        text: "Buzilgan narsalarni tuzata olishim, qismlarni yig‘ish va muhandislik iqtidorim",
        scores: { engineering: 3 }
      }
    ]
  },
  {
    id: 10,
    question: "Qaysi mashg‘ulot bilan shug‘ullanganingizda vaqt qanday o‘tib ketganini sezmay qolasiz?",
    subtitle: "Oqim holati (Flow state)",
    options: [
      {
        text: "Qonun hujjatlarini o‘rganish, faktlarni solishtirish va huquqiy xulosalar yozish",
        scores: { legal: 3 }
      },
      {
        text: "Yangi retseptlar sinash, taom bezash va turli ziravorlar muvozanatini yaratish",
        scores: { creative: 3 }
      },
      {
        text: "Mikrosxemalarni kavsharlash, 3D modellar chizish yoki dvigatel qismlarini o‘rganish",
        scores: { engineering: 3 }
      },
      {
        text: "Moliyaviy jadvallar, soliq qoidalari va balans hisobotlarini tekshirish",
        scores: { business: 3 }
      }
    ]
  },
  {
    id: 11,
    question: "Kelajakda qaysi turdagi e'tirof siz uchun eng buyuk muvaffaqiyat bo‘lar edi?",
    subtitle: "Shaxsiy muvaffaqiyat mezoni",
    options: [
      {
        text: "Nohaq ayblangan begunoh insonni sudda oqlab, ozodlikka chiqarish",
        scores: { legal: 3 }
      },
      {
        text: "Xalqaro darajada tan olingan, Michelin yulduziga ega shef-oshpaz bo‘lish",
        scores: { creative: 3 }
      },
      {
        text: "Murakkab kasallikni muvaffaqiyatli davolab, inson hayotini saqlab qolish",
        scores: { science: 3 }
      },
      {
        text: "Yirik sanoat korxonasining bosh muhandisi bo‘lib, yangi elektrotexnikani ishga tushirish",
        scores: { engineering: 3 }
      }
    ]
  },
  {
    id: 12,
    question: "Internetda qanday kitoblar yoki videoroliklarni eng katta qiziqish bilan tomosha qilasiz?",
    subtitle: "Axborot iste'moli odatlaringiz",
    options: [
      {
        text: "Mashhur sud jarayonlari, yuridik detektivlar va xalqaro diplomatiya sirlari",
        scores: { legal: 3 }
      },
      {
        text: "Aviasiya hayoti, parvozlar xavfsizligi, chet tillarini o‘rganish va sayohat vloglari",
        scores: { social: 3 }
      },
      {
        text: "Mashhur shef-oshpazlar mahorat darslari, kulinariya san'ati va restoran obzorlari",
        scores: { creative: 3 }
      },
      {
        text: "Fizika, injenerlik kashfiyotlari, robotlar va gigant inshootlar qurilishi",
        scores: { engineering: 3 }
      }
    ]
  },
  {
    id: 13,
    question: "Katta jamoada keskin nizo yoki bahs kelib chiqqanda, o‘zingizni qanday tutasiz?",
    subtitle: "Muloqot va nizolarni hal qilish uslubingiz",
    options: [
      {
        text: "Ikkala tomonning dalillarini eshitib, qonun va adolat mezonlari bo‘yicha xolis yechim beraman",
        scores: { legal: 3 }
      },
      {
        text: "Hissiyotlarni tinchlantirib, odamlarga xushmuomalalik bilan muloyim yondashaman",
        scores: { social: 3 }
      },
      {
        text: "Muammoning texnik ildizini aniqlab, qismlarni ta'mirlash uslubida yechaman",
        scores: { engineering: 2, tech: 1 }
      },
      {
        text: "Moliyaviy yo‘qotishlarni hisoblab, tomonlarga eng foydali iqtisodiy bitim taklif qilaman",
        scores: { business: 3 }
      }
    ]
  },
  {
    id: 14,
    question: "Xavfsizlik va mas'uliyat haqida nima deb o‘ylaysiz?",
    subtitle: "Mas'uliyat hissi",
    options: [
      {
        text: "Qonun ustuvor bo‘lgan joyda tinchlik va adolat kafolatlangan bo‘ladi",
        scores: { legal: 3 }
      },
      {
        text: "Parvozdagi yoki xizmatdagi har bir insonning xavfsizligi birinchi o‘rinda turishi shart",
        scores: { social: 3 }
      },
      {
        text: "Bemorning hayoti va salomatligi uchun shifokor 100% mas'uliyatni bo‘yniga oladi",
        scores: { science: 3 }
      },
      {
        text: "Barcha mexanizmlar va hisob-kitoblar xatosiz, mustahkam bo‘lishi lozim",
        scores: { engineering: 2, business: 1 }
      }
    ]
  },
  {
    id: 15,
    question: "O‘zingizni 2030 yilda qanday tasavvur qilasiz?",
    subtitle: "Yakuniy kelajak nigohi",
    options: [
      {
        text: "Nufuzli advokat, odil sudya yoki O‘zbekiston manfaatlarini himoya qiluvchi xalqaro diplomat",
        scores: { legal: 3 }
      },
      {
        text: "Yetakchi klinika bosh shifokori yoki yangi dorilarni kashf etgan olim",
        scores: { science: 3 }
      },
      {
        text: "Global aviakompaniya bosh styuardessasi yoki nufuzli ta'lim loyihasi mentori",
        scores: { social: 3 }
      },
      {
        text: "Innovatsion robotlar yaratgan bosh injener yoki mashhur restoranlar tarmog‘i shef-oshpazi",
        scores: { engineering: 2, creative: 2 }
      }
    ]
  }
];
