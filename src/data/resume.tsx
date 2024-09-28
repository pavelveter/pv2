import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Павел Ветер",
  initials: "ПВ",
  url: "https://pavelveter.com",
  location: "Санкт-Петербург, Россия",
  locationLink: "https://www.google.com/maps/place/sanktpetersburg",
  description:
    "Профессиональный фотограф",
  main:
    "В Санкт-Петербурге снимаю корпоративные мероприятия, свадьбы, еду, клубы и промышленность. Работаю с 2010 года.",
  summary:
    "Попал в шортлист журнала «Афиша» с фото с «Пикника Афиши». Всегда с собой запасной комплект техники, если надо – переносной свет. Но со студийным светом я тоже на ты. Максимальная автоматизация обработки позволяет отдать фотографии быстро (и не в ущерб качеству), храню я их долго, снимаю в точности под задачу.",
  avatarUrl: "/me.jpg",
  hello: "Привет, я — ",
  slideshow: "Портфолио",
  howishoot: "Вот так я снимаю",
  who: "Учился на мастер-классах таких мэтров фотографии, как Юлия Франтова (Москва), Эмин Кулиев (Нью-Йорк), Альберт Поцей (Монако) и многих других. Сам провёл несколько мастер-классов о съёмке со вспышками и об автоматизации обработки фото. Работал с такими заказчиками, как Mitsubishi, Mazda, Audi, ГК Полины Крупчак, кальянными «Мята», кинотеатрами «Люксор», «МИРАЖ Cinema», ТРК «Титан-Арена», ТК «МИР», Enjoy Division, Доска Треска, НПО «Невский Берег», ЖК «Цветы», Газпром, ВТБ, и десятками других.",
  contacts: "Контакты",
  talk: "Давайте пообщаемся!",
  request_start: "Есть запрос на съёмку? Напишите мне в",
  request_end: "и я помогу запомнить этот день! У вас потерялись фотки? Пишите, что-нибудь придумаем!",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    social: {
      VK: {
        name: "VK",
        url: "https://vk.com/pavelveter",
        icon: Icons.vk,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/pavelveter",
        icon: Icons.instagram,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/pavelveter/Resize-and-Upload",
        icon: Icons.github,

        navbar: true,
      },
      X: {
        name: "Twitter",
        url: "https://x.com/pvlvtr",
        icon: Icons.x,

        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/pavelveter",
        icon: Icons.telegram,
        navbar: true,
      },
    },
  },
  
} as const;
