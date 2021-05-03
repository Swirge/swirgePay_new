import { useState } from "react"


export const GetValues = ()=>{
    const [values, setValues] = useState();

    const getElement = (parent)=>{
        setInterval(() => {
            const element = document.querySelector(`.${parent}`);
            if(element.children.length > 0){
                const price = element.children[0].children[0].children[1].children[2].children[0].textContent;
                const mCap = element.children[0].children[1].children[1].children[2].textContent.split(' ')[0];
                const volume = element.children[0].children[1].children[2].children[2].textContent.split(' ')[0];
                const rank = element.children[0].children[1].children[0].children[2].textContent.split(' ')[0];
                const percentage = element.children[0].children[0].children[1].children[2].children[2].textContent
                console.log();
                
                setValues({
                   price, mCap, volume, rank , percentage
                })
            }
        }, 1000);
    }

    return {
        values,
        getElement
    }
}