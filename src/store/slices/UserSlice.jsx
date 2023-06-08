import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
   
        name: "user",
        initialState: [] ,
        reducers: {
            addUser(state, action){
            state.push(action.payload)
            console.log(action.payload);
            },
            removeUser(state, action){
                // console.log("hiii" + action.payload)
                // state.pop(action.payload)
                state.splice(action.payload,1)
            },
            deleteUsers(state, action){
                state.splice(action.payload)
            },
        
    }
});
export default UserSlice;
export const {addUser ,removeUser, deleteUsers}=UserSlice.actions;