
function stringify(arr){
    let newArr = [];
    arr.map(i=> !newArr.includes(i.id) ? newArr.push(i.id) : null)   
    return newArr.join(', ')
}


console.log(stringify([
    {id:1, name: 'sam'},
    {id:2, name: 'sam'},
    {id:3, name: 'sam'},
    {id:2, name: 'sam'},
    {id:5, name: 'sam'},
    {id:1, name: 'sam'}
]))