function processArrayOfPromises(array) {
    var index = 0;

    return new Promise(function(resolve, reject) {

        function next() {
            if (index < array.length) {
                array[index++]().then(next, reject);
            } else {
                resolve();
            }
        }
        next();
    });
}

module.exports = processArrayOfPromises;