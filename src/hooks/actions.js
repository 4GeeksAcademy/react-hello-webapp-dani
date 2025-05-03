import { json } from "react-router-dom";

export const fetchAgenda = async (dispatch, payload) => {
    let response = await fetch(`https://playground.4geeks.com/contact/agendas/dani.mudd9`)
    let data = await response.json();
console.log (data.detail)
    if (data.detail == `Agenda "dani.mudd9" doesn't exist.`) {
        
        createAgenda();
    }
    
    dispatch({
        type:"set_agenda",
        payload: { agenda: data.slug, contacts: data.contacts },
    });
}
export const createAgenda = async (dispatch, payload) => {
    let response = await fetch(`https://playground.4geeks.com/contact/agendas/dani.mudd9`, {
        method: "POST",
        headers: {"content-type": "application/json"}
    })
    let data = await response.json();
    fetchAgenda(dispatch);
}
export const getContacts = async (dispatch, payload) => {
    let response = await fetch(`https://playground.4geeks.com/contact/agendas/dani.mudd9/contacts`)
    let data = await response.json();

    dispatch({
        type:"get_contacts",
        payload: {contacts: data.contacts },
    });
}
export const createContacts = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/dani.mudd9/contacts",{
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({
            "name":payload.name,
            "phone":payload.phone,
            "email":payload.email,
            "address":payload.address,
        })

    })
    getContacts(dispatch);
}
export const updateContacts = async (dispatch, contact) => {
    let response = await fetch(`https://playground.4geeks.com/contact/agendas/dani.mudd9/contacts/${contact.id}`,{
        method: "PUT",
        headers: {"content-type": "application/json"},
        body:JSON.stringify({
            "name":contact.name,
            "phone":contact.phone,
            "email":contact.email,
            "address":contact.address,
        })

    })
    getContacts(dispatch);
}
export const deleteContacts = async (dispatch, id) => {
    let response = await fetch(`https://playground.4geeks.com/contact/agendas/dani.mudd9/contacts/${id}`,{
        method: "DELETE",
        headers: {"content-type": "application/json"},
    })
    if (!response.ok) {
        console.log("delete unsuccessful")
    } else{
        console.log("delete successful")
    }
    getContacts(dispatch);
}

