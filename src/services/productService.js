export async function getProductList(searchTerm){
    try{
        const response = await fetch(`${process.env.REACT_APP_HOST}/444/products?name_like=${searchTerm ? searchTerm : ""}`);
        if(!response.ok){
            throw { message: response.statusText, status: response.status }; //eslint-disable-line
        }
        const data = await response.json()
        return data;
        
    } catch(err){
        console.error("Fetch failed:", err.message || err);
    }
}

export async function getProduct(id){
    try{
        const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
        if(!response.ok){
            throw { message: response.statusText, status: response.status }; //eslint-disable-line
        }
        const data = await response.json()
        return data;

    } catch(err){
        console.error("Fetch failed:", err.message || err);
    }
}

export async function getFeaturedList(){
    try{
        const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
        if(!response.ok){
            throw { message: response.statusText, status: response.status }; //eslint-disable-line
        }
        const data = await response.json()
        return data;

    } catch(err){
        console.error("Fetch failed:", err.message || err);
    }
}