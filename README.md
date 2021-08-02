## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```
Create .env file for
```bash
MONGO_URL=xxxxxxxxxxxxx
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Using this curl for adding transaction
```bash
curl --location --request POST 'localhost:4000/transaction/:user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "amount": 40000,
    "date": "2021-08-02 18:49:00"
}'
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

  Nest is [MIT licensed](LICENSE).
