
import axios from 'axios';

export const  allContactsApi = async ()=>{
    const result = await axios.get('https://64231374001cb9fc20378b18.mockapi.io/contacts')
    return result.data
}

export const  addContactApi = async (contact)=>{
    const result = await axios.post('https://64231374001cb9fc20378b18.mockapi.io/contacts', contact)
    return result.data
}



export const  deleteContactApi = async (id)=>{
    const result = await axios.delete(`https://64231374001cb9fc20378b18.mockapi.io/contacts/${id}`)
    return result.data
}
