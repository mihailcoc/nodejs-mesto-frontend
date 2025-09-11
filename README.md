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


4. Добавьте исключение 
Согласно стайлгайду Airbnb, в JavaScript не следует использовать нижние подчёркивания для имён идентификаторов, поэтому ESLint будет ругаться на переменную _id в файлах проекта. 

        "allow": [
            "_id"
        ]

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


6. Добавьте команду сборки проекта

ВТОРАЯ ВЕРСИЯ.

Установить зависимость 
npm i eslint-config-airbnb-base
npm i eslint-plugin-import
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

npm run start

[https://](https://github.com/mihailcoc/nodejs-mesto-frontend/activity?ref=main)

git remote add origin https://github.com/mihailcoc/nodejs-mesto-frontend.git
git push -u origin master
git push https://github.com/mihailcoc/nodejs-mesto-frontend --fast-forwards

Запустить typescript
$ npx ts-node app.ts
