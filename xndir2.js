//trvac e tiv vory nerkayacnum e toxeri qanaky,vory nman e cari,petq e veradarcnenq masivi mej masiv,vor sksvum ev verjanum e
//1 ov ev yntacik tvery havasar en naxkin masivi tveri gumarin

// let inuput = 5;
// kstananq zangvac [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]] aysinqn mutqagrvac tivy veradarcvox zangvaci laynutyunnn e

let pascal_triangle = (num) => {
    let push_arr = [[1]];
    let yntacik_arr = [1, 1];
    if (num > 1) {
        push_arr.push(yntacik_arr);
    }

    for (let i = 3; i <= num; i++) {
        let tmp_arr = [1];
        let tmp_top_arr = push_arr[push_arr.length - 1];
        for (let j = 0; j < tmp_top_arr.length - 1; j++){
            tmp_arr.push(tmp_top_arr[j] + tmp_top_arr[j+1])
        }

        tmp_arr.push(1);
        push_arr.push(tmp_arr);
    }

    return push_arr;
};

// console.log(pascal_triangle(100));

let pascal_triangle_recursive =(num1) =>{
  if (num1 === 1) {
      return [[1]]
  }

  if (num1 === 2) {
      return [[1],[1,1]]
  }

  let yntacik = [1];
  let arr = pascal_triangle_recursive(num1-1);
  for (let i = 0; i < arr[arr.length-1].length-1; i++){
      yntacik.push(arr[arr.length-1][i] + arr[arr.length-1][i+1])
  }

  yntacik.push(1);
  arr.push(yntacik);
  return arr;
};

// console.log(pascal_triangle_recursive(8));