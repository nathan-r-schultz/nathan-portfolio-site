"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <p>This is a header!</p>
  );
};

export default Navbar;