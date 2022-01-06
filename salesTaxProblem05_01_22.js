// print process.argv
// console.log('data>>>', process.argv);
const prompt = require('prompt');

prompt.start();

function onErr(err) {
  console.log(err);
  return 1;
}

prompt.get(['item1', 'item2', 'item3', 'item4'], (err, result) => {
  if (err) {
    // console.log(err);
    return onErr(err);
  }
  const response = {};
  let saleTax = 0;
  let total = 0;

  console.log('input>>>', result);
  // eslint-disable-next-line no-restricted-syntax
  for (const key in result) {
    if (result[key] !== '') {
      const [itemName, price] = result[key].split('at ');
      // console.log(itemName, Number(price));
      // here basics sales not applied
      if (itemName.includes('book') || itemName.includes('chocolates') || itemName.includes('chocolate') || itemName.includes('headache pills')) {
        const priceInNumber = Number(price);
        if (itemName.includes('imported')) { // imported sales applied
          saleTax += priceInNumber * (5 / 100);
          response[itemName] = (priceInNumber + priceInNumber * (5 / 100)).toFixed(2);
          total += (priceInNumber + priceInNumber * (5 / 100));
        } else {
          response[itemName] = (priceInNumber).toFixed(2);
          total += priceInNumber;
        }
      } else { // basics sales applied
        // console.log('hi');
        const priceInNumber = Number(price);
        if (itemName.includes('imported')) {
          saleTax += priceInNumber * (15 / 100);
          response[itemName] = (priceInNumber + priceInNumber * (15 / 100)).toFixed(2);
          total += (priceInNumber + priceInNumber * (15 / 100));
        } else {
          saleTax += priceInNumber * (10 / 100);
          response[itemName] = (priceInNumber + priceInNumber * (10 / 100)).toFixed(2);
          total += (priceInNumber + priceInNumber * (10 / 100));
        }
      }
    }
  }
  response['Sales Taxes'] = saleTax.toFixed(2);
  response.Total = total.toFixed(2);
  console.log(response);
  return 1;
  // console.log('item1 is', result.item2);
});
