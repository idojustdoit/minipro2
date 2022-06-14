import React from 'react';
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
// import {useDispatch} from 'react-redux'
// import {loginUser} from "../redux/modules/User.js";

function LogIn() {
    // const dispatch=useDispatch();
    const navigate = useNavigate();
    const id_ref = React.useRef(null);
    const pw_ref = React.useRef(null);

    const [username, setUserName] = React.useState("");
    const [password, setPwd] = React.useState("");

    // const onSubmitHandler = ()=> {

    //     .preventDefault();
        
    //     // console.log("username", username);
    //     // console.log("password", password);
    //     let body = {
    //         "userId": id_ref.current.value,
    //         "password": pw_ref.current.value
    //     }

    //     dispatch(loginUser(body))
    //     .then(response => {
    //         if(response.payload.loginSuccess){
              
    //          navigate('/');
    //         }else{
    //             alert("로그인 정보가 잘못되었습니다!")
    //         }
    //     })
      
    // }
  
 
    const loginAxios= ()=> {
        axios.post('http:// /api/user/login', {
            "userId": id_ref.current.value,
            "password": pw_ref.current.value
        }).then(function(response)  {
            alert("로그인 되었습니다!")
            navigate('/');

            localStorage.setItem('access_token', response.data.token);

            console.log(response)
        }).catch(function(error){
            alert("로그인정보가 틀렸습니다.")
        })
    }

 
    return (
        <div>
      
    <Container>
    
    
    <div> 
            <input   placeholder="아이디를 입력해주세요." 
            onChange={(e) => setUserName(e.target.value)} ref={id_ref}/>    <br/>
            <input type="Password"   placeholder="비밀번호를 입력해주세요." 
            onChange={(e) => setPwd(e.target.value)} ref={pw_ref}/>   <br/>      
      
          
            <Btn1 onClick={loginAxios}> 로그인  </Btn1>
            
            <Btn2 onClick={()=>{navigate('/SignUp')}} > 회원가입</Btn2>
          </div>
    
          
        </Container>
        </div>
    );
}

const Container = styled.div`
background-size: cover;
background-color: ;
width: 400px;
height: 450px;
padding: 50px;
border: 2px solid black;
display: flex;
flex-direction: column;
align-content: flex-start;
float: center;
margin: 40px 20px 40px 20px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

text-align: center;`

const Btn1 = styled.button`
margin: 10px 10px 10px 10px;
`

const Btn2 = styled.button`
margin: 10px 10px 10px 10px;
` ;



export default LogIn