//ES6 中的 Set 去重
//ES6 提供了新的数据结构 Set，Set 结构的一个特性就是成员值都是唯一的，没有重复的值

function distinct(array){
  return Array.from(new Set(array))
}

//简化下
function unique(array){
  return [...Set(array)]
}

//再简化
let unique = (arr) => [...new Set(arr)]

