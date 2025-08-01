import type { NewsItemInterface } from "~/interfaces/news-item-interface";

/** Данные новостей для news в блоке HomeView */
export const newsData: NewsItemInterface[] = [
  {
    "id": "1",
    "server": "none",
    "tags": ['сервер'],
    "title": "FEMC на хостинге!",
    "text": "Вот и состоялся релиз нашего сайта. Есть моменты которые еще нужно доработать и улучшить. Ждем фидбек от наших любимых падмпещиков. В скором времени мы релизнем новые функции, такие как - игроки онлайн и количество игроков онлайн по каждому серверу. Всем peace",
    "date": "04.02.2025",
    "homePreviewImage": "/images/news/news3.jpg",
    "serverPreviewImage": "/images/news/news3.jpg",
    "newsPreviewImage": "/images/news/news3.jpg",
    "portraitImage": "/images/news/news3.jpg",
  },
  {
    "id": "2",
    "server": "pawhera",
    "tags": ['pawhera'],
    "title": "Место для вашей новости",
    "text": "Вы можете отправить новость через наш Discord канал, в новостной форум",
    "date": "01.02.2025",
    "homePreviewImage": "/images/news/news2.jpg",
    "serverPreviewImage": "/images/news/news2.jpg",
    "newsPreviewImage": "/images/news/news2.jpg",
    "portraitImage": "/images/news/news2.jpg",
  },
  {
    "id": "3",
    "server": "celedia",
    "tags": ['celedia'],
    "title": "Первый игрок прошел игру на сервере",
    "text": "Никто даже не ожидал что дракон всё ещё стоит и ожидает своего часа. Поздравляем игрока Reveck с этим достижением!",
    "date": "09.02.2025",
    "homePreviewImage": "/images/news/news1.jpg",
    "serverPreviewImage": "/images/news/news1.jpg",
    "newsPreviewImage": "/images/news/news1.jpg",
    "portraitImage": "/images/news/news1.jpg",
  },
  {
    "id": "4",
    "server": "none",
    "tags": ['сервер'],
    "title": "Рефакторинг сайта прошел успешно",
    "text": "В процессе добавления авторизации и чата. Но главное что сайт теперь индексируется и работает быстрее.",
    "date": "01.07.2025",
    "homePreviewImage": "/images/news/news5.jpg",
    "serverPreviewImage": "/images/news/news5.jpg",
    "newsPreviewImage": "/images/news/news5.jpg",
    "portraitImage": "/images/news/news5.jpg",
  },
];