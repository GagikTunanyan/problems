//trvac tivy nerkayacnel 7 akan hamakargov

let func =(nums) =>{
    let s = "";
    let nshan ="";
    let arjeq = nums;
    if (arjeq < 0) {
        arjeq *= -1;
        nshan = "-"
    }
    while (true) {
        if (arjeq < 7) {
            s = arjeq + s;
            break;
        }
        s = (arjeq % 7) + s;
        arjeq = parseInt(arjeq / 7);
    }

    return nshan + s
};

console.log(func(-15));
