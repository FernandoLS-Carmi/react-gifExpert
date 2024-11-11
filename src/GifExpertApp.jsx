import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categoria, setCategoria] = useState( ['One Piece'])//, 'Monster Hunter Wilds'] );
    
    const onAddCategory = ( newCategory ) => {
        // categoria.push(''); //evitar mutar el estado
        if ( categoria.includes(newCategory) ) return;
        setCategoria( [ ...categoria, newCategory ]);
        // console.log(newCategory);
    }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={ (value) => onAddCategory(value) } ></AddCategory>
      
      { 
        categoria.map( category =>  (
            <GifGrid 
                key={ category } 
                categoria={ category } >
            </GifGrid>
        ))
      }
        {/* items */}
    </>
  )
}
