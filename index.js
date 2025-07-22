// do while loop
// this kind of loop loops even atleast once despite the condition being true or false


let i = 0
do {
    console.log("What'sup everybody")
    i++;
} while (i < -1);


// what's a switch
let day = 'Friday';

switch(day){
    case "Monday":
        console.log("Today its a monday - work day");
        break;
    case "Friday":
        console.log("Today' its a weekend!");
        break;
    case "Wednasday":
        console.log("Today its a wed -- getting in the middle");
        break;
    default:
        console.log("No day! hhh");
}