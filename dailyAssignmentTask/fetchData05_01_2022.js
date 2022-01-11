const request = require('request');
const fs = require('fs');

const url = 'http://dummy.restapiexample.com/api/v1/employee';

// ids of user
const ids = [1, 2, 3, 4];

function isJson(body) {
  try {
    JSON.parse(body);
  } catch (err) {
    return false;
  }
  return true;
}
for (let i = 0; i < 4; i++) {
  const userUrl = `${url}/${ids[i]}`;
  request.get(userUrl, (error, response, body) => {
    if (error) {
      console.log(error);
    } else if (isJson(body)) {
      // console.log('body is>>', body);
      const parseBody = JSON.parse(body);
      console.log('data>>>>', parseBody.data);
      const data = JSON.stringify(parseBody.data);
      const timeStamps = new Date().toISOString().replaceAll(':', '');
      const fileName = `${timeStamps}_employee_${i + 1}.txt`;
      fs.writeFileSync(`../output/${fileName}`, data, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('file saved');
        }
      });
      // console.log('data is>>>', body);
    }
  });
}
