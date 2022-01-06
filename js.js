//Friday: Sum All Odd Fibonacci
//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.


function sumOddFibos(num){

    if(num==1){
        return 2;
    }
    let oddFibos=[1,1];
    let no1=1;
    let no2=1;
    let fibo=no1+no2;

    while (fibo<=num){
        
        if (fibo%2!=0) {
            oddFibos.push(fibo);
        }
        no1=no2;
        no2=fibo;
        fibo=no1+no2;
    }

    let result=0;
    oddFibos.forEach(x=> result+=x);

    return result;

}

console.log(sumOddFibos(60));