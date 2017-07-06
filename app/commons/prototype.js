Array.prototype.sum = function (func) {

    if (func == undefined)
        func = function (r) { return r; };

    var rs = 0;

    for (var i = 0; i < this.length; i++)
        rs += func(this[i]);

    return rs;
};