//the first console.log prints 8

//the seocnd console.log prints 1846

//the code prints {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659};

//the code prints, Your name is Alejando and you like purple

//the code prints, Your name is Melissa and you like green

//the code prints, your name is undefined and you like green

//console.log(first);
//< Maya

//console.log(second);
//< Marissa

//console.log(third);
//< Chi

//console.log(raindrops);
// < "Raindrops on roses"

//console.log(whiskers);
// < "whiskers on kittens"

//console.log(aFewOfMyFavoriteThings);
// < ["Bright copper kettles," "warm woolen mittens", "Brown paper packages tied up with strings"]

//console.log(numbers)
// < [10, 30, 20]

const obj = {
    numbers: {
      a: 1,
      b: 2
    }
};
  
const {a,b} = obj.numbers;

[arr[0], arr[1] = arr[1], arr[0]]

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});