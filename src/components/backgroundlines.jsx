const BackgroundLines = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 w-full h-full"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      {/* Define your lines here */}
      <line x1="0" y1="50" x2="100" y2="50" stroke="#ccc" strokeWidth="0.5" />
      <line x1="50" y1="0" x2="50" y2="100" stroke="#ccc" strokeWidth="0.5" />
    </svg>
  );

  r