import React from 'react'

type Props = {
    backgroundColor:string,
    color:string,
    size:"sm" | "md" | "lg",
    lable:string,
    fun:Function
}

export default function AppButton({lable="primary",backgroundColor="cornflowerblue",color="white",size="lg",fun}: Props) {
    let btnSize={}
    if(size=="sm"){
        btnSize={
            width:"20%",
            padding:"1%"
        }
    }
    if(size=="md"){
        btnSize={
            width:"40%",
            padding:"2%"
        }
    }
    if(size=="lg"){
        btnSize={
            width:"60%",
            padding:"3%"
        }
    }

    const Style={
        backgroundColor:backgroundColor,
        color:color,
        ...btnSize,
        borderColor:"transparent",
        borderRadius:"0.4rem",
        cursor:"pointer"
    }
  return (
    <button style={Style} onClick={()=>fun()}>{lable}</button>
  )
}