"use client";

import { auth } from "@/lib/firebase.client";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const router = useRouter();
  return (
    <header className="px-6 py-4 border-b border-bah-line bg-bah-panel sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="text-sm text-bah-muted">
          “Born of Fire” — Standards. Training. Control.
        </div>
        <button
          onClick={async () => {
            await signOut(auth);
            router.replace("/login");
          }}
          className="px-4 py-2 rounded-xl bg-bah-panel2 border border-bah-line hover:border-bah-ember text-sm"
        >
          Sign out
        </button>
      </div>
    </header>
  );
}