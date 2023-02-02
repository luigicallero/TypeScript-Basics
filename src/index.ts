let mensaje: string = "Hola Mundo"
mensaje = "Como estas?"
mensaje = "Chau Mundo!"
console.log(mensaje)

/** Types legacy from JS
* number
* string
* boolean
* null
* undefined
* object
* function

* Types of TS
* any (not to use)
* unknown
* never
* array
* tuplas
* Enums
*
* Types inferred
* 
*/

console.log(typeof []) // to show there is not a type array in JS

// types are inferred in examples below, which means I can delete the types in the initialization
let extintDinosours: number = 76_000_000
let favouriteDinosour: string = "T-Rex"
let extint:boolean = true

// type "any" can be inferred also, but not recommended:
let queti
queti = "Hi all"
queti = 3000

// during a migration we can declare variables as "any" initially, recommended to declare with correct type
function testing(config: any){
    console.log(config)
}

testing("pepe")
testing(2345)

let animals: string[] = ['girafe', 'elephant', 'whale']
let nums: number[] = [ 1, 2, 3 ]
let checks: boolean[] = []
let nums2: Array<number> = []

/** Autocomplete provides methods related to the data type
animals.map(x => x.)
nums.map(x => x.)
*/

let tupla: [number, string[]] = [ 1, ["Chapter one","Apendix"]]
console.log(tupla)

// Enums
// without enum
const small = 's'
const medium = 'm'
const large = 'l'
const extralarge = 'xl'

// usig enum - using PascalCase
enum Size { Small = 's', Medium = 'm', Large = 'l', ExtraLarge = 'xl'}
const size = Size.Small
console.log(size)

// using a more efficient way of enum - this one does not generate js code until it is used
const enum LoadingState { Iddle, Loading, Success, Error } 
const state = LoadingState.Error
console.log(state)

// Objects
type Address = {
    street: string,
    number: number,
    country: string
}

type Person = {
    readonly id: number,
    name: string,
    size: Size
    address: Address
}

const objet: Person = {
    id: 1,
    name: 'Boca Juniors',
    size: Size.Large,
    address: {
        street: "Las Achiras",
        number: 2232,
        country: "Mexico"
    }
}