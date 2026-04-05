"use client";

import { useState, useEffect, useCallback } from "react";
import { Wish } from "../types";

export function useWishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);

  // Fetch wishes from server on mount
  useEffect(() => {
    fetch("/api/wishes")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setWishes(data);
      })
      .catch(() => {});
  }, []);

  // Poll for new wishes every 5 seconds so all clients stay in sync
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/api/wishes")
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) setWishes(data);
        })
        .catch(() => {});
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const addWish = useCallback(
    async (name: string, message: string, attendance?: "hadir" | "tidak_hadir"): Promise<boolean> => {
      if (!name || !name.trim() || !message || !message.trim()) {
        return false;
      }

      try {
        const res = await fetch("/api/wishes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, message, attendance }),
        });

        if (!res.ok) return false;

        const newWish = await res.json();
        setWishes((prev) => [...prev, newWish]);
        return true;
      } catch {
        return false;
      }
    },
    []
  );

  return {
    wishes,
    addWish,
    totalCount: wishes.length,
  };
}
