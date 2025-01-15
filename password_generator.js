class GeneratePassword {
    constructor(num_of_alphabets, num_of_numbers, num_of_symbols) {
        this.num_of_alphabets = num_of_alphabets || 10
        this.num_of_numbers = num_of_numbers || 5
        this.num_of_symbols = num_of_symbols || 5

        this.alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.numbers = "0123456789";
        this.symbols = "!@#$%(;^&*)?";

        this.password = []

        this.add_alphabet()
        this.add_number()
        this.add_symbol()
    }

    add_alphabet() {
        while (this.num_of_alphabets > 0) {
            let letter = this.alphabets[Math.floor(Math.random() * this.alphabets.length)];
            this.password.push(letter);
        
            this.num_of_alphabets--;
          }
    }

    add_number() {
        while (this.num_of_numbers > 0) {
            let number = this.numbers[Math.floor(Math.random() * this.numbers.length)];
            this.password.push(number);
        
            this.num_of_numbers--;
          }
    }

    add_symbol() {
        while (this.num_of_symbols > 0) {
            let symbol = this.symbols[Math.floor(Math.random() * this.symbols.length)];
            this.password.push(symbol);
        
            this.num_of_symbols--;
          }
    }

    generate() {
        this.password.sort(()=> 0.5 - Math.random())
        return this.password.join("")
    }
}

export default GeneratePassword