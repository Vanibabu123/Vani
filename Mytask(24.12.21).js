const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];

console.log("Task1:");
const sum = scores.map(element => element.marks).reduce((a, b) => a + b, 0);
//console.log("Sum = "+sum);
const average = sum / scores.length;
console.log("Average = "+average);

console.log("Task2:");
// const maximum = scores.map(element => element.marks).reduce(function(prev, curr) {
//   return prev.Cost > curr.Cost ? prev : curr;
//});

//console.log("Maximum = "+maximum);

//var max = Math.max.apply(null, scores.map(item => item.marks));

//console.log("max = "+max);

let sortedScores = scores.sort((c1, c2) => (c1.marks < c2.marks) ? 1 : (c1.marks > c2.marks) ? -1 : 0);
//console.log(sortedScores);
//console.log(" maximum Score Name is = "+sortedScores[0].name);
console.log(" Topper Name is = "+sortedScores[0].name);