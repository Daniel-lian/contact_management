import React from "react"

class AddContact extends React.Component {
    state = {
        id: Date.now(),
        name: '',
        email: '',
    };


    render (){

        const add = (event) => {
            event.preventDefault();

            if (this.state.name === '' || this.state.email === '') {
                alert('Write something!');
                return
            }
            this.props.AddHandler(this.state)
            this.setState({name:'', email:''})
        }

        return (
            <form onSubmit={add}>
                <div>
                    <h2>Name</h2>
                    <input type={'text'} placeholder='Name' value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                </div>
                <div>
                    <h2>Email</h2>
                    <input type={'text'} placeholder='email' value={this.state.email} onChange={(event) => this.setState({email: event.target.value})}/>
                </div>
                <input type={'submit'} value='Add' id="s_button" />
            </form>
    );}
}

export default AddContact;