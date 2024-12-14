var score = Number(prompt("enter your score"));
if (score >= 0 && score <= 10){
    console.log("You are rejected");
}else if (score > 10){
    console.log("You are accepted");
}else{
    console.log("not valid");
}