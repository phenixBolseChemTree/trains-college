const trainsAll = [
  { from: "Москва", to: "Санкт-Петербург", date: "2024-04-03", time: "08:00" },
  { from: "Москва", to: "Новосибирск", date: "2024-04-04", time: "10:00" },
  { from: "Москва", to: "Екатеринбург", date: "2024-04-05", time: "12:00" },
  { from: "Москва", to: "Красноярск", date: "2024-04-06", time: "14:00" },
  { from: "Москва", to: "Нижний Новгород", date: "2024-04-07", time: "16:00" },
  { from: "Москва", to: "Казань", date: "2024-04-08", time: "18:00" },
  { from: "Москва", to: "Челябинск", date: "2024-04-09", time: "20:00" },
  { from: "Москва", to: "Омск", date: "2024-04-10", time: "22:00" },
  { from: "Москва", to: "Самара", date: "2024-04-11", time: "09:00" },
  { from: "Санкт-Петербург", to: "Москва", date: "2024-04-03", time: "09:00" },
  { from: "Санкт-Петербург", to: "Новосибирск", date: "2024-04-04", time: "11:00" },
  { from: "Санкт-Петербург", to: "Екатеринбург", date: "2024-04-05", time: "13:00" },
  { from: "Санкт-Петербург", to: "Красноярск", date: "2024-04-06", time: "15:00" },
  { from: "Санкт-Петербург", to: "Нижний Новгород", date: "2024-04-07", time: "17:00" },
  { from: "Санкт-Петербург", to: "Казань", date: "2024-04-08", time: "19:00" },
  { from: "Санкт-Петербург", to: "Челябинск", date: "2024-04-09", time: "21:00" },
  { from: "Санкт-Петербург", to: "Омск", date: "2024-04-10", time: "23:00" },
  { from: "Санкт-Петербург", to: "Самара", date: "2024-04-11", time: "10:00" },
  { from: "Новосибирск", to: "Москва", date: "2024-04-03", time: "10:00" },
  { from: "Новосибирск", to: "Санкт-Петербург", date: "2024-04-04", time: "12:00" },
  { from: "Новосибирск", to: "Екатеринбург", date: "2024-04-05", time: "14:00" },
  { from: "Новосибирск", to: "Красноярск", date: "2024-04-06", time: "16:00" },
  { from: "Новосибирск", to: "Нижний Новгород", date: "2024-04-07", time: "18:00" },
  { from: "Новосибирск", to: "Казань", date: "2024-04-08", time: "20:00" },
  { from: "Новосибирск", to: "Челябинск", date: "2024-04-09", time: "22:00" },
  { from: "Новосибирск", to: "Омск", date: "2024-04-10", time: "09:00" },
  { from: "Новосибирск", to: "Самара", date: "2024-04-11", time: "11:00" },
  { from: "Екатеринбург", to: "Москва", date: "2024-04-03", time: "11:00" },
  { from: "Екатеринбург", to: "Санкт-Петербург", date: "2024-04-04", time: "13:00" },
  { from: "Екатеринбург", to: "Новосибирск", date: "2024-04-05", time: "15:00" },
  { from: "Екатеринбург", to: "Красноярск", date: "2024-04-06", time: "17:00" },
  { from: "Екатеринбург", to: "Нижний Новгород", date: "2024-04-07", time: "19:00" },
  { from: "Екатеринбург", to: "Казань", date: "2024-04-08", time: "21:00" },
  { from: "Екатеринбург", to: "Челябинск", date: "2024-04-09", time: "23:00" },
  { from: "Екатеринбург", to: "Омск", date: "2024-04-10", time: "10:00" },
  { from: "Екатеринбург", to: "Самара", date: "2024-04-11", time: "12:00" },
  { from: "Красноярск", to: "Москва", date: "2024-04-03", time: "10:00" },
  { from: "Красноярск", to: "Санкт-Петербург", date: "2024-04-04", time: "12:00" },
  { from: "Красноярск", to: "Новосибирск", date: "2024-04-05", time: "14:00" },
  { from: "Красноярск", to: "Екатеринбург", date: "2024-04-06", time: "16:00" },
  { from: "Красноярск", to: "Нижний Новгород", date: "2024-04-07", time: "18:00" },
  { from: "Красноярск", to: "Казань", date: "2024-04-08", time: "20:00" },
  { from: "Красноярск", to: "Челябинск", date: "2024-04-09", time: "22:00" },
  { from: "Красноярск", to: "Омск", date: "2024-04-10", time: "09:00" },
  { from: "Красноярск", to: "Самара", date: "2024-04-11", time: "11:00" },
  { from: "Нижний Новгород", to: "Москва", date: "2024-04-03", time: "11:00" },
  { from: "Нижний Новгород", to: "Санкт-Петербург", date: "2024-04-04", time: "13:00" },
  { from: "Нижний Новгород", to: "Новосибирск", date: "2024-04-05", time: "15:00" },
  { from: "Нижний Новгород", to: "Екатеринбург", date: "2024-04-06", time: "17:00" },
  { from: "Нижний Новгород", to: "Красноярск", date: "2024-04-07", time: "19:00" },
  { from: "Нижний Новгород", to: "Казань", date: "2024-04-08", time: "21:00" },
  { from: "Нижний Новгород", to: "Челябинск", date: "2024-04-09", time: "23:00" },
  { from: "Нижний Новгород", to: "Омск", date: "2024-04-10", time: "10:00" },
  { from: "Нижний Новгород", to: "Самара", date: "2024-04-11", time: "12:00" },
  { from: "Казань", to: "Москва", date: "2024-04-03", time: "12:00" },
  { from: "Казань", to: "Санкт-Петербург", date: "2024-04-04", time: "14:00" },
  { from: "Казань", to: "Новосибирск", date: "2024-04-05", time: "16:00" },
  { from: "Казань", to: "Екатеринбург", date: "2024-04-06", time: "18:00" },
  { from: "Казань", to: "Нижний Новгород", date: "2024-04-07", time: "20:00" },
  { from: "Казань", to: "Красноярск", date: "2024-04-08", time: "22:00" },
  { from: "Казань", to: "Челябинск", date: "2024-04-09", time: "09:00" },
  { from: "Казань", to: "Омск", date: "2024-04-10", time: "11:00" },
  { from: "Казань", to: "Самара", date: "2024-04-11", time: "13:00" },
  { from: "Самара", to: "Москва", date: "2024-04-03", time: "10:00" },
  { from: "Самара", to: "Санкт-Петербург", date: "2024-04-04", time: "12:00" },
  { from: "Самара", to: "Новосибирск", date: "2024-04-05", time: "14:00" },
  { from: "Самара", to: "Екатеринбург", date: "2024-04-06", time: "16:00" },
  { from: "Самара", to: "Красноярск", date: "2024-04-07", time: "18:00" },
  { from: "Самара", to: "Нижний Новгород", date: "2024-04-08", time: "20:00" },
  { from: "Самара", to: "Казань", date: "2024-04-09", time: "22:00" },
  { from: "Самара", to: "Челябинск", date: "2024-04-10", time: "09:00" },
  { from: "Самара", to: "Омск", date: "2024-04-11", time: "11:00" },
  { from: "Ростов-на-Дону", to: "Москва", date: "2024-04-03", time: "11:00" },
  { from: "Ростов-на-Дону", to: "Санкт-Петербург", date: "2024-04-04", time: "13:00" },
  { from: "Ростов-на-Дону", to: "Новосибирск", date: "2024-04-05", time: "15:00" },
  { from: "Ростов-на-Дону", to: "Екатеринбург", date: "2024-04-06", time: "17:00" },
  { from: "Ростов-на-Дону", to: "Красноярск", date: "2024-04-07", time: "19:00" },
  { from: "Ростов-на-Дону", to: "Нижний Новгород", date: "2024-04-08", time: "21:00" },
  { from: "Ростов-на-Дону", to: "Казань", date: "2024-04-09", time: "23:00" },
  { from: "Ростов-на-Дону", to: "Челябинск", date: "2024-04-10", time: "10:00" },
  { from: "Ростов-на-Дону", to: "Омск", date: "2024-04-11", time: "12:00" },
  { from: "Омск", to: "Москва", date: "2024-04-03", time: "12:00" },
  { from: "Омск", to: "Санкт-Петербург", date: "2024-04-04", time: "14:00" },
  { from: "Омск", to: "Новосибирск", date: "2024-04-05", time: "16:00" },
  { from: "Омск", to: "Екатеринбург", date: "2024-04-06", time: "18:00" },
  { from: "Омск", to: "Красноярск", date: "2024-04-07", time: "20:00" },
  { from: "Омск", to: "Нижний Новгород", date: "2024-04-08", time: "22:00" },
  { from: "Омск", to: "Казань", date: "2024-04-09", time: "09:00" },
  { from: "Омск", to: "Челябинск", date: "2024-04-10", time: "11:00" },
  { from: "Омск", to: "Самара", date: "2024-04-11", time: "13:00" },
]

const trainsMoscow = [
  { from: "Москва", to: "Санкт-Петербург", date: "2024-04-03", time: "08:00" },
  { from: "Москва", to: "Новосибирск", date: "2024-04-04", time: "10:00" },
  { from: "Москва", to: "Екатеринбург", date: "2024-04-05", time: "12:00" },
  { from: "Москва", to: "Красноярск", date: "2024-04-06", time: "14:00" },
  { from: "Москва", to: "Нижний Новгород", date: "2024-04-07", time: "16:00" },
  { from: "Москва", to: "Казань", date: "2024-04-08", time: "18:00" },
  { from: "Москва", to: "Челябинск", date: "2024-04-09", time: "20:00" },
  { from: "Москва", to: "Омск", date: "2024-04-10", time: "22:00" },
  { from: "Москва", to: "Самара", date: "2024-04-11", time: "09:00" },
]

export {trainsAll, trainsMoscow }