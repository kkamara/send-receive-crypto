![send-receive-crypt.png](https://github.com/kkamara/useful/raw/main/send-receive-crypto.png)

# Send Receive Crypto

Laravel 8 and React 18 crypto exchange with React-Redux for state management.

* [Installation](#installation)

* [Usage](#usage)

* [Api Documentation](#api-documentation)

* [Unit Tests](#unit-tests)

* [Mail server](#mail-server)

* [Misc](#misc)

* [Contributing](#contributing)

* [License](#license)

## Installation
* [https://laravel.com/docs/8.x/installation](https://laravel.com/docs/8.x/installation)
* [https://laravel.com/docs/8.x/mix#main-content](https://laravel.com/docs/8.x/mix#main-content)

```bash
cp .env.example .env
composer i
php artisan key:generate
php artisan migrate --seed
```

## Usage

* [https://github.com/kkamara/laravel-makefile](https://github.com/kkamara/laravel-makefile)
* [https://laravel.com/docs/8.x/sail#main-content](https://laravel.com/docs/8.x/sail#main-content)

```bash
# http://localhost:8000
php artisan serve
```

## Api Documentation

View the api collection.

```json
{"client":"Thunder Client","collectionName":"Send Receive Crypto","dateExported":"2023-01-06T00:43:14.173Z","version":"1.1","folders":[],"requests":[{"_id":"f61f672e-3407-4196-9a34-c8bdc0f402f5","colId":"c0eef9f6-8e3a-4f07-a71b-7202525c3f90","containerId":"","name":"http://localhost:8000/api/exchange","url":"http://localhost:8000/api/exchange?base=GBP&symbols[]=USD&amount=5.66&symbols[]=EUR","method":"GET","sortNum":10000,"created":"2023-01-06T00:43:05.405Z","modified":"2023-01-06T00:43:05.405Z","headers":[],"params":[{"name":"base","value":"GBP","isPath":false},{"name":"symbols[]","value":"USD","isPath":false},{"name":"amount","value":"5.66","isPath":false},{"name":"symbols[]","value":"EUR","isPath":false}],"tests":[]}]}
```

## Unit Tests

```bash
php artisan test --filter api
```

View the unit test code [here](https://raw.githubusercontent.com/kkamara/laravel-react-boilerplate/develop/tests/Unit/Api/UsersTest.php).

## Mail Server

In this Send Receive Crypto there is a subscribe now ability with email notification upon subscription.

You can test the `/mail` endpoint to send a test mail you can then view at `:8025/`.

![docker-mailhog3.png](https://raw.githubusercontent.com/kkamara/useful/main/docker-mailhog3.png)

Mail environment credentials are at [.env](https://raw.githubusercontent.com/kkamara/laravel-react-boilerplate/develop/.env.example).

The [mailhog](https://github.com/mailhog/MailHog) docker image runs at `http://localhost:8025`.

## Misc

[See todo app.](https://github.com/kkamara/todo-app)

[See ecommerce web.](https://github.com/kkamara/ecommerce-web)

[See city maps mobile.](https://github.com/kkamara/city-maps-mobile)

[See ecommerce mobile.](https://github.com/kkamara/ecommerce-mobile)

[See crm.](https://github.com/kkamara/crm)

[See birthday currency.](https://github.com/kkamara/birthday-currency)

[See php scraper.](https://github.com/kkamara/php-scraper)

[See amazon scraper.](https://github.com/kkamara/amazon-scraper)

[See python amazon scraper 2.](https://github.com/kkamara/selenium-py)

[See wordpress with docker support.](https://github.com/kkamara/wordpress)

The `Makefile` for this project contains useful commands for a Laravel application and can be found at [laravel-makefile](https://github.com/kkamara/laravel-makefile).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[BSD](https://opensource.org/licenses/BSD-3-Clause)
