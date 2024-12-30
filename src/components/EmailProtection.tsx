import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import Toast from './common/Toast';

const EmailProtection = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  const emailParts = {
    user: 'me',
    domain: 'navid',
    tld: 'tr'
  };
  
  const email = `${emailParts.user}@${emailParts.domain}.${emailParts.tld}`;
  
  const handleClick = () => {
    if (!isRevealed) {
      setIsRevealed(true);
    } else {
      navigator.clipboard.writeText(email).then(() => {
        setShowToast(true);
      });
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
        title={isRevealed ? "Click to copy" : "Click to reveal email"}
      >
        <Mail className="w-4 h-4" />
        {isRevealed ? (
          <span>{email}</span>
        ) : (
          <span>Click to reveal email</span>
        )}
      </button>
      
      <Toast 
        message="Email copied to clipboard!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
};

export default EmailProtection;