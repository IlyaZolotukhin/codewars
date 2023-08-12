//дан возраст отца и сына , нужно вычислить в каком
//возрасте отец был старше сына в два раза

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - (sonYearsOld + sonYearsOld))
    //abs делает число положительным
}
