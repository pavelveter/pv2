import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Павел Ветер",
  initials: "ПВ",
  url: "https://pavelveter.com",
  location: "Санкт-Петербург, Россия",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Профессиональный фотограф",
  main:
    "Снимаю корпоративные мероприятия, свадьбы, клубы, еду и промышленность с 2010 года.",
  summary:
    "Работаю, преимущественно, в Санкт-Петербурге. Попал в шортлист журнала «Афиша» с репортажем с «Пикника Афиши». Всегда с собой запасной комплект техники, если надо – переносной свет. Но со студийным светом я тоже на ты. Максимальная автоматизация обработки позволяет отдать фотографии быстро (но не в ущерб качеству), храню я их долго, снимаю в точности под задачу.",
  avatarUrl: "/me.png",
  hello: "Привет, я — ",
  slideshow: "Фотографии",
  howishoot: "Вот так я снимаю",
  who: "Учился на мастер-классах таких мэтров фотографии, как Юлия Франтова (Москва), Эмин Кулиев (Нью-Йорк), Альберт Поцей (Монако) и многих других. Провёл несколько мастер-классов о съёмке с искусственным светом и об автоматизации фотообработки. Работал с такими заказчиками, как Mitsubishi, Mazda, ГК Полины Крупчак, кальянными «Мята», кинотеатрами «Люксор», «МИРАЖ Cinema», ТРК «Титан-Арена», ТК «МИР», Enjoy Division, Доска Треска, НПО «Невский Берег», ЖК «Цветы», Газпром, ВТБ, и десятками других.",
  contacts: "Контакты",
  talk: "Давайте пообщаемся!",
  request_start: "Есть запрос на съёмку? Напишите мне в",
  request_end: "и я помогу запомнить этот день! У вас потерялись мои фотки? Пишите, что-нибудь придумаем!",
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
        url: "https://github.com/pavelveter",
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
