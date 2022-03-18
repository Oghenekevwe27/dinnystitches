import {styled} from "ui/stitches.config"

import { GridItem } from "./GridItem"

export const Grid= styled("div",{
    display: "grid",
    
    variants:{
        columnWidth:{
            colw1:{
                width: "8.33%"
            },
            colw2:{
                width: "16.66%"
            },colw3:{
                width: " 25%"
            },colw4:{
                width: "33.33%;"
            },colw5:{
                width: "41.66%"
            },colw6:{
                width: " 50%;"
            },colw7:{
                width: "58.33%"
            },colw8:{
                width: "66.66%"
            },colw9:{
                width: " 75%;"
            },colw10:{
                width: "83.33%"
            },colw11:{
                width: " 91.66%"
            },colw112:{
                width: " 100%"
            }
        },
        gridColumnGap:{
            gap1:{
                gridColumnGap:"4px"
            },
            gap2:{
                gridColumnGap:"40px"
            }
        },
        gridRowGap:{
            gap1:{
                gridColumnGap:"4px"
            },
            gap2:{
                gridColumnGap:"40px"
            }
        },
        gridTemplateColumns:{
            colw1:{
                width: "8.33%"
            },
            colw2:{
                width: "16.66%"
            },colw3:{
                width: " 25%"
            },colw4:{
                width: "33.33%;"
            },colw5:{
                width: "41.66%"
            },colw6:{
                width: " 50%;"
            },colw7:{
                width: "58.33%"
            },colw8:{
                width: "66.66%"
            },colw9:{
                width: " 75%;"
            },colw10:{
                width: "83.33%"
            },colw11:{
                width: " 91.66%"
            },colw112:{
                width: " 100%"
            }
        }

   

           
        //     gap:{
        //         column:{
        //             columnGap:"500px"
        //         },
        //         row:{
        //             rowGap:"500px"
        //         }
            
        //    }
        


        // item:{
       
        
        // }
    }
})