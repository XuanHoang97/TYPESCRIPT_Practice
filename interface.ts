// INTERFACE
interface Person {
    name: string
    age: number
    speak(lang: string): void
    spend(amount: number): number
}

const hoang: Person = {
    name: 'Hoang',
    age: 20,
    speak(text: string): void {
        console.log(text)
    },
    spend(amt: number) {
        return amt
    }
}

console.log(hoang)