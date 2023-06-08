import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/UserSlice";
import { styled } from "styled-components";

export const DeleteAllUser = () => {
 const dispatch = useDispatch();
  const deleteAll=()=>{
    dispatch(deleteUsers())
  }

  return <Wrapper>
  <button className="Clear-btn" onClick={() => deleteAll()}>Remove All</button>
  </Wrapper>
};
const Wrapper=styled.section`
.Clear-btn{
  text-transform: capitalize;
  background-color:#4F9DEE;
  margin-top: 2rem;
  color: white;
  font-size: larger;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  
    border: none;
}
`


