let firstFocusableKey:string|null=null;

export const setFirstFocusable=(key:string)=>{
    firstFocusableKey=key;
}

export const getFirstFocusable=()=>firstFocusableKey;