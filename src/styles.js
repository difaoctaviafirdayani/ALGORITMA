/* src/styles.js */
/* Shared inline style objects used across components */

export const s = {
  // Loading
  loadingScreen: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", background: "#0a0a16", gap: "1.5rem" },
  loadingSpinner: { width: 64, height: 64, borderRadius: "50%", border: "4px solid #ef5350", borderTop: "4px solid transparent", animation: "spin 0.8s linear infinite" },
  loadingText: { color: "#7c6aff", fontWeight: 700, letterSpacing: 2, animation: "pulse 1.5s ease infinite" },

  // Error
  errorBox: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", gap: "1rem", padding: "2rem" },
  errorIcon: { fontSize: "3rem" },
  errorText: { color: "#ef9a9a", textAlign: "center", maxWidth: 400 },
  retryBtn: { padding: "10px 24px", background: "#7c6aff", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: 700 },

  // Header
  header: { background: "linear-gradient(135deg, #1a0a2e, #0d1a3e)", borderBottom: "1px solid #2d2d4e", padding: "1.5rem 2rem", position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(20px)" },
  headerInner: { maxWidth: 1400, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" },
  logo: { display: "flex", alignItems: "center", gap: "1rem" },
  logoBall: { fontSize: "2rem", color: "#ef5350", animation: "float 3s ease-in-out infinite" },
  title: { fontSize: "1.8rem", fontWeight: 900, background: "linear-gradient(90deg, #ff6b6b, #7c6aff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  subtitle: { fontSize: "0.8rem", color: "#666890", marginTop: 2 },
  headerStats: { display: "flex", gap: "1rem" },
  statChip: { display: "flex", flexDirection: "column", alignItems: "center", background: "#1e1e3e", padding: "8px 16px", borderRadius: 12, border: "1px solid #2d2d4e" },
  statChipNum: { fontSize: "1.2rem", fontWeight: 800, color: "#7c6aff" },

  // Controls
  controls: { maxWidth: 1400, margin: "1.5rem auto", padding: "0 1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" },
  searchWrap: { flex: 1, minWidth: 240, position: "relative", display: "flex", alignItems: "center" },
  searchIcon: { position: "absolute", left: 12, fontSize: "1rem", pointerEvents: "none" },
  searchInput: { width: "100%", padding: "12px 40px 12px 36px", background: "#1e1e3e", border: "1px solid #3d3d6e", borderRadius: 12, color: "#e0e0ff", fontSize: "1rem", outline: "none" },
  clearBtn: { position: "absolute", right: 10, background: "none", border: "none", color: "#666890", cursor: "pointer", fontSize: "1rem" },
  filterWrap: { minWidth: 200 },
  select: { width: "100%", padding: "12px 16px", background: "#1e1e3e", border: "1px solid #3d3d6e", borderRadius: 12, color: "#e0e0ff", fontSize: "1rem", cursor: "pointer", outline: "none" },

  // Info bar
  infoBar: { maxWidth: 1400, margin: "0 auto 1rem", padding: "0 1.5rem", display: "flex", alignItems: "center", gap: "1rem", color: "#888aaa", fontSize: "0.9rem" },
  resetBtn: { padding: "4px 12px", background: "transparent", border: "1px solid #7c6aff", borderRadius: 8, color: "#7c6aff", cursor: "pointer", fontSize: "0.85rem" },

  // Grid
  grid: { maxWidth: 1400, margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" },

  // Card
  card: { position: "relative", borderRadius: 16, padding: "1.5rem 1rem", cursor: "pointer", transition: "all 0.3s ease", border: "1px solid #2d2d4e", overflow: "hidden", textAlign: "center" },
  cardAccent: { position: "absolute", top: 0, left: 0, right: 0, height: 3, borderRadius: "16px 16px 0 0" },
  cardNum: { fontSize: "0.75rem", color: "#555880", fontWeight: 700, marginBottom: 4 },
  cardImgWrap: { position: "relative", height: 120, display: "flex", alignItems: "center", justifyContent: "center" },
  cardImgBg: { position: "absolute", width: 100, height: 100, borderRadius: "50%" },
  cardImg: { width: 100, height: 100, objectFit: "contain", position: "relative", zIndex: 1, transition: "filter 0.3s" },
  cardName: { fontSize: "0.95rem", fontWeight: 700, textTransform: "capitalize", margin: "0.5rem 0 0.4rem", color: "#e8e8ff" },
  cardTypes: { display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center", marginBottom: "0.5rem" },
  cardStatRow: { display: "flex", gap: "0.5rem", justifyContent: "center", fontSize: "0.7rem", color: "#888aaa", flexWrap: "wrap" },

  // Type badge
  typeBadge: { padding: "2px 8px", borderRadius: 20, fontSize: "0.65rem", fontWeight: 700, textTransform: "capitalize", color: "#fff", whiteSpace: "nowrap" },

  // Load more
  loadMoreWrap: { display: "flex", justifyContent: "center", marginTop: "2rem" },
  loadMoreBtn: { padding: "12px 32px", background: "linear-gradient(135deg, #7c6aff, #ef5350)", color: "#fff", border: "none", borderRadius: 12, cursor: "pointer", fontWeight: 700, fontSize: "1rem" },

  // Empty
  emptyState: { textAlign: "center", padding: "4rem 2rem", color: "#555880" },
  emptyIcon: { fontSize: "3rem", marginBottom: "1rem" },

  // Modal
  overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", backdropFilter: "blur(8px)" },
  modal: { background: "#0f0f23", borderRadius: 20, width: "100%", maxWidth: 480, maxHeight: "85vh", overflowY: "auto", border: "1px solid", animation: "fadeIn 0.3s ease", position: "relative" },
  closeBtn: { position: "absolute", top: 12, right: 12, background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", width: 32, height: 32, borderRadius: "50%", cursor: "pointer", fontSize: "1rem", zIndex: 10 },
  modalHeader: { padding: "2rem 2rem 1.5rem", textAlign: "center", borderRadius: "20px 20px 0 0" },
  modalNum: { fontSize: "0.8rem", color: "#888aaa", fontWeight: 700, marginBottom: 8 },
  modalImg: { width: 160, height: 160, objectFit: "contain" },
  modalName: { fontSize: "1.8rem", fontWeight: 900, textTransform: "capitalize", marginBottom: "0.5rem" },
  modalBody: { padding: "1.5rem 2rem" },
  sectionTitle: { fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: "#888aaa", margin: "1.5rem 0 0.75rem" },
  infoGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "0.5rem" },
  infoItem: { background: "#1a1a30", borderRadius: 10, padding: "0.75rem", display: "flex", flexDirection: "column", gap: 4 },
  infoLabel: { fontSize: "0.7rem", color: "#666890", textTransform: "uppercase", letterSpacing: 1 },
  infoVal: { fontSize: "1rem", fontWeight: 700, color: "#e0e0ff" },
  statRow: { display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.6rem" },
  statName: { width: 90, fontSize: "0.7rem", textTransform: "capitalize", color: "#aaa", textAlign: "right", flexShrink: 0 },
  statValue: { width: 28, fontSize: "0.85rem", fontWeight: 700, textAlign: "right", flexShrink: 0 },
  statBg: { flex: 1, height: 6, background: "#1a1a30", borderRadius: 3, overflow: "hidden" },
  statFill: { height: "100%", borderRadius: 3 },
  abilityBox: { background: "#0d0d20", border: "1px solid", borderRadius: 12, padding: "1rem", marginTop: "1.5rem" },
  abilityDesc: { fontSize: "0.85rem", color: "#aaa", lineHeight: 1.6 },
  movesGrid: { display: "flex", flexWrap: "wrap", gap: "0.4rem" },
  moveChip: { padding: "4px 10px", background: "#1e1e3e", border: "1px solid #3d3d6e", borderRadius: 20, fontSize: "0.7rem", textTransform: "capitalize", color: "#aaa" },

  // Footer
  footer: { textAlign: "center", padding: "2rem 1rem 0", color: "#444668", fontSize: "0.8rem" },

  // App wrapper
  app: { minHeight: "100vh", background: "linear-gradient(180deg, #0a0a16 0%, #0d0d20 100%)", color: "#e0e0ff", fontFamily: "'Segoe UI', system-ui, sans-serif", paddingBottom: "2rem" },
};

export const GLOBAL_CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0a0a16; }
  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.4} }
  @keyframes fadeIn { from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)} }
  @keyframes float { 0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)} }
  @keyframes barFill { from{width:0} to{width:var(--w)} }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #0d0d1a; }
  ::-webkit-scrollbar-thumb { background: #3d3d6e; border-radius: 3px; }
  @media (max-width: 600px) {
    .poke-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .poke-modal { width: 95vw !important; max-height: 90vh !important; }
  }
`;
