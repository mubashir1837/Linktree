import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaSkype, FaBriefcase } from 'react-icons/fa';

import Image from 'next/image';

const links = [
  { name: 'Github', url: 'https://github.com/mubashir1837', icon: <FaGithub /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/mubashirali3/', icon: <FaLinkedin /> },
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61556478748590', icon: <FaFacebook /> },
  { name: 'Instagram', url: 'https://instagram.com/mubashir_aliyaar_37', icon: <FaInstagram /> },
  { name: 'Twitter', url: 'https://join.skype.com/invite/tbUVmyPL6ySt', icon: <FaSkype /> },
  { name: 'Portfolio', url: 'https://mubashir-a.vercel.app', icon: <FaBriefcase /> },
];

const LinkTree = () => {
  return (
    <div className="starry-background flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200">
      <Image src="/images/pro-.jpg" alt="Profile" width={128} height={128} className="rounded-full mb-4" />
      <h1 className="text-xl mb-6">@mubashirali</h1>
      <div className="w-full max-w-xs">
        {links.map(link => (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            key={link.name}
            className="flex items-center justify-center w-full py-2 my-2 border border-gray-600 rounded-full border-5xl transition-colors hover:bg-gray-600 hover:text-white"
          >
            <span className="mr-2">{link.icon}</span>
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinkTree;


