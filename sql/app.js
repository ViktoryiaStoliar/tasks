// // use cinema;
// select * from movies;
// -- 10
// select avg(length_minutes), director
// from movies
// group by director;
// -- 11 айти все фильмы режиссера начинающегося на “John”
// select title, director
// from movies
// where director like 'John%';
// -- 12. Найти 3 первых фильма начинающиеся на “В” в отсортированном порядке
// select title
// from movies
// where title like 'В%'
// order by title
// limit 3;
// -- 13. Отобразите общее количество всех фильмов существующих в БД, а также
// -- максимальный и минимальный по длительности фильм
// select count(title), min(length_minutes), max(length_minutes)
// from movies;
// -- 15. Перечислите всех режиссеров, выпустивших минимум 2 фильма
// select count(title), director
// from movies
// group by director
// having count(title) > 2;
// -- 20.Найдите domestic_sales and international_sales для каждого фильма
// select * from boxoffice;
// select movies.title, boxoffice.domestic_sales, boxoffice.internation_sales
// from movies
// join  boxoffice 
// on boxoffice.movie_id = movies.id;
// -- 21. Покажите цифры продаж для каждого фильма, где internation_sales больше чем
// -- на domestic_sales
// select movies.title, boxoffice.domestic_sales+boxoffice.internation_sales as 'продажи'
// from movies
// join  boxoffice
// on boxoffice.movie_id = movies.id
// where boxoffice.internation_sales > boxoffice.domestic_sales;
// -- 22. Отобразите список всех фильмов по рейтингу в порядке убывания
// select movies.title, boxoffice.rating
// from boxoffice 
// join  movies
// on boxoffice.movie_id = movies.id
// order by boxoffice.rating desc; 
// -- 23. Перечислите все фильмы и их совокупные продажи
// select movies.title, boxoffice.domestic_sales+boxoffice.internation_sales as ' совокупные продажи'
// from movies
// join  boxoffice
// on boxoffice.movie_id = movies.id;
// -- 24.Отобразите список всех фильмов и их рейтинги в процентах
// select movies.title, boxoffice.rating * 10 as 'Рейтинг в процентах'
// from movies
// join  boxoffice
// on boxoffice.movie_id = movies.id;
// -- 25. Перечислите все фильмы, выпущенные в четные годы
// select title, year
// from movies
// where year % 2 = 0;
// -- 26. Посчитайте количество фильмов выпущенных одним режиссером и выведите
// -- только те, количество которых четное
// select count(title) as 'Кол-во (четное) фильмоы у одного режиссера', director
// from movies
// group by director
// having count(title) % 2 = 0;
// -- 27. Выведите название фильма, режиссера, сумму domestic and international sales, где
// -- режиссер поставил только 1 фильм
// select count(movies.title), movies.director, boxoffice.domestic_sales+boxoffice.internation_sales as ' совокупные продажи'
// from movies
// join  boxoffice
// on boxoffice.movie_id = movies.id
// group by movies.director
// having count(movies.title) = 1;