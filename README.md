# Avenor Vanilla

Статический сайт проекта **Avenor Vanilla** — «Место, где создаётся история».

## Структура

```
/
├── index.html
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
└── assets/
    ├── images/
    │   └── og-image.png       — превью для соцсетей/Discord
    └── icons/
        ├── emblem.svg          — основной логотип (SVG)
        ├── favicon-32.png
        └── apple-touch-icon.png
```

> **Важно:** в `index.html`, `robots.txt` и `sitemap.xml` прописан адрес
> `https://jaroslavmazura10-web.github.io/avenor-vanilla/`. Если репозиторий
> или логин на GitHub изменятся — замените этот адрес во всех трёх файлах.

## Публикация на GitHub Pages

1. Создайте новый репозиторий на GitHub (например, `avenor-vanilla`).
2. Загрузите в него все файлы этого проекта, сохранив структуру папок.
3. Перейдите в **Settings → Pages**.
4. В разделе **Source** выберите ветку `main` и папку `/ (root)`.
5. Сохраните — через минуту сайт будет доступен по адресу вида
   `https://<ваш-логин>.github.io/avenor-vanilla/`.

## Локальный просмотр

Файл `index.html` можно открыть напрямую в браузере — сайт работает полностью
на HTML/CSS/JS, без сервера, базы данных и API.

## Технологии

- Чистый HTML5 / CSS3 / JavaScript (без фреймворков и зависимостей сборки).
- Шрифты Google Fonts: Cinzel, Manrope, JetBrains Mono.
- Анимированный фон на `<canvas>`, эффект стекла (glassmorphism), плавные
  появления блоков при прокрутке (Intersection Observer).
