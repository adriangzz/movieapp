import React from "react";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Movie App</title>
      </Head>
      <nav>
        <Link href="/">
          <a>
            <h2 className="navTitle">MovieApp</h2>
          </a>
        </Link>
        <form>
          <input placeholder="Search"></input>
        </form>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
