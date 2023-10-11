//посчитать произведение,если множимое и множитель меньше нуля приведем их к нулю
function paperwork(n, m) {
if (m < 0) m = 0
if (n < 0) m = -0
        let page = m * n
        console.log(page)
}
paperwork(-5,5)