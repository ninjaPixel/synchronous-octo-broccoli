var assert = require('assert');
const sob = require('./index.js');


describe("Iterate the arrayOfPromises", function () {
    it("Each promise should be executed synchronously", function () {
        let testString = '';
        const arrayOfPromises = [
            ()=> {
                return new Promise((resolve, reject)=> {
                    setTimeout(function () {
                        testString += '1';
                        resolve();
                    }, 10);
                });
            },
            ()=> {
                return new Promise((resolve, reject)=> {
                    setTimeout(function () {
                        testString += '2';
                        resolve();
                    }, 200);
                });
                
            },
            ()=> {
                return new Promise((resolve, reject)=> {
                    testString += '3';
                    resolve(testString);
                });
                
            }];
        const testPromise = sob(arrayOfPromises);
        return testPromise.then(function (result) {
            assert.equal(testString, '123');
        });
    });
});