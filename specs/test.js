class Test {
    static equal(test, description) {
        var valid = test();
        console.log(valid ? "\x1b[32m" : "\x1b[31m", (valid ? 'Valid' : 'Invalid') + ' test: ' + description);
    }
}

module.exports = Test;