"use strict";


const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

const film1 = prompt('Один из последних просмотренных фильмов?', '');
const ocenka1 = prompt('На сколько оцените его?', '');



const film2 = prompt('Один из последних просмотренных фильмов?', '');
const ocenka2 = prompt('На сколько оцените его?', '');

personalMovieDB.movie[film1]=ocenka1;

personalMovieDB.movie[film2]=ocenka2;

console.log(personalMovieDB);