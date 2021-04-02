# Задача

Сделать форму создания «тестовой локации».

## Deployment instructions
1. Clone repository or download the archive
2. Install dependencies in console `npm install`
3. Launch a server `npm start`

## На входе

Mobx store, который подтягивает данные по локациям, средам и серверам.

## На форме:

- Выбор локации;
- выбор среды (отфильтрованный по локации);
- доступные серверы через запятую, информационно;
- поле для ввода подсказки.

![Примерный макет](https://raw.githubusercontent.com/BATCOH/mp-test/master/todo.png)

## На выходе

По кнопке «Вывести результат в консоль» — массив объектов вида `[{locationID: number, envID: number, hint: string}]`

## Дополнительно

Макет примерный, pixel-perfect не нужен, функционал — в первую очередь.
Иконки берём с Font Awesome.
