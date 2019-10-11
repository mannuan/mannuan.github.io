function partion(arr, left, right){
  let i = left;
  let j = right;
  let base = arr[left];
  while(i<j){
    while(arr[j]>=base && i<j){
      j--;
    }
    while(arr[i]<=base && i<j){
      i++;
    }
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  arr[left] = arr[i];
  arr[i] = base;
  return i;
}
function sort(arr, left, right){
  if(left < right){
    let mid = partion(arr, left, right);
    sort(arr, left, mid-1);
    sort(arr, mid+1, right);
  }
}

let arr = [3,7, 0,0];
let brr = [];
let zero_len = 0;
let map = {};
let congfu = false;
arr.forEach(e=>{
  if(e!==0){
    if(map[e]){
      congfu = true; 
    }else{
      map[e] = 1;
    }
    brr.push(e);
  }else{
    zero_len ++;
  }
});
// console.log(map);
sort(brr, 0, brr.length-1);
// console.log(brr);
let cha = 0;
if(brr.length>1){
  cha = brr[brr.length-1] - brr[0]+1-brr.length;
}
if(zero_len>=cha && !congfu){
  console.log("YES+"+zero_len);
}
else if(congfu){
  console.log("NO+"+zero_len);
}else{
  console.log("NO+"+zero_len);
}