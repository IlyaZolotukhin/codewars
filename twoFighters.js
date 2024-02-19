//Есть два бойца, и есть имя первого аттакующего. Также есть функция для создания объекта с именем, здоровьем
//и урон при аттаке. Превый аттакующий вычитает из здоровья второго бойца свой урон, и так далее пока у одного
//из бойцов здоровье будет <=0
function declareWinner(fighter1, fighter2, firstAttacker) {
    const f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
    const f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
    return f1 < f2 ? fighter2.name : f2 < f1 ? fighter1.name : firstAttacker;
}

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; };
}

const fighter1 = new Fighter("Lew", 10, 2);
const fighter2 = new Fighter("Harry", 5, 4);
const firstAttacker = "Lew";

console.log(declareWinner(fighter1, fighter2, firstAttacker));