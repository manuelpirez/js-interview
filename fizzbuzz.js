/**
 *  Print integers one-to-N:
 *      Print “Fizz” if an integer is divisible by three.
 *      “Buzz” if an integer is divisible by five.
 *      “FizzBuzz” if an integer is divisible by both three and five.
 */
const execute =() =>{
    for(let i=0; i<=20; i++) {
        console.log(i%15?i%3?i%5?i:'Buzz':'Fizz':'FizzBuzz')
    }
}

export default execute