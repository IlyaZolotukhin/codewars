//дан массив слов, если в массиве есть слово длиной четыре буквы вывести его в новом массиве

function friend(friends){
    return friends.filter(f=> f.length===4)
}