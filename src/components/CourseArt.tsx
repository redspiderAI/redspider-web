type Kind = "voice" | "companion" | "code" | "wheel" | "car" | "dog" | "arm";

// Original vector illustrations in a consistent hardware sketchbook style.
export function CourseArt({ kind }: { kind: Kind }) {
  return (
    <svg
      className="hardware-illustration"
      viewBox="0 0 300 210"
      fill="none"
      aria-hidden="true"
    >
      <ellipse
        cx="150"
        cy="181"
        rx="89"
        ry="9"
        fill="currentColor"
        opacity=".07"
      />
      <g
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {kind === "voice" && (
          <>
            <path
              d="M92 63C59 23 86 12 110 51M187 55C212 16 242 39 207 74"
              fill="#E9AA83"
            />
            <path
              d="M86 92C80 45 216 34 218 97L210 145C199 184 93 185 83 149Z"
              fill="#F3C5A6"
            />
            <ellipse cx="152" cy="116" rx="48" ry="44" fill="#FFFBF4" />
            <path d="M122 137Q152 152 180 135" />
            <circle cx="131" cy="106" r="4" fill="currentColor" />
            <circle cx="174" cy="106" r="4" fill="currentColor" />
            <path d="M148 119h9M77 132l-15 14M217 132l16 11" />
            <path d="M48 72v17M38 77v7M249 80v17M260 84v9" stroke="#D64736" />
            <path d="M118 172l-10 9M186 172l10 9" />
          </>
        )}
        {kind === "companion" && (
          <>
            <path d="M102 153l-9 24h115l-10-24" fill="#D9DDD2" />
            <rect
              x="79"
              y="45"
              width="143"
              height="110"
              rx="26"
              fill="#E7EBDF"
            />
            <rect
              x="93"
              y="59"
              width="115"
              height="76"
              rx="17"
              fill="#343F39"
            />
            <path d="M117 92v14M183 92v14" stroke="#E5F4C0" strokeWidth="7" />
            <path d="M139 110q13 12 25 0" stroke="#E5F4C0" />
            <circle cx="151" cy="145" r="3" fill="#D64736" stroke="none" />
            <path d="M151 43V28" />
            <circle cx="151" cy="23" r="6" fill="#D64736" />
            <path
              d="M64 79l-11-8M61 111H46M232 70l10-10M239 101h13"
              stroke="#9DAE87"
            />
          </>
        )}
        {kind === "code" && (
          <>
            <rect
              x="67"
              y="39"
              width="166"
              height="121"
              rx="9"
              fill="#C9D9E7"
            />
            <rect x="78" y="50" width="144" height="97" rx="4" fill="#FAFCFD" />
            <path d="M66 159l-21 20h212l-24-20" fill="#DFE8EC" />
            <path
              d="M123 82l-15 13 15 13M180 82l15 13-15 13M161 76l-16 39"
              stroke="#577E9E"
              strokeWidth="5"
            />
            <path d="M115 168h72" />
            <path d="M251 48v21M241 58h21" stroke="#D64736" />
            <circle cx="52" cy="66" r="5" stroke="#98B9CE" />
          </>
        )}
        {kind === "wheel" && (
          <>
            <circle cx="100" cy="156" r="24" fill="#414849" />
            <circle cx="200" cy="156" r="24" fill="#414849" />
            <circle cx="100" cy="156" r="12" fill="#C5CDCE" />
            <circle cx="200" cy="156" r="12" fill="#C5CDCE" />
            <path
              d="M113 98l-17 23 4 35M186 98l18 24-4 34"
              strokeWidth="9"
              stroke="#7C9398"
            />
            <rect
              x="110"
              y="49"
              width="80"
              height="67"
              rx="13"
              fill="#D7E4E6"
            />
            <rect x="119" y="61" width="62" height="30" rx="8" fill="#384B4F" />
            <circle cx="136" cy="76" r="4" fill="#D4F3E5" stroke="none" />
            <circle cx="166" cy="76" r="4" fill="#D4F3E5" stroke="none" />
            <path d="M147 102h9M150 48V33" />
            <circle cx="150" cy="27" r="6" fill="#D64736" />
            <path d="M49 125q-9 15 0 30M247 125q9 15 0 30" stroke="#97B0B4" />
          </>
        )}
        {kind === "car" && (
          <>
            <path d="M66 123l20-43h111l36 39v34H64Z" fill="#E8BA65" />
            <path d="M103 86h33v34H88ZM148 86h42l26 34h-68Z" fill="#FCF5DC" />
            <path d="M65 121h165" />
            <circle cx="103" cy="155" r="24" fill="#41413D" />
            <circle cx="103" cy="155" r="12" fill="#FCF5DC" />
            <circle cx="203" cy="155" r="24" fill="#41413D" />
            <circle cx="203" cy="155" r="12" fill="#FCF5DC" />
            <path d="M235 130h10v12h-10" fill="#EF6D4D" />
            <path d="M144 80V65" />
            <rect x="134" y="55" width="21" height="10" rx="4" fill="#41413D" />
            <path
              d="M128 41q15-12 31 0M119 29q25-17 51 0M42 131H26M43 146H33"
              stroke="#C69840"
            />
          </>
        )}
        {kind === "dog" && (
          <>
            <path
              d="M105 103l-15 34 8 31M189 104l16 29-5 34"
              stroke="#858D9D"
              strokeWidth="10"
            />
            <path d="M109 73h90l18 15-12 38H98l-13-26Z" fill="#E2E3ED" />
            <path
              d="M108 120l-15 22-15 29M184 120l-4 25 15 26"
              strokeWidth="10"
              stroke="#B3B6CE"
            />
            <path d="M73 171h16M192 171h16M92 169h14" />
            <path d="M199 77l22-20 20 7 8 28-17 16-25-10" fill="#D0D1E0" />
            <path d="M224 77h20M224 89h15" strokeWidth="5" />
            <circle cx="111" cy="121" r="6" fill="#EEEFFA" />
            <circle cx="185" cy="121" r="6" fill="#EEEFFA" />
            <path d="M87 92L67 78l-6-17" />
            <path d="M130 83h37M130 92h25" stroke="#959BB7" />
            <path d="M257 61l9-9M264 78h12" stroke="#C27D6D" />
          </>
        )}
        {kind === "arm" && (
          <>
            <path d="M78 166h125l13 15H67Z" fill="#DDD6CA" />
            <rect
              x="111"
              y="136"
              width="65"
              height="30"
              rx="7"
              fill="#EBD9B3"
            />
            <path d="M132 139L107 90l24-17 36 66Z" fill="#E7C381" />
            <circle cx="117" cy="85" r="20" fill="#F4E6CB" />
            <path d="M123 67l53-34 17 25-63 39" fill="#E7C381" />
            <circle cx="184" cy="45" r="17" fill="#F4E6CB" />
            <path d="M193 34l37 36-15 18-43-30" fill="#E7C381" />
            <circle cx="224" cy="79" r="11" fill="#F4E6CB" />
            <path d="M220 90l-10 18 11 10M231 88l12 16-9 13" strokeWidth="5" />
            <circle cx="117" cy="85" r="6" fill="#41413D" />
            <circle cx="184" cy="45" r="5" fill="#41413D" />
            <path d="M222 133h24v25h-24Z" fill="#D56C52" stroke="#D56C52" />
            <path d="M228 119v7M256 138h7" stroke="#C6AD81" />
          </>
        )}
      </g>
    </svg>
  );
}
