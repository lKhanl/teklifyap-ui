
import { useState } from "react";
const De2 = (props) => {

    const [title,setTitle] = useState(props.title);
    
    const clickHandler = () =>{
        setTitle('updated');
    }
  return (
 <div>
      <button onClick={clickHandler} className='btn btn-primary'>{title}</button>
      </div>
  );
};

export default De2;
