var Foo = function (a) {
    this.a = a + 3;
    this.bar = function () {
        return a;
    }
    this.baz = function () {
        return this.a;
    };
};

Foo.prototype = {
    biz: function () {
        return this.a;
    }
};

var f = new Foo(7);
//f.bar(); //  7
//f.baz(); // 10
f.biz(); //  10



// Usually the output of 1 + function x() { alert(1); } is "1function x(){alert(1);}". Can you write a code such that the output should be "1start:function x() {alert(1);}:end".
// For that matter, it should work for any function by prepending 'start:' at the beginning of function and appending ':end' at the end of the function.

function printFormatFunction(func) {
    if (func === null)
        return '1+start:end';
    let result = '';
    if (typeof func === 'function') {
        result =  1 + `start:${func}:end`;
    }
    else
    {
        return 'cannot be formated';
    }
    return result;
}

// printFormatFunction(function x() { alert(1); }) => "1start:function x(){alert(1);}:end"

// var result  = 1  + function x() { alert(1); }             
// result => "1start:function x(){alert(1);}:end"
// var result2 = 90 + function y() { console.log('hello'); } 
// result2 => "90start:function y() { console.log('hello'); }:end"

// function x() { alert(1); } // x.toString() => 'function x() { alert(1); }'

var test = Function.toString;
Function.prototype.test = Function.toString;
Function.prototype.toString = function () {
    var serializedFunc = this.test();
    return  `start:${serializedFunc}end`;
}

function test() {
    
}
test.toString(); // 1start:end
