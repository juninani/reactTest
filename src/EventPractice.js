import React from 'react';
import { useState } from 'react';



const EventPractice = () => {

   const [from, setFrom] = useState({
        userName:'',
        message:''
   });
   const{userName,message}= from;

    const onChange = e =>{

        const nextFrom ={   
            ...from,
            [e.target.name]:e.target.value
        };
        setFrom(nextFrom);
    };

    const onClick = () =>{
        alert(userName + ':' + message);
        setFrom({
            userName : '' ,
            message : ''
        });
    };
    
    const onKeyPress = e => {
        if(e.key ==='Enter'){
            onClick();
        }
    };
    return (
        <div>
        <h1>event exam</h1>
        <input
          type="text"
          name="userName"
          placeholder="이름"
          value={userName}
          onChange={onChange}
        />
        <input
          type="text"
          name="message"
          placeholder="내용"
          value={message}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <button
          onClick={onClick}
        >
          확인
        </button>
      </div>
    );
};

export default EventPractice;