import { useEffect, useState } from "react";

export function useLocalStorage(intialState,key) {
    
    const [value,setValue] = useState(function() {
        const valueStored = localStorage.getItem(key);
        return valueStored ? JSON.parse(valueStored) : intialState;
    });

    useEffect(function () {
        localStorage.setItem('watched',JSON.stringify(value))
    },[value])

    return [value, setValue]
}