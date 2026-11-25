"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";

const KEY = "cp-visit-counted";

export default function VisitorCount() {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    let counted = false;
    try {
      counted = sessionStorage.getItem(KEY) === "1";
    } catch {}
    fetch("/api/visitors", { method: counted ? "GET" : "POST", cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!d) return;
        setTotal(d.total);
        try {
          sessionStorage.setItem(KEY, "1");
        } catch {}
      })
      .catch(() => {});
  }, []);

  if (total === null) return null;
  return (
    <span className="cp-visitors" title="Total visitors">
      <Users size={14} /> Total visitors: <strong>{total.toLocaleString("en-IN")}</strong>
    </span>
  );
}
