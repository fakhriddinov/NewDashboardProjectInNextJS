import axios from "axios";


export const getUsers = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        return { success: true, data: res.data }
    } catch (error) {
        console.error(error);
        return { success: false };

    }
}


export const getToDos = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=20`);
        return { success: true, data: res.data }
    } catch (error) {
        console.error("TODOSDA XATOLIK YUZ BERDI");
        return { success: false };
    }
}


export const getAlbums = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/albums?_limit=21`);
        return { success: true, data: res.data }
    } catch (error) {
        console.error("ALBUMSDA XATOLIK YUZ BERDI");
        return { success: false }
    }
}

export const  getPhotos = async () => {
      try {
          const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=21`)
          return {success:true, data: res.data}
      } catch (error) {
        console.error("PHOTOSDA XATOLIK YUZ BERDI");    
        return {success:false}          
      }   
}