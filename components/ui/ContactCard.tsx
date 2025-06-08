'use client'
import React, { useState } from 'react'

const ContactCard = () => {
  const [copied, setCopied] = useState(false);
  const email = "tejabanait007@gmail.com";
  
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 5000); 
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 rounded-2xl p-6 h-52 flex flex-col items-center justify-center text-white shadow-xl">
      <h2 className="text-lg md:text-xl font-semibold text-center mb-6 max-w-xs">
        Do you want to start a project together?
      </h2>

      <button
        onClick={copyEmail}
        className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105"
      >
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" 
          />
        </svg>
        <span className="text-sm font-medium">
          {copied ? "Copied Email" : "Copy Email Address"}
        </span>
      </button>
    </div>
  );
}

export default ContactCard
