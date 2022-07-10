import React from "react";

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef= React.createRef();
    statusRef= React.createRef();
    descRef= React.createRef();
    imageRef= React.createRef();

    createFish= (event) => {
        // stop the form from submitting
        event.preventDefault();
        const fish ={
            nameRef: this.nameRef.current.value,
            priceRef:parseFloat(this.priceRef.current.value),
            statusRef:this.statusRef.current.value,
            descRef:this.descRef.current.value,
            imageRef:this.imageRef.current.value,
        }
        this.props.addFish(fish);
        // reset form
        console.log(event.target.reset());
        // this.event.currentTarget.reset()


    }

  render() {
    return (
      <form class-name="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
        <select name="status" ref={this.statusRef}>
            <option value="available">Fresh!!</option>
            <option value="unavailable">Sold Out</option>
        </select>
        <textarea name="desc" ref={this.descRef} type="text" placeholder="Desc" />
        <input name="image"ref={this.imageRef} type="text" placeholder="Image" />
        <button>+Add Fish</button>
        <button onClick={this.props.loadSampleFishes}>Load Sample Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
