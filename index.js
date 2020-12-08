function findMatching(array,string){
   return array.filter(n =>{ n == string 
    })

}

function matchName(array,string){
    let fuck = array.filter(n =>{
     n.name === string
    })
   console.log(fuck)
}