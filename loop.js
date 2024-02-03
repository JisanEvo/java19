const mobile={
    barand:`samsung`,
    price:25000,
    color:`black`,
    camera:`12 Px`,
    isNew:true,
}

for (const prop in mobile){
    console.log(prop)
    console.log(mobile[prop])

}
const keys=Object.keys(mobile)
console.log(keys)
for(const key of keys){
    console.log(key,mobile[key])
}