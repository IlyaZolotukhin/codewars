//дан массив со словом, в нем слово иголка нужно её найти
//написать что иголка найдена и на какой позиции в массиве

function findNeedle(haystack) {
    for (let i=0;  i < haystack.length; i ++){
        if(haystack[i] === "needle") {
            return "found the needle at position "+i
        }
    }
}

findNeedle(["hay", "junk", "hay", "hay", "moreJunk","needle", "randomJunk"])