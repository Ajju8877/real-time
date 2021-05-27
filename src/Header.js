import React from "react";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import WorkIcon from '@material-ui/icons/Work';
import ComputerSharpIcon from '@material-ui/icons/ComputerSharp';
import LocalConvenienceStoreSharpIcon from '@material-ui/icons/LocalConvenienceStoreSharp';

export default function Header(){
 const history = useHistory();
 return(
   <Container>
       <Content> <Logo>  
                   <a href="/"> <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqH_q3356fnYA4ylYYBKDK1xod9-pBO3A9z3B-TokG7g0r7JkrVS9rbKqNJ7ttldTY3lU&usqp=CAU" alt=""/> </a>         
                </Logo> 
                <Search>
                  <div>
                   <input type="text" placeholder="search"/>
                  </div>
                  <SearchIcon>
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR3XoM3533zkDJQUH1eqc4X3wQaBQ9GMewEQ&usqp=CAU" alt=""/>
                  </SearchIcon>
                </Search>
                <Nav>
                <NavlistWrap>
                  <NavList>
                     <a onClick = {()=> history.push('./home')}>
                      <HomeIcon/>
                      <span> Home </span>
                     </a>
                   </NavList>  

                   <NavList>
                      <a>
                      <LocalConvenienceStoreSharpIcon/>
                      <span> Store </span>
                     </a>
                    </NavList>

                    <NavList>
                      <a onClick = {()=> history.push('./monitor')}>
                      <ComputerSharpIcon/>
                      <span> Monitor </span>
                     </a>
                    </NavList>

                    <NavList>
                      <a>
                      <NotificationsIcon/>
                      <span> Notifications </span>
                     </a>
                     </NavList>

                     <NavList>
                      <a>
                      <WorkIcon/>
                      <span> Carrier </span>
                     </a>
                  </NavList>


                </NavlistWrap>
                </Nav>
      </Content>
   </Container>
 );
}

const Container =styled.div`
background-color: #fff;
border-bottom: 1px solid rgba(0,0,0,0.08);
left: 0;
position: fixed;
padding: 0 24px;
top: 0;
width: 100vw;
z-index: 100;
`;

const Content =styled.div`
display: flex;
align-items: center;
min-height: 100%;
max-width: 1128px;
`;
const Logo = styled.span`
margin-right: 8px;


img{
width: 40px;
height: 30px;
padding-top: 3px;
}
`;

const Search = styled.div`
align-items: center;
flex-glow:1;
opacity: 1;

& > div{
 max-width: 280px;
input{
 border: none;
 box-shadow: none;
 background-color: #eef3f8;
 border-radius: 2px;
 color: rgba(0,0,0,0.9);
 width: 218px;
 padding: 0 8px 0 40px;
 line-height: 1.75;
 font-weight: 400;
 font-size: 14px;
 height: 34px;
 verticle-align: text-top;
 outline: none;
 &: focus{
   border: 1px solid #ccc;
   border-radius: 3px;
 }

}
}
`;

const SearchIcon = styled.div`
padding-left: 10px;
img{
 width: 25px;
 position: absolute;
 z-index: 1;
 top: 5px;
 border-radius: 0 2px 2px 0;
 margin: 0;
 display: flex;
 justify-content: center;
}
`;
const Nav = styled.div`
margin-left: auto;
margin-right: 50px;
display: block;
@media(max-width: 768px){
  position: fixed;
  left: 0;
  bottom: 0;
  background: white;
  width: 100%;
  border-top: 1px solid #ccc;
}
`;

const NavlistWrap = styled.ul`
display: flex;
justify-content: space-around;
`;

const NavList = styled.li`
display: flex;
align-items: center;

a{
  align-items: center;
  background: transperant;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: 400;
  justify-content: center;
  line-height: 1.5;
  min-height: 42px;
  min-width: 80px;
  position: relative;
  text-decoration: none;
  color: #444;
  cursor: pointer;

}
span{
  color: #000;
}
`;