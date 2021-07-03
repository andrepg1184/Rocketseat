/*

    function() constructor

    *expressão new
    *criar um novo objeto
    * this keyword


function Person(name){
    this.name = name
    this.walk = function(){
        return `O ${name} está andando`
    }
}

const andre = new Person("André")
const joao = new Person("João")
console.log(andre.walk())
console.log(joao.walk())

*/

let date = new Date("2021-07-03")
console.log(date)


    