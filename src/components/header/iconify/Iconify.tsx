import {Icon} from "@iconify/react"
interface IconifyProps {
    icon:string,
    color?:string,
    className?:string,
    height?:number,
    width?:number,
    backgroundColor?:string
}
export const Iconify=({icon,color,className,height,width,backgroundColor}:IconifyProps)=>{
    return <Icon className={className} icon={icon} width={width??21} height={height??20} color={color??"#000"} 
    style={{backgroundColor:backgroundColor}}
    />
}