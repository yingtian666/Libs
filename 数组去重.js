//ES6 中的 Set 去重

function distinct(array){
  return Array.from(new Set(array))
}
