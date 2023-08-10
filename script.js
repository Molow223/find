let width = 400;
let height = 400;
let clicks = 0;

let getRandoomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

let target = {
    x: getRandoomNumber(width),
    y: getRandoomNumber(height)
};

let getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY))
}
let getDistanceHint = function (distance) {
    if (distance < 8) {
        alert("Клад найден! " + clicks + "кликов!")
    }else if (distance < 10) {
        return "Обожжешься!"
    } else if (distance < 20) {
        return "Очень горячо!"
    } else if (distance < 40) {
        return "Горячо!"
    } else if (distance < 80) {
        return "Тепло!"
    } else if (distance < 160) {
        return "Холодно!"
    } else if (distance < 320) {
        return "Очень холодно!"
    } else {
        return "Замерзаешь!"
    }
}; 

$("#map").click(function (event) {
    clicks++;
    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);
    $("#distance").text(distanceHint);

})
