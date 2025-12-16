const Sparkline = ({ color = "#9b87f5" }) => (
  <svg
    viewBox="0 0 120 40"
    preserveAspectRatio="none"
    style={{ width: "100%", height: "48px" }}
  >
    <path
      d="M 0,35 Q 15,25 30,28 T 60,20 T 90,15 T 120,10"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export default Sparkline;
