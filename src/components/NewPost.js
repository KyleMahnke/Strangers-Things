import React, { useState } from "react";

function NewPost(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [willDeliver, setWillDeliver] = useState("");

    function handleTitle(event) {
        setTitle(event.target.value);
    }

    function handleDescription(event) {
        setDescription(event.target.value);
    }

    function handlePrice(event) {
        setPrice(event.target.value);
    }

    function handleLocation(event) {
        setLocation(event.target.value);
    }

    function handleWillDeliever(event) {
        setWillDeliver(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch('https://strangers-things.herokuapp.com/api/2109-lsu-web-ft/posts', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              //'Authorization': 'Bearer TOKEN_STRING_HERE'
            },
            body: JSON.stringify({
              post: {
                title: "",
                description: "",
                price: "",
                willDeliver: false
              }
            })
          }).then(response => response.json())
            .then(result => {
              console.log(result);
            })
            .catch(console.error);
    }
    //title (string)
    //description (string)
    //price (string)
    //location (string)
    //willDeliver (boolean)
    
    //submit button (fetch request)

    return (
        <form>
            <label>
                Title:
                <input 
                required
                type="text" 
                title="title"
                value={title}
                onChange={handleTitle}
                minLength="3"
                placeholder="Title your post" 
                />
            </label>
            <label>
                Description:
                <input
                required
                type="text"
                title="description"
                value={description}
                onChange={handleDescription}
                minLength="10"
                placeholder="Describe your item"
                />
            </label>
            <label>
                Price:
                <input
                required
                type="text"
                title="price"
                value={price}
                onChange={handlePrice}
                minLength="1"
                placeholder="Enter the price of your item (USD)"
                />
            </label>
            <label>
                Location:
                <input 
                required
                type="text" 
                title="location"
                value={location}
                onChange={handleLocation}
                minLength="1"
                placeholder="Location of your item" 
                />
            </label>
            <label>
                Will Deliver:
                <input
                />
            </label>
            
        </form>
    );
}

export default NewPost;