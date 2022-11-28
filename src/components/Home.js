import React from 'react'
import { Link } from 'react-router-dom';

const Home = ({ user }) => {

	return (
		<>
			<div className="homepage">
				<h1 className="page-heading">Welcome to the PawSitters!</h1>
				<h3>We are dedicated to making sure pawrents can easily and conveniently connect with our pawsitters to find care for their beloved pets of all shapes and sizes.</h3>
				<img src="https://i.imgur.com/NPgfqZb.jpg" alt="dog"></img>
				<img src="https://i.imgur.com/vF1rrlJ.jpg" alt="cat"></img>
				<img src="https://i.imgur.com/7ofQ8oe.jpg?2" alt="bird"></img>
				<img src="https://i.imgur.com/oxtiQPO.jpg" alt="guinea pig"></img>
				<h5 className="mt-5">Ways to get started:</h5>
				{
					user ?
						<div className='mx-4'>
							<Link to='/petsitters/create' className='btn btn-outline-info mx-1'>Become a Pet Sitter</Link>
							<Link to='/petowners/create' className='btn btn-outline-info mx-1'>Create a Pet Owner Profile</Link>
							<Link to='/petsitters' className='btn btn-outline-info mx-1'>Find Pet Sitters</Link>
						</div>
						:
						<div className='mx-4'>
							<Link to='/sign-up' className='btn btn-outline-info mx-1'>Register a PawSitters Account</Link>
							<Link to='/sign-in' className='btn btn-outline-info mx-1'>Sign Into Your PawSitters Account</Link>
							<Link to='/petsitters' className='btn btn-outline-info mx-1'>Find Pet Sitters</Link>
						</div>
				}
			</div>

		</>
	)
}

export default Home
