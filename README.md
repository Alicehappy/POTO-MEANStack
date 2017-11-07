# POTO-MEANStack
MEAN: MongoDB, MySql, Elasticsearch, Angular 4, Node.js, Express, WebSockets


Upgrade Node.js on Mac OS X:

A simple way to upgrade Node.js from the Terminal is to use the n version manager:
npm install -g n
npm cache clean -f

At this point upgrading Node.js is as simple as:
sudo n stable
npm update -g

You can check which versions of npm and Node.js you have on your system with:
node -v
npm -v

-------------------------------------------------------------------------------------------------
Start a Node.js project:

Interactively create a package.json file:
npm init -f -y

Create a package-lock.json file:
npm install

Run npm install <package>:
npm install --save ws (install WebSockets)
npm install express --save (install Express)
npm install --save express-ws (install WebSocket endpoints for Express applications)
npm install mysql --save (Database integration with express: MySQL)
npm install mongodb --save (Database integration with express: MongoDB)
npm install elasticsearch --save (Database integration with express: ElasticSearch)

