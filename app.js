let int1 = 1;
let int2 = -10;
let float1 = 3.14;
let str1 = 'JavaScriptを覚えよう';

alert(4 + 3);
alert(8 - 5);
alert(2 * 6);
alert(10 / 2);

alert('Hello' + 'World');

let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}

let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

