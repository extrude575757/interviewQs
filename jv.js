// #Find all the pairs of two integers in an unsorted array that sum up 
// #to a given S. for example, if the array is [3, 5, 2, -4, 8, 11] and the 
// #sum is 7, Your program should return [[11, -4], [2, 5]] because
// #11 + -4 = 7 and 2 + 5 = 7. 

const fcn = (pr) =>{
    let con = [];
    let ss = pr.length;
    for (let z = 0; z < ss; z++){
        for(let zz = 0; zz < ss; zz++){
            if(pr[z]+pr[zz] === 7){
                con.push( pr[zz]); 
            }
            
        }
    }
    let concon = [];
    if(con.length > 1){
        for(let x = 0; x < con.length; x++){
            if(x % 2){
                let c = [con[x-1],con[x]];
                concon.push(c);
            }
        }
    }

    return concon;
    // let cc = pr.map( (e,i) =>{
    //     if(e +e[i+1] === 7){
    //         return i;
            
    //     }
        
    // });
    // return cc;
    // let coon = pr.map((e,i)=>{
    //     if(e + e[i+1] === 7 && i !== size(pr)){
    //         return e;
    //     }else if(i === size(pr)){
    //         return i;
    //     }
    // })
    // return coon;
}
let pr = [3, 5, 2, -4, 8, 11];
console.log(fcn(pr));