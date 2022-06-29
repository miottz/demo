// function delAray(arr){
//     arr.sort((a,b)=>{
//         return a[0].charCodeAt()-b[0].charCodeAt()
//     })
//     console.log (arr)


// }

// delAray(['zm', 'za', 'b', 'lm', 'ln', 'k'])



// function delStr(str) {
//     let arr = str.split(/[^-0-9]+/g)
//     let newArr = []
//     arr.forEach(element => {
//         if (element !== '')
//             newArr.push(Number(element))
//     });
//     let sum = newArr[0]
//     for (i = 1; i < newArr.length; i++) {
//         sum = sum - newArr[i]
//     }
//     console.log(sum)
// }



// function func (arr) {
//     let hash = {}
//     for (let i = 0; i < arr.length; i++) {
//         if (!hash[arr[i][0]]) {
//             hash[arr[i][0]] = []
//         }
//         if (!hash[arr[i][0]].includes(arr[i])) {
//             hash[arr[i][0]].push(arr[i])
//         }
//     }
//     console.log(hash)
// }

// func(['a', 'aa', 'null', 'null', 'a'])


const arr = []
console.log(typeof(arr))