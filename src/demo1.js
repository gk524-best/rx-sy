import { fromEvent, map, debounceTime, filter } from 'rxjs';

const app = document.getElementById('app');
const domHtml = '<div class="demo1"><h1>输入输出</h1><input type="text" id="input1"/><div id="result1"></div></div>'

app.innerHTML = domHtml;

const input = document.getElementById('input1');
const result = document.getElementById('result1');

const keyup = fromEvent(input, 'keyup')
                .pipe(debounceTime(500))
                .pipe(map(e => e.target.value));

keyup.subscribe(value => {
  result.innerText = value;
});
