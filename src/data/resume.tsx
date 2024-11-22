import { Icons } from '@/components/icons'
import { HomeIcon, NotebookIcon } from 'lucide-react'

export const DATA = {
  name: 'Павел Ветер',
  initials: 'ПВ',
  url: 'https://pavelveter.com',
  location: 'Санкт-Петербург, Россия',
  locationLink: 'https://www.google.com/maps/place/sanktpetersburg',
  description: 'Профессиональный фотограф',
  main: 'Снимаю корпоративы, свадьбы, еду, концерты и промышленность. В Санкт-Петербурге и не только. Работаю с 2010 года.',
  summary:
    'Всегда с собой запасная техника и переносной студийный свет — никаких форс-мажоров. Фото готовы быстро, но качество всегда в приоритете. Архивы храню годами. Опыт — тысяча событий, десятки довольных клиентов и тысячи красивых людей на снимках.',
  avatarUrl: '/me.jpg',
  hello: 'Привет, я — ',
  slideshow: 'Портфолио',
  howishoot: 'Так я снимаю',
  teachers:
    'Я – финалист шорт-листа журнала «Афиша» за снимки с «Пикника Афиши». Учился на мастер-классах таких мэтров фотографии, как Юлия Франтова (Москва), Эмин Кулиев (Нью-Йорк), Альберт Поцей (Монако) и многих других. Сам провел мастер-классы по работе со вспышками и автоматизации обработки. Работал шеф-фотографом Geometria.ru и Raskachaem.ru в родном городе.',
  clients:
    'Бренды, которые мне доверяют: Mitsubishi, Mazda, Audi, ГК Полины Крупчак, кальянные «Мята», кинотеатры «Люксор», «МИРАЖ Cinema», ТРК «Титан-Арена», ТК «МИР», Enjoy Division, Доска Треска, НПО «Невский Берег», ЖК «Цветы», Газпром, ВТБ, и десятки других.',
  contacts: 'Контакты',
  talk: 'Давайте пообщаемся!',
  request_start: 'Есть запрос на съёмку? Напишите мне в',
  request_end:
    'и давайте создавать красоту вместе. Пусть день съёмки останется с вами в доброй памяти на долгие годы!',
  navbar: [{ href: '/', icon: HomeIcon, label: 'Home' }],
  contact: {
    social: {
      VK: {
        name: 'VK',
        url: 'https://vk.com/pavelveter',
        icon: Icons.vk,
        navbar: true,
      },
      Instagram: {
        name: 'Instagram',
        url: 'https://instagram.com/pavelveter',
        icon: Icons.instagram,
        navbar: true,
      },
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/pavelveter/Resize-and-Upload',
        icon: Icons.github,

        navbar: true,
      },
      X: {
        name: 'Twitter',
        url: 'https://x.com/pvlvtr',
        icon: Icons.x,

        navbar: true,
      },
      Telegram: {
        name: 'Telegram',
        url: 'https://t.me/pavelveter',
        icon: Icons.telegram,
        navbar: true,
      },
    },
  },
} as const
