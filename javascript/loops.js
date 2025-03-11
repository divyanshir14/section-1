//for loop
for(let i=0; i<19; i++)
{
    console.log(i);
}
//while loop 
console.log('while loop');
let a=10;
while(a<20)
{
    console.log(a);
    a++;
}
let b=10;
console.log('do while loop');
do{
    console.log(b);
    b++;
}while (b>20);

//WAP to print all the numbers divisible by 7 in range of 120-270;
console.log('numbers divisible by 7');
for(let i=120; i<=270; i++){

    if(i%7==0)
    {
        console.log(i);
    }
}

//WAP to check if number is prime;
let num=13;
let isPrime=true;
for(let i=2;i<num/2;i++)
{
    if(num%i===0)
    {
        console.log('not prime');
        isPrime=false;
        break;
    }
}
if(isPrime) console.log('prime');