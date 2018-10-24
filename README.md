# demo-aws-rds-pgsql-nodejs

### Related commands of Docker:
```
docker run -it --rm -v "$PWD":/usr/src/app -w /usr/src/app node /bin/bash -c 'npm install -g express-generator@4 && express --ejs demo-aws-rds-pgsql-nodejs && cd demo-aws-rds-pgsql-nodejs && npm i'
docker run -it --rm -v "$PWD":/usr/src/app -w /usr/src/app node /bin/bash -c 'npm i'
docker run -it --rm -p 8080:8080 -v "$PWD":/usr/src/app -w /usr/src/app node /bin/bash -c 'npm i nodemon -g && nodemon app.js'
```
