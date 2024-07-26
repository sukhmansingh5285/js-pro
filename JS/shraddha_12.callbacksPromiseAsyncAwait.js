//Sync -> Executes in sequence          Async -> async code allows next instruction immediately and dosen't block the flow

// 1 Callbacks
function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

calculator(1, 2, sum); // calculator(1,2,sum()) -> this won't work because this means that we are executing this right here right now
//or the above code can be written in the single line
calculator(1, 2, (a, b) => {
  console.log(a + b);
});

//callbacks are synchronous and also can be used asynchronous with settimeout like below
const hello = () => {
  console.log("hey");
};
setTimeout(hello, 3000);

//Callback hell
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 3000);
}

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});

//to solve these callback hell, we use promises, and to tackhle the drawbacks of promises we will use async await
// 1 Callbacks

// 2 Promises -> 3 states(pending,fulfilled,rejected), has prototype(as promise is object), promiseResult(value of resolve)
//a
let promise0 = new Promise((resolve, reject) => {});
// in programming generally we don't create promises, we always get them(eg-> like API), so if we get a promise what to do with it
promise0.then((result) => {}); // we get parameter result, which is the value we get from resolve
promise0.catch((error) => {}); // we get parameter error, which is the value we get from reject

// resolve, reject and then, catch
let promise1 = new Promise((res, rej) => {
  let success = true;

  if (success) {
    res("It's resolved");
  } else {
    rej("It's rejected");
  }
});

promise1
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// promise chaining 

const promise = (dataId) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Getting data ...." + dataId);
      res("success");
    }, 3000);
  });
};

// 1) Bad version

promise(1).then((res) => {
  console.log(res);
  promise(2).then((res) => {
    console.log(res);
    promise(3).then((res) => {
      console.log(res);
    });
  });
});

//2) Better version
promise(1)
  .then((res) => {
    return promise(2);
  })
  .then((res) => {
    return promise(3);
  })
  .then((res) => {
    console.log(res);
  });

//3 Async Await -> role of async function is to return a promise compulsory

async function getData() {
  const data1 = await promise(1);
  console.log(data1)
  const data2 = await promise(2);
  console.log(data2)
}

getData()

