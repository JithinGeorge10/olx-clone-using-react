import React, { useState, useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { uploadImages } from '../../utils/firestore';
import { AuthContext } from '../authContext';
import { useNavigate } from 'react-router-dom';


const Create = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [name, SetName] = useState('')
    const [category, SetCategory] = useState('')
    const [price, SetPrice] = useState('')
    const [image, SetImage] = useState(null)

    const handleSubmit = async () => {
        console.log('submitClicked');
        await uploadImages(image, category, price, user,name)
        navigate('/')
    }

    return (
        <>
            <Header />

            <div className="centerDiv">
                <label htmlFor="fname">Name</label>
                <br />
                <input
                    className="input"
                    type="text"
                    id="fname"
                    name="Name"
                    value={name}
                    onChange={(e) => SetName(e.target.value)}
                />
                <br />
                <label htmlFor="fname">Category</label>
                <br />
                <input
                    className="input"
                    type="text"
                    id="fname"
                    name="category"
                    value={category}
                    onChange={(e) => SetCategory(e.target.value)}
                />
                <br />
                <label htmlFor="fname">Price</label>
                <br />
                <input className="input" type="number" id="fname" name="Price" value={price} onChange={(e) => SetPrice(e.target.value)} />
                <br />

                <br />
                <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>

                <br />
                <input onChange={(e) => {
                    SetImage(e.target.files[0])
                }} type="file" />
                <br />
                <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
            </div>

        </>
    );
};

export default Create;
