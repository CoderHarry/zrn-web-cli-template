let fs = require('fs');
let readline = require('readline');

function readFileToArr(fReadName,callback){
  let fRead = fs.createReadStream(fReadName);
  let objReadline = readline.createInterface({
      input:fRead
  });
  let arr = new Array();
  objReadline.on('line',function (line) {
      arr.push(line);
  });
  objReadline.on('close',function () {
      callback(arr);
  });
}

const argvs = process.argv.splice(2);
const commonFile = argvs[0] ;
const businessFile = argvs[1] ;
const diffOut = argvs[2] ;
readFileToArr(commonFile, function (c_data) {
  let diff = [];
  let commonArrs = c_data;
  readFileToArr(businessFile, function (b_data) {
    const businessArrs = b_data;
    for (let i = 0; i < businessArrs.length; i++) {
      if (commonArrs.indexOf(businessArrs[i]) === -1) { // business中独有的行
        diff.push(businessArrs[i]);
      }
    }
    console.log(diff.length);
    let newContent = diff.join('\n');
    fs.writeFileSync(diffOut, newContent); // 生成diff.ios.jsbundle
  });
});