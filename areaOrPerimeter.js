//если фигура квадрат вывести площадь, прямоугольник периметр
const areaOrPerimeter = function(l , w) {
    console.log((l === w)? (l * w): (l*2 + w*2))
};

areaOrPerimeter(3,3)