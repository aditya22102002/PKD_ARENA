import { toast } from "react-toastify";

export const handleSuccess=(msg)=>{
    toast.success(msg,{
        position:'bottom-right',
        autoClose:2000,
    })
}

export const handleError=(msg)=>{
    toast.error(msg,{
        position:'bottom-right'
    })
}

export const handleSuccess2=(msg)=>{
    toast.success(msg,{
        position:'bottom-center',
        autoClose:2000,
    })
}