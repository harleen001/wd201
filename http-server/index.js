const fs = require("fs");

fs.writeFile(
    "sample.txt",
    "Hello World. Welcome to Node.js File System module.",
    (err) => {
      if (err) throw err;
      console.log("File created!");
    }
  );

  //read file
  fs.readFile("sample.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });
  //append file
  fs.appendFile("sample.txt", " This is my updated content", (err) => {
    if (err) throw err;
    console.log("File updated!");
  });
  //rename file

  fs.rename("sample.txt", "test.txt", (err) => {
    if (err) throw err;
    console.log("File name updated!");
  });

  //delete file

  fs.unlink("test.txt", (err) => {
    if (err) throw err;
    console.log("File test.txt deleted successfully!");
  });