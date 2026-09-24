type Kind =
  "voice" | "companion" | "code" | "wheel" | "car" | "dog" | "arm" | "camp";

// Original vector illustrations in a consistent hardware sketchbook style.
export function CourseArt({ kind }: { kind: Kind }) {
  return (
    <svg
      className="hardware-illustration"
      viewBox="0 0 300 210"
      fill="none"
      aria-hidden="true"
    >
      {kind === "camp" && (
        <g
          stroke="#31544b"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M58 170V82l64-36 63 36v88M47 170h207M90 170v-41h63v41M74 96h20v17H74zM145 96h20v17h-20z"
            fill="#f9f5ea"
          />
          <path d="M188 170V103h51v67M203 117h21v20h-21z" fill="#e5eee5" />
          <path d="M122 46V25h39l-9 10 9 10h-39" fill="#dd5141" />
          <circle cx="121" cy="84" r="10" fill="#f4cc6e" />
          <path
            d="m220 56 4 10 11 1-8 7 2 11-9-6-9 6 2-11-8-7 11-1z"
            fill="#f4cc6e"
          />
        </g>
      )}
      <ellipse
        cx="150"
        cy={kind === "voice" ? 194 : 181}
        rx={kind === "voice" ? 66 : 89}
        ry={kind === "voice" ? 7 : 9}
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
          <g stroke="#947E73" strokeWidth="2.2">
            {/* Soft ears and a little cotton tail, behind the face and body. */}
            <path
              d="M121 82C111 67 93 36 103 20C111 7 123 15 129 30C136 46 138 64 137 78Z"
              fill="#FFFCF5"
            />
            <path
              d="M161 77C163 54 169 17 183 15C199 12 201 30 194 48C190 61 183 75 179 83Z"
              fill="#FFFCF5"
            />
            <path
              d="M122 69C115 55 104 29 111 25C119 20 126 51 127 68Z"
              fill="#F2BAB8"
              stroke="none"
            />
            <path
              d="M170 68C172 50 178 25 185 25C194 27 180 58 175 71Z"
              fill="#F2BAB8"
              stroke="none"
            />
            <circle cx="186" cy="166" r="13" fill="#FFFCF5" />
            <path
              d="M122 133C111 148 112 171 122 181C132 193 168 193 179 179C188 166 183 145 173 133Z"
              fill="#F8EEE3"
            />
            <ellipse
              cx="150"
              cy="163"
              rx="22"
              ry="24"
              fill="#FFFCF7"
              stroke="none"
            />
            <ellipse
              cx="127"
              cy="185"
              rx="18"
              ry="10"
              transform="rotate(-9 127 185)"
              fill="#FFFCF5"
            />
            <ellipse
              cx="171"
              cy="185"
              rx="18"
              ry="10"
              transform="rotate(9 171 185)"
              fill="#FFFCF5"
            />
            <path
              d="M116 143C105 144 100 155 105 163C110 171 120 164 124 155"
              fill="#FFFCF5"
            />
            <path
              d="M179 148C188 143 191 134 195 130C199 125 205 128 205 135C205 149 194 160 185 159"
              fill="#FFFCF5"
            />
            <ellipse
              cx="199"
              cy="137"
              rx="3"
              ry="4"
              fill="#F1C4BD"
              stroke="none"
            />
            {/* Rounded cheeks, glossy eyes, and a tiny rabbit mouth. */}
            <path
              d="M97 102C97 76 117 63 141 63L147 58L153 63C180 61 201 76 203 100C206 123 189 143 152 144C117 145 96 128 97 102Z"
              fill="#FFFCF5"
            />
            <ellipse
              cx="116"
              cy="117"
              rx="11"
              ry="6"
              fill="#F3C2BE"
              stroke="none"
            />
            <ellipse
              cx="183"
              cy="117"
              rx="11"
              ry="6"
              fill="#F3C2BE"
              stroke="none"
            />
            <ellipse
              cx="129"
              cy="103"
              rx="6.8"
              ry="8.2"
              fill="#54413C"
              stroke="none"
            />
            <ellipse
              cx="171"
              cy="103"
              rx="6.8"
              ry="8.2"
              fill="#54413C"
              stroke="none"
            />
            <g fill="#FFFFFF" stroke="none">
              <circle cx="127" cy="100" r="2.3" />
              <circle cx="169" cy="100" r="2.3" />
              <circle cx="132" cy="107" r="1.1" />
              <circle cx="174" cy="107" r="1.1" />
            </g>
            <path
              d="M145 114Q150 111 155 114Q156 116 150 120Q144 116 145 114Z"
              fill="#DA9694"
              stroke="none"
            />
            <path
              d="M150 120V122M150 122Q144 128 140 122M150 122Q156 128 160 122"
              stroke="#886D63"
              strokeWidth="1.8"
            />
            <path
              d="M149 150C137 141 132 143 134 150L133 156C136 161 144 156 149 153C154 159 164 161 166 156L165 148C165 142 157 144 152 150"
              fill="#A8C5B3"
              stroke="#7A9C89"
              strokeWidth="1.5"
            />
            <circle
              cx="150"
              cy="152"
              r="4"
              fill="#C8DED0"
              stroke="#7A9C89"
              strokeWidth="1.5"
            />
            <path
              d="M150 176C147 173 140 169 142 165C144 161 148 163 150 166C152 163 156 161 158 165C160 169 153 174 150 176Z"
              fill="#DE9994"
              stroke="none"
            />
            {/* A quiet conversational cue for the voice-toy course. */}
            <path
              d="M219 72C219 62 228 57 239 59C250 60 255 69 251 77C249 83 242 86 234 84L226 89L227 81C222 79 219 76 219 72Z"
              fill="#FFFCF5"
              stroke="#BDCCB5"
              strokeWidth="1.6"
            />
            <g fill="#91AC91" stroke="none">
              <circle cx="229" cy="72" r="2" />
              <circle cx="236" cy="72" r="2" />
              <circle cx="243" cy="72" r="2" />
            </g>
            <path d="M65 91V103M59 97H71" stroke="#C0A86E" strokeWidth="2" />
            <path
              d="M226 150V158M222 154H230"
              stroke="#C0A86E"
              strokeWidth="1.8"
            />
            <circle cx="76" cy="139" r="2.5" fill="#B7C9A9" stroke="none" />
          </g>
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
