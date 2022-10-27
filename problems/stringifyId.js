
function stringify(arr){
    let ids = arr.map(i => i.id);
    let newArr = [...new Set(ids)].join(', ')
    return newArr
}


console.log(stringify([
    {id:1, name: 'sam'},
    {id:2, name: 'sam'},
    {id:3, name: 'sam'},
    {id:2, name: 'sam'},
    {id:5, name: 'sam'},
    {id:1, name: 'sam'}
]))