// LOOP PATTERN MATCHING ASSIGNMENT

// Global Vars
let patterns = ['hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    '2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 ',
    '-10 -5 0 5 10 15 20 25 30 35 40 45 50 55 60 65 70 <br>Total: 510',
    '33 29 25 21 17 13 9 5 1 ',
    '2 4 8 16 32 64 128 256 512 1024 2048 4096 8192 16384 <br>Total: 32766',
    '1 -3 9 -27 81 -243 729 -2187 ',
    '* ** *** **** ***** ****** ******* ******** ********* ********** ',
    '0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 ',
    '*<br>**<br>***<br>****<br>*****<br>******<br>*******<br>********<br>*********<br>**********<br>***********<br>',
    '1 2 3 4 5 <br>2 4 6 8 10 <br>3 6 9 12 15 <br>4 8 12 16 20 <br>5 10 15 20 25 <br>',
    '- - - - - - - - - - <br>| | | | | | | | | <br>- - - - - - - - <br>| | | | | | | <br>- - - - - - <br>| | | | | <br>- - - - <br>| | | <br>- - <br>| <br>'
]
let patternNum;

// Event Listeners

document.getElementById('p1').addEventListener('click', function () {
    showPattern(1);
});
document.getElementById('p2').addEventListener('click', function () {
    showPattern(2);
});
document.getElementById('p3').addEventListener('click', function () {
    showPattern(3);
});
document.getElementById('p4').addEventListener('click', function () {
    showPattern(4);
});
document.getElementById('p5').addEventListener('click', function () {
    showPattern(5);
});
document.getElementById('p6').addEventListener('click', function () {
    showPattern(6);
});
document.getElementById('p7').addEventListener('click', function () {
    showPattern(7);
});
document.getElementById('p8').addEventListener('click', function () {
    showPattern(8);
});
document.getElementById('p9').addEventListener('click', function () {
    showPattern(9);
});
document.getElementById('p10').addEventListener('click', function () {
    showPattern(10);
});
document.getElementById('p11').addEventListener('click', function () {
    showPattern(11);
});



document.getElementById('s1').addEventListener('click', () => {
    loop1();
    test();
});
document.getElementById('s2').addEventListener('click', () => {
    loop2();
    test();
});
document.getElementById('s3').addEventListener('click', () => {
    loop3();
    test();
});
document.getElementById('s4').addEventListener('click', () => {
    loop4();
    test();
});
document.getElementById('s5').addEventListener('click', () => {
    loop5();
    test();
});
document.getElementById('s6').addEventListener('click', () => {
    loop6();
    test();
});
document.getElementById('s7').addEventListener('click', () => {
    loop7();
    test();
});
document.getElementById('s8').addEventListener('click', () => {
    loop8();
    test();
});
document.getElementById('s9').addEventListener('click', () => {
    loop9();
    test();
});
document.getElementById('s10').addEventListener('click', () => {
    loop10();
    test();
});
document.getElementById('s11').addEventListener('click', () => {
    loop11();
    test();
});




function showPattern(n) {
    document.getElementById('test-result').innerHTML = '';
    document.getElementById('loop-pattern').innerHTML = '';
    document.getElementById('target-pattern').innerHTML = patterns[n - 1];
    patternNum = n;
}

function test() {
    let pat = document.getElementById('target-pattern').innerHTML;
    let sol = document.getElementById('loop-pattern').innerHTML;
    if (pat == sol) {
        document.getElementById('test-result').innerHTML = "Correct!";
    } else {
        document.getElementById('test-result').innerHTML = "Not Quite!"
    }
}


// Solve each by coding a loop that produces the corresponding pattern.
// For loops 1-8, the site will wrap your text for you, you do not add <br> tags
// For loops 9-11, you will add <br> tags appropriately to a nested loop. These ones can be tricky!
let answer = document.getElementById('loop-pattern');

function loop1() {
    let pattern = '';

    for (let i = 1; i <= 28; i++) {
        pattern += "hello ";
    }

    answer.innerHTML = pattern;

}

function loop2() {
    let pattern = '';
    for (let i = 2; i <= 30; i += 2) {
        pattern += String(i) + ' ';
    }
    answer.innerHTML = pattern;
}

function loop3() {
    //The TOTAL must be calculated by the loop. No hardcoding the number directly!
    let pattern = '';
    let total = 0;
    for (let i = -10; i <= 70; i += 5) {
        pattern += String(i) + ' ';
        total += i
        console.log(pattern);
    }
    answer.innerHTML = pattern + "<br>Total: " + String(total);
}

function loop4() {
    let pattern = '';
    for (let i = 33; i >= 1; i -= 4) {
        pattern += String(i) + ' ';
        console.log(pattern);
    }
    answer.innerHTML = pattern;
}

function loop5() {
    //The TOTAL must be calculated by the loop. No hardcoding the number directly!
    let pattern = '';
    let total = 0;
    for (let i = 2; i <= 16384; i *= 2) { // i**2 squared
        pattern += String(i) + ' ';
        total += i;
        console.log(pattern);
    }
    answer.innerHTML = pattern + '<br>Total: ' + total;
}

function loop6() {
    let pattern = '';
    for (let i = 1; i <= 2187; i *= -3) {
        pattern += String(i) + ' ';
        console.log(i);
    }
    answer.innerHTML = pattern;
}

function loop7() {
    let pattern = '';
    for (let i = '*'; i <= '**********'; i += '*') {
        pattern += i + ' ';
        console.log(i);
    }
    answer.innerHTML = pattern;
}

function loop8() {
    // You may ONLY update the pattern a single digit at a time
    let pattern = '';
    for (let i = 1; i <= 40; i++) {
        if (i % 2 == 0) {
            pattern += '1 ';
        } else {
            pattern += '0 ';
        }
        console.log(pattern);
    }
    answer.innerHTML = pattern;
}

function loop9() {
    // Use a nested loop (no <br> tag allowed on the innermost loop)
    let pattern = '';
    for (let i = 1; i <= 11; i++) { // Rows
        for (let j = 1; j <= i; j++) {
            pattern += '*';
        }
        pattern += '<br>';
    }
    answer.innerHTML = pattern;
}

function loop10() {
    // You may ONLY update the pattern a single digit(and a space) at a time
    // Hint: Use a nested for loop
    let pattern = '';

    for (let i = 1; i <= 5; i++) {
        for (let j = i; j <= 5*i; j += i) {
            pattern += String(j) + ' ';
            
        }
        pattern += '<br>';
    }
    console.log(pattern);

    answer.innerHTML = pattern;

}

function loop11() {
    // You may ONLY update the pattern a single character(and a space) at a time
    // Hint: Use a nested for loop

}