// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
let a;
let b;
let newString =[]
let answer;

    for (var i = 0; i < S.length; i++) {
        if(S[i] === 'a'){a =S[i]
            newString.push(a)
        }
        if(S[i] === 'b'){b =S[i]
            newString.push(b)}
      }

      console.log(newString.indexOf(a), newString.indexOf(b))
      if(newString.indexOf(a) < newString.lastIndexOf(b)){
       // console.log('true')
        answer = true
      }else{
       // console.log('false')
        answer = false
      }
 return   answer
}


solution("aabb")
