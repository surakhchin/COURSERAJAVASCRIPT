var target;
var guess_input_text;
var guess_input;
var finished = false;
var guesses = 0;
var color = [];

function do_game() {
    var random_number = Math.random() * (color.length - 1);
    var random_number_integer = Math.floor(random_number);
    target = color[random_number_integer];

    while (!finished) {
        guess_input_text = prompt("What color do you guess?");
        guess_input = guess_input_text;
        guesses +=1;
        finished = check_guess();
    }
}

function check_guess() {
    if (color.indexOf(guess_input)) {
        alert("Not a color in array");
        return false;
    }
    if (guess_input > target) {
        alert("Color alphabetically higher");
        return false;
    }
    if (guess_input < target) {
        alert("Color alphabetically lower");
        return false;
    }
    alert("Good job that is the color");
    return true;
}

do_game();