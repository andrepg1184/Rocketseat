let nota = 155
    

if (nota >= 90 && nota <= 100){
    console.log('A')
}else if(nota <= 89 && nota >= 80) {
    console.log('B')
}else if(nota <= 79 && nota >= 70){
    console.log('C')
}else if(nota <= 69 && nota >=60){
    console.log('D')
}else if(nota <= 60 && nota >= 0){
    console.log('F')
}else{
    console.log('Nota inválida')
}