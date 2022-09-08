# RSBlog
Private repository to complete the final task in Stage 2 rolling-scopes-school.
Итак, перед вами приложение RSBlog!
Для приложения разработан собственный бэкэнд, соответственно для запуска приложения и проверки всех фич необходимо запустить сервер.
Сервер находится в отдельном репозитории https://github.com/SergeyIvanov85/RSBlog-server
Инструкция по запуску сервера находится в файле README указанного репозитория, просто склонируйте его себе, а потом запустите.
После запуска сервера можно запустить задеплоенное приложение по ссылке https://Ponomareva-Nina.github.io/RSBlog/
Если вы захотите сохранить свои посты для потомков, пожалуйста сделайте пуш в репозиторий сервера после работы (т.к. изображения сохраняются в серверной папке uploads, а наша команда не располагает возможностью поднять круглосуточный сервер), тем не менее все ваши статьи сохранятся и будут доступны для Вас в любое время!

Task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/rsclone/rsclone.md

Deploy: https://Ponomareva-Nina.github.io/RSBlog/

Done 06.09.2022 / deadline 06.09.2022

Score: 520\620

Описание фич, реализованных при создании приложения, и ожидаемого количества баллов за каждую из них:

Бэкенд: 200 баллов
* Использован MVC паттерн (10 баллов)
* Подключение и работа с БД MongoDB (10 баллов)
* Приложение разбито на микросервисы (10 баллов)
* Используется ORM(sequelize/mongoose) (10 баллов)
* Регистрация (10 баллов)
* Аутентификация (10 баллов)
* Авторизация (10 баллов)
* Токенизация (10 баллов)
* Приложение отображает данные для которых получает от бекенда (10 баллов)
* Реализован nodejs и express (20 балов)
* Реализована работа с изображениями подключен express-fileupload(20 баллов)
* Подключены и корректно работают bcryptjs, dotenv и jsonwebtoken (30 баллов
* Использован axios (20 баллов)
* Сервер отдаёт корректные ответы, отдаёт HTTP ошибки с нормальными body, по которым можно понять, что произошло, пишет читаемые логи (20 балов)

Фронтенд: 320

* Имеется пользовательское меню для кастомизации настроек, с анимацией вызова. Все кликабельные элементы имеют активное поведение (10)
* Есть возможность переключения 2 языков. Выбор языка и темы запоминается и сохраняется после перезагрузки страницы и при последующем входе в учетку (20 баллов)
* Реализована смена стилистической темы приложения (светлаятемная) Выбор темы запоминается и сохраняется после перезагрузки страницы и при последующем входе в учетку** (20 баллов)
* Реализован qr-код для возможности поделиться приложением (10 баллов)
* Реализован routing (без перезагрузки страницы приложения) (20 баллов)
* Приложение выполнено в едином стиле (30 баллов)
* Сохранение и загрузка чего-либо осуществляется с использованием Local storage (10 баллов)
* Реализована сортировка, фильтрация и поиск (20 баллов)
* Реализовано корректное отображение даты (react-moment) (10 баллов)
* Реализованы тосты (модалки) при действиях пользователя (react-toastify) (20 баллов)
* Возможность добавления, редактирования и удаления поста (30 баллов)
* Возможность коментирования поста (20 баллов)
* Счётчики просмотров, комментариев и лайков (20 баллов)
* Использован ESLint (20 баллов)
* Реализована супер крутая фича чтоб задеплоить React SPA приложение на GitHub pages (пол-ночи танцев с бубном за час до дедлайна) (20 баллов)
* Приложение написано на TypeScript (40 баллов)
