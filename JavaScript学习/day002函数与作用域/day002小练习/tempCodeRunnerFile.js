const acc = () =>{
    let count=0;
    return () => {count++;return count};
};
const abb=acc()
abb()
abb()
console.log(abb())
console.log(abb())
console.log(abb())
console.log(abb())