# Mikroprojekt
## How to setup front-end dev environment
```bash
cd client
```
Install required packages:
```bash
npm i
```
Run localhost server:
```bash
npm run start
```
## How to setup back-end & database dev environment
```bash
cd server
```
Install required packages:
```bash
npm i
```
Open mysql workbench and create a new sql connection. Put the username as **root** and password as **mysql**, make sure you use port **3306**. <br>
Also inside server/ directory create a **.env** file and paste there content from **.env.example**. <br>
<br>
Make a new sql file in mysql workbench and create a database:
```bash
CREATE DATABASE mikroprojekt;
```
Push the schema into mysql:
```bash
npx prisma db push
```
Generate prisma client:
```bash
npx prisma generate
```
Seed the database:
```bash
npm run seed
```
Run localhost server:
```bash
npm run start
```
