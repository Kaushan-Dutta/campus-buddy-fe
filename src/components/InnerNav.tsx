import React, { ReactNode } from 'react'

type Element={
    name: string,
    component:ReactNode
}
interface ClassElementProps {
    data: Element[];
}
const InnerNav:React.FC<ClassElementProps> = ({data}) => {
if (!Array.isArray(data)) {
        return null; 
   }
    return (
    <div>

    </div>
  )
}

export default InnerNav