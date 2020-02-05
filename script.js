'use strict';

let books = document.querySelector('.books');
let book = document.querySelectorAll('.book');
let background = document.querySelector('body');
let bookTitle = document.querySelectorAll('a');
let adv = document.querySelector('.adv');
let bookContent = document.querySelectorAll('ul');
let bookChapter = document.querySelectorAll('li');
let bookNewChapter = document.createElement('li');

books.insertBefore(book[1], book[0]);
books.insertBefore(book[2], null);
books.insertBefore(book[4], book[3]);

background.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

bookTitle[4].textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove();

bookContent[0].insertBefore(bookChapter[2], bookChapter[10]);
bookContent[0].insertBefore(bookChapter[8], bookChapter[5]);
bookContent[0].insertBefore(bookChapter[6], bookChapter[4]);
bookContent[0].insertBefore(bookChapter[8], bookChapter[4]);

bookContent[5].insertBefore(bookChapter[55], bookChapter[48]);
bookContent[5].insertBefore(bookChapter[48], bookChapter[52]);
bookContent[5].insertBefore(bookChapter[51], bookChapter[54]);

bookNewChapter.textContent = 'Глава 8: За пределами ES6';
bookContent[2].appendChild(bookNewChapter);
bookContent[2].insertBefore(bookNewChapter, bookChapter[26]);