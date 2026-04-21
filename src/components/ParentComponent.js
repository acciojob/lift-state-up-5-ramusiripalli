import React, {useState} from "react";
import LoginForm from './LoginForm'

function ParentComponent(){
const [isLoggedIn,setIsLoggedIn] = useState(false);
const handleLogin = () =>{
  setIsLoggedIn(true);
};

return(
<div>
  <h1>Parent Component</h1>
  {isLoggedIn ? (<p>you are logged in!</p>) : (<LoginForm onLogin={handleLogin} />)}
</div>
);



}



export default ParentComponent;