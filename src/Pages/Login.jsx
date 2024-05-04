import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import { useState,useEffect } from 'react';
  import { signInWithPopup, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";
  import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
function Login() {

const location=useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState({})


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      if (result) {

        const {displayName, email} = result
        setUserData({ displayName, email })

        setIsLoggedIn(true)
       
        
      } else {
        setIsLoggedIn(false)
      }

    })

    return () => unsubscribe();
  },[])
  
  const SignUpUsingGoogle = () => {

    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {

        const { displayName, email } = result.user;
        setUserData({ displayName, email })

        setIsLoggedIn(true)
        if(isLoggedIn==true){
        
            location('/todo');
          
        }
      }).catch((error) => {

        console.log({ error });

      });
   
  }
  return (
    <div>
    <div className="row">

    <div className="col-lg-6 mt-5">
   

<div className='text-center p-5 mt-5'>
<h3> <b>LOGIN</b></h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium itaque sequi quis, tenetur nisi ipsum explicabo at, vitae cumque delectus tempora illo voluptatum dolorum vero perspiciatis eveniet ut aliquid?</p>
<MDBBtn onClick={SignUpUsingGoogle } className='p-3'> <img src="https://cdn-teams-slug.flaticon.com/google.jpg" style={{height:"30px"}} alt="" srcset="" /> Sign in using Google</MDBBtn>
</div>
            
            
            
            
            
            
            
            
            </div>



        <div className="col-lg-6   text-center">

            <img src="https://img.freepik.com/premium-vector/businesswoman-working-computer_165488-1801.jpg" alt="" srcset="" />
        </div>
      
            </div>    
    

    </div>
  )
}

export default Login