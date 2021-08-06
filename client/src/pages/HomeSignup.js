
// NOTE TO TEAM: ADD_USER FUNCTION IS DEFINED IN HOMESIGNUP.JS

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import '../App.css';

import HeaderHome from '../components/HeaderHome';
import Navbar from '../components/Navbar';

const Signup = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '', username: '' });
  const [addUser] = useMutation(ADD_USER);

  // set state for alert - CSS NOTE: CREATE A MODAL FOR ALERT
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          username: formState.username,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });
      // using the token created log the user in
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }
    // clear form values
    setFormState({
      email: '',
      password: '',
      username: '',
      firstName: '',
      lastName: '',
    });
    window.location.assign('/me');
  };

  return (
    <>
      <div className="flex flex-row mx-20">
      
        <HeaderHome />
        
        <div className="flex flex-col w-1/3 bg-green-200 justify-start pb-8 rounded  bg-wYellow">

        <Navbar />

          <div className="flex flex-col">

            <h2 className="flex justify-center mr-8 font-mono text-xl">Sign up</h2>

            <form className="flex flex-col justify-center" onSubmit={handleFormSubmit}>
              {/* <div dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            Something went wrong with your signup!
           </div> */}
              <div className="flex flex-col ml-10 font-mono bg-">
                <label className="font-mono"
                  htmlFor="firstName">First Name:</label>
                <input
                  className="font-mono appearance-none border rounded w-3/4 py-2 px-3 text grey-300 leading-tight focus:outline-none focus:shadow-outline ml-2"
                  placeholder="First"
                  name="firstName"
                  type="text"
                  id="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col space-between ml-10">
                <label className="font-mono" htmlFor="lastName">Last Name:</label>
                <input
                  className="shadow appearance-none border rounded w-3/4 py-2 px-3 text grey-300 leading-tight focus:outline-none focus:shadow-outline ml-2"
                  placeholder="Last"
                  name="lastName"
                  type="text"
                  id="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col space-between ml-10">
                <label className="font-mono" htmlFor="username">Username:</label>
                <input
                  className="shadow appearance-none border rounded w-3/4 py-2 px-3 text grey-300 leading-tight focus:outline-none focus:shadow-outline ml-2"
                  placeholder="Username"
                  name="username"
                  type="text"
                  id="username"
                  value={formState.username}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col space-between ml-10">
                <label className="font-mono" htmlFor="email">Email:</label>
                <input
                  className="shadow appearance-none border rounded w-3/4 py-2 px-3 text grey-300 leading-tight focus:outline-none focus:shadow-outline ml-2"
                  placeholder="youremail@test.com"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col space-between ml-10">
                <label className="font-mono" htmlFor="pwd">Password:</label>
                <input
                  className="shadow appearance-none border rounded w-3/4 py-2 px-3 text grey-300 leading-tight focus:outline-none focus:shadow-outline ml-2"
                  placeholder="******"
                  name="password"
                  type="password"
                  id="pwd"
                  value={formState.password}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-center pt-8">
                <button className="flex justify-center bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;
