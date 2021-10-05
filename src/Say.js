import React,{ useState } from "react";


const Say = () => {
    const [message,setMessege] = useState('');
    const onClickEnter =() => setMessege('입장');
    const onClickLeave = () => setMessege('퇴장');
    
    return (
        <div>
          <button onClick={onClickEnter}>입장</button>  
          <button onClick={onClickLeave}>퇴장</button>
          <h1>{message}</h1>
        </div>
    );
};

export default Say;