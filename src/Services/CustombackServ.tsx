// /* eslint-disable no-constant-binary-expression */
// /* eslint-disable valid-typeof */
// /* eslint-disable @typescript-eslint/no-explicit-any */

// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";


// const CustombackServ = () => {
//     const navigate=useNavigate();
//     useEffect(()=>{
//          const tizenObj=(window as any)['tizen'];
//          const handleKeyDown=(event:KeyboardEvent)=>{
//                  if(event.keyCode==10009){
//                     event.preventDefault();
//                   if(window.history.length>1)
//     navigate(-1)
// else{
    
//     if(tizenObj){
//         tizenObj.application.getCurrentApplication().exit();
//     }
// }
//             }
//          }
//          return()=>{
//                 if(tizenObj){
//             document.removeEventListener("keydown",handleKeyDown)
//          }
//         }
//     },[navigate])
   
   
  
// //   return (
// //     <div>

// //     </div>
// //   )
// }

// export default CustombackServ