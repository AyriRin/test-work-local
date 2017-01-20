/* узнать порядковый номер заданного символа*/

/*
 var line = 'qwertyuiop';
 var a = 't';
 var result;
 var linesplit;
 linesplit = line.split('');
 console.log(linesplit);

 */

/*
 function lineSplit(line, a) {
 return line.indexOf(a);
 }
 console.log(lineSplit(line, a));*/

// написать все цыклом и без использования indexOf


/*var ages  = 'qwertyuiop';
 var a = 't';
 var linesplit;

 function returnLine(line) {
 return line = ages.split('');
 }
 console.log(returnLine());

 function myFunction() {
 while (returnLine() = a) {

 }
 };
 console.log(myFunction());*/
/*

 var ages = 'qwertyuiop';
 var splitResult = ages.split('');
 console.log(splitResult);


 function checkAdult(age) {
 return age == 't';
 }

 function myFunction() {
 document.getElementById("demo").innerHTML = splitResult.find(checkAdult);
 }
 console.log(myFunction());*/


/*Создай массив. Наполни его какими то данными. Напиши функцию которая выводит каждый элемент массива*/
/*
 var arr = ['s', '2', 'p', '5', 't', 'w', 'e'];
 function forEach(data) {
 data.forEach(function (item, i) {
 console.log(i + ": " + item);
 });
 };
 forEach(arr);

 /!* for *!/
 function forF(data) {
 for (i = 0; i < data.length; i++) {
 console.log(data[i]);
 }
 };
 forF(arr);
 /!* while *!/
 function whileF(data) {
 var i = 0;
 while (i < data.length - 1) {
 i++;
 console.log(data[i]);
 }
 };
 whileF(arr);
 */

/* вывести самое большое значение из числового массива */
var myArray = [0, 1, 9, 4, 3, 2, 8, 6];

function maxResult(data) {
    var result = 0;
    for (i = 0; i < data.length; i++) {
        if (data[i] > result) {
            result = data[i];
        }
    }
    // console.log(result);
    return result;
}
var result = maxResult(myArray);
console.log(result);

/*for each*/
function forEachResult(data) {
    var result = 0;
    data.forEach(function (data) {
        if (data[i] > result) {
            result = data[i];
        }
        return result;
    });
};
var resultF = forEachResult(myArray);
console.log(resultF);


/* while */

function whileMax(data) {
    var index = 0;
    while (data[i] > index) {
        console.log(data);
        index++;
    }
}
whileMax(myArray);
/* сумма всех элементов*/

var suma = [5, 3, 6, 2, 1, 0];
function arraySuma(data) {
    var sum = 0;
    for (var i = 0; i < suma.length; i++) {
        sum += suma[i];
    }
    console.log(sum);
}
arraySuma(suma);

/* Обрезать строку*/
var returnResult = document.getElementById('demo').innerHTML;
var newText;
function cutStrnig(element, countNumb) {
    var textR = returnResult;
    var allLength = textR.length;
    newText = textR.substr(0, (allLength - 3)) + '...';
    $('#demo').text(newText);
}
cutStrnig();

/* сумма всех нечетных чисел */


/*
 * ф-ция принимает 2 параметра.
 1-имя
 2 тру или фолсе
 если 2 парам тру, то выдает привет имя
 если фолсе, то пока и имя
 */

// var name = prompt('What is your login');
var check = true;
function checkName(name, check) {
    if (name != 'admin') {
        document.write('Bay, ' + name);
        // console.log('Bay, ' + name);
    } else {
        document.write('Hello, ' + name);
        // console.log('Hello, ' + name);
    }
}
checkName(name, check);

/*напис ф-цию, в которую передаем массив, а она возвражает массив в обратном порядке */
var newArr = [1, 2, 3, 4, 5, 6];
function reverseArr(data) {
    var resultReverse = data.reverse();
    console.log(resultReverse);
}
reverseArr(newArr);

/*ф-ция, в которую мы передааем 2 массива, а она вклеивает их и сортирует */
var firstArr = [5, 1, 4]
var secondArr = [7, 2, 6];
function appendArr(data, seconddata) {
    var resultAppend = data.concat(seconddata).sort();
    console.log(resultAppend);
}

appendArr(firstArr, secondArr);

/*в фун-цию мы передаем строку и какую букву ищем. Ф-ция должна вернуть ту букву и следующие две, которые идет за ней*/
var line = "qwertyuioasd";
var linesp = line.split('');
var findLetter = "t";
function findLineLetter(data) {
    function lineSplit(line, a) {
        return line.indexOf(a);
    }

    console.log(lineSplit(line, findLetter));
    /*    data.forEach(function (item, i) {
     var result = linesp.indexOf(findLetter);
     console.log(i + ": " + item);
     });*/
};
findLineLetter(linesp);

/*Получение случайного числа из заданных*/
var simpleArr = [1, 9, 7];
var lengthArr = simpleArr.length;
function randomNumb(data) {
    var rand_num = [Math.floor(Math.random() * lengthArr)];
    var rand_el = simpleArr[rand_num];
    console.log(rand_el);
}
randomNumb(simpleArr);


function showN() {
    /*for (var i = 0; i <= 9; i++) {
     if (i % 2 == 0) continue;
     console.log(i);
     }*/
    var a = 0;
    while (a <= 9) {
        a++;
        if (a % 2 == 0)
            console.log(a);
    }
}
showN();

function setObj() {
    var mySmart = new Object();
    mySmart.model = 'HTC';
    mySmart.year = '2012';
    mySmart.price = '2200';
    // console.log(mySmart['model']);
    // console.log(mySmart.year);
    // console.log(mySmart.price);
    for (var i in mySmart) {
        console.log(i + ':' + mySmart[i]);
    }
}
setObj();

/* timer */

var count = 0;
var timer;

function timeCount() {
    document.getElementById('clock').innerHTML = count.toString();
    count++;
    timer = window.setTimeout(function () {
        timeCount()
    }, 1000);
}

function startCount() {
    if (!timer)
        timeCount();
}

startCount();
function stopTimer() {
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
}

stopTimer();


/* filter */

$('.filter').click(function () {
    var filterData = $(this).data('filters');
    $('.filter, .filter-element').removeClass('show');
    $(this).addClass('show');
    var filterCat = $('[data-category="' + filterData + '"]');
    filterCat.addClass('show');
    if ($('.filter.all').click(function () {
            $('.filter-element').addClass('show');
        }));
    $('.filter-element').not(".show").hide();
});


/* min and max in array*/
var newArr = [1, 2, 6, 4, 5, 7, 8, 9, 0];

function getMin(data) {
    var min = data[0];
    for (var i = 0; i < data.length; i++) {
        if (min > data[i]) {
            min = data[i];
        }
    }
    return min;
}
console.log(getMin(newArr));

function getMax(data) {
    var max = data[0];
    for (var i = 0; i < data.length; i++) {
        if (max < data[i]) {
            max = data[i];
        }
    }
    return max;
}
console.log(getMax(newArr));

/* search in array */
function searchInArray(value, array) {
    for (var i = 0; i < array.length; i++) {
        if (value == array[i]) return true;
    }
    return false;
}
console.log(searchInArray(5, newArr));

/* функция для форматирования числа */
var num = 4566;
function format_num(data) {
    var separator = " ";
    strNum = data.toString();
    var strNew = strNum.substring(strNum.length);
    var count = 0;
    for (var i = strNum.length; i > 0; i--) {
        if ((count % 3 == 0) && (i != strNum.length)) {
            strNew = separator + strNew;
        }
        strNew = strNum.charAt(i - 1) + strNew;
        count++;
    }
    return strNew;
}
console.log(format_num(num));

/* вывод сегодняшней даты */
var date = new Date();
var dateT = document.getElementsByClassName('date');
var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};
$(dateT).text(date.toLocaleString("ru", options));
console.log($(dateT).text(date.toLocaleString("ru", options)));

/* массив объектов. Каждый объект содержит id, и имя человека. Напиши функцию которая принимает имя и ищет в массиве нужного человека*/
var objMas = [
    {id: 1, value: 'tim'},
    {id: 2, value: 'nick'},
    {id: 3, value: 'tom'},
    {id: 4, value: 'lost'}
];

function getValue(array, data) {
    for (i = 0; i < array.length; i++) {
        if (array[i].value == data) {
            var result = array[i].id;
            return result;
        }
    }
}
console.log(getValue(objMas, 'tim'));

/* return id and value*/
function getAllValue(array, data) {
    for (i = 0; i < array.length; i++) {
        if (array[i].value == data) {
            var result = 'id - ' + array[i].id + ';' + 'value - ' + array[i].value;
            return result;
        }
    }
}
console.log(getAllValue(objMas, 'tim'));
/* while */
function whilegetAllValue(array, data) {
    var i = 0;
    while (i <= array.length) {
        if (array[i].value == data) {
            var result = 'id - ' + array[i].id + ';' + 'value - ' + array[i].value;
            return result;
        }
        i++;
    }
}
console.log(whilegetAllValue(objMas, 'nick'));

/* foreach */
function foreachgetAllValue(array, data) {

    var resultArr = array.forEach(function (item, i) {
        if (array[i].value == data) {
            console.log('id - ' + array[i].id + ';' + 'value - ' + array[i].value);
        }
    });
    return resultArr;
}
foreachgetAllValue(objMas, 'tom');


/* map */

function mapGetAllValue(array, data) {
    var result = array.map(function (x, i, array) {
        if (array[i].value == data) {
            console.log('id - ' + array[i].id + ';' + 'value - ' + array[i].value);
        }
    });
    return result;
}
mapGetAllValue(objMas, 'lost');