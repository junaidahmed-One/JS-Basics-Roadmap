/*
Question-1: 

WAP to print this

*
**
***
****
*****    

*/

const pattern1 = (num) => {
    for(let i=0;i<=num;i++){
        let star = "";
        for(let j=0;j<=i;j++){
            star += '*';
        }
        console.log(star);
    }
}

pattern1(5);


/*
Question-2: 

WAP to print this 

   *
  ***
 *****
*******
*/ 


const pattern2 = (num) => {
    for(let i=0;i<=num;i++){
        for(let j=num-i;j>0;j--){
            process.stdout.write(" ");
        }

        for(let k=1;k<=2*i-1;k++){
            process.stdout.write("*");
        }

        console.log();
    }
}

pattern2(4);

/* 
Question-4:

WAP to print this

1
12
123
1234
12345

*/

const pattern3 = (num) => {
    for(let i=1;i<=num;i++){
        let output = "";
        for(let j=1;j<=i;j++){
            output += j;
        }
        console.log(output);
    }
}

pattern3(5);