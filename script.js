import Kartya from "./kartya.js"
$(function () {
    const galeriaTomb = [
        {
           
            kep: "kepek/virag_1.jpeg",
           
        },
        {
           
            kep: "kepek/virag_2.jpeg",
           
        },
        {
          
            kep: "kepek/virag_3.jpeg",
          
        },
        {
          
            kep: "kepek/virag_4.jpeg",
          
        },
    ];
  
    const GALERIA = $("#galeria");  
   
    /**Galéria képeinek generálása */
    galeriaTomb.forEach((elem, index) => {
        const galeriaKep = new Kartya(elem, index, GALERIA);
        #esemenyTrigger(esemeny){
            const esemeny= new CreateEvent (detail:(esemeny))
            window dispatchEvent esemeny
        }
        galeriaKep.on("click",esemeny)=>{

            console.log(esemeny);

        }

    }
    
    );

   
});
