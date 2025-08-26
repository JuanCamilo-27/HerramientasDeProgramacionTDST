import React from 'react'

export const  BasicTypes = () => {
  
   const name: string = "JuanCamilo";
   const age: number = 25;
   const isActive: boolean = true;

    return (
    <> 
      <div> 
        Hello Word 
      </div>
      
      <div> 
        {" " + name} 
      </div>

      <div> 
        {" " + age} 
      </div>

      <div> 
        {" " +  isActive} 
      </div>

    </> 
  )
}
