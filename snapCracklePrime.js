function snapCracklePrime(maxValue) {
    let array = []
    for (i = 1; i <= maxValue; i++) {
        
        if (i == 1 || i==3) {
            array.push("SnapPrime")
           
        
        } else if (i == 2) {
            array.push("Prime")
        // } else if (i == 3) {
        //     array.push("SnapPrime")
        } else if (i == 5) {
            array.push("SnapCracklePrime")
        } else if (i % 2 !== 0 && i % 5 == 0) {
            array.push("SnapCrackle")
        } else if (i % 5 == 0) {
            array.push("Crackle")
        } else if (nPrime(i) && i % 2 !== 0) {
            array.push("SnapPrime")
        } else if (i % 2 !== 0) {
            array.push("Snap")
        } else if (i = i) {
            array.push(i)
        }
    }
    return array.join(", ")
}
function nPrime(i) {
    for (let divisor =2 ; divisor <i ; divisor--) {
        if (i % divisor !== 0) {
            return true
        }
    }
    
}
console.log(snapCracklePrime(15))

array[0]+="cavalo"

