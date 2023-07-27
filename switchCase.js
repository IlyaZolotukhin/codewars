function getGrade (s1, s2, s3) {
    let score = (s1+ s2+ s3)/3
switch (true){
    case (score >= 90):
        return 'A';
    case ( score >= 80):
        return 'B';
    case ( score >= 70):
        return 'C';
    case ( score >= 60):
        return 'D';
    default:
        return 'F';
}

}






