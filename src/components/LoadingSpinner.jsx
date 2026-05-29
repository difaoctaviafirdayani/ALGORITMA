// src/components/LoadingSpinner.jsx

import { s } from "../styles";

export default function LoadingSpinner() {
  return (
    <div style={s.loadingScreen}>
      <div style={s.loadingSpinner} />
      <p style={s.loadingText}>Loading Pokédex...</p>
    </div>
  );
}
