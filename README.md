# Деплой приложения на сервер с использованием pm2

IP адрес 158.160.183.138

Frontend https://mike395.nomorepartiessbs.ru

Backend https://api.mike395.nomorepartiessbs.ru






















# Фронтенд проекта Mesto API
Спринт 1


npm run start
npm run dev
npm run lint
node app.ts

1. Создайте проект

npm init -y
npm install react-scripts --save
npm install react-scripts --save-dev
npm install --legacy-peer-deps
npm fund
npm audit fix --force

переустановка node modules
npm install rimraf -g
npm fund
npm audit fix --force

And in the project folder delete the node_modules folder with:
rimraf --glob 

(потому что npm не кэширует зависимости для каждой версии Node)
npm cache clean --force
Переустановить зависимости
npm install

npm fund
npm audit fix --force
npm install npm@latest -g
npm cache clean --force


2. Настройте линтер

npm install eslint --save-dev

npm init @eslint/config@latest
npx install-peerdeps --dev eslint-config-airbnb-base
npx install-peerdeps --dev eslint-config-airbnb-base --force or --legacy-peer-deps


Ещё четыре dev-зависимости, чтобы линтер работал по правилам стайлгайда Airbnb:

eslint-config-airbnb-base
npm install --save-dev eslint@latest @eslint/js@latest
npm install --save-dev eslint-config-airbnb-base --force or --legacy-peer-deps
npm fund

eslint-plugin-import
npm install --save-dev eslint-plugin-import --force or --legacy-peer-deps


@typescript-eslint/eslint-plugin
npm install @typescript-eslint/eslint-plugin@latest --save-dev
npm install @typescript-eslint/eslint-plugin@latest --force or --legacy-peer-deps

npx install-peerdeps --dev eslint-config-airbnb-base
npx install-peerdeps --dev eslint-config-airbnb-base --force or --legacy-peer-deps


@typescript-eslint/parser
npm install --save-dev @typescript-eslint/parser --force or --legacy-peer-deps



3. В файл package.json добавьте новую команду lint. 
При её запуске выполняется запуск eslint: npx eslint src/**/*.ts. 
После выполнения в консоли не должно быть сообщений об ошибках.

"lint": "eslint . --ext .ts"  

 "@eslint/js": "^7.32.0",
npm install --save-dev eslint-plugin-import --force or --legacy-peer-deps

npm install npm@latest -g
npm cache clean --force
npm install --legacy-peer-deps
npm install --force or --legacy-peer-deps
npm fund

npm run build
npm install








Данная команда должна осуществлять запуск проекта без его непосредственной сборки при помощи ts-node.
npm i
npm run 
npm run start

npm init
npm install npm@latest -g
npm cache clean --force
npm install
rimraf --glob 
npm install rimraf -g
npm install --legacy-peer-deps
npm install --force or --legacy-peer-deps
npm fund
npm audit
npm audit fix
npm audit fix --force

npm init @eslint/config@latest

npm run start
npm install react-scripts --save-dev
npm install react-scripts --save-dev --force or --legacy-peer-deps
npm install react-scripts --save
npm fund
npm audit fix --force

npm i npm@10.8.2    //16.20.2 >
npm i npm@10.9.3    //18.17.0 >
npm i npm@6.14.18   //14.21.3
npm i npm@8.19.4    // 12 >  14.15.0

nvm install 14.21.3
nvm install 16.20.2
nvm install 18.20.8
nvm install 20.19.5
nvm install 22.0.0
nvm install 23.0.0


nvm use 16.20.2
nvm use 18.20.8
nvm use 20.19.5

Удалил все пакеты npm
npm update -g node

Посмотреть все пакеты.
nvm ls


Настойка ESLint для airbnb
npm info "eslint-config-airbnb-base@latest" peerDependencies
npx install-peerdeps --dev eslint-config-airbnb-base

npm install -g install-peerdeps
install-peerdeps --dev eslint-config-airbnb-base

ВТОРАЯ ВЕРСИЯ.

npm install express
npm run start
 npm install react-scripts --save-dev 
 npm install react-scripts --save-dev --force
 npm fund
 npm audit

npm install  --legacy-peer-deps

Вот эта команда устанавливает react
npm install react-scripts@latest

npm run build



Установить зависимость 
npm i eslint-config-airbnb-base
npm i eslint-plugin-import
npm install --save-dev eslint @typescript-eslint/parser
npm install --save-dev eslint @typescript-eslint/eslint-plugin
npm install --save-dev eslint @typescript-eslint/parser
npm install --save-dev eslint @typescript-eslint/eslint-plugin

код из урока
npm i --save-dev typescript @types/node

npm fund
npm install
npm install --force
npm audit
npm audit fix
npm audit fix --force

npm run lint
npm i jiti
npx eslint src/**/*.ts

Настойка ESLint для airbnb
npm info "eslint-config-airbnb-base@latest" peerDependencies
npx install-peerdeps --dev eslint-config-airbnb-base
npm audit
npm audit fix
npm audit fix --force

node use 16


npm run start

[https://](https://github.com/mihailcoc/nodejs-mesto-frontend/activity?ref=main)

git remote add origin https://github.com/mihailcoc/nodejs-mesto-frontend.git

git push -u origin main
git checkout -B main
git push --force https://github.com/mihailcoc/nodejs-mesto-frontend

git add .
git commit
git push --force https://github.com/mihailcoc/nodejs-mesto-frontend
git push --set-upstream https://github.com/mihailcoc/nodejs-mesto-frontend main

Скопировать репозиторий с изменениями.
git fetch https://github.com/mihailcoc/nodejs-mesto-frontend



4. Добавьте исключение 
Согласно стайлгайду Airbnb, в JavaScript не следует использовать нижние подчёркивания для имён идентификаторов, поэтому ESLint будет ругаться на переменную _id в файлах проекта. 

npm info "eslint-config-airbnb-base@latest" peerDependencies
npx install-peerdeps --dev eslint-config-airbnb-base
npm info "eslint-config-airbnb-base@latest" peerDependencies

5. Создайте первый TS-файл

const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req:any , res:any) => {
    res.send('<h1>Hello, Geeks!</h1><p>This is your simple Express server.</p>');
});
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});


Запустить typescript
cd src
$ npx ts-node app.ts

6. Добавьте команду сборки проекта

Установить компилятор TypeScript
npm i -D typescript
Зависимости typescript 
npm i -D typescript peerDependencies
npx install-peerdeps --dev typescript

Зависимости eslint
npm info "eslint-config-airbnb-base@latest" peerDependencies

npm i eslint-config-airbnb-base
npx install-peerdeps --dev eslint-config-airbnb-base

npm i eslint-plugin-import
npx install-peerdeps --dev eslint-plugin-import

npm install --save-dev eslint @typescript-eslint/parser
npx install-peerdeps --dev @typescript-eslint/parser
npm install @typescript-eslint/parser@8.43.0 eslint@^9.0.0 typescript@<6.0.0 --save-dev
npm install @typescript-eslint/parser@8.43.0 eslint@^9.0.0 --save-dev

npm install --save-dev eslint @typescript-eslint/eslint-plugin
npx install-peerdeps --dev @typescript-eslint/eslint-plugin
npm install @typescript-eslint/eslint-plugin@8.43.0 eslint@^9.0.0 typescript@<6.0.0 @typescript-eslint/parser@^8.43.0 --save-dev
npm install @typescript-eslint/eslint-plugin@8.43.0 eslint@^9.0.0 @typescript-eslint/parser@^8.43.0 --save-dev

npm fund
npm audit
npm audit fix




Зависимости react 
npm install react-scripts --save-dev --force
npx install-peerdeps --dev react-dom
npx install-peerdeps --dev react
// npx install-peerdeps --dev react-scripts

npm install react-dom@19.1.1 react@^19.1.1 --save-dev
npm install react-scripts --save-dev --force


npm install  --legacy-peer-deps
npm install
npm fund
npm audit
npm audit fix

Перед стартом обновить зависимости eslint
npm info "eslint-config-airbnb-base@latest" peerDependencies
npm run start
npm run build


ts-node-dev
ts-node-dev nodemon


npm run start
npm run build

.eslintignore
node_modules
src/**/*.js
src\serviceWorker.js
src\utils\api.js
src\serviceWorker.js
src\index.js
src\contexts\CurrentUserContext.js
src\components\Register.js
src\components\ProtectedRoute.js
src\components\PopupWithForm.js
src\components\Main.js
src\components\Login.js
src\components\InfoTooltip.js
src\components\ImagePopup.js
src\components\Header.js


7. Настройте хот-релоуд
Сделайте так, чтобы сервер перезапускался при изменении файлов проекта. 
Для этого установите пакет ts-node-dev. Приложение с хот релоудом должно запускаться командой: npm run dev 

Глобально 
npm install -g ts-node-dev

Локально в проект
npm install --save-dev ts-node-dev
npm install --save-dev ts-node-dev peerDependencies

npm i ts-node-dev
npx install-peerdeps --dev ts-node-dev
npm install ts-node-dev@2.0.0 node-notifier@* typescript@* --save-dev


npm run dev 

 "scripts": 
    "dev": "ts-node-dev --respawn src/app.ts"

npm install  --force
npm install  --legacy-peer-deps
npm fund
npm audit
npm audit fix


npm run start
npm run dev 
npm run lint


npm i bcrypt
npm install bcrypt
npm i --save-dev @types/bcrypt
npm install --force
npm install --legacy-peer-deps
npm install bcrypt --force
npm install bcrypt --legacy-peer-deps
npm fund
npm audit
npm audit fix


    // "@typescript-eslint/eslint-plugin": "^6.19.0",
    // "@typescript-eslint/parser": "^5.62.0",
Установить локально
npm i --save-dev @typescript-eslint/eslint-plugin
npm i --save-dev @typescript-eslint/parser


npm install --save-dev eslint @typescript-eslint/parser
npm install @typescript-eslint/parser --legacy-peer-deps
npx install-peerdeps --dev @typescript-eslint/parser
npm install @typescript-eslint/parser@8.43.0 eslint@^9.0.0 typescript@<6.0.0 --save-dev
npm install @typescript-eslint/parser@8.43.0 eslint@^9.0.0 --save-dev

npm install --save-dev eslint @typescript-eslint/eslint-plugin
npm install @typescript-eslint/eslint-plugin --legacy-peer-deps
npx install-peerdeps --dev @typescript-eslint/eslint-plugin
npm install @typescript-eslint/eslint-plugin@8.43.0 eslint@^9.0.0 typescript@<6.0.0 @typescript-eslint/parser@^8.43.0 --save-dev
npm install @typescript-eslint/eslint-plugin@8.43.0 eslint@^9.0.0 @typescript-eslint/parser@^8.43.0 --save-dev

npm i express body-parser

Почистить все зависимости и установить заново 
npm clean-install

git add .
git commit
git push --force https://github.com/mihailcoc/nodejs-mesto-frontend
git push --set-upstream https://github.com/mihailcoc/nodejs-mesto-frontend main

Добавляем в наш проект изменения.
git fetch https://github.com/mihailcoc/nodejs-mesto-frontend
Достаем наш проект после изменений.
git pull https://github.com/mihailcoc/nodejs-mesto-frontend

Docker
Сборка образов
docker build . -t backend-mesto

cd frontend
docker build . -t frontend-mesto

Генерируем ecosystem.config.js
pm2 init simple

 Запустить описанные приложения. Если оно уже запущено, то дубль создан не будет
pm2 start ecosystem.config.js

# Остановить все описанные в конфиге приложения
pm2 stop ecosystem.config.js

# Перезапустить все приложения
pm2 restart ecosystem.config.js

# Перезагрузить настройки экосистемы
pm2 reload ecosystem.config.js

# Удалить приложения из PM
pm2 delete ecosystem.config.js 


Подключиться к серверу
ssh -l rozamund395 158.160.183.138