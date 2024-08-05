import React from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";

const useMedia = (media) => {

    const [match, setMatch] = React.useState(null);

    React.useEffect(()=>{
        function changeMatch() {
            const {matches} = window.matchMedia(media);
            setMatch(matches);
        }
        changeMatch();
        window.addEventListener('resize',changeMatch);
        return () => {
            window.removeEventListener('resize',changeMatch);
        }
    },[media]);

    return match;
}

export default useMedia;
