function shuffle_slow(array) {
  for (let i = 0; i < array.length * 2; i++) {
    let randomIndex = Math.round(Math.random() * (array.length - 1))
    let currentItem = array[randomIndex]
    array.splice(randomIndex, 1)
    let seed = Math.round(Math.random())
    seed ? array.unshift(currentItem) : array.push(currentItem)
  }
  return array
}

function shuffle_fast(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


function test_speed(func) {
  let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
  for (let i = 0; i < 100000; i++) {
    let array = [1, 2, 3];
    // func(array); непонимаю..... или же это аналогично: test_speed(array); ааа нет, сделал через имя функции и мне написали стпк переполнен....
    func(array);
    count[array.join('')]++;
  }

  for (let key in count) {
    console.log(`${key}: ${count[key]}`);
  }
}

let started = Date.now()
test_speed(shuffle_slow)
let ended = Date.now() - started
console.log("shuffle_slow took", ended, "ms")

started = Date.now()
test_speed(shuffle_fast)
ended = Date.now() - started
console.log("shuffle_fast took", ended, "ms")