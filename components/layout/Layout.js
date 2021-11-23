import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const preventDefault = (f) => (e) => {
  e.preventDefault();
  f(e);
};

const Layout = ({ children, action = "/search", q = "" }) => {
  const router = useRouter();
  const [query, setQuery] = useState(q);

  const handleParam = (setValue) => (e) => setValue(e.target.value);

  const handleSubmit = preventDefault(() => {
    router.push({
      pathname: action,
      query: { q: query },
    });
  });
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="q"
            value={query}
            onChange={handleParam(setQuery)}
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
