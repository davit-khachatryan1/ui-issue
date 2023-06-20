import React from "react";

export const MenuButton: React.FC<{
  active?:boolean
  className?: string;
  onClick?: () => void;
  reference?: any;
}> = ({active, className, onClick, reference }) => {
  
  
  return(
    <button onClick={onClick} className={className} type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        {active ? <i ref={reference} className="fa-solid fa-xmark t-menu"></i> :  <i className="fa-solid fa-bars t-menu"></i>}
    </button>
  );
};

export default MenuButton;
