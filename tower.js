function buildTower(n) {
    const tower = [];
    const width = n * 2 - 1;

    for (let i = 0; i < n; i++) {
        const stars = '*'.repeat(i * 2 + 1);
        const spaces = ' '.repeat((width - stars.length) / 2);
        const floor = spaces + stars + spaces;
        tower.push(floor);
    }

    console.log(tower) ;
}

buildTower(5)