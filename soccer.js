// soccer.js - JavaScript for Beginner Soccer Training Guide

window.onload = function() {
    document.getElementById("welcome-message").innerHTML = 
        "Welcome to your soccer journey! Let's get better today.";
}

function showDrills() {
    var drills = [
        "1. Inside-outside dribble",
        "2. Cone slalom dribble",
        "3. Wall passing drill",
        "4. One-touch passing square",
        "5. Simple shooting drill"
    ];

    var count = document.getElementById("drill-count").value;
    count = parseInt(count);
    var index = count - 1;

    var result = "";

    while (index >= 0) {
        result += drills[index] + "<br>";
        index--;
    }

    document.getElementById("drill-output").innerHTML = result;
}

function planWorkout() {
    var days = document.getElementById("days-per-week").value;
    days = parseInt(days);

    var message = "";

    if (days <= 1) {
        message = "A light plan: 10-minute jog + footwork ladders.";
    }
    else if (days == 2) {
        message = "Balanced plan: 1 cardio day + 1 strength day.";
    }
    else if (days == 3) {
        message = "Great plan: cardio, agility, and shooting practice.";
    }
    else if (days >= 4) {
        message = "Elite plan: mix of conditioning, ball work, and sprints.";
    }
    else {
        message = "Enter a valid number of days.";
    }

    document.getElementById("workout-output").innerHTML = message;
}

function checkBudget() {
    var money = document.getElementById("budget").value;
    money = parseInt(money);

    var reply = "";

    if (money < 30) {
        reply = "You should get a basic ball and simple cones.";
    }
    else if (money >= 30 && money < 80) {
        reply = "You can buy better cleats and a good training ball.";
    }
    else {
        reply = "Your budget allows full gear: cleats, shin guards, agility ladder, and more.";
    }

    document.getElementById("budget-output").innerHTML = reply;
}

