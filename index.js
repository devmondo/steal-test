import * as ac from 'acorn';
import * as tern from 'tern';
import cheerio from 'cheerio';
import {parse} from 'babylon';
import generator from 'babel-generator';
import domino from 'domino';


//cheerio  example
let $ = cheerio.load('<h2 class="title">Hello world</h2>')

$('h2.title').text('Hello there!')
$('h2').addClass('welcome')
console.log($.html());

//babel generator test
const code = 'class Example {}';
const ast = parse(code);
const output = generate(ast, {/* options */}, code);
console.log(output);

//domino example
var window = domino.createWindow('<h1>Hello world</h1>');
var document = window.document;

var h1 = document.querySelector('h1');
console.log(h1.innerHTML);