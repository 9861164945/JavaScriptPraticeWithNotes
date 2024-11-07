let n=+prompt("Enter A number:");
let c=Math.pow(10,n-1)
let x = Math.pow(10,n)

    for(let i=c;i<=x;i++){
       let d =0;
       for(let j = 1;j<=i;j++)
       {
            if(i%j==0)
            {
            d++;    
            }
       }
        if(d==2)
        {
            console.log(i);
        }
     
    }
    

