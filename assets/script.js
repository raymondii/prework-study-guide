var topics = ["HTML", "CSS", "GIT", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
//var topics = ["HTML", "CSS", "Git", "JavaScript"];


console.log("Here are the topics we learned through Prework:");
function listTopics() {
    for(var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
    
}
listTopics();

//var topic = "HTML";

function selectTopic() {
    if (randomTopic === "HTML") {
        console.log("let's study HTML!");
    } else if (randomTopic === "CSS") {
        console.log("let's study CSS!");
    } else if (randomTopic === "Git") {
        console.log("let's study Git!");
    } else if (randomTopic === "JavaScript") {
        console.log("let's study JavaScript!");
    } else {
        console.log("Please Try Again. (MacOS - command + R)");
    }
}

console.log("Which topic should we study first?")
selectTopic()

//var shapes = ["triangle", "square", "pentagon", "circle"];
//console.log(shape[0]);

//for(var x = 0; x < shapes.length; x++) {
   // console.log(shapes[x]);
//}