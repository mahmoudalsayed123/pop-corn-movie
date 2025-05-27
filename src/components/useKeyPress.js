import { useEffect } from "react";

export function useKeyPress(key,action) {
    useEffect(function () {
        function callback(e) {
        if(e.code.toLowerCase() === key.toLowerCase()) {
            action()
        }
        }
        document.addEventListener("keydown",callback);

        return function () {
        document.removeEventListener("keydown",callback);
        }
    },[action,key])

    // useEffect(function () {
    //     inputSearch.current.focus();
    //     function callback(e) {
    //         if(e.code === "Enter") {
    //         if(document.activeElement === inputSearch.current) return;
    //         inputSearch.current.focus();
    //         }
    //     }
    //     document.addEventListener("keydown",callback);

    //     return function () {
    //         document.removeEventListener("keydown",callback);
    //     }
    //     },[])
}