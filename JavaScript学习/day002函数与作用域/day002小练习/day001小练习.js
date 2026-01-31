const acc = () =>{
    let count=0;
    return () => {count++;return count};
};
const abb=acc()

console.log(abb())
console.log(abb())
console.log(abb())
console.log(abb())

// const a=()=>{let b=0;return()=>++b}
// const counter=a();
// console.log(counter()); // 1（b从0→1，返回1）
// console.log(counter()); // 2（b从1→2，返回2）
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
