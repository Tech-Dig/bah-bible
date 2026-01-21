"use client";

import { auth } from "@/lib/firebase.client";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bah-bg px-6">
      <div className="w-full max-w-md bg-bah-panel border border-bah-line rounded-2xl p-6 shadow-soft">
        <div className="text-2xl font-semibold">BAH Bible</div>
        <div className="text-bah-muted mt-1">Secure internal login</div>

        <div className="mt-6 space-y-3">
          <button
            className="w-full px-4 py-3 rounded-xl bg-bah-panel2 border border-bah-line hover:border-bah-ember"
            onClick={async () => {
              setErr(null);
              try {
                const provider = new GoogleAuthProvider();
                await signInWithPopup(auth, provider);
                router.replace("/");
              } catch (e: any) {
                setErr(e.message);
              }
            }}
          >
            Sign in with Google
          </button>
        </div>

        <div className="flex items-center my-4">
          <hr className="w-full border-bah-line" />
          <div className="px-3 text-bah-muted text-sm">OR</div>
          <hr className="w-full border-bah-line" />
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setErr(null);
            if (!email || !password) {
              setErr("Please enter email and password.");
              return;
            }
            try {
              await signInWithEmailAndPassword(auth, email, password);
              router.replace("/");
            } catch (e: any) {
              setErr(e.message);
            }
          }}
        >
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-bah-panel2 border border-bah-line focus:border-bah-ember focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-bah-panel2 border border-bah-line focus:border-bah-ember focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 px-4 py-3 rounded-xl bg-bah-ember border border-transparent text-white"
          >
            Sign in with Email
          </button>
        </form>

        {err && (
          <div className="mt-4 text-sm text-red-500 bg-red-500/10 border border-red-500/30 rounded-lg p-3">
            {err}
          </div>
        )}
      </div>
    </div>
  );
}