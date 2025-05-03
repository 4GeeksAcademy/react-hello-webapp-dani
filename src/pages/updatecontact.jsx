import React, {useState, useEffect}from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { updateContacts } from "../hooks/actions.js";


export const UpdateContact = (contact) => {
  const {id} = useParams();
  const [currentContact, setCurrentContact] = useState({name:"", phone:"", email:"", address:"", id:id})
  const {store, dispatch, updateContact, getContacts} = useGlobalReducer()
  const navigate=useNavigate()

  useEffect(() => {
    getContacts()
  }, [])  

//     useEffect(() => {
//       let contact= store.contacts?.filter((contact, index) => {contact.id == id})
//       if (contact.length >0) {
//         setCurrentContact(contact)
//       }

// } ,[store.contacts])

useEffect(() => {
  if (store.contacts.length > 0) {
    const foundContact = store.contacts.find(c => c.id === parseInt(id))
    if (foundContact){
      setCurrentContact(foundContact)
    }
  }
},[store.contacts,id])

const handleUpdateContact = (e) => {
  e.preventDefault();
  updateContacts(dispatch, currentContact);
navigate("/")
}
return (
  <div className="text-center mt-5">
     <div className="input-group mb-3">
       <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
       <input 
       onChange={(e) => setCurrentContact({...currentContact, name: e.target.value})}
       value={currentContact?.name}
       type="text" 
       className="form-control" 
       aria-label="Sizing example input" 
       aria-describedby="inputGroup-sizing-default"/>            
       </div>

      <div className="input-group mb-3">
       <span className="input-group-text" id="inputGroup-sizing-default">Phone</span>
       <input 
       onChange={(e) => setCurrentContact({...currentContact, phone: e.target.value})}
       value={currentContact?.phone}
       type="text" 
       className="form-control" 
       aria-label="Sizing example input" 
       aria-describedby="inputGroup-sizing-default"/>
      </div>

      <div className="input-group mb-3">
       <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
       <input 
       onChange={(e) => setCurrentContact({...currentContact, email: e.target.value})}
       value={currentContact?.email}
       type="text" 
       className="form-control" 
       aria-label="Sizing example input" 
       aria-describedby="inputGroup-sizing-default"/>            
       </div>

      <div className="input-group mb-3">
       <span className="input-group-text" id="inputGroup-sizing-default">Address</span>
       <input 
       onChange={(e) => setCurrentContact({...currentContact, address: e.target.value})}
       value={currentContact?.address}
       type="text" 
       className="form-control" 
       aria-label="Sizing example input" 
       aria-describedby="inputGroup-sizing-default"/>            
       </div>
       <button className="btn btn-success" onClick = {(e) => handleUpdateContact (e)}> Update</button>
  </div>
);
}; 

