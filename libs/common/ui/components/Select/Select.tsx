import React, { useState, useRef } from "react";
import styles from "./Select.module.scss";
import cl from "classnames";
export const Select = ({options, val} : {options : any, val: any}) => { 

   const [open, setOpen] = useState<boolean>(false);
   const [value, setValue] = useState(val);
   const select = useRef<HTMLButtonElement>(null);

   
   function handleClickOption (event : any) {
      setValue(event.target.dataset.value);
      setOpen(false);
   }

   React.useEffect(() => {
      if (open) {
         document.addEventListener('click', closeSelectMouse);
         document.addEventListener('keydown', closeSelectKey);
      }
   }, [open]);


   function closeSelectMouse(e: any) {
      if (e.target !== select.current) {
         closeSelect();      
      }
   }   

   function closeSelectKey(e : any) {
      if (e.key === 'Tab' || e.key === 'Escape') {
			closeSelect();
		}
   }

   function closeSelect() {
      setOpen(false);  
      document.removeEventListener('click', closeSelectMouse);       
      document.removeEventListener('keydown', closeSelectKey); 
   }
  

   return (
      <div className={styles.dropdown}>
         <button ref={select} className={styles.dropdown__button} type="button" onClick={() => setOpen(!open)}>{options[value]}</button>
         <ul className={cl(
            styles.dropdown__list,
            open && styles["dropdown__list--visible"]
            )} >
            {options.map((item : string, i : number) => {
               return <li key={i} className={styles["dropdown__list-item"]} data-value={i} onClick={handleClickOption}>{ item }</li>            
            }) 
            }  
         </ul>         
      </div>
   );
};

export default Select;
