// input : ['Alice','Ben','Als','bekar']
// output : {a:['Alice','Als'],b : ['Ben']}

function myFunction(arr){
  let temp = arr[0].charAt(0).toLowerCase();
  let obj = {};
  arr.forEach(e=> {
    if(obj[temp]&&e.charAt(0).toLowerCase() === temp){
        obj[temp].push(e);
    }else{
        obj[e.charAt(0).toLowerCase()] = [e];
        temp = e.charAt(0).toLowerCase();
    }
  })
  return obj;
}

myFunction(['Alice','Als','Ben','bekar','cake']);