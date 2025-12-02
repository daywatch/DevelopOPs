Backend installation instruction

1.Install prerequisites
Node.js (v20 recommended, via fnm or direct download)

PostgreSQL (v16)

PGAdmin 4 (optional GUI)

Verify:

bash
node -v   # should print v20.x
npm -v    # should print 10.x
psql --version # should print 16.x

<br>

2.In PostgreSQL:

CREATE DATABASE database;
CREATE USER apiuser WITH PASSWORD 'password';
GRANT CONNECT ON DATABASE database TO apiuser;
GRANT ALL PRIVILEGES ON SCHEMA public TO apiuser;

3.Clone the project:

git clone https://github.com/ait
cd backend
npm init -y

4.Install dependencies:
npm install typescript ts-node @types/node --save-dev
npm install @types/express @types/cors --save-dev
npm install typeorm reflect-metadata pg express cors body-parser dotenv

5.Config Typescript

Generate with npx tsc --init

json
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "allowSyntheticDefaultImports": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}

6.Compile ts:

npx tsc

7.Run backend:

npx ts-node src/index.ts