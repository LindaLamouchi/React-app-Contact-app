import React from 'react';
import ContactCard from './ContactCard';

const ContactList=(props)=>{
    console.log(props)
    const removeContactHandler=(id)=>{
        props.getContactId(id);
    };
    const renderContactList = props.contacts.map((contact)=>{
            return(
         <ContactCard contact={contact} clickHandler={removeContactHandler} key={contact.id}/>
            );
    }) ;
    return (
        <div className="ui celled list">
                Contact List <br></br>
                {renderContactList}
        </div>
    );
}
export default ContactList;