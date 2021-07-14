import React from 'react';

class AddContact extends React.Component{
    state={
        name:"",
        email:""
    };
    add =(e)=>{
        e.preventDefault();
        if(this.state.name==="" && this.state.email===""){
            alert("Empty fields! : All of them are mandatory");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});
    }
render(){
    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form"
            onSubmit={this.add}>
                <div className="field">
                    <label>Name</label>
                    <input value={this.state.name}
                    onChange={(e)=> this.setState({name:e.target.value})}
                    type="text" name="name" placeholder="Name"/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input value={this.state.email}
                    onChange={(e)=> this.setState({email:e.target.value})}
                  
                    type="email" name="email" placeholder="Email"/>
                </div>
                <button className="ui button">Add</button>
            </form>
        </div>
    );
}
}
export default AddContact;