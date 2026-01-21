"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase.client";

export default function HomePage() {
  const [ann, setAnn] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const q = query(collection(db, "announcements"), orderBy("createdAt", "desc"), limit(10));
      const snap = await getDocs(q);
      setAnn(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    })();
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-bah-panel border-bah-line rounded-2xl p-6 shadow-soft">
        <div className="text-2xl font-semibold">Today’s Brief</div>
        <div className="text-bah-muted mt-1">Updates, priorities, changes, and reminders.</div>
      </div>

      <div className="bg-bah-panel border border-bah-line rounded-2xl p-6">
        <div className="font-semibold">Latest announcements</div>
        <div className="mt-3 space-y-3">
          {ann.length === 0 && <div className="text-bah-muted">No announcements yet.</div>}
          {ann.map((a) => (
            <div key={a.id} className="bg-bah-panel2 border border-bah-line rounded-xl p-4">
              <div className="font-semibold">{a.title ?? "Announcement"}</div>
              <div className="text-bah-muted text-sm mt-1 whitespace-pre-wrap">{a.body ?? ""}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
