//function callback

function sayMyName(name){
    console.log('antes de executar a função callback')

    name()

    console.log('Depois de executar a callback')
}

sayMyName(
    () =>{
        console.log('Estou em uma callback')
    }
)