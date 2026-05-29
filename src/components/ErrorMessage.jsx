// src/components/ErrorMessage.jsx

import { s } from "../styles";

export default function ErrorMessage({ message, onRetry }) {
  return (
    <div style={s.errorBox}>
      <div style={s.errorIcon}>⚠️</div>
      <p style={s.errorText}>{message}</p>
      <button onClick={onRetry} style={s.retryBtn}>
        Coba Lagi
      </button>
    </div>
  );
}
