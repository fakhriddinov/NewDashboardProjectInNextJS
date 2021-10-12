import { getAlbums, getPhotos, getToDos, getUsers } from "../api";
import { SET_ALBUMS, SET_PHOTOS, SET_TODOS, SET_USERS } from "./type";

const setUsers = async (dispatch) => {
    const res = await getUsers();
    console.log(res);
    if (res.success) {
        const action = { type: SET_USERS, payload: res.data };
        dispatch(action);
    }
    else {
        console.log("API dan ma`lumot kelishda xatolik Yoki Net bo`lmaganligi tufayli ishlamayabdi!!!");
    }
}

const setTodos = async (dispatch) => {
    const res = await getToDos();
    if (res.success) {
        const action = { type: SET_TODOS, payload: res.data }
        dispatch(action);
    }
    else {
        alert("API dan ma`lumot kelishda xatolik Yoki Net bo`lmaganligi tufayli ishlamayabdi!!!")
        console.log("API dan ma`lumot kelishda xatolik Yoki Net bo`lmaganligi tufayli ishlamayabdi!!!");
    }
}

const setAlbums = async(dispatch) => {
    const res = await getAlbums();
    if(res.success){
        const action = {type:SET_ALBUMS, payload: res.data}        
       dispatch(action)
    }
    else{
        alert("API dan ma`lumot kelishda xatolik Yoki Net bo`lmaganligi tufayli ishlamayabdi!!!")
        console.log("API dan ma`lumot kelishda xatolik Yoki Net bo`lmaganligi tufayli ishlamayabdi!!!");
    }
}

const setPhotos = async(dispatch)=>{
    const res = await getPhotos();
    if(res.success){
        const action = {type:SET_PHOTOS, payload: res.data}
        dispatch(action)
    }
    else{
        alert("API dan ma`lumot kelishda xatolik Yoki Net bo`lmaganligi tufayli ishlamayabdi!!!")
        console.log("API dan ma`lumot kelishda xatolik Yoki Net bo`lmaganligi tufayli ishlamayabdi!!!");
    }
}

export { setUsers, setTodos, setAlbums, setPhotos}