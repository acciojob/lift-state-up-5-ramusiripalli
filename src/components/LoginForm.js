import React,{useState} from "react";

function LoginForm({onLogin}){
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={userName} placeholder="Name" onChange={(e)=> setUserName(e.target.value)} />
      </div>

      <br />

      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
      </div>

      <br />

      <button type="submit">Login</button>

    </form>
  )
}


export default LoginForm;