import React, { useState } from 'react';

const ProfileImage = () => {
  const [imageError, setImageError] = useState(false);
  const fallbackImage = "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=256&h=256";

  return (
    <img
      src={!imageError ? "/images/profile.jpg" : fallbackImage}
      alt="Developer Profile"
      className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
      onError={() => setImageError(true)}
    />
  );
};

export default ProfileImage;