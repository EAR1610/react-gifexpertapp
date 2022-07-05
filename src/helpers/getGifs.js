
export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=20&api_key=0EOLLchXesl8QDuAeW3YU5CBYDC7PeeQ`;
    const response = await fetch( url );
    const { data } = await response.json();
    const gifs = data.map( img => {
        const {id, title, images} = img;
        return {
            id : id,
            title : title,
            url : images?.downsized_medium.url
        }
    } )
    return gifs;
}