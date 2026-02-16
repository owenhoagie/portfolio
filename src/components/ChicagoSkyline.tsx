export default function ChicagoSkyline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      {/* Willis Tower (Sears Tower) */}
      <rect x="140" y="40" width="22" height="160" rx="1" />
      <rect x="145" y="30" width="12" height="10" rx="1" />
      <rect x="148" y="20" width="6" height="10" />
      <rect x="162" y="55" width="18" height="145" rx="1" />

      {/* John Hancock Center */}
      <polygon points="230,50 250,50 256,200 224,200" />
      <rect x="237" y="40" width="6" height="10" />

      {/* Aon Center */}
      <rect x="290" y="60" width="24" height="140" rx="1" />

      {/* Trump Tower */}
      <rect x="340" y="45" width="20" height="155" rx="1" />
      <rect x="345" y="70" width="25" height="130" rx="1" />
      <rect x="343" y="35" width="8" height="10" />

      {/* Two Prudential Plaza */}
      <polygon points="415,55 430,55 435,200 410,200" />
      <rect x="420" y="45" width="5" height="10" />

      {/* mid-rise cluster left */}
      <rect x="470" y="110" width="20" height="90" rx="1" />
      <rect x="495" y="95" width="16" height="105" rx="1" />
      <rect x="515" y="120" width="22" height="80" rx="1" />

      {/* 875 N Michigan (old Hancock neighbor) */}
      <rect x="560" y="75" width="18" height="125" rx="1" />
      <rect x="580" y="100" width="14" height="100" rx="1" />

      {/* Aqua Tower */}
      <rect x="620" y="65" width="20" height="135" rx="1" />
      <rect x="622" y="67" width="16" height="2" />
      <rect x="622" y="75" width="16" height="2" />
      <rect x="622" y="83" width="16" height="2" />
      <rect x="622" y="91" width="16" height="2" />

      {/* mid-rise cluster center */}
      <rect x="665" y="105" width="18" height="95" rx="1" />
      <rect x="688" y="115" width="22" height="85" rx="1" />

      {/* St. Regis / Vista Tower */}
      <rect x="735" y="50" width="16" height="150" rx="1" />
      <rect x="751" y="65" width="14" height="135" rx="1" />
      <rect x="765" y="80" width="12" height="120" rx="1" />

      {/* Lake Point Tower */}
      <rect x="810" y="90" width="24" height="110" rx="2" />

      {/* mid-rise cluster right */}
      <rect x="860" y="120" width="18" height="80" rx="1" />
      <rect x="883" y="105" width="20" height="95" rx="1" />
      <rect x="908" y="130" width="16" height="70" rx="1" />

      {/* Tribune Tower */}
      <rect x="950" y="85" width="16" height="115" rx="1" />
      <polygon points="953,85 963,70 973,85" />

      {/* Marina City (corn cobs) */}
      <rect x="1000" y="90" width="14" height="110" rx="7" />
      <rect x="1020" y="90" width="14" height="110" rx="7" />

      {/* low-rise filler right edge */}
      <rect x="1060" y="140" width="20" height="60" rx="1" />
      <rect x="1085" y="130" width="16" height="70" rx="1" />
      <rect x="1106" y="145" width="22" height="55" rx="1" />

      {/* low-rise filler left edge */}
      <rect x="50" y="130" width="22" height="70" rx="1" />
      <rect x="78" y="140" width="18" height="60" rx="1" />
      <rect x="100" y="120" width="16" height="80" rx="1" />
    </svg>
  );
}
