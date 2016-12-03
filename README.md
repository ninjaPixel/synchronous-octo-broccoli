# synchronous-octo-broccoli
Execute an array of promises, synchronously.
    
    npm install synchronous-octo-broccoli
 
## Usage



    
    const sob = require('synchronous-octo-broccoli');
    
    
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
                
    sob(arrayOfPromises).then((d)=>{
        // testString is '123'
    });