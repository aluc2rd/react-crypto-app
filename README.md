# React Crypto Portfolio

Веб-приложение для отслеживания криптовалютного портфеля, построенное на React с использованием Ant Design.

## Описание

Приложение позволяет пользователям:

- Просматривать информацию о криптовалютах
- Добавлять активы в портфель
- Отслеживать стоимость портфеля
- Визуализировать данные с помощью графиков

## Технологии

### Frontend

- React 18
- Vite
- Ant Design
- Chart.js (react-chartjs-2)

### Backend

- Node.js
- Express.js

## Установка и запуск

### Предварительные требования

- Node.js (версия 16 или выше)
- npm

### Установка зависимостей

1. Установите зависимости для сервера:

```bash
npm install
```

2. Установите зависимости для frontend:

```bash
cd frontend
npm install
```

### Запуск в режиме разработки

1. Запустите frontend (в папке frontend):

```bash
npm run dev
```

2. Для production сборки:

```bash
npm run build
```

3. Запустите сервер (в корневой папке):

```bash
npm start
```

Приложение будет доступно по адресу `http://localhost:80`

## Структура проекта

```
react-crypto-initial/
├── frontend/           # React приложение
│   ├── src/
│   │   ├── components/ # React компоненты
│   │   ├── api.js     # API функции
│   │   └── data.js    # Данные приложения
│   └── package.json
├── server.js          # Express сервер
└── package.json       # Серверные зависимости
```

## Основные компоненты

- **AppLayout** - основной макет приложения
- **CryptoContextProvider** - контекст для управления состоянием
- **AddAssetForm** - форма добавления активов
- **AssetsTable** - таблица активов
- **PortfolioChart** - график портфеля
- **CoinInfo** - информация о монетах

## Скрипты

### Frontend

- `npm run dev` - запуск в режиме разработки
- `npm run build` - сборка для production
- `npm run preview` - предварительный просмотр сборки
- `npm run lint` - проверка кода

### Server

- `npm start` - запуск сервера

## Деплой

Проект настроен для автоматического деплоя через GitHub Actions (см. `.github/workflows/deploy.yml`).
