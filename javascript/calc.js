//to perform calculator operations like addition,substraction,division and multiplication using import and export

//first we import modules which perform addition,substraction,division,multiplication
const sumM=require('./add')
const mulM=require('./mul')
const subM=require('./sub')
const divM=require('./div')
//provide a string for testing calculator application
const manualinput="(((4*3)+(6-6))+2)"
const operatorsarray=[]
const numsarray=[]
//an iterator is used to iterate over the entire string
for (let index = 0; index < manualinput.length; index++) {
    const element = manualinput.charAt(index)
    //if a closed paranthesis is found then we perform the necessary operation based on the operator
    if(element==')')
    {
        const operator=operatorsarray.pop()
        const operand2=Number(numsarray.pop())
        const operand1=Number(numsarray.pop())
        operatorsarray.pop()
        if(operator=='+')
        numsarray.push(sumM.add(operand2,operand1))
        if(operator=='-')
        numsarray.push(subM.sub(operand1,operand2))
        if(operator=='*')
        numsarray.push(mulM.mul(operand2,operand1))
        if(operator=='/')
        numsarray.push(divM.div(operand1,operand2))
    } 
    //here we store operators in an operatorsarray
    else if(isNaN(element))
    {
        operatorsarray.push(element)
    }
    //here we store numbers in a numsarray
    else
    {
        numsarray.push(element)
    }
}
console.log(numsarray[0])


