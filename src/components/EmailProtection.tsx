import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const EmailProtection = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  
  // Obfuscate the email parts
  const emailParts = {
    user: 'me',
    domain: 'navid',
    tld: 'tr'
  };
  
  const handleClick = () => {
    setIsRevealed(true);
    // Copy to clipboard
    navigator.clipboard.writeText(`${emailParts.user}@${emailParts.domain}.${emailParts.tld}`);
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
      title={isRevealed ? "Click to copy" : "Click to reveal email"}
    >
      <Mail className="w-4 h-4" />
      {isRevealed ? (
        <span>{`${emailParts.user}@${emailParts.domain}.${emailParts.tld}`}</span>
      ) : (
        <span>Click to reveal email</span>
      )}
    </button>
  );
};

export default EmailProtection;