
document.getElementById("bigShit").onclick = function(){
 var sounds = [new Audio("Sounds/bm1.mp3"), new Audio("Sounds/bm2.mp3"), new Audio("Sounds/bm3.mp3"), new Audio("Sounds/flush.mp3"), new Audio("Sounds/p1.mp3"), new Audio("Sounds/p2.mp3")]
 var i = sounds[Math.floor(Math.random() * (sounds.length))];

 i.play();


};
