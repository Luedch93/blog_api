# Blog API

Simple REST API made up with Nodejs, Express and MongoDB.

## Pre-intall

Before running the app verify that you have installed

* NodeJS
* npm
* MongoDB

After you clone the repository create a `.env` file in the root **dir** with this keys

```
PORT=[Number of the port]
DB=[Connection string for mongo server]
ENV=[Type of enviroment 'dev' or 'prod']
WHITELIST_DEV=[a list of urls allowed in dev enviroment]
WHITELIST=[a list of urls allowed in production]
```

## Installation

##### Install the packages

```
yarn
```

##### Run the application

```
yarn start
```

##### Build the dist

```
yarn build
```

