// src/hooks/useAbility.js
// Custom hook untuk mengambil detail ability dari PokéAPI (Endpoint 3)

import { useState } from "react";
import { API_BASE } from "../constants";

export default function useAbility() {
  const [ability, setAbility] = useState(null);
  const [loadingAbility, setLoadingAbility] = useState(false);

  const fetchAbility = async (abilityUrl) => {
    if (!abilityUrl) return;
    setLoadingAbility(true);
    setAbility(null);

    try {
      const res = await fetch(abilityUrl);
      const data = await res.json();
      setAbility(data);
    } catch (err) {
      console.error("Ability fetch error:", err);
      setAbility(null);
    } finally {
      setLoadingAbility(false);
    }
  };

  return { ability, loadingAbility, fetchAbility };
}
