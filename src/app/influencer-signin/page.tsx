'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import './Signup.css';

export default function Signin() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Prefetch the next page in the flow
    router.prefetch('/influencer-signin/information/address');
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-yellow-50 flex items-center justify-center font-sans">
      <div className="flex max-w-3xl bg-white w-full rounded-xl overflow-hidden border border-gray-300">
        {/* Left Section */}
        <div className="left-pane w-1/2 p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
            <span>Right </span>
            <span className="left-text bg-clip-text text-transparent">Voices to </span><br />
            <span className="left-text bg-clip-text text-transparent">Amplify</span>
            <span> Your </span><br />
            <span>Brand!</span>
          </h2>

          <p className="text-xs text-gray-500 mt-2">Join the best influencer finding site</p>
          <div className="mt-4 text-gray-700 text-xs italic">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
          </div>

          <div className="flex items-center mt-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
              alt="elon"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="ml-3 text-xs">
              <div className="font-semibold">Elon Musk</div>
              <div className="text-gray-400">Tesla founder</div>
            </div>
          </div>

          <div className="mt-6 flex space-x-1 justify-center">
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-6">
          <div className="flex items-center">
            <span className="text-base font-bold tracking-wider">"</span>
            <span className="text-base font-bold tracking-wider rotate-45"> ) </span>
            <span className="text-xs font-bold tracking-wider"> SOCIAL STRATIX</span>
          </div>

          <h2 className="p-4 text-xl font-bold text-center mb-4">Create your Account</h2>

          <button 
            className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-50 text-sm transition-colors"
            suppressHydrationWarning
          >
            <img src="/google.jpg" alt="google" className="w-4 h-4 mr-2" />
            Continue with Google
          </button>

          <div className="my-3 flex items-center">
            <div className="flex-grow h-px bg-gray-500"></div>
            <span className="mx-2 text-xs font-bold text-gray-500">Or</span>
            <div className="flex-grow h-px bg-gray-500"></div>
          </div>

          <form className="space-y-3" suppressHydrationWarning>
            <input 
              placeholder="Full Name" 
              className="input-area w-full px-3 py-2 border rounded-md" 
              suppressHydrationWarning
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="input-area w-full px-3 py-2 border rounded-md" 
              suppressHydrationWarning
            />
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="input-area w-full px-3 py-2 border rounded-md"
                suppressHydrationWarning
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2.5 right-3 text-gray-500 transition-colors hover:text-gray-700"
                suppressHydrationWarning
              >
                {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
              </button>
            </div>

            <button
              type="button"
              onClick={() => router.push('/influencer-signin/information/address')}
              style={{ background: 'rgba(120, 60, 145, 1)' }}
              className="w-full text-white font-bold py-2 rounded-full text-sm transition-colors hover:brightness-110"
              suppressHydrationWarning
            >
              SIGN UP
            </button>
          </form>

          <div className="my-3 flex items-center">
            <div className="flex-grow h-px bg-gray-500"></div>
            <span className="mx-2 text-xs font-bold text-gray-500">Already have an account</span>
            <div className="flex-grow h-px bg-gray-500"></div>
          </div>

          <button
            type="button"
            onClick={() => router.push('/')}
            className="login-button font-bold w-full bg-white py-2 rounded-full border text-sm transition-colors hover:bg-gray-50"
            suppressHydrationWarning
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
