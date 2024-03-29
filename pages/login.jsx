import axios from 'axios';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
export default function login() {
  const [isButtonLoading, setIsButtonLoading] = React.useState(false);
  const [username, setUsername] = useState()
  const [err, setErr] = useState()
  const [succ, setSucc] = useState()
  const [password, setPassword] = useState()
  const router = useRouter()
  const handleSignInWithGoogle = () => {
    signIn("google");
  };
  const session = useSession()
  console.log(session)
  async function handleSubmit() {
    const values = {
      username: username,
      password: password
    }
    await axios.post("http://localhost:5000/login", values).then(() => setSucc("Successfully Logged in"), setErr(), router.push('/')).catch((error) => setErr(error.message), setSucc(null))

  }
  return (
    <>
      <div className="font-ibm font-bold text-2xl mx-auto w-11/12 uppercase py-2  my-6 flex flex-col gap-2">

        {
          session.status === 'authenticated' ?
            <div className='flex text-2xl normal-case font-normal flex-col gap-5 items-center'>
              <div><img className='rounded-full' src={session.data.user.image} /></div>
              <div>Full Name : {session.data.user.name}</div>
              <div>Email : {session.data.user.email}</div>
              <div></div>
              <button className='px-4 rounded-full bg-white  text-black py-2' onClick={() => signOut()}>Sign Out</button>
            </div>
            :
            <button className='px-4   rounded-full bg-white w-fit text-black py-2' onClick={handleSignInWithGoogle}>Sign in with Google</button>
        }</div>
    </>
  );
}
