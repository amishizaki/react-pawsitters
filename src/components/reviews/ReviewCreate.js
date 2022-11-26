import React, { useState }from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ReviewForm from '../shared/ReviewForm'
import { reviewCreate} from '../../api/review'
import { useIsRTL } from 'react-bootstrap/esm/ThemeProvider';


const ReviewCreate = (props) => {
    const {
        user, petSitter, msgAlert, triggerRefresh
    } = props
    
    
    
    const [review, setReview] = useState({
        comment: '',
        rating: '',
        image: '',
        pet_sitter: '',
        pet_owner: '',
        
        
    })
    
    // These states are to clear the image data from the review form after a review submit
    // They are set here and then used as props in CloudinaryUploadWidget.js, ReviewForm.js, and ReviewEdit.js
    // Shoutout to Timm and Aisha for helping with this tricky part
    const [picture, setPicture] = useState('')
    const [imageSelected, setImageSelected] = useState('')
    
    // sets the new values for a new review
    const handleChange = (e) => {
        setReview(prevReview => {
            const name = e.target.name 
            let value = e.target.value
            const updatedReview = { [name]: value }
            return {
                ...prevReview, ...updatedReview
            }
        })
    }
    const handleImageChange = (image) => {
        setReview(prevReview => {
            const name = 'image'
            const updatedReview = {[name]: image}
            return {
                ...prevReview, ...updatedReview
            }
        })
    } 
    
    
    const handleSubmit = (e) => {
        console.log('this is petsitter', petSitter)
        // const pet_sitter = petSitter
        e.preventDefault()
        let updatedReview = review
        updatedReview.ownerEmail = user.email
        let anotherUpdate = review
        anotherUpdate.pet_sitter = petSitter.owner
        let reviewUpdate = review 
        reviewUpdate.pet_owner = user.id
        
        setReview({
            comment: '',
            rating: '',
            image: '',
            pet_sitter: '',
            pet_owner: '',
           
        })
        console.log('create a review', review)

        reviewCreate(user, petSitter.owner, updatedReview)
            .then(() => {
                msgAlert({
                    heading: 'Thanks!',
                    message: 'We appreciate you taking the time to review this pet sitter!',
                    variant: 'success'
                })
            })
            // sets the image preview back to an empty string
            .then(() => {
                setPicture('')
                setImageSelected('')
            })
            .then(() => triggerRefresh())
            .catch(() => {
                msgAlert({
                    heading: 'Oh No!',
                    message: 'Something went wrong! Please try again',
                    variant: 'danger'
                })
            })
    }

    return (

        <Accordion>
            <Accordion.Item style={{ backgroundColor: '#f2f6ec' }} eventKey="0">
                <Accordion.Header>Add a Review</Accordion.Header>
                <Accordion.Body style={{ backgroundColor: '#f2f6ec' }}>
                    <ReviewForm
                        imageSelected={imageSelected}
                        setImageSelected={setImageSelected}
                        picture={picture}
                        setPicture={setPicture}
                        review={review}
                        handleChange={handleChange}
                        handleImageChange={handleImageChange}
                        handleSubmit={handleSubmit}
                        heading="Add a review for this pet sitter"
                    />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

    )
}

export default ReviewCreate
