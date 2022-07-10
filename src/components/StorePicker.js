import React from 'react';
import {getFunName} from '../helpers'


class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = (event) => {
        //1. stop the form from submitting
        event.preventDefault();
        //2. get the input value
        const storename = this.myInput.current.defaultValue;
        //3. goTo the required page
        this.props.history.push(`/store/${storename}`);

    } 
    render() {
        return (
            <>{/* React.Fragment. No comments or elements above Fragment*/}
            <form className='store-selector' onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input ref={this.myInput} type='text'required placeholder="StoreName" defaultValue={getFunName()}></input>
                <button type="submit">Visit Store</button>   
            </form>     
            </>
        )
        
    }
}

export default StorePicker;