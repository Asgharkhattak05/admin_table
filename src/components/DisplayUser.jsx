import { useDispatch, useSelector } from "react-redux"
import { styled } from "styled-components"
import { BsFillTrash3Fill } from "react-icons/bs";
import { removeUser } from "../store/slices/UserSlice";




const DisplayUser =()=>{
    const dispatch=useDispatch();
  
    const data=useSelector((state)=>{
       return state.users;        
    })
    console.log(data)
      
    const deleteUser =(id)=>{
        dispatch(removeUser(id))
    }

    return<Wrapper>
        {
           data.map((users, id)=>{
             return <li key={id} >
                {users}
                <button className=" delete-btn">
                <BsFillTrash3Fill onClick={()=> deleteUser(id)} />
                </button>
             </li>
           })
        }
    </Wrapper>

    }
const Wrapper = styled.section`
li{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:first-child{
        border-top: 1px solid #eee;
    }
}
button{
  font-size: x-large;
  cursor: pointer;
}
` 
export default DisplayUser;