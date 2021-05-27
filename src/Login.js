import React from 'react';
import {useHistory} from "react-router-dom";
import styled from 'styled-components';

const Login = (props) => {
  const history = useHistory();

  return(
  <Container>
     <Nav>
       <a href="/"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqH_q3356fnYA4ylYYBKDK1xod9-pBO3A9z3B-TokG7g0r7JkrVS9rbKqNJ7ttldTY3lU&usqp=CAU"/> </a>
       
       <div>
         <Join onClick = {()=> history.push("/home")}> Join now </Join>
         <SignIn> Sign In   </SignIn>
       </div>
     </Nav>

     <Section>
      <Hero> <h1>welcome to your professional community</h1> 
             <img src="https://cdn1.vectorstock.com/i/thumb-large/17/50/colored-hand-sketch-doctors-vector-10961750.jpg" alt="" />
      </Hero> 

      <Form>
         <Google> <img src="https://cdn.pixabay.com/photo/2015/09/14/22/59/google-plus-940316__340.png" alt= ""/> 
          <h5>Sign-in with Google </h5>
         </Google>
      </Form>
      </Section>
  </Container>
  );
};

const Container = styled.div`
padding: 0px;
`;
const Name = styled.a`
text-decoration: none;
underline: none;
color: red;
background-color: ;
`;

const Nav = styled.nav`
max-width: 1128px;
margin: auto;
padding: 12px 0 16px;
display: flex;
align-items: center;
position: relative;
justify-content: space-between;
flex-wrap: nowrap;

img{
  width: 150px;
  padding: 0;
  margin: 0;

}

  @media(max-width: 768px){
    padding: 0 5px;
  }
}

`;

const Join = styled.a`
border-radius: 3px;
cursor: pointer;
font-size: 16px;
padding: 10px 12px;
text-decoration: none;
color: rgba(0,0,0,0.6);
margin-right: 10px;
&:hover{
  background-color: #eee;
  color: rgba(0,0,0,0.9);
  text-decoration: none;

}
`;

const SignIn = styled.a`
cursor: pointer;
box-shadow: inset 0 0 0 1px #0a66c2;
color: #0a66c2;
border-radius: 24px;
transition-duration: 150ms;
font-size: 16px;
font-weight: 600;
line-height: 40px;
padding: 10px 24px;
background-color: rgba(0,0,0,0);

&:hover{
  background-color: rgba(112,181,249,0.15);
  text-decoration: none;
}
`;

const Section = styled.section`
justify-content: center;
text-align: center;
margin: 40px;

@media(max-width: 768px){
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
 
`;

const Hero = styled.div`
display: flex;
justify-content: space-between;
@media(max-width: 768px){
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

h1{
  width: 50%;
  color: #0a66c2;
}
img{
  width: 500px;
  height: 450px;
  border-radius: 50%;
  @media(max-width: 768px){
    width: 400px;
    height: 380px;
    margin: 20px; 
  }
}
`;
const Form = styled.div`

`;
const Google = styled.button`
display: flex;
align-items: center;
width: 300px;
justify-content: center;
border-radius: 20px;
border: 2px solid #000;
cursor: pointer;
z-index: 1;
&:hover{
  background-color: #a3a3c2;
  border: 2px solid #000;

}

@media(min-width: 768px){
  text-align: center;
  margin-top: -40%;
  width: 200px;
  
}

img{
  width: 30px;
  margin-right: 10px;
  border-radius: 20px;
}
h5{

}
`;

export default Login;
