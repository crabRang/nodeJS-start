console.log("hello world!");

var figlet = require("figlet"); //figlet이라는 모듈을 요구

figlet("CUTE US", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});