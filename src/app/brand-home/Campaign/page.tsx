"use client";


import { useState } from "react";
import { Check, Paperclip } from "lucide-react";
import Navbarall from '../components/Navberall'
import Footer from '../components/Footer'

function Campaign() {


const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [files, setFiles] = useState<File[][]>([[], [], []]);

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platform)
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.files) {
      const newFiles = [...files];
      newFiles[index] = Array.from(e.target.files);
      setFiles(newFiles);
    }
  };



  return (
    <div>
      <Navbarall/>
      <div className="min-h-screen bg-gradient-to-r from-purple-50 to-yellow-50 flex items-center justify-center py-12">
  <div className="w-full max-w-3xl p-6 bg-white shadow rounded-md">

 <div className="flex items-center space-x-2 mb-2">
  <p
    style={{ borderColor: 'rgba(219, 148, 0, 1)' }}
    className="bg-black text-white rounded-full border w-6 h-6 flex items-center justify-center text-sm"
  >
    1
  </p>
  <h2 className="text-lg font-bold mb-0">Campaign details</h2>
</div>
<hr className="mb-3" />
      <p className="text-sm text-gray-600 mb-4">
        Share details about the influencers you'd like to target. We'll gather campaign specifics, including content needs and product descriptions, once your targeting is set.
      </p>

      <div className="mb-4">
        <label className="block font-semibold mb-1">
          What is the Campaign name? <span style={{color: 'rgba(179, 38, 30, 1)'}}>*</span>
        </label>
        <input
         style={{borderColor:'rgba(170, 134, 185, 1)'}}
          className="w-full p-2 border rounded"
          placeholder="Campaign name"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">
          Write description of the Campaign? <span style={{color: 'rgba(179, 38, 30, 1)'}}>*</span>
        </label>
        <textarea
        style={{borderColor:'rgba(170, 134, 185, 1)'}}
          className="w-full p-2 border rounded"
          placeholder="Description"
          rows={4}
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">
          Where Campaign? <span style={{color: 'rgba(179, 38, 30, 1)'}}>*</span>
        </label>
        <div className="flex flex-wrap gap-2 mt-3">
  {[
    { platform: "Instagram", icon: "/Instagram.png", border: "border-red-500", selected: true },
    { platform: "Facebook", icon: "/facebook.jpeg", border: "border-blue-500", selected: false },
    { platform: "X", icon: "/twitter.png", border: "border-black", selected: true },
    { platform: "YouTube", icon: "/YouTube.png", border: "border-red-500", selected: false },
    { platform: "TikTok", icon: "/tiktok.avif", border: "border-black", selected: true },
  ].map((item, index) => (
    <button
      key={index}
      className={`flex items-center px-2 py-0.5 rounded-sm border text-xs font-medium bg-white shadow ${item.border}`}
    >
      <img src={item.icon} alt={item.platform} className="w-3 h-3 mr-1" />
      {item.platform}
      {item.selected && (
        <div
    style={{ background: 'rgba(120, 60, 145, 1)' }}
    className="rounded-full w-6 h-6  flex mx-2 items-center justify-center"
  >
   <Check size={13} color="white" strokeWidth={4} />

  </div>
      )}
    </button>
  ))}
</div>


      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Add tags</label>
        <textarea
        style={{borderColor:'rgba(170, 134, 185, 1)'}}
          className="w-full p-2 border rounded"
          placeholder="Description"
        />
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2">Add Attachments</label>
       <div className="flex gap-2">
  {[0, 1, 2].map(i => (
    <label
      key={i}
      style={{ borderColor: 'rgba(117, 80, 2, 1)' }}
      className="flex items-center gap-2 p-2 border rounded cursor-pointer w-full"
    >
      <Paperclip className="w-4 h-4 text-gray-400 " />
      <p style={{ color: 'rgba(117, 80, 2, 1)' }}>Attach files</p>
      <input
        type="file"
        multiple
        className="hidden"
        onChange={e => handleFileChange(e, i)}
      />
    </label>
  ))}
</div>
<div className="flex justify-end">
<button
style={{background:'rgba(223, 223, 223, 1)' , color:'rgba(63, 33, 76, 1)'}}
className="px-4 py-1.5 rounded-full  mt-2 "
>
Next
</button>
</div>
      </div>

      <hr className="my-6" />
<div className="flex items-center space-x-2 mb-2">
  <p
    style={{ borderColor: 'rgba(219, 148, 0, 1)', background:'#f0e2c4' , color:' rgba(30, 0, 43, 1)'}}
    className=" text-white rounded-full border w-6 h-6 flex items-center justify-center text-sm"
  >
    2
  </p>
  <h2 className="text-lg font-bold mb-0">Pricing details</h2>
</div>
      
      <p className="text-sm text-gray-600 mb-4">
       Provide your pricing details, and estimate costs based on your campaign goals and influencer reach. Get a clear breakdown to align with your targeting strategy.
      </p>

      <div className="mb-4">
        <label className="block font-semibold mb-1">
          What is the Campaign budget? <span style={{color: 'rgba(179, 38, 30, 1)'}}>*</span>
        </label>
        <input
          className="w-full p-2 border rounded"
          placeholder="Campaign budget"
        />
      </div>
<div className="flex justify-end">
<button
style={{background:'rgba(223, 223, 223, 1)' , color:'rgba(63, 33, 76, 1)'}}
className="px-4 py-1.5 rounded-full  mt-2 "
>
POST CAMPAIGN
</button>
</div>
     
    </div>



       </div>
      <Footer/>
    </div>
  )
}

export default Campaign