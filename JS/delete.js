const promise = (dataId) => {
  return new Promise((res,rej) => {
    setTimeout(() => {
      console.log("Getting data ....", dataId);
      res("success");
    }, 3000);
  });
};

// promise(1).then((res)=>{
//   console.log(res);
//   promise(2).then((res)=>{
//     console.log(res);
//     promise(3).then((res)=>{
//       console.log(res)
//     })
//   })
// })

// promise(1)
//   .then((res) => {
//     return promise(2);
//   })
//   .then((res) => {
//     return promise(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });


  async function getData() {
    const data1 = await promise(1);
    console.log(data1)
    const data2 = await promise(2);
    console.log(data2)
  }

  getData()