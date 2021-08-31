const {isSameAmount, hasValidData} = require('../src/utils');

describe('Check the utils',()=>{
    describe('check isSameAmount function', ()=>{
        it('should return true if balance amounts are the same', ()=>{
            const balanceDifferences = [100,100,100,100]   
            expect(isSameAmount(balanceDifferences)).toBe(true)      
        })
        it('should return true if balance amounts are different', ()=>{
            const balanceDifferences = [100,200,100,100]   
            expect(isSameAmount(balanceDifferences)).toBe(false)      
        })
    })
    describe('check hasValidData function', ()=>{
        it('should return true if the argument contains a valid data structure', ()=>{
            const accountBalanceHistory = [
                {
                  monthNumber: 0, 
                  account: {
                    balance: { amount: 0 },
                  },
                },
                {
                  monthNumber: 1, 
                  account: {
                    balance: { amount: 100 },
                  },
                },
                {
                  monthNumber: 2,
                  account: {
                    balance: { amount: 200 },
                  },
                }
              ];  
            expect(hasValidData(accountBalanceHistory[0])).toBe(true)      
        })
        it('should return false if the argument contains an invalid data structure', ()=>{
            const accountBalanceHistory = [
                {
                  monthNumber: 0, 
                  account: {
                    balance: { amount: 0 },
                  },
                },
                {
                  monthNumber: 1, 
                  account: {
                    balance: { amount: 100 },
                  },
                },
                {
                  monthNumber: 2,
                  account: {},
                }
              ];   
            expect(hasValidData(accountBalanceHistory[2])).toBe(false)      
        })
    })
})