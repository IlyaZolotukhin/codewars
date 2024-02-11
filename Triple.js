function gimme (triplet) {
    let index = triplet.sort((a,b) => a-b)[1]
    return triplet.findIndex(el => el === index)
}

console.log(gimme ([1, 2, 3]))