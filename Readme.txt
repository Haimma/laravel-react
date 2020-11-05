1) run xampp
2) run cmd and go to C:\xampp\mysql\bin
3) run this commands:
	mysql -u root -p -h 127.0.0.1
	create database webhistory;
	use webhistory;
	create table webhistory(id int AUTO_INCREMENT, web varchar(255), lastClicked varchar(255), clicked int(11), PRIMARY KEY (id));
	show tables;
	
4)go to the application folder and
5) run:
	npm install
    cp .env.example .env
    composer install
    php artisan key:generate
6) open 2 terminals and run:
	php artisan serve
	npm run watch
