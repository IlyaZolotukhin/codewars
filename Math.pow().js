//дано масса и вес человека, посчитать индекс ожирения

function bmi(weight, height) {
    //найдем по формуле индекс
    let bmi=weight/Math.pow(height,2);
    //согласно условиям сравним индексы и присвоим степень ожирения
    if(bmi<=18.5){
        return "Underweight";
    }else if(bmi<=25){
        return "Normal";
    }else if(bmi<=30){
        return "Overweight";
    }else{
        return "Obese";
    }
}