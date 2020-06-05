//trvac e 2 masiv, da xndirneri miavorneri nkaragrumn e, 2 hogi lracnum en xndirner yuraqanchyuri lucvac xndri miavory nerkayacvac e
//arandzin masivnerum, a ev b , petq e veradarcnenq masiv, vortex grvac e hamematutyuny hashivi kargov
//orinak a = [2,5,3,1] b = [2,3,5,7,9,6,1] return [1,5]

// let compare_the_triplets = (a,b) =>{
//   let hashiv = [0,0];
//   if (a.length >= b.length){
//       for (let i = 0; i < a.length; i++) {
//           if (b[i] !== undefined) {
//               if (a[i] === b[i]) {
//                   i++
//               }
//               if (a[i] > b[i]) {
//                   hashiv[0]++
//               }
//               else {
//                   hashiv[1]++
//               }
//           }
//           else {
//               hashiv[0]++
//           }
//       }
//   }
//   else {
//       for (let i = 0; i < b.length; i++){
//           if (a[i] !== undefined) {
//               if (a[i] === b[i]) {
//                   i++
//               }
//               if (a[i] > b[i]) {
//                   hashiv[0]++
//               }
//               else {
//                   hashiv[1]++
//               }
//           }
//           else {
//              hashiv[1]++
//           }
//       }
//   }
//   return hashiv
// };

let compare_the_triplets = (a,b) => {
  let hashiv = [0,0];
  for (let i = 0; i < a.length; i++){
      if (a[i] === b[i]){
          i++;
      }
      if (a[i] > b[i]){
          hashiv[0]++
      }
      else {
          if (a[i] !== b[i]) {
              hashiv[1]++
          }
      }
  }

  return hashiv

};

console.log(compare_the_triplets([20,20,30],[20,20,50]));