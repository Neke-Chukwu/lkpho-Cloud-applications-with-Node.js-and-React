// Example using Callbacks

// Function that simulates an asynchronous operation (e.g., fetching data)
function fetchDataCallback(callback) {
    setTimeout(() => {
      const data = { message: "Data fetched using callback" };
      // Simulate success
      callback(null, data); // First argument is error, second is data
      // Simulate error
      // callback("Error fetching data", null);
    }, 1000);
  }
  
  // Using the callback function
  fetchDataCallback((error, result) => {
    if (error) {
      console.error("Callback Error:", error);
      return;
    }
    console.log("Callback Result:", result);
  });
  
  // Example using Promises
  
  function fetchDataPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message: "Data fetched using promise" };
        // Simulate success
        resolve(data);
        // Simulate error
        // reject("Error fetching data");
      }, 1000);
    });
  }
  
  // Using the promise
  fetchDataPromise()
    .then((result) => {
      console.log("Promise Result:", result);
    })
    .catch((error) => {
      console.error("Promise Error:", error);
    });
  
  // Example of callback hell
  function doTask1(callback) {
    setTimeout(() => {
      callback(null, "Task 1 Done");
    }, 500);
  }
  function doTask2(data, callback) {
    setTimeout(() => {
      callback(null, `${data}, Task 2 Done`);
    }, 500);
  }
  function doTask3(data, callback) {
    setTimeout(() => {
      callback(null, `${data}, Task 3 Done`);
    }, 500);
  }
  
  doTask1((err, result1)=>{
      if(err) console.log(err);
      doTask2(result1, (err, result2)=>{
          if(err) console.log(err);
          doTask3(result2, (err, result3)=>{
              if(err) console.log(err);
              console.log(result3);
          })
      })
  })
  
  // Example of promises chaining.
  
  function doTask1Promise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task 1 Done");
      }, 500);
    });
  }
  function doTask2Promise(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${data}, Task 2 Done`);
      }, 500);
    });
  }
  function doTask3Promise(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${data}, Task 3 Done`);
      }, 500);
    });
  }
  
  doTask1Promise()
    .then(doTask2Promise)
    .then(doTask3Promise)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));