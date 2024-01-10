'use client';

import {signIn} from "next-auth/react";
import {redirect, useRouter} from "next/navigation";
import {useEffect} from "react";

export default function HeroForm({user}) {
  const router = useRouter();
  useEffect(() => {
    if (
      'localStorage' in window
      && window.localStorage.getItem('desiredUsername')
    ) {
      const username = window.localStorage.getItem('desiredUsername');
      window.localStorage.removeItem('desiredUsername');
      redirect('/account?desiredUsername=' + username);
    }
  }, []);
  async function handleSubmit(ev) {
    ev.preventDefault();
    const form = ev.target;
    const input = form.querySelector('input');
    const username = input.value;
    if (username.length > 0) {
      if (user) {
        router.push('/account?desiredUsername='+username);
      } else {
        window.localStorage.setItem('desiredUsername', username);
        await signIn('google');
      }
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="inline-flex items-center rounded shadow-lg bg-white shadow-gray-500/20">
          <span className="rounded bg-white py-4 pl-4 font-bold">
            linktree.to/
          </span>
      <input
        type="text"
        className="font-bold"
        style={{backgroundColor:'white',marginBottom:0,paddingLeft:0}}
        placeholder="username"/>
      <button
        type="submit"
        className="bg-green-500 text-white font-bold rounded-l-none rounded-r py-4 px-6 whitespace-nowrap">
        Join for Free
      </button>
    </form>
  );
}