import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Label, TextInput, Button } from 'flowbite-react';
export default function SignOut() {
  const [formData, setFormData] = useState({});
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.log('Erro In Sign Up');
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Satish
            </span>
          </Link>
          <p className="text-sm mt-5">Satish...But Some Back Ground..</p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
            <div>
              <Label value="User Name" />
              <TextInput
                type="text"
                placeholder="User Name"
                id="username"
                onChange={handleOnChange}
              />
            </div>

            <div>
              <Label value="Email" />
              <TextInput
                type="text"
                placeholder="Email"
                id="email"
                onChange={handleOnChange}
              />
            </div>

            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleOnChange}
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <span>
            Have an account ?{' '}
            <Link to="/sign-in" className="text-blue-500 text-sm">
              Sign In
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
