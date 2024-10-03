const time = async (ms)=>{
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
 resolve();   
},ms);
    });
};

const fetchUserDetails = async (userID) => {
    console.log("Fetching user Details");
    await time (500);
    return `http://image.example.com/${userID}`;
    };

const downloadImage = async(imageURL) => {
    console.log("Downloading Image");
    await time (500);
    return `Image data for ${imageURL}`
    };

const render = async(image) => {
    await time (300);
    console.log("Render Image");
    };

const run = async() => {
  const imageURL =  await fetchUserDetails("john");
  const imageData =  await downloadImage(imageURL);
  await render(imageData);
        }
      run();  