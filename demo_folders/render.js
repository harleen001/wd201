const fetchUserDetails = (userID, callback) => {
console.log("Fetching user Details");
setTimeout(()=>{
    callback(`http://image.example.com/${userID}`)
},500)
};


const downloadImage = (imageURL,callback) => {
    console.log("Downloading Image");
    setTimeout(()=>{
        callback(`Image data for ${imageURL}`)
    },500)
};

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

 fetchUserDetails("john",(imageURL)=>{
    downloadImage(imageURL,(ImageData)=>{
        resizeImage(ImageData,(resizedImage)=>{
            transformImage(resizedImage,(transformedImage)=>{
                WebGL2RenderingContext(transformedImage);
            })
        })
    })
 })