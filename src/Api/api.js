import { HeaderTitle } from "@react-navigation/stack";


const apiImage = async () => {
    const endpoint = "https://jsonplaceholder.typicode.com/photos";
  
    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
}

export default apiImage;