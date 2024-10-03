// const fetchUserDetails = (userID, callback) => {
// console.log("Fetching user Details");
// setTimeout(()=>{
//     callback(`http://image.example.com/${userID}`)
// },500)
// };



const fetchUserDetails = (userID) => {
    console.log("Fetching user Details");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(`http://image.example.com/${userID}`)
        },500)
    })
    };
    


const downloadImage = (imageURL) => {
    console.log("Downloading Image");
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`Image data for ${imageURL}`)
    },500)
})
};



const render = (image) => {
    console.log("Render Image");
    };

    fetchUserDetails("john")
    .then((imageURL) => downloadImage(imageURL))
    .then((imageData) => render(imageData))
    .catch((error)=>{
        console.log(error);
    })


// const render = (image) => {
//     console.log("Render Image");
//     };

//     fetchUserDetails("john",(imageURL)=>{
//         downloadImage(imageURL,(imageData)=>{
//             render(imageData)
//         })





//passed another function as a completion handler
//called a callback function

 //   });

 //CALLBACK HELL----> PYRAMID OF HELL

//  fetchUserDetails("john",(imageURL)=>{
//     downloadImage(imageURL,(ImageData)=>{
//         resizeImage(ImageData,(resizedImage)=>{
//             transformImage(resizedImage,(transformedImage)=>{
//                 WebGL2RenderingContext(transformedImage);
//             })
//         })
//     })
//  })



// PROMISE
// const aPromise = new Promise ((resolve,reject)=>{
// resolve("image url")
// reject("failed to connect")
// });