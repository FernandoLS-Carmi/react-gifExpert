import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ categoria }) => {
    const { images, isLoading } = useFetchGifs( categoria );
    
    
    return (
        <>
            <h3>{ categoria }</h3>
            { isLoading && (<h2>Cargando...</h2>) }

            <div className="card-grid">
                {
                    images.map( ( image) => (
                        <GifItem 
                            key={ image.id } 
                            { ...image }> {/* esparce las imagenes  */}
                                            {/* title={ image.title }
                                            url={ image.url } */}
                        </GifItem>
                    ))
                }
            </div>
            {/* <button onClick={ () => setCounter( counter + 1 ) }>+1</button> */}
        </>
    )
}