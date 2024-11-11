export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=UtsEvlzTAZXCSjbnRauT5J3hIs09Gsqz&q=${ category }&limit=6`
    const resp = await fetch(url);
    const { data } = await resp.json();
    //aun no hay datos en el array async await
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    console.log(gifs);
    return gifs;
}