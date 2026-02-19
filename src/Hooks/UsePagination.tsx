import  { useState } from 'react'

const UsePagination = (itemsPerPage:number,total:number) => {
  const [page,setPage]=useState(0);
const max=Math.ceil(total/itemsPerPage);

const nextPage=()=>{
  if(page<max) setPage((p)=>p+1)
}
const prevPage=()=>{
  if(page>0) setPage((p)=>p-1)
}
  return {
    page,prevPage,nextPage
  }
}

export default UsePagination