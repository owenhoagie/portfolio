export default function ChicagoSkyline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      <rect y="216" width="1200" height="24" />

      {/* low-rise left edge */}
      <rect x="44" y="156" width="28" height="60" rx="1" />
      <rect x="74" y="146" width="18" height="70" rx="1" />
      <rect x="94" y="132" width="30" height="84" rx="1" />

      {/* Willis Tower */}
      <rect x="146" y="76" width="18" height="140" rx="1" />
      <rect x="164" y="54" width="18" height="162" rx="1" />
      <rect x="182" y="92" width="16" height="124" rx="1" />
      <rect x="168" y="38" width="10" height="16" rx="1" />
      <rect x="171" y="22" width="4" height="16" />

      {/* 311 South Wacker */}
      <rect x="228" y="102" width="22" height="114" rx="1" />
      <rect x="235" y="90" width="8" height="12" rx="1" />

      {/* Aon Center */}
      <rect x="286" y="82" width="28" height="134" rx="1" />

      {/* Two Prudential Plaza */}
      <polygon points="332,98 352,98 360,216 324,216" />
      <rect x="340" y="82" width="4" height="16" />

      {/* Trump International Hotel and Tower */}
      <rect x="388" y="72" width="24" height="144" rx="1" />
      <rect x="412" y="88" width="22" height="128" rx="1" />
      <rect x="434" y="104" width="20" height="112" rx="1" />
      <rect x="398" y="60" width="6" height="12" rx="1" />

      {/* mid-rise cluster */}
      <rect x="480" y="138" width="22" height="78" rx="1" />
      <rect x="506" y="126" width="18" height="90" rx="1" />
      <rect x="528" y="146" width="24" height="70" rx="1" />

      {/* John Hancock Center */}
      <polygon points="574,82 614,82 628,216 560,216" />
      <rect x="592" y="62" width="4" height="20" />

      {/* Water Tower Place / neighbors */}
      <rect x="654" y="112" width="22" height="104" rx="1" />
      <rect x="680" y="126" width="16" height="90" rx="1" />

      {/* Aqua */}
      <rect x="718" y="92" width="24" height="124" rx="2" />

      {/* St. Regis Chicago */}
      <rect x="772" y="74" width="18" height="142" rx="1" />
      <rect x="790" y="92" width="18" height="124" rx="1" />
      <rect x="808" y="108" width="18" height="108" rx="1" />

      {/* mid-rise lakefront block */}
      <rect x="854" y="124" width="18" height="92" rx="1" />
      <rect x="874" y="108" width="22" height="108" rx="1" />
      <rect x="898" y="132" width="16" height="84" rx="1" />

      {/* riverfront towers */}
      <rect x="928" y="120" width="16" height="96" rx="1" />
      <rect x="948" y="110" width="18" height="106" rx="1" />
      <rect x="970" y="128" width="14" height="88" rx="1" />

      {/* Tribune Tower */}
      <rect x="996" y="114" width="18" height="102" rx="1" />
      <polygon points="996,114 1005,94 1014,114" />

      {/* right-side filler */}
      <rect x="1044" y="144" width="24" height="72" rx="1" />
      <rect x="1072" y="132" width="18" height="84" rx="1" />
      <rect x="1094" y="150" width="28" height="66" rx="1" />
    </svg>
  );
}
