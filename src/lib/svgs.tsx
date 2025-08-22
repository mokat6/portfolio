export function Vite() {
  return (
    <svg width="32" height="32" viewBox="0 0 410 404" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient id="paint0_linear" x1="6.00017" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="194.651"
          y1="8.81818"
          x2="236.076"
          y2="292.989"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEA83" />
          <stop offset="0.0833333" stopColor="#FFDD35" />
          <stop offset="1" stopColor="#FFA800" />
        </linearGradient>
      </defs>
    </svg>
  );
}

//<img src="/logo.svg" alt="Logo" className="w-8 h-8" />

export function Radix({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      height={32}
      width={32}
      className={`rounded ${className}`}
      style={{ paddingLeft: 7 }}
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 23C3.13401 23 0 19.6422 0 15.5C0 11.3578 3.13401 8 7 8V23Z" />
      <path d="M7 0H0V7H7V0Z" />
      <path d="M11.5 7C13.433 7 15 5.433 15 3.5C15 1.567 13.433 0 11.5 0C9.56704 0 8 1.567 8 3.5C8 5.433 9.56704 7 11.5 7Z" />
    </svg>
  );
}

export function Bootstrap() {
  return (
    <svg width={32} viewBox="0 0 512 408" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bs-logo-a" gradientUnits="userSpaceOnUse" x1="76.079" x2="523.48" y1="10.798" y2="365.945">
          <stop stopColor="#9013fe" />
          <stop offset="1" stopColor="#6610f2" />
        </linearGradient>
        <linearGradient
          id="bs-logo-b"
          gradientUnits="userSpaceOnUse"
          x1="193.508"
          x2="293.514"
          y1="109.74"
          y2="278.872"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#f1e5fc" />
        </linearGradient>
      </defs>

      <path
        d="M56.481 53.32C55.515 25.58 77.128 0 106.342 0h299.353c29.214 0 50.827 25.58 49.861 53.32-.928 26.647.277 61.165 8.964 89.31 8.715 28.232 23.411 46.077 47.48 48.37v26c-24.069 2.293-38.765 20.138-47.48 48.37-8.687 28.145-9.892 62.663-8.964 89.311.966 27.739-20.647 53.319-49.861 53.319H106.342c-29.214 0-50.827-25.58-49.86-53.319.927-26.648-.278-61.166-8.966-89.311C38.802 237.138 24.07 219.293 0 217v-26c24.069-2.293 38.802-20.138 47.516-48.37 8.688-28.145 9.893-62.663 8.965-89.31z"
        fill="url(#bs-logo-a)"
      />

      <path
        d="M267.103 312.457c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217h89.202zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67v-64.814zm0 161.961v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941h-47.605z"
        fill="url(#bs-logo-b)"
        stroke="#fff"
      />
    </svg>
  );
}

export function Dotnet() {
  return (
    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" height={32} width={32}>
      <circle fill="#5c2d91" cx="32" cy="32" r="32" />
      <path fill="#fff" opacity="0.1" d="M9.82,9A32,32,0,1,0,55,54.18Z" />
      <path
        fill="#fff"
        d="M7.4,37.25a1.35,1.35,0,0,1-1-.42,1.38,1.38,0,0,1-.41-1,1.4,1.4,0,0,1,.41-1,1.34,1.34,0,0,1,1-.43,1.37,1.37,0,0,1,1,.43,1.39,1.39,0,0,1,.42,1,1.37,1.37,0,0,1-.42,1A1.38,1.38,0,0,1,7.4,37.25Z"
      />
      <path
        fill="#fff"
        d="M27.27,37H24.65L15.28,22.46a6,6,0,0,1-.58-1.14h-.08a18.72,18.72,0,0,1,.1,2.5V37H12.59V18.77h2.77l9.12,14.28q.57.89.74,1.22h.05a19.28,19.28,0,0,1-.13-2.68V18.77h2.13Z"
      />
      <path fill="#fff" d="M41.69,37H32V18.77h9.24V20.7H34.18v6.06h6.58v1.92H34.18V35h7.52Z" />
      <path fill="#fff" d="M56,20.7H50.7V37H48.57V20.7H43.33V18.77H56Z" />
      <path
        fill="#f2f2f2"
        d="M26.12,49.4a4.93,4.93,0,0,1-2.32.49,3.74,3.74,0,0,1-2.87-1.15,4.26,4.26,0,0,1-1.08-3,4.46,4.46,0,0,1,1.21-3.26,4.12,4.12,0,0,1,3.08-1.24,4.93,4.93,0,0,1,2,.35v1a4,4,0,0,0-2-.5,3.06,3.06,0,0,0-2.35,1,3.64,3.64,0,0,0-.9,2.58,3.47,3.47,0,0,0,.84,2.45,2.86,2.86,0,0,0,2.21.91,4.14,4.14,0,0,0,2.19-.56Z"
      />
      <path
        fill="#f2f2f2"
        d="M30.21,49.89A2.78,2.78,0,0,1,28.08,49a3.11,3.11,0,0,1-.79-2.23,3.24,3.24,0,0,1,.83-2.36,3,3,0,0,1,2.23-.85,2.69,2.69,0,0,1,2.09.83,3.28,3.28,0,0,1,.75,2.29,3.22,3.22,0,0,1-.81,2.3A2.84,2.84,0,0,1,30.21,49.89Zm.07-5.47a1.83,1.83,0,0,0-1.46.63,2.59,2.59,0,0,0-.54,1.74,2.45,2.45,0,0,0,.54,1.68,1.85,1.85,0,0,0,1.46.62,1.76,1.76,0,0,0,1.43-.6,2.62,2.62,0,0,0,.5-1.72,2.66,2.66,0,0,0-.5-1.73A1.75,1.75,0,0,0,30.28,44.42Z"
      />
      <path
        fill="#f2f2f2"
        d="M37.86,44.72a1.18,1.18,0,0,0-.73-.19,1.23,1.23,0,0,0-1,.58,2.68,2.68,0,0,0-.41,1.58v3.06h-1v-6h1V45h0a2.1,2.1,0,0,1,.63-1,1.43,1.43,0,0,1,.94-.35,1.57,1.57,0,0,1,.57.08Z"
      />
      <path
        fill="#f2f2f2"
        d="M43.72,47H39.49A2.24,2.24,0,0,0,40,48.54a1.86,1.86,0,0,0,1.42.54,3,3,0,0,0,1.86-.67v.9a3.48,3.48,0,0,1-2.09.57,2.54,2.54,0,0,1-2-.82,3.35,3.35,0,0,1-.73-2.3,3.28,3.28,0,0,1,.79-2.28,2.55,2.55,0,0,1,2-.88,2.26,2.26,0,0,1,1.82.76,3.18,3.18,0,0,1,.64,2.12Zm-1-.81a2,2,0,0,0-.4-1.29,1.37,1.37,0,0,0-1.1-.46,1.55,1.55,0,0,0-1.15.49,2.21,2.21,0,0,0-.59,1.27Z"
      />
    </svg>
  );
}

export const Tanstack = () => {
  return (
    //  eslint-disable-next-line @next/next/no-img-element
    <img
      height={32}
      width={32}
      src="data:image/png;base64,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"
      alt="Tanstack logo"
    />
  );
};

export function Java() {
  return (
    <svg viewBox="-24 0 296 296" width={32} height={32} xmlns="http://www.w3.org/2000/svg">
      <g id="Layer 1">
        <path
          fill="#5382a1"
          d="m79.9 226.8c0 0-11 6.4 7.9 8.6 22.9 2.6 34.6 2.2 59.8-2.6 0 0 6.6 4.2 15.9 7.8-56.5 24.2-128-1.4-83.6-13.8z"
        />
        <path
          fill="#5382a1"
          d="m73 195.2c0 0-12.4 9.1 6.6 11.1 24.4 2.5 43.7 2.7 77.1-3.7 0 0 4.6 4.7 11.9 7.2-68.4 20-144.5 1.6-95.6-14.6z"
        />
        <path
          fill="#f8981d"
          d="m131.3 141.5c13.9 16.1-3.7 30.5-3.7 30.5 0 0 35.4-18.3 19.1-41.1-15.1-21.4-26.8-31.9 36.2-68.5 0 0-98.9 24.7-51.6 79.1z"
        />
        <path
          fill="#5382a1"
          d="m206.1 250.2c0 0 8.1 6.7-9 11.9-32.7 9.9-135.9 12.9-164.5 0.4-10.4-4.5 9-10.7 15.1-12 6.3-1.4 9.9-1.1 9.9-1.1-11.4-8.1-74.1 15.8-31.8 22.7 115.3 18.7 210.2-8.4 180.3-21.9z"
        />
        <path
          fill="#5382a1"
          d="m85.2 162.4c0 0-52.5 12.5-18.5 17 14.3 1.9 42.8 1.5 69.4-0.7 21.7-1.9 43.5-5.8 43.5-5.8 0 0-7.6 3.3-13.2 7.1-53.3 14-156.3 7.5-126.6-6.8 25.1-12.2 45.4-10.8 45.4-10.8z"
        />
        <path
          fill="#5382a1"
          d="m179.4 215c54.2-28.1 29.1-55.2 11.7-51.5-4.3 0.9-6.2 1.6-6.2 1.6 0 0 1.6-2.5 4.6-3.5 34.6-12.2 61.2 35.8-11.2 54.9 0 0 0.9-0.8 1.1-1.5z"
        />
        <path
          fill="#f8981d"
          d="m146.7 3.4c0 0 30.1 30-28.4 76.2-46.9 37-10.7 58.2 0 82.3-27.4-24.7-47.5-46.5-34-66.7 19.8-29.7 74.6-44.1 62.4-91.8z"
        />
        <path
          fill="#5382a1"
          d="m90.6 291.4c52 3.3 131.9-1.9 133.8-26.5 0 0-3.7 9.3-43 16.7-44.4 8.4-99.2 7.4-131.7 2.1 0 0 6.7 5.5 40.9 7.7z"
        />
      </g>
    </svg>
  );
}

export const LottiePlaceholder = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 540 531"
    width="507"
    height="498"
    preserveAspectRatio="xMidYMid meet"
    style={{
      width: "100%",
      height: "100%",
      transform: "translate3d(0px, 0px, 0px)",
      contentVisibility: "visible",
      filter: "blur(2px)",
    }}
  >
    <defs>
      <clipPath id="__lottie_element_2">
        <rect width="540" height="531" x="0" y="0" />
      </clipPath>
      <clipPath id="__lottie_element_4">
        <path d="M0,0 L600,0 L600,600 L0,600z" />
      </clipPath>
      <clipPath id="__lottie_element_11">
        <path
          fill="currentColor"
          clipRule="nonzero"
          d=" M-217.11500549316406,169.50900268554688 C-217.11500549316406,169.50900268554688 -217.38099670410156,207.00799560546875 -217.38099670410156,207.00799560546875 C-217.38099670410156,207.00799560546875 -59.63399887084961,208.1280059814453 -59.63399887084961,208.1280059814453 C-59.63399887084961,208.1280059814453 -59.36800003051758,170.62899780273438 -59.36800003051758,170.62899780273438 C-59.36800003051758,170.62899780273438 -217.11500549316406,169.50900268554688 -217.11500549316406,169.50900268554688"
          fillOpacity="1"
        />
      </clipPath>
      <clipPath id="__lottie_element_14">
        <path
          fill="currentColor"
          clipRule="nonzero"
          d=" M-217.11500549316406,169.50900268554688 C-217.11500549316406,169.50900268554688 -217.38099670410156,207.00799560546875 -217.38099670410156,207.00799560546875 C-217.38099670410156,207.00799560546875 -59.63399887084961,208.1280059814453 -59.63399887084961,208.1280059814453 C-59.63399887084961,208.1280059814453 -59.36800003051758,170.62899780273438 -59.36800003051758,170.62899780273438 C-59.36800003051758,170.62899780273438 -217.11500549316406,169.50900268554688 -217.11500549316406,169.50900268554688"
          fillOpacity="1"
        />
      </clipPath>
      <clipPath id="__lottie_element_17">
        <path
          fill="currentColor"
          clipRule="nonzero"
          d=" M-217.11500549316406,169.50900268554688 C-217.11500549316406,169.50900268554688 -217.38099670410156,207.00799560546875 -217.38099670410156,207.00799560546875 C-217.38099670410156,207.00799560546875 -59.63399887084961,208.1280059814453 -59.63399887084961,208.1280059814453 C-59.63399887084961,208.1280059814453 -59.36800003051758,170.62899780273438 -59.36800003051758,170.62899780273438 C-59.36800003051758,170.62899780273438 -217.11500549316406,169.50900268554688 -217.11500549316406,169.50900268554688"
          fillOpacity="1"
        />
      </clipPath>
    </defs>

    <g clipPath="url(#__lottie_element_2)">
      <g transform="matrix(1,0,0,1,305,303.5)" opacity={1} style={{ display: "block" }}>
        <g opacity={1} transform="matrix(1,0,0,1,-197.25,-165.25)">
          <g opacity={1} transform="matrix(1,0,0,1,300.5,-0.75)">
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity={0}
              strokeMiterlimit={4}
              stroke="currentColor"
              strokeOpacity={1}
              strokeWidth={7}
              d=" M94.25,-93.25 C94.25,-93.25 94.25,93.25 94.25,93.25 C94.25,93.25 -94.25,93.25 -94.25,93.25 C-94.25,93.25 -94.25,-93.25 -94.25,-93.25 C-94.25,-93.25 94.25,-93.25 94.25,-93.25z"
            />
          </g>

          <g opacity={1} transform="matrix(1,0,0,1,301.25,293.25)">
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity={0}
              strokeMiterlimit={4}
              stroke="currentColor"
              strokeOpacity={1}
              strokeWidth={7}
              d=" M94.25,-93.25 C94.25,-93.25 94.25,93.25 94.25,93.25 C94.25,93.25 -94.25,93.25 -94.25,93.25 C-94.25,93.25 -94.25,-93.25 -94.25,-93.25 C-94.25,-93.25 94.25,-93.25 94.25,-93.25z"
            />
          </g>

          <path
            strokeLinecap="butt"
            strokeLinejoin="miter"
            fillOpacity={0}
            strokeMiterlimit={4}
            stroke="currentColor"
            strokeOpacity={1}
            strokeWidth={7}
            d=" M94.25,-93.25 C94.25,-93.25 94.25,93.25 94.25,93.25 C94.25,93.25 -94.25,93.25 -94.25,93.25 C-94.25,93.25 -94.25,-93.25 -94.25,-93.25 C-94.25,-93.25 94.25,-93.25 94.25,-93.25z"
          />
        </g>
      </g>

      <g
        clipPath="url(#__lottie_element_4)"
        transform="matrix(1,0,0,1,-44,-41)"
        opacity={1}
        style={{ display: "block" }}
      >
        <g transform="matrix(1,0,0,1,314.625,300)" opacity={1} style={{ display: "block" }}>
          <g opacity={1} transform="matrix(1,0,0,1,-139.25,100.25)">
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity={0}
              strokeMiterlimit={4}
              stroke="currentColor"
              strokeOpacity={1}
              strokeWidth={7}
              d=" M0,-18.75 C38.21907424926758,-18.75 69.25,-10.348125457763672 69.25,0 C69.25,10.348125457763672 38.21907424926758,18.75 0,18.75 C-38.21907424926758,18.75 -69.25,10.348125457763672 -69.25,0 C-69.25,-10.348125457763672 -38.21907424926758,-18.75 0,-18.75z"
            />
          </g>
        </g>

        <g
          clipPath="url(#__lottie_element_17)"
          transform="matrix(1,0,0,1,315.375,275.75)"
          opacity={1}
          style={{ display: "block" }}
        >
          <g opacity={1} transform="matrix(1,0,0,1,-139.25,170.25)">
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity={0}
              strokeMiterlimit={4}
              stroke="currentColor"
              strokeOpacity={1}
              strokeWidth={7}
              d=" M0,-18.75 C38.21907424926758,-18.75 69.25,-10.348125457763672 69.25,0 C69.25,10.348125457763672 38.21907424926758,18.75 0,18.75 C-38.21907424926758,18.75 -69.25,10.348125457763672 -69.25,0 C-69.25,-10.348125457763672 -38.21907424926758,-18.75 0,-18.75z"
            />
          </g>
        </g>

        <g
          clipPath="url(#__lottie_element_14)"
          transform="matrix(1,0,0,1,315.375,322)"
          opacity={1}
          style={{ display: "block" }}
        >
          <g opacity={1} transform="matrix(1,0,0,1,-139.25,170.25)">
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity={0}
              strokeMiterlimit={4}
              stroke="currentColor"
              strokeOpacity={1}
              strokeWidth={7}
              d=" M0,-18.75 C38.21907424926758,-18.75 69.25,-10.348125457763672 69.25,0 C69.25,10.348125457763672 38.21907424926758,18.75 0,18.75 C-38.21907424926758,18.75 -69.25,10.348125457763672 -69.25,0 C-69.25,-10.348125457763672 -38.21907424926758,-18.75 0,-18.75z"
            />
          </g>
        </g>

        <g
          clipPath="url(#__lottie_element_11)"
          transform="matrix(1,0,0,1,315.375,366)"
          opacity={1}
          style={{ display: "block" }}
        >
          <g opacity={1} transform="matrix(1,0,0,1,-139.25,170.25)">
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity={0}
              strokeMiterlimit={4}
              stroke="currentColor"
              strokeOpacity={1}
              strokeWidth={7}
              d=" M0,-18.75 C38.21907424926758,-18.75 69.25,-10.348125457763672 69.25,0 C69.25,10.348125457763672 38.21907424926758,18.75 0,18.75 C-38.21907424926758,18.75 -69.25,10.348125457763672 -69.25,0 C-69.25,-10.348125457763672 -38.21907424926758,-18.75 0,-18.75z"
            />
          </g>
        </g>

        <g transform="matrix(1,0,0,1,314.625,300)" opacity={1} style={{ display: "block" }}>
          <g opacity={1} transform="matrix(1,0,0,1,0,0)">
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity={0}
              strokeMiterlimit={4}
              stroke="currentColor"
              strokeOpacity={1}
              strokeWidth={7}
              d=" M-208.25,99.375 C-208.25,99.375 -208.25,238.125 -208.25,238.125"
            />
          </g>
          <g opacity={1} transform="matrix(1,0,0,1,0,0)">
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity={0}
              strokeMiterlimit={4}
              stroke="currentColor"
              strokeOpacity={1}
              strokeWidth={7}
              d=" M-69.5,100.5 C-69.5,100.5 -69.5,239.375 -69.5,239.375"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
