'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import './Signup.css';

export default function Signin() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-yellow-50 flex items-center justify-center font-sans">
      <div className="flex max-w-3xl bg-white w-full rounded-lg overflow-hidden border border-gray-300 shadow-md scale-95">

        {/* Left Section */}
        <div className="left-pane w-1/2 p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 leading-snug">
            <span>Right </span>
            <span className="left-text bg-clip-text text-transparent">Voices to </span><br />
            <span className="left-text bg-clip-text text-transparent">Amplify</span>
            <span> Your </span><br />
            <span>Brand!</span>
          </h2>

          <p className="text-xs text-gray-500 mt-2">Join the best influencer finding site</p>
          <div className="mt-4 text-gray-700 text-xs italic">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          </div>

          <div className="flex items-center mt-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
              alt="elon"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="ml-2 text-xs">
              <div className="font-semibold">Elon Musk</div>
              <div className="text-gray-400">Tesla founder</div>
            </div>
          </div>

          <div className="mt-5 flex space-x-1 justify-center">
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-6">
          <div className="flex items-center mb-2">
            <span className="text-md font-bold tracking-wider">"</span>
            <span className="text-md font-bold tracking-wider rotate-45"> ) </span>
            <span className="text-sm font-bold tracking-wider"> SOCIAL STRATIX</span>
          </div>

          <h2 className="text-xl font-bold text-center mb-4">Create your Account</h2>

          <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-1.5 hover:bg-gray-50 text-sm">
            <img src="/google.jpg" alt="google" className="w-4 h-4 mr-2" />
            Continue with Google
          </button>

          <div className="my-3 flex items-center text-xs">
            <div className="flex-grow h-px bg-gray-500"></div>
            <span className="mx-2 font-bold text-gray-500">Or</span>
            <div className="flex-grow h-px bg-gray-500"></div>
          </div>

          <form className="space-y-2">
            <input
              placeholder="Full Name"
              className=" input-area w-full px-3 py-1.5 border rounded-md text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className=" input-area w-full px-3 py-1.5 border rounded-md text-sm"
            />
            <input
              placeholder="Brand Name"
              className="input-area w-full px-3 py-1.5 border rounded-md text-sm"
            />
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className=" input-area w-full px-3 py-1.5 border rounded-md text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2.5 right-3 text-gray-500"
              >
                {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
              </button>
            </div>

            <button
               type="button"
            onClick={() => router.push('/brand-signin/information/verify')}
              style={{ background: 'rgba(120, 60, 145, 1)' }}
              className="w-full text-white font-bold py-1.5 rounded-full text-sm"
            >
              SIGN UP
            </button>
          </form>

          <div className="my-3 flex items-center text-xs">
            <div className="flex-grow h-px bg-gray-500"></div>
            <span className="mx-2 font-bold text-gray-500">Already have an account</span>
            <div className="flex-grow h-px bg-gray-500"></div>
          </div>

          <button
            type="button"
            onClick={() => router.push('/')}
            className="login-button font-bold w-full bg-white py-1.5 rounded-full border text-sm"
          >
            LOGIN
          </button>

          <p className="mt-4 text-[10px] text-center text-gray-400">
             By continuing, you agree to Social Stratix <span style={{ color: 'rgba(120, 60, 145, 1)' }}>Terms of Service</span> and <span style={{ color: 'rgba(120, 60, 145, 1)' }}>Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
