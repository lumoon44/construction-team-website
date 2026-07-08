/* ============================================================
   КОНФИГ
   ============================================================ */
const SITE_CONFIG = {
  company: {
    name: "Lumoon",
    nameEn: "Lumoon",
    tagline: "Строим пространство, в котором хочется жить",
    description: "Строительная компания из Костромы. Благоустройство, ландшафтное освещение, архитектурная подсветка и электромонтаж. Работаем в Костроме, Ярославле, Иванове, Вологде, Владимире, Твери, Нижнем Новгороде и Москве.",
    founded: "2026",
    city: "Кострома",
    regions: ["Кострома", "Ярославль", "Иваново", "Вологда", "Владимир", "Тверь", "Нижний Новгород", "Москва"],
    legalName: "ИП Лубнин Матфей Николаевич",
    inn: "441403203883",
  },
  contacts: {
    phone: "+7 (950) 245-93-17",
    phoneHref: "tel:+79502459317",
    email: "44lumoon@gmail.com",
    address: "г. Кострома",
    whatsapp: "https://wa.me/79502459317",
    telegram: "https://t.me/lumoon44",
    vk: "https://vk.com/lumoon44",
  },
  colors: {
    accent: "#6aaad8",
    bg: "#07080d",
    bgCard: "#0b0d18",
    textPrimary: "#c8d8ec",
    textMuted: "#4a5e72",
  },
};

/* ============================================================
   ДАННЫЕ ПОРТФОЛИО
   ============================================================ */
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    src: "assets/portfolio/work-01.jpg",
    title: "Вечерняя подсветка загородного сада",
    description: "Вечерняя подсветка раскрывает объём сада. Нейтральный свет дорожек сочетается с тёплым свечением крон. Подчёркнута фактура камня и рельеф участка.",
    category: "Ландшафтное освещение",
    location: "Загородный дом, Костромская область",
    caseNum: "CASE 001",
    year: "2024",
  },
  {
    id: 2,
    src: "assets/portfolio/work-02.jpg",
    title: "Классический сад со скрытой LED-подсветкой",
    description: "Скрытая LED-подсветка подпорной стенки и акцент на зелени. Создали плавный переход света, подчеркнули фактуру растений и обеспечили безопасность передвижения по настилу.",
    category: "Ландшафтное освещение",
    location: "Загородный участок, Ярославская область",
    caseNum: "CASE 002",
    year: "2025",
  },
  {
    id: 3,
    src: "assets/portfolio/work-03.jpg",
    title: "Уютная костровая зона для загородного отдыха",
    description: "Костровая зона с качелями для загородного отдыха. Пространство создано для душевных встреч и расслабления в кругу близких.",
    category: "Благоустройство территории",
    location: "Кострома, дер. Кузьмище",
    caseNum: "CASE 003",
    year: "2025",
  },
];

/* ============================================================
   ДАННЫЕ ПРАЙСА
   ============================================================ */
const PRICING_DATA = [
  {
    id: "design",
    sectionLabel: "Проектные работы и визуализация",
    note: "Выезд специалиста на замер и консультация — бесплатно. Стоимость проекта зависит от площади и состава работ.",
    groups: [
      {
        title: "Проектные работы и визуализация",
        rows: [
          { name: "Выезд специалиста на замер и консультация",                  unit: "выезд",   price: "Бесплатно" },
          { name: "Эскизный проект (планировка дорожек, зон, схемы)",           unit: "сотка",   price: "от 1 500"  },
          { name: "3D-визуализация участка (перспективные виды)",               unit: "вид",     price: "от 5 000"  },
          { name: "Дендроплан с подбором ассортимента растений",               unit: "сотка",   price: "от 1 000"  },
          { name: "Схема посадок (разбивочный чертёж)",                         unit: "сотка",   price: "от 800"    },
          { name: "Проект системы автоматического полива",                     unit: "сотка",   price: "от 1 200"  },
          { name: "Проект дренажной системы",                                  unit: "сотка",   price: "от 1 000"  },
          { name: "Схема вертикальной планировки (организация рельефа)",        unit: "сотка",   price: "от 1 500"  },
          { name: "Светоплан (опоры, светильники, трассы кабеля)",              unit: "сотка",   price: "от 1 200"  },
          { name: "Комплексный проект благоустройства (все разделы)",           unit: "участок", price: "от 25 000" },
        ],
      },
    ],
  },
  {
    id: "landscape-light",
    sectionLabel: "Ландшафтное освещение",
    note: "Дополнительные работы по ландшафтному освещению — 650 ₽ / час·чел. Работы внутри здания рассчитываются по разделу «Электромонтажные работы».",
    groups: [
      {
        title: "Ландшафтное освещение",
        rows: [
          { name: "Копка траншеи (0,6 м)",                                         unit: "м.п.", price: 450  },
          { name: "Выемка грунта вручную",                                         unit: "м³",   price: 2500 },
          { name: "Прокладка кабеля открытым способом в гофре",                   unit: "м.п.", price: 225  },
          { name: "Укладка кабеля в гофре в траншею",                             unit: "м.п.", price: 300  },
          { name: "Установка ландшафтных светильников в грунт с подключением",    unit: "ед.",  price: 1200 },
          { name: "Монтаж светодиодной ленты в профиле",                          unit: "м.п.", price: 1500 },
          { name: "Монтаж навесных светильников с подключением",                  unit: "ед.",  price: 800  },
          { name: "Установка и расключение распаечной коробки (в грунт)",         unit: "ед.",  price: 1500 },
          { name: "Установка и подключение наружного выключателя",                unit: "ед.",  price: 500  },
          { name: "Монтаж распределительного щита",                               unit: "ед.",  price: 5000 },
        ],
      },
    ],
  },
  {
    id: "elektro",
    sectionLabel: "Электромонтажные работы",
    note: "Дополнительные работы по электромонтажу — 700 ₽ / час·чел.",
    groups: [
      {
        title: "Подготовка: штробление и отверстия",
        rows: [
          { name: "Штробление в пеноблоке/гипсолите 20×20",   unit: "м.п.", price: 300 },
          { name: "Штробление в кирпиче/дереве 20×20",         unit: "м.п.", price: 350 },
          { name: "Штробление в бетоне 20×20",                 unit: "м.п.", price: 560 },
          { name: "Штробление в пеноблоке/гипсолите 20×40",   unit: "м.п.", price: 350 },
          { name: "Штробление в кирпиче/дереве 20×40",         unit: "м.п.", price: 450 },
          { name: "Штробление в бетоне 20×40",                 unit: "м.п.", price: 600 },
          { name: "Штробление в пеноблоке/гипсолите 40×40",   unit: "м.п.", price: 400 },
          { name: "Штробление в кирпиче/дереве 40×40",         unit: "м.п.", price: 500 },
          { name: "Штробление в бетоне 40×40",                 unit: "м.п.", price: 720 },
          { name: "Штробление в пеноблоке/гипсолите 100×40",  unit: "м.п.", price: 600 },
          { name: "Штробление в кирпиче/дереве 100×40",        unit: "м.п.", price: 820 },
          { name: "Штробление в бетоне 100×40",                unit: "м.п.", price: 1150 },
          { name: "Штроба в стяжке под кабель тёплого пола",  unit: "м.п.", price: 350 },
          { name: "Высверливание под подрозетник (кирпич)",    unit: "ед.",  price: 380 },
          { name: "Высверливание под подрозетник (гипсокартон)", unit: "ед.", price: 250 },
          { name: "Высверливание под подрозетник (бетон)",     unit: "ед.",  price: 580 },
          { name: "Высверливание под распаечную коробку (кирпич)",      unit: "ед.", price: 520 },
          { name: "Высверливание под распаечную коробку (гипсокартон)", unit: "ед.", price: 300 },
          { name: "Высверливание под распаечную коробку (бетон)",       unit: "ед.", price: 720 },
          { name: "Штукатурка штроб",                          unit: "м.п.", price: 200 },
        ],
      },
      {
        title: "Монтаж трасс и коробов",
        rows: [
          { name: "Монтаж короба (кабель-канала) 20×40 мм",  unit: "м.п.", price: 150 },
          { name: "Монтаж короба 40×40 мм",                   unit: "м.п.", price: 170 },
          { name: "Монтаж короба 60×40 мм",                   unit: "м.п.", price: 220 },
          { name: "Монтаж короба 100×40 мм",                  unit: "м.п.", price: 280 },
          { name: "Монтаж короба 100×60 мм",                  unit: "м.п.", price: 320 },
          { name: "Монтаж ретро-проводки на изоляторах",      unit: "м.п.", price: 190 },
          { name: "Монтаж наружной распаечной коробки",       unit: "ед.",  price: 390 },
          { name: "Монтаж подрозетника в готовое отверстие (гипсокартон)", unit: "ед.", price: 190 },
          { name: "Монтаж подрозетника на раствор (кирпич/бетон)",        unit: "ед.", price: 250 },
        ],
      },
      {
        title: "Прокладка кабеля",
        rows: [
          { name: "Кабель СИП-4 (2×16)",                              unit: "м.п.", price: 160 },
          { name: "Кабель СИП-4 (4×16)",                              unit: "м.п.", price: 180 },
          { name: "В штробе до 4 мм²",                                unit: "м.п.", price: 110 },
          { name: "В штробе более 4 мм²",                             unit: "м.п.", price: 120 },
          { name: "Открытым способом до 4 мм²",                      unit: "м.п.", price: 110 },
          { name: "Открытым способом от 4 мм²",                      unit: "м.п.", price: 120 },
          { name: "В кабель-канале до 4 мм² (без монтажа канала)",   unit: "м.п.", price: 100 },
          { name: "В кабель-канале более 4 мм²",                     unit: "м.п.", price: 120 },
          { name: "Протяжка кабеля в гофре",                         unit: "м.п.", price: 65  },
          { name: "В гофре до 4 мм²",                                unit: "м.п.", price: 160 },
          { name: "В гофре до 10 мм²",                               unit: "м.п.", price: 190 },
          { name: "Слаботочные провода (телефон, интернет, ТВ)",     unit: "м.п.", price: 95  },
        ],
      },
      {
        title: "Монтаж электрощитов",
        rows: [
          { name: "Наружный электрощит",                              unit: "ед.", price: 1400  },
          { name: "Внутренний щит 8 модулей (гипсокартон)",          unit: "ед.", price: 2000  },
          { name: "Внутренний щит 8 модулей (кирпич)",               unit: "ед.", price: 2650  },
          { name: "Внутренний щит 8 модулей (бетон)",                unit: "ед.", price: 3250  },
          { name: "Внутренний щит 12 модулей (гипсокартон)",         unit: "ед.", price: 2550  },
          { name: "Внутренний щит 12 модулей (кирпич)",              unit: "ед.", price: 3550  },
          { name: "Внутренний щит 12 модулей (бетон)",               unit: "ед.", price: 4750  },
          { name: "Внутренний щит 18 модулей (гипсокартон)",         unit: "ед.", price: 2850  },
          { name: "Внутренний щит 18 модулей (кирпич)",              unit: "ед.", price: 4450  },
          { name: "Внутренний щит 18 модулей (бетон)",               unit: "ед.", price: 5750  },
          { name: "Внутренний щит 24 модуля (гипсокартон)",          unit: "ед.", price: 3550  },
          { name: "Внутренний щит 24 модуля (кирпич)",               unit: "ед.", price: 5150  },
          { name: "Внутренний щит 24 модуля (бетон)",                unit: "ед.", price: 6550  },
          { name: "Внутренний щит 36 модулей (гипсокартон)",         unit: "ед.", price: 4000  },
          { name: "Внутренний щит 36 модулей (кирпич)",              unit: "ед.", price: 6650  },
          { name: "Внутренний щит 36 модулей (бетон)",               unit: "ед.", price: 8150  },
          { name: "Внутренний щит 54 модуля (гипсокартон)",          unit: "ед.", price: 4550  },
          { name: "Внутренний щит 54 модуля (кирпич)",               unit: "ед.", price: 8150  },
          { name: "Внутренний щит 54 модуля (бетон)",                unit: "ед.", price: 10400 },
        ],
      },
      {
        title: "Подключение, автоматы и УЗО",
        rows: [
          { name: "Опрессовка проводов гильзами (1 провод)", unit: "ед.", price: 180  },
          { name: "Клеммник WAGO (за 1 шт.)",                unit: "ед.", price: 95   },
          { name: "Автомат однополюсный",                    unit: "ед.", price: 530  },
          { name: "Автомат двухполюсный",                    unit: "ед.", price: 630  },
          { name: "Автомат трёхполюсный",                    unit: "ед.", price: 730  },
          { name: "УЗО двухполюсное",                        unit: "ед.", price: 700  },
          { name: "УЗО четырёхполюсное",                     unit: "ед.", price: 900  },
          { name: "Электросчётчик однофазный",               unit: "ед.", price: 2300 },
          { name: "Электросчётчик трёхфазный",               unit: "ед.", price: 3100 },
          { name: "Подключение силового кабеля",             unit: "ед.", price: 820  },
          { name: "Контур защитного заземления",             unit: "ед.", price: 14000 },
        ],
      },
      {
        title: "Розетки, выключатели, механизмы",
        rows: [
          { name: "Розетка в коробе (кабель-канале)",         unit: "ед.", price: 530 },
          { name: "Механизм розетки в подрозетник",           unit: "ед.", price: 440 },
          { name: "Наружная розетка",                         unit: "ед.", price: 500 },
          { name: "Ретро-розетка",                            unit: "ед.", price: 620 },
          { name: "Одноклавишный выключатель (механизм)",     unit: "ед.", price: 420 },
          { name: "Двухклавишный выключатель (механизм)",     unit: "ед.", price: 440 },
          { name: "Наружный одноклавишный выключатель",       unit: "ед.", price: 490 },
          { name: "Наружный двухклавишный выключатель",       unit: "ед.", price: 520 },
          { name: "Проходной одноклавишный (механизм)",       unit: "ед.", price: 500 },
          { name: "Проходной двухклавишный (механизм)",       unit: "ед.", price: 550 },
          { name: "Наружный проходной одноклавишный",         unit: "ед.", price: 560 },
          { name: "Наружный проходной двухклавишный",         unit: "ед.", price: 600 },
          { name: "Ретро-выключатель",                        unit: "ед.", price: 590 },
          { name: "Ретро распаечная коробка",                 unit: "ед.", price: 600 },
          { name: "Компьютерная / телефонная / ТВ розетка",   unit: "ед.", price: 450 },
          { name: "Диммер",                                   unit: "ед.", price: 600 },
          { name: "Реостат для тёплого пола",                 unit: "ед.", price: 870 },
        ],
      },
      {
        title: "Светильники, люстры, светодиодная лента",
        rows: [
          { name: "Монтаж крюка под люстру",                  unit: "ед.", price: 500  },
          { name: "Монтаж простой люстры на крюк",            unit: "ед.", price: 1100 },
          { name: "Монтаж сложной люстры на крюк",            unit: "ед.", price: 2200 },
          { name: "Сборка простой люстры",                    unit: "ед.", price: 870  },
          { name: "Сборка сложной люстры",                    unit: "ед.", price: 1600 },
          { name: "Монтаж точечных светильников",             unit: "ед.", price: 520  },
          { name: "Монтаж светильника «Армстронг»",           unit: "ед.", price: 830  },
          { name: "Монтаж настенного светильника (бра)",      unit: "ед.", price: 720  },
          { name: "Монтаж светодиодной ленты",                unit: "ед.", price: 350  },
          { name: "Монтаж трансформатора для галогенов",      unit: "ед.", price: 520  },
        ],
      },
      {
        title: "Вентиляция, слаботочка, домофоны",
        rows: [
          { name: "Вентилятор вытяжки",          unit: "ед.", price: 1100 },
          { name: "Накладной канальный вентилятор", unit: "ед.", price: 1250 },
          { name: "Установка звонка",             unit: "ед.", price: 700  },
          { name: "Установка видеодомофона",      unit: "ед.", price: 2400 },
        ],
      },
      {
        title: "Крупная бытовая техника",
        rows: [
          { name: "Электроплита",                         unit: "ед.", price: 2100 },
          { name: "Варочная панель",                      unit: "ед.", price: 2100 },
          { name: "Духовой шкаф",                         unit: "ед.", price: 2050 },
          { name: "Кухонная вытяжка",                     unit: "ед.", price: 2250 },
          { name: "Встраиваемая стиральная машина",       unit: "ед.", price: 2250 },
          { name: "Встраиваемая посудомоечная машина",    unit: "ед.", price: 2100 },
        ],
      },
    ],
  },
  {
    id: "blagoustroystvo",
    sectionLabel: "Благоустройство территории",
    note: "Дополнительные работы — 650 ₽ / час. К итоговой смете добавляется 5% на непредвиденные расходы. Точную стоимость рассчитываем после бесплатного выезда на участок.",
    groups: [
      {
        title: "Подготовительные работы",
        rows: [
          { name: "Очистка участка от строительного мусора, камней, корней",       unit: "м²",    price: 200  },
          { name: "Обработка гербицидом сплошного действия (уничтожение сорняков)", unit: "сотка", price: 800  },
          { name: "Глубокая перекопка/фрезерование почвы (20–25 см)",               unit: "м²",    price: 300  },
          { name: "Выемка грунта вручную (при глубине менее 1 м)",                  unit: "м³",    price: 2400 },
          { name: "Выемка грунта механизированным способом",                       unit: "м³",    price: 800  },
          { name: "Обратная засыпка грунта вручную",                               unit: "м³",    price: 1400 },
          { name: "Планировка участка вручную",                                    unit: "м²",    price: 630  },
          { name: "Планировка участка механизированным способом",                  unit: "м²",    price: 350  },
          { name: "Снятие дерна (5 см)",                                           unit: "м²",    price: 350  },
          { name: "Бурение ям под столбы",                                         unit: "м.п.",  price: 850  },
          { name: "Перемещение грунта",                                            unit: "м³",    price: 600  },
          { name: "Подготовка основания из песка",                                 unit: "м³",    price: 1500 },
          { name: "Подготовка основания из щебня",                                 unit: "м³",    price: 1550 },
          { name: "Укладка геотекстиля",                                          unit: "м²",    price: 80   },
          { name: "Установка каменного бордюра",                                   unit: "м.п.",  price: 650  },
          { name: "Монтаж ленточного бордюра",                                     unit: "м.п.",  price: 200  },
        ],
      },
      {
        title: "Устройство газона (от 1 200 ₽/м²)",
        rows: [
          { name: "Выравнивание поверхности с разбивкой уклонов (2–3° для стока воды)", unit: "м²",   price: 200  },
          { name: "Укладка плодородного грунта (торфосмесь/чернозём) слоем 8–10 см",    unit: "м³",   price: 2400 },
          { name: "Тщательная планировка граблями (финишное выравнивание)",            unit: "м²",   price: 150  },
          { name: "Прикатка грунта катком (70–100 кг) для выявления просадок",         unit: "м²",   price: 150  },
          { name: "Устройство дренажа (песчаная подушка 5 см) — при тяжёлой глине",    unit: "м²",   price: 400  },
          { name: "Посев газонной смеси (40–50 г/м²) вручную или сеялкой",             unit: "м²",   price: 300  },
          { name: "Заделка семян граблями (глубина 0,5–1 см)",                         unit: "м²",   price: 100  },
          { name: "Мульчирование посевов торфяной крошкой (слой 0,5 см)",              unit: "м²",   price: 180  },
          { name: "Первичный полив (мелкодисперсное дождевание)",                      unit: "час",  price: 1200 },
          { name: "Укрытие агротканью/спанбондом (защита от птиц и вымывания)",        unit: "м²",   price: 100  },
          { name: "Раскатка рулонов (на подготовленный грунт, без нахлёста)",          unit: "м²",   price: 480  },
          { name: "Подрезка рулонов по краям (дорожки, бордюры, цветники)",            unit: "п.м.", price: 200  },
          { name: "Прикатка уложенного газона катком",                                unit: "м²",   price: 140  },
          { name: "Обильный полив после укладки (пропитка на 15–20 см)",              unit: "м²",   price: 90   },
          { name: "Подсыпка песка в швы между рулонами (песок + торф)",                unit: "м²",   price: 160  },
          { name: "Устройство краевого канта (ограничитель газон/цветник)",           unit: "п.м.", price: 250  },
        ],
      },
      {
        title: "Мощение",
        rows: [
          { name: "Мощение брусчатки, тротуарной плитки на готовое основание",                       unit: "м²",   price: 1250 },
          { name: "Мощение с подготовкой основания из песка и щебня",                                unit: "м²",   price: 1650 },
          { name: "Мощение с подготовкой бетонного основания",                                       unit: "м²",   price: 1650 },
          { name: "Резка брусчатки, тротуарной плитки",                                              unit: "м.п.", price: 320  },
        ],
      },
      {
        title: "Дренажные системы",
        rows: [
          { name: "Установка дренажных лотков",                          unit: "м.п.", price: 700   },
          { name: "Устройство поверхностного дренажа (глуб. до 1 м)",    unit: "м.п.", price: 2500  },
          { name: "Устройство глубинного дренажа (глуб. до 2 м)",        unit: "м.п.", price: 4500  },
          { name: "Монтаж смотрового дренажного колодца (глуб. до 1 м)", unit: "ед.",  price: 5200  },
          { name: "Монтаж смотрового дренажного колодца (глуб. до 2 м)", unit: "ед.",  price: 7500  },
          { name: "Устройство коллекторного колодца",                   unit: "ед.",  price: 15000 },
        ],
      },
      {
        title: "Бетонные работы",
        rows: [
          { name: "Заливка и укладка бетона из миксера (опалубка и армирование готовы)",         unit: "м³", price: 3250  },
          { name: "Заливка и укладка бетона вручную, бетономешалкой (опалубка и армирование готовы)", unit: "м³", price: 5400 },
          { name: "Устройство монолитного ленточного фундамента (с арматурой и опалубкой)",      unit: "м³", price: 8800  },
          { name: "Устройство монолитного плитного фундамента (с арматурой и опалубкой)",        unit: "м³", price: 8300  },
          { name: "Устройство бетонной подготовки толщиной до 100 мм",                           unit: "м³", price: 5300  },
          { name: "Устройство мелких монолитных ж/б ростверков",                                 unit: "м³", price: 10300 },
          { name: "Устройство буронабивных свай",                                                unit: "м³", price: 9300  },
          { name: "Устройство монолитных лестничных маршей и площадок",                          unit: "м³", price: 17700 },
          { name: "Устройство монолитных подпорных стенок",                                      unit: "м³", price: 8100  },
          { name: "Устройство отмостки",                                                         unit: "м²", price: 1000  },
        ],
      },
      {
        title: "Озеленение: посадка, пересадка, удаление растений",
        rows: [
          { name: "Разбивка участка под посадки по дендроплану",                       unit: "м²",    price: 150   },
          { name: "Подготовка почвы: удаление сорняков с обработкой гербицидами",      unit: "сотка", price: 1500  },
          { name: "Валка дерева (диаметр ствола до 20 см)",                            unit: "ед.",   price: 5000  },
          { name: "Валка дерева (диаметр ствола 20–50 см)",                            unit: "ед.",   price: 10000 },
          { name: "Корчевание пня вручную (диаметр до 30 см)",                         unit: "ед.",   price: 3000  },
          { name: "Измельчение порубочных остатков в щепу",                            unit: "м³",    price: 2000  },
          { name: "Санитарная обрезка крупного дерева (до 15 м) с погрузкой",          unit: "ед.",   price: 8000  },
          { name: "Омолаживающая обрезка кустарника (до 2 м)",                         unit: "ед.",   price: 1800  },
          { name: "Пересадка взрослого кустарника с комом земли (до 1,5 м)",           unit: "ед.",   price: 5000  },
          { name: "Пересадка дерева (до 3 м, ком 0,8×0,8 м)",                          unit: "ед.",   price: 12000 },
          { name: "Вывоз порубочных остатков и пней (КамАЗ 20 м³)",                    unit: "рейс",  price: 15000 },
          { name: "Ручная копка ямы для крупномера (100×100×80 см)",                   unit: "ед.",   price: 2400  },
          { name: "Ручная копка ямы для кустарника (50×50×50 см)",                     unit: "ед.",   price: 1200  },
          { name: "Ручная копка траншеи для живой изгороди (40×40 см)",                unit: "п.м.",  price: 1000  },
          { name: "Частичная замена грунта (торф, песок, биогумус)",                   unit: "ед.",   price: 900   },
          { name: "Посадка лиственного дерева (ком 0,6×0,6 м, 2,5–3 м)",               unit: "ед.",   price: 3600  },
          { name: "Посадка хвойного крупномера (ком 0,8×0,8 м, до 3 м)",               unit: "ед.",   price: 5000  },
          { name: "Посадка кустарника в контейнере (5–10 л)",                          unit: "ед.",   price: 600   },
          { name: "Посадка кустарника с открытой корневой системой",                  unit: "ед.",   price: 500   },
          { name: "Посадка живой изгороди (2 растения/п.м, 40–60 см)",                 unit: "п.м.",  price: 1000  },
          { name: "Посадка вьющихся растений у опоры (контейнер 3–5 л)",               unit: "ед.",   price: 600   },
          { name: "Установка подпорных кольев (2 шт) и фиксация ствола",               unit: "ед.",   price: 800   },
          { name: "Мульчирование приствольного круга корой/щепой (5–7 см)",            unit: "ед.",   price: 400   },
          { name: "Полив при посадке (ведро 10 л)",                                    unit: "ед.",   price: 80    },
          { name: "Подкормка корнеобразователем (Корневин, Рибав-экстра)",             unit: "ед.",   price: 250   },
          { name: "Обработка от стресса (Циркон, Эпин)",                               unit: "л",     price: 400   },
        ],
      },
      {
        title: "Регулярный уход за участком",
        rows: [
          { name: "Покос газона (с травосборником, высота среза 5–7 см)",              unit: "сотка", price: 700  },
          { name: "Покос труднодоступных мест триммером (вдоль забора, цветников)",    unit: "сотка", price: 1300 },
          { name: "Вычесывание газона (вертикуляция) — удаление войлока и мха",        unit: "сотка", price: 1600 },
          { name: "Аэрация газона (прокалывание грунта)",                              unit: "сотка", price: 1400 },
          { name: "Прополка цветников и приствольных кругов (ручная, с корнями)",      unit: "м²",    price: 250  },
          { name: "Прополка гравийных/щебёночных дорожек (от всходов сорняков)",       unit: "м²",    price: 200  },
          { name: "Рыхление почвы в приствольных кругах (глубина 5 см)",               unit: "ед.",   price: 140  },
          { name: "Обрезка отцветших соцветий (многолетники, розы)",                  unit: "м²",    price: 370  },
          { name: "Формирующая стрижка живой изгороди (до 1,5 м)",                     unit: "п.м.",  price: 400  },
          { name: "Стрижка топиарных форм (шары, конусы)",                             unit: "ед.",   price: 900  },
          { name: "Внесение жидких удобрений под корень (с поливом)",                  unit: "сотка", price: 1000 },
          { name: "Внесение сухих удобрений (гранулы) с заделкой в грунт",             unit: "м²",    price: 180  },
          { name: "Мульчирование (обновление коры/щепы) в приствольных кругах",        unit: "ед.",   price: 300  },
          { name: "Санитарная обрезка сухих/поломанных ветвей (по участку)",           unit: "час",   price: 1500 },
          { name: "Обработка от сорняков гербицидами",                                unit: "сотка", price: 800  },
          { name: "Обработка фунгицидами/инсектицидами (от болезней и вредителей)",    unit: "сотка", price: 900  },
          { name: "Весенняя уборка участка (листья, мусор, мойка дорожек)",            unit: "сотка", price: 2500 },
          { name: "Осенняя уборка участка (листва, обрезка, укрытие)",                 unit: "сотка", price: 2800 },
          { name: "Полив газона/цветников из шланга с насадкой",                       unit: "час",   price: 1300 },
        ],
      },
    ],
  },
];

/* ============================================================
   ИНИЦИАЛИЗАЦИЯ
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initPageIntro();      // первым — блокирует скролл и запускает reveal
  injectConfigData();
  initCursor();
  initProgressBar();
  initNavigation();
  initHeaderScroll();
  initSmoothScroll();
  initScrollReveal();
  initParallax();
  initSplitText();      // учитывает intro-задержку через sessionStorage
  initMarquee();
  initPricing();        // аккордеон с прайсом
  initCases();          // fullscreen sticky cases (заменяет initPortfolio)
  initPortfolio();      // no-op если #portfolio-track отсутствует
  initLightbox();
  initTestimonialsSlider();
  initContactForm();
  initMagneticButtons();
  initCounters();
  initPromoBadge();
});

/* ============================================================
   INJECT CONFIG DATA
   ============================================================ */
function injectConfigData() {
  document.querySelectorAll("[data-config]").forEach((el) => {
    const keys = el.dataset.config.split(".");
    let val = SITE_CONFIG;
    for (const k of keys) val = val?.[k];
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll("[data-config-href]").forEach((el) => {
    const keys = el.dataset.configHref.split(".");
    let val = SITE_CONFIG;
    for (const k of keys) val = val?.[k];
    if (val !== undefined) el.href = val;
  });
}

/* ============================================================
   КАСТОМНЫЙ КУРСОР
   ============================================================ */
function initCursor() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const cursor = document.getElementById("cursor");
  const ring = document.getElementById("cursor-ring");
  if (!cursor || !ring) return;

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;
  let rafId;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    rafId = requestAnimationFrame(animateRing);
  }
  animateRing();

  const hoverTargets = "a, button, .portfolio-card, .service-card, .value-card, .messenger-btn, .case-slide";

  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.add("is-hover");
      ring.classList.add("is-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.remove("is-hover");
      ring.classList.remove("is-hover");
    }
  });

  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
    ring.style.opacity = "0";
  });

  document.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1";
    ring.style.opacity = "1";
  });
}

/* ============================================================
   PROGRESS BAR
   ============================================================ */
function initProgressBar() {
  const bar = document.getElementById("progress-bar");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + "%";
  }, { passive: true });
}

/* ============================================================
   НАВИГАЦИЯ
   ============================================================ */
function initNavigation() {
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = navMenu?.querySelectorAll(".nav__link");

  burger?.addEventListener("click", () => {
    const open = burger.classList.toggle("is-open");
    navMenu?.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", open);
  });

  navLinks?.forEach((link) => {
    link.addEventListener("click", () => {
      burger?.classList.remove("is-open");
      navMenu?.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      burger?.setAttribute("aria-expanded", "false");
    });
  });
}

/* ============================================================
   ХЕДЕР: hide on scroll down / show on scroll up
   ============================================================ */
function initHeaderScroll() {
  const header = document.getElementById("header");
  if (!header) return;

  let lastY = 0;
  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 60);

    if (y > 120) {
      if (y > lastY + 4) {
        header.classList.add("is-hidden");
      } else if (y < lastY - 4) {
        header.classList.remove("is-hidden");
      }
    } else {
      header.classList.remove("is-hidden");
    }

    lastY = y;
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  update();
}

/* ============================================================
   ПЛАВНЫЙ СКРОЛЛ
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initScrollReveal() {
  const items = document.querySelectorAll("[data-reveal]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => {
    const delay = el.dataset.revealDelay ?? 0;
    el.style.transitionDelay = `${delay}ms`;
    observer.observe(el);
  });
}

/* ============================================================
   ПАРАЛЛАКС HERO
   ============================================================ */
function initParallax() {
  const bg = document.querySelector(".hero__bg");
  if (!bg || window.matchMedia("(max-width: 768px)").matches) return;

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY * 0.3;
        bg.style.transform = `translate3d(0, ${y}px, 0) scale(1.1)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ============================================================
   SPLIT-TEXT HERO — TreeWalker (safe, preserves HTML tags)
   ============================================================ */
function initSplitText() {
  const title = document.getElementById("hero-title");
  if (!title) return;

  /* Collect only TEXT nodes (skips <br>, <em> etc.) */
  const walker = document.createTreeWalker(title, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) =>
      node.textContent.trim()
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT,
  });

  const textNodes = [];
  let node;
  while ((node = walker.nextNode())) textNodes.push(node);

  /* Wrap each word in a text node, preserve whitespace as text nodes */
  textNodes.forEach((textNode) => {
    const parts = textNode.textContent.split(/(\s+)/);
    const frag = document.createDocumentFragment();
    parts.forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) {
        frag.appendChild(document.createTextNode(part));
      } else {
        const outer = document.createElement("span");
        outer.className = "split-word";
        const inner = document.createElement("span");
        inner.className = "split-word-inner";
        inner.textContent = part;
        outer.appendChild(inner);
        frag.appendChild(outer);
      }
    });
    textNode.parentNode.replaceChild(frag, textNode);
  });

  const inners = title.querySelectorAll(".split-word-inner");
  // На первом визите intro занимает ~1.4s — откладываем split-text
  const baseDelay = sessionStorage.getItem("intro-seen") ? 500 : 1650;
  setTimeout(() => {
    inners.forEach((el, i) => {
      setTimeout(() => el.classList.add("is-visible"), i * 90 + baseDelay);
    });
  }, 50);
}

/* ============================================================
   MARQUEE
   ============================================================ */
function initMarquee() {
  const track = document.getElementById("marquee-track");
  if (!track) return;

  const items = [
    "Кострома",
    "Ярославль",
    "Иваново",
    "Вологда",
    "Владимир",
    "Тверь",
    "Нижний Новгород",
    "Москва",
  ];

  /* Дублируем для бесшовного loop (4× — городов мало, нужно заполнить ширину) */
  const doubled = [...items, ...items, ...items, ...items];
  track.innerHTML = doubled
    .map((t) => `<span class="marquee-item">${t}</span>`)
    .join("");
}

/* ============================================================
   ПОРТФОЛИО — СЛАЙДЕР
   ============================================================ */
function initPortfolio() {
  const track = document.getElementById("portfolio-track");
  if (!track) return;

  let current = 0;
  let touchStartX = 0;

  /* Render slides */
  PORTFOLIO_ITEMS.forEach((item, idx) => {
    const slide = document.createElement("div");
    slide.className = "portfolio-slide";
    slide.setAttribute("aria-label", item.title);

    slide.innerHTML = `
      <img
        class="portfolio-slide__img"
        src="${item.src}"
        alt="${item.title} — ${item.category}"
        loading="${idx === 0 ? 'eager' : 'lazy'}"
        onerror="this.style.display='none'"
      />
      <div class="portfolio-slide__overlay">
        <span class="portfolio-slide__case">${item.caseNum}</span>
        <span class="portfolio-slide__cat">${item.category}</span>
        <h3 class="portfolio-slide__title">${item.title}</h3>
        <span class="portfolio-slide__loc">${item.location}</span>
      </div>
    `;

    slide.addEventListener("click", () => openLightbox(idx));
    track.appendChild(slide);
  });

  /* Dots */
  const dotsWrap = document.getElementById("portfolio-dots");
  PORTFOLIO_ITEMS.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "portfolio-dot";
    dot.setAttribute("aria-label", `Проект ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsWrap?.appendChild(dot);
  });

  const dots = dotsWrap?.querySelectorAll(".portfolio-dot");
  const counter = document.getElementById("portfolio-counter");

  function goTo(index) {
    current = ((index % PORTFOLIO_ITEMS.length) + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots?.forEach((d, i) => d.classList.toggle("is-active", i === current));
    if (counter) {
      counter.textContent = `${String(current + 1).padStart(2, "0")} / ${String(PORTFOLIO_ITEMS.length).padStart(2, "0")}`;
    }
  }

  document.getElementById("portfolio-prev")?.addEventListener("click", () => goTo(current - 1));
  document.getElementById("portfolio-next")?.addEventListener("click", () => goTo(current + 1));

  /* Touch swipe */
  const sliderEl = document.getElementById("portfolio-slider");
  sliderEl?.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  sliderEl?.addEventListener("touchend", (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
  }, { passive: true });

  goTo(0);
}

/* ============================================================
   ЛАЙТБОКС
   ============================================================ */
let lightboxCurrentIndex = 0;

function initLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;

  document.getElementById("lb-close")?.addEventListener("click", closeLightbox);
  document.getElementById("lb-prev")?.addEventListener("click", () => navigateLightbox(-1));
  document.getElementById("lb-next")?.addEventListener("click", () => navigateLightbox(1));

  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });

  // Touch swipe для мобиле
  let lbTouchX = 0;
  const imgWrap = lb.querySelector(".lightbox__img-wrap");
  imgWrap?.addEventListener("touchstart", (e) => {
    lbTouchX = e.touches[0].clientX;
  }, { passive: true });
  imgWrap?.addEventListener("touchend", (e) => {
    const diff = lbTouchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) navigateLightbox(diff > 0 ? 1 : -1);
  }, { passive: true });
}

function openLightbox(index) {
  lightboxCurrentIndex = index;
  renderLightboxSlide();
  document.getElementById("lightbox")?.classList.add("is-open");
  document.body.classList.add("lb-open");
  document.getElementById("lb-close")?.focus();
}

function closeLightbox() {
  document.getElementById("lightbox")?.classList.remove("is-open");
  document.body.classList.remove("lb-open");
}

function navigateLightbox(dir) {
  lightboxCurrentIndex = (lightboxCurrentIndex + dir + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
  renderLightboxSlide();
}

function renderLightboxSlide() {
  const item = PORTFOLIO_ITEMS[lightboxCurrentIndex];
  const img = document.getElementById("lb-img");
  const caption = document.getElementById("lb-caption");
  const desc = document.getElementById("lb-desc");
  const counter = document.getElementById("lb-counter");

  if (img) {
    img.style.display = "block";
    img.src = item.src;
    img.alt = item.title;
    img.onerror = () => {
      // Фото нет — скрываем тег <img>, показываем тёмный фон-заглушку
      img.style.display = "none";
      const wrap = img.closest(".lightbox__img-wrap");
      if (wrap && !wrap.querySelector(".lb-no-img")) {
        const placeholder = document.createElement("div");
        placeholder.className = "lb-no-img";
        placeholder.innerHTML = `<span>${item.caseNum}</span>`;
        wrap.insertBefore(placeholder, img);
      }
    };
    // Убираем старую заглушку при переключении слайдов
    const oldPlaceholder = img.closest(".lightbox__img-wrap")?.querySelector(".lb-no-img");
    if (oldPlaceholder) oldPlaceholder.remove();
  }
  if (caption) caption.textContent = item.title;
  if (desc) desc.textContent = item.description;
  if (counter) counter.textContent = `${lightboxCurrentIndex + 1} / ${PORTFOLIO_ITEMS.length}`;
}

/* ============================================================
   СЛАЙДЕР ОТЗЫВОВ
   ============================================================ */
const TESTIMONIALS = [
  {
    name: "Сергей и Ольга",
    role: "Загородный дом, Костромская область",
    text: "Долго сомневались, нужна ли подсветка участка — теперь не представляем, как без неё жили. Вечером сад выглядит совсем иначе: дорожки светятся ровным нейтральным светом, кроны деревьев — тёплым, даже камень у крыльца «заиграл». Приехали на замер через день после звонка, сделали всё за неделю и оставили после себя порядок.",
    rating: 5,
  },
  {
    name: "Анна В.",
    role: "Загородный участок, Ярославская область",
    text: "Хотела, чтобы вечером в саду был свет, но самих светильников видно не было. Ребята предложили скрытую LED-ленту вдоль подпорной стенки — получилось именно то, о чём мечтала: зелень подсвечена, по настилу ходить безопасно, а откуда свет — гости так и не поняли. Отдельное спасибо за терпение к моим бесконечным правкам.",
    rating: 5,
  },
  {
    name: "Михаил Д.",
    role: "Кострома, дер. Кузьмище",
    text: "Заказывал костровую зону у дома. Честно, ожидал просто «кострище с гравием», а получил полноценное место отдыха с качелями, куда теперь первым делом идут все гости. Работали аккуратно: газон вокруг не разворотили, кромку выложили ровно, по срокам уложились день в день.",
    rating: 5,
  },
  {
    name: "Игорь С.",
    role: "Электромонтаж в доме, Кострома",
    text: "Делали полную разводку электрики в новом доме. Понравилось, что смета была расписана по позициям до начала работ — и в итоге не выросла ни на рубль. Щит собрали красиво, все линии подписаны, после себя всё убрали. Через месяц попросил добавить розетки в гараже — приехали без разговоров.",
    rating: 5,
  },
];

function initTestimonialsSlider() {
  const track = document.getElementById("testimonials-track");
  const dotsWrap = document.getElementById("testimonials-dots");
  if (!track) return;

  let current = 0;
  let autoTimer;

  TESTIMONIALS.forEach((t) => {
    const initials = t.name
      .split(/\s+/)
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    const slide = document.createElement("div");
    slide.className = "testimonial-slide";
    slide.innerHTML = `
      <div class="testimonial__quote-mark" aria-hidden="true">"</div>
      <p class="testimonial__text">${t.text}</p>
      <div class="testimonial__author">
        <div class="testimonial__avatar" aria-hidden="true">${initials}</div>
        <div class="testimonial__author-info">
          <strong class="testimonial__name">${t.name}</strong>
          <span class="testimonial__role">${t.role}</span>
        </div>
      </div>
    `;
    track.appendChild(slide);
  });

  TESTIMONIALS.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "testimonial-dot";
    dot.setAttribute("aria-label", `Отзыв ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsWrap?.appendChild(dot);
  });

  const dots = dotsWrap?.querySelectorAll(".testimonial-dot");

  function goTo(index) {
    current = index;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots?.forEach((d, i) => d.classList.toggle("is-active", i === current));
  }

  function next() { goTo((current + 1) % TESTIMONIALS.length); }
  function startAuto() { autoTimer = setInterval(next, 5000); }
  function stopAuto() { clearInterval(autoTimer); }

  document.getElementById("testimonials-prev")?.addEventListener("click", () => {
    stopAuto();
    goTo((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    startAuto();
  });

  document.getElementById("testimonials-next")?.addEventListener("click", () => {
    stopAuto();
    next();
    startAuto();
  });

  goTo(0);
  startAuto();

  track.parentElement?.addEventListener("mouseenter", stopAuto);
  track.parentElement?.addEventListener("mouseleave", startAuto);
}

/* ============================================================
   КОНТАКТНАЯ ФОРМА
   ============================================================ */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const fields = {
    name:    { el: form.querySelector('[name="name"]'),    min: 2 },
    phone:   { el: form.querySelector('[name="phone"]'),   pattern: /^[\d\s\+\-\(\)]{10,}$/ },
    message: { el: form.querySelector('[name="message"]'), min: 10 },
  };

  Object.values(fields).forEach(({ el }) => {
    el?.addEventListener("blur", () => validateField(el));
    el?.addEventListener("input", () => {
      if (el.closest(".field")?.classList.contains("has-error")) validateField(el);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const valid = Object.entries(fields).every(([, cfg]) => validateField(cfg.el));
    if (!valid) return;
    submitForm(new FormData(form));
  });

  function validateField(el) {
    if (!el) return true;
    const wrap = el.closest(".field");
    const val = el.value.trim();
    let error = "";

    if (el.name === "name" && val.length < 2) error = "Введите ваше имя";
    if (el.name === "phone" && !/^[\d\s\+\-\(\)]{10,}$/.test(val)) error = "Введите корректный номер";
    if (el.name === "message" && val.length < 10) error = "Сообщение слишком короткое";

    wrap?.classList.toggle("has-error", !!error);
    wrap?.classList.toggle("is-valid", !error && val.length > 0);
    const errEl = wrap?.querySelector(".field__error");
    if (errEl) errEl.textContent = error;

    return !error;
  }

  async function submitForm(data) {
    const btn = form.querySelector('[type="submit"]');
    const status = document.getElementById("form-status");

    btn.disabled = true;
    btn.classList.add("is-loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Ошибка сервера");
      }

      form.reset();
      Object.values(fields).forEach(({ el }) => {
        el?.closest(".field")?.classList.remove("is-valid", "has-error");
      });

      if (status) {
        status.classList.add("is-visible");
        setTimeout(() => status.classList.remove("is-visible"), 6000);
      }
    } catch (err) {
      console.error("Ошибка отправки:", err);
      alert("Не удалось отправить заявку: " + err.message + "\n\nПозвоните нам напрямую — номер указан на сайте.");
    } finally {
      btn.disabled = false;
      btn.classList.remove("is-loading");
    }
  }
}

/* ============================================================
   MAGNETIC BUTTONS
   ============================================================ */
function initMagneticButtons() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  document.querySelectorAll(".magnetic-btn").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.35;
      const dy = (e.clientY - cy) * 0.35;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });
}

/* ============================================================
   PAGE INTRO / REVEAL
   ============================================================ */
function initPageIntro() {
  const intro = document.getElementById("page-intro");
  if (!intro) return;

  // Показываем только раз за сессию
  if (sessionStorage.getItem("intro-seen")) {
    intro.remove();
    return;
  }

  // Блокируем скролл на время интро
  document.documentElement.style.overflow = "hidden";

  // Небольшая пауза — чтобы браузер отрисовал панели, затем logo
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      intro.classList.add("is-visible");

      // Начинаем разъезд через 650ms после появления логотипа
      setTimeout(() => {
        intro.classList.add("is-leaving");

        // Ждём окончания анимации панелей (900ms transition)
        setTimeout(() => {
          document.documentElement.style.overflow = "";
          intro.remove();
          sessionStorage.setItem("intro-seen", "1");
        }, 950);
      }, 650);
    });
  });
}

/* ============================================================
   FULLSCREEN CASES — sticky scroll storytelling
   ============================================================ */
// Цветовые темы для ambient glow каждого кейса
const CASE_THEMES = [
  // CASE 001 — лунный свет на траве: мягкий серебристо-голубой
  { c1: "rgba(106,170,216,0.50)",  c2: "rgba(160,210,240,0.28)", dur1: "15s", dur2: "21s" },
  // CASE 002 — архитектурное свечение: жемчужный + лунный
  { c1: "rgba(200,220,245,0.22)",  c2: "rgba(106,170,216,0.30)", dur1: "19s", dur2: "25s" },
  // CASE 003 — глубокая ночь: насыщенный синий
  { c1: "rgba(60,110,190,0.40)",   c2: "rgba(106,170,216,0.22)", dur1: "13s", dur2: "18s" },
];

function initCases() {
  const wrap   = document.getElementById("cases-sticky-wrap");
  const sticky = document.getElementById("cases-sticky");
  const dotsWrap = document.getElementById("cases-dots");
  if (!wrap || !sticky) return;

  const n = PORTFOLIO_ITEMS.length;
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  // На десктопе задаём высоту обёртки под прокрутку кейсов.
  // perCase ограничен сверху (110vh — комфортный темп) и снизу (70vh —
  // чтобы при 10+ фото галерея не растянулась на десятки экранов).
  if (!isMobile) {
    const perCase = Math.min(110, Math.max(70, Math.round(480 / n)));
    wrap.style.height = `${n * perCase}vh`;
  }

  // Рендерим слайды
  PORTFOLIO_ITEMS.forEach((item, idx) => {
    const theme = CASE_THEMES[idx] || CASE_THEMES[0];
    const slide = document.createElement("div");
    slide.className = "case-slide" + (idx === 0 ? " is-active" : "");
    slide.setAttribute("role", "article");
    slide.setAttribute("aria-label", item.title);

    // Инлайн CSS-переменные для уникального glow каждого кейса
    slide.style.cssText = `
      --glow-c1: ${theme.c1};
      --glow-c2: ${theme.c2};
      --glow-dur1: ${theme.dur1};
      --glow-dur2: ${theme.dur2};
    `;

    slide.innerHTML = `
      <div class="case-slide__bg">
        <img
          class="case-slide__img"
          src="${item.src}"
          alt="${item.title} — ${item.category}"
          loading="${idx === 0 ? "eager" : "lazy"}"
        />
        <div class="case-slide__glow" aria-hidden="true">
          <span class="case-slide__glow-blob case-slide__glow-blob--a"></span>
          <span class="case-slide__glow-blob case-slide__glow-blob--b"></span>
          <span class="case-slide__glow-blob case-slide__glow-blob--c"></span>
        </div>
        <div class="case-slide__overlay"></div>
      </div>
      <div class="case-slide__meta-top">
        <span class="case-slide__year">${item.year}</span>
        <span class="case-slide__loc-top">${item.location}</span>
      </div>
      <div class="case-slide__content">
        <span class="case-slide__num">${item.caseNum}</span>
        <span class="case-slide__cat">${item.category}</span>
        <h3 class="case-slide__title">${item.title}</h3>
      </div>
    `;

    // Blueprint fallback — когда фото нет или 404
    slide.querySelector(".case-slide__img").addEventListener("error", (e) => {
      e.currentTarget.style.display = "none";
      slide.classList.add("has-blueprint");
      const bg = slide.querySelector(".case-slide__bg");
      const bp = document.createElement("div");
      bp.className = "case-slide__blueprint";
      bp.setAttribute("aria-hidden", "true");
      bp.innerHTML = `
        <div class="bp-reticle">
          <span class="bp-ch bp-ch--h"></span>
          <span class="bp-ch bp-ch--v"></span>
          <span class="bp-dot"></span>
        </div>`;
      bg.insertBefore(bp, bg.firstChild);
    });

    slide.addEventListener("click", () => openLightbox(idx));
    // Вставляем ДО блока с dots
    sticky.insertBefore(slide, dotsWrap);
  });

  // Scroll-hint (desktop only)
  if (!isMobile) {
    const hint = document.createElement("div");
    hint.className = "cases-hint";
    hint.innerHTML = `<div class="cases-hint__line"></div><span class="cases-hint__text">Scroll</span>`;
    sticky.appendChild(hint);

    // Слайд-каунтер «01 / 03» (desktop only)
    const count = document.createElement("div");
    count.className = "cases-count";
    count.id = "cases-count";
    count.setAttribute("aria-live", "polite");
    count.innerHTML = `
      <span class="cases-count__current">01</span>
      <span class="cases-count__sep">/</span>
      <span class="cases-count__total">${String(n).padStart(2, "0")}</span>
    `;
    sticky.appendChild(count);

    // Плавающая кнопка «К заявке» — выход из галереи в любой момент
    const skip = document.createElement("a");
    skip.className = "cases-skip";
    skip.href = "#contact";
    skip.setAttribute("aria-label", "Пропустить галерею и перейти к форме заявки");
    skip.innerHTML = `
      <span>К заявке</span>
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
    // Создаётся после initSmoothScroll — навешиваем плавный скролл вручную
    skip.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    });
    sticky.appendChild(skip);
  }

  // Dots
  PORTFOLIO_ITEMS.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "case-dot" + (i === 0 ? " is-active" : "");
    dot.setAttribute("aria-label", `Кейс ${i + 1}`);
    dot.addEventListener("click", () => scrollToCase(i));
    dotsWrap?.appendChild(dot);
  });

  const slides = sticky.querySelectorAll(".case-slide");
  const dots   = dotsWrap?.querySelectorAll(".case-dot");
  let currentCase = 0;

  function setCase(idx) {
    if (idx === currentCase && slides[idx]?.classList.contains("is-active")) return;
    currentCase = idx;
    slides.forEach((s, i) => s.classList.toggle("is-active", i === idx));
    dots?.forEach((d, i) => d.classList.toggle("is-active", i === idx));

    // Обновляем десктопный каунтер
    const cur = document.querySelector("#cases-count .cases-count__current");
    if (cur) cur.textContent = String(idx + 1).padStart(2, "0");
  }

  function scrollToCase(idx) {
    if (isMobile) return;
    const wrapTop = wrap.getBoundingClientRect().top + window.scrollY;
    const segH    = wrap.offsetHeight / n;
    // Прокручиваем к середине сегмента кейса
    window.scrollTo({ top: wrapTop + idx * segH + segH * 0.1, behavior: "smooth" });
  }

  // Десктоп: трекаем прогресс прокрутки внутри обёртки
  if (!isMobile) {
    let rafId;
    window.addEventListener("scroll", () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const rect       = wrap.getBoundingClientRect();
        const vh         = window.innerHeight;
        const scrollable = wrap.offsetHeight - vh;
        if (scrollable <= 0) return;

        // Ещё не вошли — первый кейс
        if (rect.top > 0) return;

        // Уже вышли из sticky-зоны — фиксируем последний кейс
        if (rect.bottom < vh) {
          setCase(n - 1);
          return;
        }

        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / scrollable));
        const idx      = Math.min(Math.floor(progress * n), n - 1);
        setCase(idx);
      });
    }, { passive: true });

    // Keyboard navigation: ← / → когда sticky в viewport
    document.addEventListener("keydown", (e) => {
      if (e.target.matches("input, textarea, select")) return;
      const rect = wrap.getBoundingClientRect();
      const inView = rect.top <= 0 && rect.bottom >= window.innerHeight;
      if (!inView) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        scrollToCase(Math.min(n - 1, currentCase + 1));
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        scrollToCase(Math.max(0, currentCase - 1));
      }
    });
  }

  setCase(0);
}

/* ============================================================
   ПРАЙС — аккордеон
   ============================================================ */
function initPricing() {
  const wrap = document.getElementById("pricing-wrap");
  if (!wrap) return;

  // Три основных пункта: каждый раздел — один аккордеон
  const sectionEl = document.createElement("div");
  sectionEl.className = "pricing-section";

  PRICING_DATA.forEach((section) => {
    const item = document.createElement("div");
    item.className = "accordion-item accordion-item--main";

    const totalRows = (section.groups || []).reduce((sum, g) => sum + g.rows.length, 0);
    const countLabel = section.comingSoon ? "смета по запросу" : `${totalRows} позиций`;

    const btn = document.createElement("button");
    btn.className = "accordion-btn";
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", `acc-panel-${section.id}`);
    btn.id = `acc-btn-${section.id}`;
    btn.type = "button";
    btn.innerHTML = `
      <span class="accordion-btn__title">${section.sectionLabel}</span>
      <span class="accordion-btn__count">${countLabel}</span>
      <span class="accordion-btn__icon" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 5l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    `;

    const panel = document.createElement("div");
    panel.className = "accordion-panel";
    panel.id = `acc-panel-${section.id}`;
    panel.setAttribute("role", "region");
    panel.setAttribute("aria-labelledby", btn.id);
    panel.hidden = true;

    if (section.comingSoon) {
      // Раздел-заглушка: прайс появится позже, смета — по заявке
      const ph = document.createElement("div");
      ph.className = "pricing-placeholder";
      ph.innerHTML = `
        <p>${section.placeholder}</p>
        <a href="#contact" class="btn btn--outline">Получить смету</a>
      `;
      ph.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      });
      panel.appendChild(ph);
    } else {
      section.groups.forEach((group) => {
        // Подзаголовок группы — только если групп несколько
        if (section.groups.length > 1) {
          const groupTitle = document.createElement("h4");
          groupTitle.className = "price-group__title";
          groupTitle.textContent = group.title;
          panel.appendChild(groupTitle);
        }

        const table = document.createElement("table");
        table.className = "price-table";
        table.innerHTML = `
          <thead>
            <tr>
              <th scope="col">Наименование работы</th>
              <th scope="col" class="price-table__unit">Ед.</th>
              <th scope="col" class="price-table__price">Цена, ₽</th>
            </tr>
          </thead>
        `;
        const tbody = document.createElement("tbody");
        group.rows.forEach((row) => {
          const priceText =
            typeof row.price === "number"
              ? row.price.toLocaleString("ru-RU")
              : row.price;
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td>${row.name}</td>
            <td class="price-table__unit">${row.unit}</td>
            <td class="price-table__price">${priceText}</td>
          `;
          tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        panel.appendChild(table);
      });

      if (section.note) {
        const note = document.createElement("p");
        note.className = "pricing-section__note";
        note.textContent = section.note;
        panel.appendChild(note);
      }
    }

    // Открытие / закрытие
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      panel.hidden = expanded;
      item.classList.toggle("is-open", !expanded);
    });

    // Клавиатурная навигация между пунктами
    btn.addEventListener("keydown", (e) => {
      const btns = [...sectionEl.querySelectorAll(".accordion-btn")];
      const idx = btns.indexOf(btn);
      if (e.key === "ArrowDown") { e.preventDefault(); btns[(idx + 1) % btns.length]?.focus(); }
      if (e.key === "ArrowUp")   { e.preventDefault(); btns[(idx - 1 + btns.length) % btns.length]?.focus(); }
      if (e.key === "Home")      { e.preventDefault(); btns[0]?.focus(); }
      if (e.key === "End")       { e.preventDefault(); btns[btns.length - 1]?.focus(); }
    });

    item.appendChild(btn);
    item.appendChild(panel);
    sectionEl.appendChild(item);
  });

  wrap.appendChild(sectionEl);
}

/* ============================================================
   NUMBER COUNTERS
   ============================================================ */
function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);

        const el = entry.target;
        const target = parseInt(el.dataset.counter, 10);
        const suffix = el.dataset.suffix || "";
        const duration = 1600;
        const start = performance.now();

        function tick(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const value = Math.round(easeOut(progress) * target);
          el.textContent = value + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}

/* ============================================================
   ПРОМО-ПЛАШКА: обратный отсчёт до конца акции
   ============================================================ */
function initPromoBadge() {
  const badge = document.getElementById("promo-badge");
  const timer = document.getElementById("promo-timer");
  if (!badge || !timer) return;

  const target = new Date(2026, 6, 18, 23, 59, 59); // 18 июля, конец дня

  const els = {
    days: timer.querySelector('[data-timer="days"]'),
    hours: timer.querySelector('[data-timer="hours"]'),
    mins: timer.querySelector('[data-timer="mins"]'),
    secs: timer.querySelector('[data-timer="secs"]'),
  };

  const pad = (n) => String(n).padStart(2, "0");

  function tick() {
    const diff = target.getTime() - Date.now();

    if (diff <= 0) {
      badge.style.display = "none";
      clearInterval(intervalId);
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    els.days.textContent = pad(days);
    els.hours.textContent = pad(hours);
    els.mins.textContent = pad(mins);
    els.secs.textContent = pad(secs);
  }

  tick();
  const intervalId = setInterval(tick, 1000);
}
