let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2をかけ続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

let orenge = 120;
let apple = 120;

if (orenge > apple){
  alert('みかんよりリンゴが安い');
} else if (orenge == apple){
  alert('みかんとリンゴは同じ額');
} else if (orenge < apple){
  alert('リンゴよりみかんが安い');
}

