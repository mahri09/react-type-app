import React from "react";

interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode;
  }

export const Child = ({color, onClick}: ChildProps) => {
    return <div> {color}
        <button onClick={onClick}>Click me</button>
    </div>
}

// Child.displayName wont work cause typescipt does not know react

export const ChildAsFC: React.FC<ChildProps> = ({color, onClick, children}) =>{
    return <div>{color}
            <button onClick={onClick}>Click me</button>
            {children}
    </div>;
}

// React.FC<ChildProps> this tells typescript this react function component so default proptypes or so on will work with ts

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
ChildAsFC.displayName;