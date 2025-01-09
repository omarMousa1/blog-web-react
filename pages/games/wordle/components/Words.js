import WordData from "../ARwords/startWithWords.json";

export const arabicWordsChecker = (currentGuess) =>
  WordData[currentGuess[0]]?.includes(currentGuess);

export const WORDS = [
  "تفاحة ",
  "مدرسة ",
  "سيارة ",
  "طائرة ",
  "سحابة ",
  "مدينة ",
  "دجاجة ",
  "فراشة ",
  "بحرية ",
  "زيتون ",
  "مفتاح ",
  "قصيدة ",
  "سفينة ",
  "زرافة ",
  "ليمون",
  "برمجة",
  "مكتبة",
  "طاولة",
  "كراسي",
  "ستاره",
  "كاتشب",
  "مباشرة",
  "عماره",
  "كراسه",
  "مساجد",
  "فواكه",
  "منديل",
  "البحر",
];
