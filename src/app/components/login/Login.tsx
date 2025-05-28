'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './Login.css';

interface LoginProps {
  onSignup?: () => void;
}

export default function Login({ onSignup }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-yellow-50 flex items-center justify-center font-sans">
      <div className="flex max-w-3xl w-[90%] bg-white rounded-xl overflow-hidden border border-gray-300">
        {/* Left Section */}
        <div className=" left-pane w-2/5 p-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-2 leading-tight">
            <span>Right </span>
            <span className="left-text bg-clip-text text-transparent">
              Voices to
            </span>
            <br />
            <span className="left-text bg-clip-text text-transparent">
              Amplify
            </span>
            <span> Your </span>
            <br />
            <span>Brand!</span>
          </h2>

          <p className="text-sm text-gray-500 mt-2">Join the best influencer finding site</p>

          <div className="mt-4 text-gray-700 text-sm italic">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
          </div>

          <div className="flex items-center mt-4">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
              alt="elon"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div className="ml-3 text-sm">
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
        <div className="w-3/5 p-6">
          <div className="flex items-center">
            <span className="text-lg font-bold tracking-wider">"</span>
            <span className="text-lg font-bold tracking-wider rotate-45"> ) </span>
            <span className="text-sm font-bold tracking-wider">SOCIAL STRATIX</span>
          </div>

          <h2 className="pt-5 text-2xl font-bold text-center mb-6">Welcome back!</h2>

          <form className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              className="input-area w-full px-4 py-2 border rounded-md"
            />
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="input-area w-full px-4 py-2 border rounded-md"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-3 text-gray-500"
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>

            <div className="text-right">
              <a href="#" className="text-sm" style={{ color: 'rgba(120, 60, 145, 1)' }}>
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              style={{ background: 'rgba(120, 60, 145, 1)' }}
              className="w-full text-white font-bold py-2 rounded-full"
            >
              LOGIN
            </button>
          </form>

          <div className="my-4 flex items-center">
            <div className="flex-grow h-px bg-gray-500"></div>
            <span className="mx-2 text-sm font-bold text-gray-500">Or</span>
            <div className="flex-grow h-px bg-gray-500"></div>
          </div>

          <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-50">
            <Image src="/google.jpg" alt="google" width={20} height={20} className="mr-2" />
            Continue with Google
          </button>

          <div className="my-4 flex items-center">
            <div className="flex-grow h-px bg-gray-500"></div>
            <span className="mx-2 text-sm font-bold text-gray-500">
              Don't have a Stratix account?
            </span>
            <div className="flex-grow h-px bg-gray-500"></div>
          </div>

          <button
            onClick={onSignup ? onSignup : () => router.push('/?view=signin')}
            className="signup-button font-bold w-full bg-white py-2 rounded-full border"
          >
            SIGN UP
          </button>

          <p className="mt-6 text-xs text-center text-gray-400">
            By continuing, you agree to Social Stratix{' '}
            <span style={{ color: 'rgba(120, 60, 145, 1)' }}>Terms of Service</span> and{' '}
            <span style={{ color: 'rgba(120, 60, 145, 1)' }}>Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
