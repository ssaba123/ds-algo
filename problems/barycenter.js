function barTriang(p1, p2, p3){
    let x0 = +((p1[0] + p2[0] + p3[0])/3).toFixed(4)
    let y0 = +((p1[1] + p2[1] + p3[1])/3).toFixed(4)
    return [x0, y0]
    }

console.log(barTriang([4, 6], [12, 4], [10, 10]))