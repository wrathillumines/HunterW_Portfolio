// Script for Coding Challenges Page

//Simple math

$("#runmath").click(function () {

    //Gather data and create variables for function
    var num1 = +$("#mathnum1").val();
    var num2 = +$("#mathnum2").val();
    var num3 = +$("#mathnum3").val();
    var num4 = +$("#mathnum4").val();
    var num5 = +$("#mathnum5").val();

    //Analyze numbers and inform user of answers
    $("#smallest").text("The smallest number is: " + Math.min(num1, num2, num3, num4, num5));
    $("#largest").text("The largest number is: " + Math.max(num1, num2, num3, num4, num5));
    $("#mean").text("The average of all numbers is: " + (num1 + num2 + num3 + num4 + num5) / 5);
    $("#sum").text("The sum of all numbers is: " + (num1 + num2 + num3 + num4 + num5));
    $("#product").text("The product of all numbers is: " + num1 * num2 * num3 * num4 * num5);
});

    //Simple math clear function
$("#clearmath").click(function () {
    $("#mathnum1, #mathnum2, #mathnum3, #mathnum4, #mathnum5").val("");
    $("#smallest").text("Enter 5 numbers to play again.");
    $("#largest").text("");
    $("#mean").text("");
    $("#sum").text("");
    $("#product").text("");
});

    //Simple math code hide button
$("#mathcode").hide();

$("#mathcodebtn").click(function () {
    $("#mathcode").toggle();
    if ($(this).text() == "Hide Code") {
        $(this).text("Show Code");
    }
    else {
        $(this).text("Hide Code");
    };
});

//Factorial

$("#runfactorial").click(function () {

    //Gather data and create variables for function
    var input = +$("#factin").val();
    var output = factorial(input);
    $("#factout").text("The factorial of " + input + " is " + output + ".");
});

    //Check to make sure number is between 0 and 170
function factorial(fctrl) {
    if (fctrl < 0) {
        alert("Please use a number between 0 and 170.");
        $("#factout").val("");
        return;
    }

    else if (fctrl > 170) {
        alert("Please use a number between 0 and 170.");
        $("#factout").val("");
        return;
    }

    //Loop starting at number one less than input number
    //Decrement index number by one each loop
    //Multiply by index number each loop
    else if (fctrl > 0) {
        for (var loop = fctrl - 1; loop > 1; loop--) {
            fctrl *= loop;
        }
    }

    //Give user factorial of input number
    return fctrl;
};

    //Factorial clear function
$("#clearfactorial").click(function () {
    $("#factin").val("");
    $("#factout").text("Enter a number to play again.");
});

    //Factorial hide code button
$("#factcode").hide();

$("#factcodebtn").click(function () {
    $("#factcode").toggle();
    if ($(this).text() == "Hide Code") {
        $(this).text("Show Code");
    }
    else {
        $(this).text("Hide Code");
    };
});

//FizzBuzz

$("#runfizzbuzz").click(function () {

    //Gather data and create variables for function
    var input1 = +($("#fbnum1").val());
    var input2 = +($("#fbnum2").val());
    var output = "";

    //Loop 100 times, increasing index by 1 each time
    //Send array and input numbers to function FizzBuzz
    for (var i = 1; i <= 100; i++) {
        output += FizzBuzz(input1, input2, i);
    };

    output = output.substr(0, output.length - 2);
    $("#fbout").html(output + "");
});

    //Look for multiples of input numbers and inform user
function FizzBuzz(fizzy, buzzy, numcompare) {
    if (numcompare % fizzy == 0 && numcompare % buzzy == 0) {
        return "<span class='fizzbuzz'>FizzBuzz</span>, ";
    }
    else if (numcompare % fizzy == 0) {
        return "<span class='fizz'>Fizz</span>, ";
    }
    else if (numcompare % buzzy == 0) {
        return "<span class='buzz'>Buzz</span>, ";
    }
    else {
        return numcompare + ", ";
    };
};

    //Fizz Buzz clear function
$("#clearfizzbuzz").click(function () {
    $("#fbnum1, #fbnum2").val("");
    $("#fbout").text("Enter two numbers to play again.");
});

    //Fizz Buzz code hide button
$("#fbcode").hide();

$("#fbcodebtn").click(function () {
    $("#fbcode").toggle();
    if ($(this).text() == "Hide Code") {
        $(this).text("Show Code");
    }
    else {
        $(this).text("Hide Code");
    };
});

//Palindrome

$("#runpalindrome").click(function (input) {
    
    //Gather data and create variables for function
    var original = $("#palin").val();
    var input = $("#palin").val().toLowerCase().replace(/[\W_]/g, '');
    var textLen = input.length;

    //Loop through array starting at index 0 and
    //increasing by 1 each time until the index number
    //is equal to or greater than the input word
    //length divided by 2.
    for (var i = 0; i < textLen / 2; i++) {

        //Inform user if input word is or is not a palindrome
        if (input[i] !== input[textLen - 1 - i]) {
            return $("#palout").text("\"" + original + "\" IS NOT spelled the same when reversed, so it IS NOT a palindrome.");
        };
    };
    return $("#palout").text("\"" + original + "\" IS spelled the same when reversed, so it IS a palindrome.");
});

    //Palindrome clear function
$("#clearpalindrome").click(function () {
    $("#palin").val("");
    $("#palout").text("Enter another word or phrase to play again.");
});

    //Palindrome code hide button
$("#palcode").hide();

$("#palcodebtn").click(function () {
    $("#palcode").toggle();
    if ($(this).text() == "Hide Code") {
        $(this).text("Show Code");
    }
    else {
        $(this).text("Hide Code");
    };
});


//Sum Of All Fears

$("#runsumoffears").click(function () {

    //Gather data and create variables for loop
    var feararray = [+$("#fearnum1").val(), +$("#fearnum2").val(), +$("#fearnum3").val(),
    +$("#fearnum4").val(), +$("#fearnum5").val(), +$("#fearnum6").val()]
    var kay = +$("#fearnumk").val()

    //Loop through array starting at index 0, increasing by one until
    //index number is no longer less than 5 (6 numbers that were input minus 1)
    for (index = 0; index < feararray.length - 1; index++) {
        var match = feararray.indexOf(kay - feararray[index], index + 1);

        //Inform user if K has been matched or not
        if (match > 0) {
            $("#fearout").html("The <b>K</b> value you entered (<b>" + kay + "</b>) was found by adding the numbers" + "<span class='target'>"
                + feararray[index] + "</span> and<span class='target'>" + feararray[match] + "</span>");
            return;
        } else {
            $("#fearout").text("K was not matched.");
        };
    };
});

    //Sum of All Fears clear function
$("#clearsumoffears").click(function () {
    $("#fearnum1").val("");
    $("#fearnum2").val("");
    $("#fearnum3").val("");
    $("#fearnum4").val("");
    $("#fearnum5").val("");
    $("#fearnum6").val("");
    $("#fearnumk").val("");
    $("#fearout").text("Enter 7 numbers to play again.");
});

    //Sum of All Fears code hide button
$("#sumcode").hide();

$("#sumcodebtn").click(function () {
    $("#sumcode").toggle();
    if ($(this).text() == "Hide Code") {
        $(this).text("Show Code");
    } else {
        $(this).text("Hide Code");
    };
});