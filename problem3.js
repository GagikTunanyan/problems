//trvac e masiv tveric kazmvac : petq e veradarcnenq elementneri gumari arjeqy

let simple_array_sum = (arr) => {
  if (arr.length === 1) {
      return arr[0];
  }
  let verjin_elem = arr.pop();
  return verjin_elem + simple_array_sum(arr)
};
// console.log(simple_array_sum([1,2,3,4]));

