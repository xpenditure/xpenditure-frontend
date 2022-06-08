import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a>Xpenditure</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <Link href="/signup">
        <a>Sign Up</a>
      </Link>
    </div>
  );
};

export default Header;
