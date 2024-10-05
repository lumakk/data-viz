console.log("Hello World");

// Current Date for Title
const dateElement = document.getElementById('date');

console.log(dateElement);

let currentDate = new Date();

console.log(currentDate);

// "dateOptions" Object will allow us to change the format retrieve from currentDate.
let dateOptions = {year: 'numeric', month: 'long', day: "numeric"};

// Will allow us to change the format to US time using the "dateOptions" object
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);

// Rapid API code to retrieve trending twitter topics
const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const data = new FormData();
data.append('woeid', '23424934');

const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'a3352c04bemsh64eaa1c90227388p1eaaa1jsn3b27de6d9161',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com'
	},
	body: data
};

// Dummy data
let myPost = {
    name:"#AlwaysToYouHannie",
    query:"%23AlwaysToYouHannie",
    url:"search?q=%23AlwaysToYouHannie",
    volume:98800,
    volumeShort:"97.9K",
    domainContext:"Korean music",
    groupedTrends:[]
}

console.log(myPost);
// dot notation - to access a property or method of an object
console.log(myPost.name);
console.log(myPost.url);
console.log(myPost.volume);

// Array of objects
let graphData = [
    {
        name:"2ne1",
        query:"2ne1",
        url:"search?q=2ne1",
        volume:394000,
        volumeShort:"394K",
        domainContext:"K-pop",
        groupedTrends:[]
    },
    {
        name:"#FudgeeBarrxBINI",
        query:"%23FudgeeBarrxBINI",
        url:"search?q=%23FudgeeBarrxBINI",
        volume:23200,
        volumeShort:"22.6K",
        domainContext:"",
        groupedTrends:[]

    }
];

console.log(graphData);
// Array uses "index" to select  the position of an element.
console.log(graphData[0]);

// using dot notation
console.log(graphData[0].name);

console.log(graphData);

// push() method - add element at the end of an array.
graphData.push(myPost);

console.log(graphData);

// End of dummy data 

// Fetch Request

// fetch(url, options)
// .then(res => res.json())
// .then(data =>{
//     console.log(data);
// });

// Copy Paste to Fetch Request
console.log(graphData.length);

// Loops are used to do repetitive tasks
// Print each individual element in the graphData
// Syntax: for(initial; condition; increment++/decrement--)
// 1st iteration: 0 < 2 (true)
// 2nd iteration: 1 < 2 (true)
// 3rd iteration: 2 < 2 (false)

for(let i = 0; i < 2; i++){
    console.log(graphData[i]);
    console.log(graphData[i].name);
    console.log(graphData[i].volume);
}

// map method is used to loop through all elements/items of an array and execute some code
// it creates a new array

// This will create a topics variable that contains the "object.name"
let topics = graphData.map(object =>{
    console.log(object);
    console.log(object.name);
    return object.name;
});

console.log(topics);
