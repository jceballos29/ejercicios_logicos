function countPrimes(number) {
    //Implementación
    if(number > 0){
        let primes = []
        for (let i = 2; i < number; i++) {
            if(Math.floor(Math.sqrt(i))=== 1) primes.push(i)
            else {
                let divisors = 0;
                for (let j = 0; j < primes.length; j++) {
                    if(i % primes[j] === 0) divisors++                   
                }
                if (divisors === 0) primes.push(i)
            }
        }
        return primes.length
    }
    return 0;
}

module.exports = countPrimes;