// create database Company;

// use Company;

// create table worker(
// id INT Primary key AUTO_INCREMENT,
// Name VARCHAR(40) NOT NULL,
// Lastname VARCHAR(40) NOT NULL,
// Email VARCHAR(40) NOT NULL,
// Age INT NOT NULL);

// create table month (
// id INT Primary key AUTO_INCREMENT,
// Title VARCHAR(20) NOT NULL);

// create table salary(
// id INT Primary key AUTO_INCREMENT,
// Worker_id INT NOT NULL,
// Month_id INT NOT NULL,
// Salary INT NOT NULL,

// foreign key (Worker_id) references worker (id) on delete cascade,
// foreign key (Month_id) references month (id) on delete cascade
// );

// insert into month (Title) values ('Январь'),('Февраль'),('Март'),('Апрель'),('Май'),('Июнь'), ('Июль'), ('Август'), ('Сентябрь'),('Октябрь'), ('Ноябрь'), ('Декабрь');

// insert into worker (Name, Lastname, Email, Age) values ('Есения', 'Грант', 'mailto:yes@mail.ru', 21), ('Анастасия', 'Павлова', 'mailto:test@mail.ru', 21),
// ('Мария', 'Гардон', 'mailto:qqq@mail.ru', 21),
// ('Марта', 'Котикова', 'mailto:eee@mail.ru', 28),('Борис', 'Юревич','mailto:zzz@mail.ru', 21),
// ('Рыжик', 'Рыжий', 'mailto:eeezzz@mail.ru', 31), ('Рейна', 'Собачкова','mailto:test2@mail.ru',
// 28), ('Максим', 'Николаев', 'mailto:hanna@mail.ru', 21), ('Дарья', 'Плешко',
// 'mailto:dasha@mail.ru', 17), ('Константин', 'Константинов', 'mailto:konst@mail.ru', 31),
// ('Иван','Иванов', 'mailto:iv@mail.ru', 31), ('Николай', 'Николаев', 'mailto:nik@mail.ru', 24);

// insert into salary (Worker_id, Month_id, Salary) values (1, 1, 500), (1, 2, 600), (1, 3, 5600), (1, 4, 5100), (1, 5, 5400), (2, 1, 500), (2, 2, 5700), (2, 3, 500), (3, 1,
// 1500), (4, 1, 5200), (5, 6, 3500), (5, 7, 4500), (6, 4, 570), (7, 9, 5107), (8, 10, 6700);

// -- 2. Выведите из таблицы worker записи с id равным 3-5, 6, 10.
// select *
// from worker
// where id between 3 and 5 || id = 6 || id = 10;
// select * from worker;

// -- 3. Выведите из таблицы worker записи с id равным 3, 5, 6, 10 и почтой, начинающейся с
// -- 'eee', 'zzz' или 'ggg'.
// select * from worker;
// where id = 3 || id = 5 || id = 6 || id = 10 ||
// Email like 'eee%' || Email like 'zzz%' || Email like 'ggg%';

// -- 4. Выведите сотрудников и их зарплаты.
// select worker.name, worker.lastname, salary.salary
// from salary
// join worker on salary.Worker_id = worker.id;

// -- 5. Выберите неповторяющиеся зарплаты
// select salary.salary
// from salary
// join worker on salary.Worker_id = worker.id
// group by salary.salary;

// -- 6. Выведите тех сотрудников, зарплаты которых > 1000
// select worker.name, worker.lastname, salary.salary
// from salary
// join worker on salary.Worker_id = worker.id
// where salary.salary > 1000;
// select * from worker;

// -- 7. Выведите сотрудников их зарплаты и месяцы
// select worker.name, worker.lastname, salary.salary, month.title
// from salary
// join worker on salary.Worker_id = worker.id
// join month on salary.Month_id = month.id;

// -- 8. Обновите имя у сотрудника id которого 1 с использованием подзапроса
// update worker
// set name = 'Павлова'
// where id = 1;

// -- 9. Выведите полностью всех сотрудников и зарплаты которые имеются
// select worker.name, worker.lastname, salary.salary
// from salary
// join worker on salary.Worker_id = worker.id;

// -- 10. Выведите минимульную и максимальную прибыль сотруд1ника
// select min(salary.salary), max(salary.salary), worker.lastname
// from salary
// join worker on salary.Worker_id = worker.id
// group by worker.lastname;

// -- 11. Выведите количество всех сотрудников
// select count(worker.name)
// from worker;

// -- 12. Выведите средний возраст среди всех сотрудников
// select avg(worker.age)
// from worker;

// -- 13. Выведите суммарную прибыль каждого сотрудника
// select sum(salary.salary), worker.lastname
// from salary
// join worker on salary.Worker_id = worker.id
// group by worker.lastname;

// -- 14. Выведите суммарную прибыль каждого сотрудника, где сумма > 2000
// select  sum(salary.salary), worker.lastname
// from salary
// join worker on salary.Worker_id = worker.id
// group by worker.lastname
// having sum(salary.salary) > 2000;

// -- 15. При выборке создайте новое поле, которое состоит из конкатенации имени и
// -- фамилии сотрудника разделенных пробелом
// select concat(worker.name, ' ', worker.lastname) as 'канкат'
// from worker;

// -- 16. Найдите самые маленькие зарплаты по группам возрастов
// select min(salary.salary), worker.age
// from salary
// join worker on salary.Worker_id = worker.id
// group by worker.age;

// -- 17. Подзапрос. Выберите сотрудников, возраст которых меньше среднего возраста,
// -- деленного на 2 и умноженного на 3

// select worker.name, worker.lastname, worker.age
// from worker
// where worker.age < (select avg(worker.age) / 2 * 3 from worker);

// -- 18. Подзапрос. Выберите из таблицы workers записи с минимальной зарплатой.
// select *
// from salary
// join worker on salary.Worker_id = worker.id
// where salary.salary = (select min(salary.salary) from salary);

// -- 19. Подзапрос. Отобразите информацию о сотруднике с самой минимальной
// -- информацией
// select * from worker
// where age = (select min(age) from worker);

// -- 20.Отобразите средние зарплаты сотрудников каждого месяца
// select avg(salary.salary) as 'средняя зп', month.title
// from month
// join salary on salary.Month_id = Month.id 
// group by month.title;

// -- 21. Подзапрос. Отобразите тех сотрудников, зарплата которых выше средней каждого
// -- месяца в отсортированном порядке
// select month.title, avg(salary.salary)
// from month
// join salary on salary.Month_id = Month.id 
// join worker on salary.worker_id = worker.id
// group by month.title
// having avg(salary.salary) > (select avg(salary.salary) from salary)
// order by avg(salary.salary);

// -- 22. Вычислите максимальную и минимальную зарплаты каждого сотрудника.
// -- Отобразите те, которые выше 2000 в отсортированном порядке
// select min(salary.salary), max(salary.salary)
// from salary
// where salary.salary > 2000
// order by salary.salary;

// -- 23. Подзапрос. Отобразите информацию о сотрудниках возраст которых превышает
// -- средний в отсортированном порядке и не более 5 человек
// select worker.name, worker.lastname, worker.age
// from worker
// where age > (select avg(age) from worker)
// order by age
// limit 5;

// -- 24.Выведите месяц, в котором компания выдала наибольшую сумму зарплат за месяц
// select month.title, max(salary.salary) as 'макс сумма зп'
// from salary
// join month on Month_id = month.id
// group by month.title
// order by max(salary.salary) desc
// limit 1;

// -- 25. Выведите 5 уникальных фамилий в алфавитном порядке
// select lastname
// from worker
// group by lastname
// order by lastname
// limit 5; 

// -- 26. Очистите и удалите все таблицы
// drop table month;






