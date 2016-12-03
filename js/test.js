'use strict';

var assert = require('assert');
var sob = require('./index.js');

describe("Iterate the arrayOfPromises", function () {
    it("Each promise should be executed synchronously", function () {
        var testString = '';
        var arrayOfPromises = [function () {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    testString += '1';
                    resolve();
                }, 10);
            });
        }, function () {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    testString += '2';
                    resolve();
                }, 200);
            });
        }, function () {
            return new Promise(function (resolve, reject) {
                testString += '3';
                resolve(testString);
            });
        }];
        var testPromise = sob(arrayOfPromises);
        return testPromise.then(function (result) {
            assert.equal(testString, '123');
        });
    });
});