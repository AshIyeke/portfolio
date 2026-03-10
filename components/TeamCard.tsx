import React from 'react';
import Image from 'next/image';
import { FaLinkedinIn, FaFacebookF, FaXTwitter, FaTiktok } from 'react-icons/fa6';

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  socials?: {
    platform: 'linkedin' | 'facebook' | 'twitter' | 'tiktok';
    link: string;
  }[];
}

export const TeamCard = ({ name, role, description, image }: TeamCardProps) => {
  const socialIcons = [
    { icon: <FaLinkedinIn className="w-3.5 h-3.5" />, label: "LinkedIn" },
    { icon: <FaFacebookF className="w-3.5 h-3.5" />, label: "Facebook" },
    { icon: <FaTiktok className="w-3.5 h-3.5" />, label: "TikTok" },
    { icon: <FaXTwitter className="w-3.5 h-3.5" />, label: "X" },
  ];

  return (
    <div className="bg-card rounded-3xl shadow-sm w-full p-4 flex flex-col sm:flex-row gap-6 items-center sm:items-stretch border border-border transition-all hover:shadow-md max-w-xl mx-auto">
      
      {/* Profile Image Section */}
      <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-auto relative overflow-hidden rounded-2xl">
        <Image 
          src={image} 
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center flex-grow py-2">
        <div className="mb-0.5 text-center sm:text-left">
          <h3 className="text-xl font-bold text-foreground tracking-tight">
            {name}
          </h3>
        </div>
        
        <div className="mb-3 text-center sm:text-left">
          <p className="text-muted-foreground font-medium text-sm">
            {role}
          </p>
        </div>

        <div className="mb-4 text-center sm:text-left">
          <p className="text-foreground/80 text-sm leading-relaxed max-w-[240px] mx-auto sm:mx-0">
            {description}
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-border mb-4"></div>

        {/* Social Icons */}
        <div className="flex gap-2 justify-center sm:justify-start">
          {socialIcons.map((item, index) => (
            <button
              key={index}
              className="w-8 h-8 flex items-center justify-center bg-muted rounded-lg text-foreground hover:bg-accent transition-colors duration-200"
              aria-label={item.label}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
