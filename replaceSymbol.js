function DNAtoRNA(dna) {
//метод заменяет все Т символы в строке на U
    return dna.replace(/T/g, 'U');
//если записать ("T", "U"), то уберет первый попавшейся
}