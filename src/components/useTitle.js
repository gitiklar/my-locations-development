import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTitle } from '../redux/actions';

const useTitle = (title) => {
    const dispatch =  useDispatch();
    useEffect(()=>{
        dispatch(updateTitle(title));
        return (()=>{
            dispatch(updateTitle(''));
        });
    },[]);
}

export default useTitle;