import React from "react";

function Icon_mosquito() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsBx="https://boxy-svg.com"
      viewBox="0 0 500 500"
    >
      <defs>
        <linearGradient
          id="gradient-2"
          x1="236.927"
          x2="236.927"
          y1="80.629"
          y2="295.075"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="rgba(85, 183, 218, 1)"></stop>
          <stop offset="1" stopColor="rgba(36, 131, 165, 1)"></stop>
        </linearGradient>
        <filter
          id="inner-shadow-filter-0"
          width="1000%"
          height="1000%"
          x="-500%"
          y="-500%"
          bxPreset="inner-shadow 1 0 0 10 0.5 rgba(0,0,0,0.7)"
        >
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="10"></feGaussianBlur>
          <feComposite in="SourceGraphic" operator="out"></feComposite>
          <feComponentTransfer result="choke">
            <feFuncA type="linear"></feFuncA>
          </feComponentTransfer>
          <feFlood floodColor="rgba(0,0,0,0.7)" result="color"></feFlood>
          <feComposite
            in="color"
            in2="choke"
            operator="in"
            result="shadow"
          ></feComposite>
          <feComposite in="shadow" in2="SourceGraphic"></feComposite>
        </filter>
        <filter
          id="inner-shadow-filter-2"
          width="1000%"
          height="1000%"
          x="-500%"
          y="-500%"
          bxPreset="inner-shadow 1 0 0 10 0.5 rgba(0,0,0,0.7)"
        >
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="10"></feGaussianBlur>
          <feComposite in="SourceGraphic" operator="out"></feComposite>
          <feComponentTransfer result="choke">
            <feFuncA type="linear"></feFuncA>
          </feComponentTransfer>
          <feFlood floodColor="rgba(0,0,0,0.7)" result="color"></feFlood>
          <feComposite
            in="color"
            in2="choke"
            operator="in"
            result="shadow"
          ></feComposite>
          <feComposite in="shadow" in2="SourceGraphic"></feComposite>
        </filter>
        <filter
          id="drop-shadow-filter-0"
          width="1000%"
          height="1000%"
          x="-500%"
          y="-500%"
          bxPreset="drop-shadow 1 10 10 0 0.5 rgba(0,0,0,0.3)"
        >
          <feGaussianBlur in="SourceAlpha"></feGaussianBlur>
          <feOffset dx="10" dy="10"></feOffset>
          <feComponentTransfer result="offsetblur">
            <feFuncA slope="1" type="linear"></feFuncA>
          </feComponentTransfer>
          <feFlood floodColor="rgba(0,0,0,0.3)"></feFlood>
          <feComposite in2="offsetblur" operator="in"></feComposite>
          <feMerge>
            <feMergeNode></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>
      <circle
        cx="236.927"
        cy="187.852"
        r="107.223"
        fill="#A4D0E7"
        stroke="#CFCFCF"
        filter="url(#inner-shadow-filter-2)"
        paintOrder="fill"
        transform="matrix(1.91963 0 0 2.19711 -182.735 -160.373)"
      ></circle>
      <circle
        cx="236.927"
        cy="187.852"
        r="107.223"
        fill="url(#gradient-2)"
        stroke="#A4D0E7"
        filter="url(#inner-shadow-filter-0)"
        transform="matrix(1.91963 0 0 2.19711 -230.736 -162.151)"
      ></circle>
      <circle
        cx="237.823"
        cy="186.879"
        r="97.848"
        fill="#A4D0E7"
        stroke="#A4D0E7"
        filter="none"
        transform="matrix(1.91963 0 0 2.19711 -232.513 -159.93)"
      ></circle>
      <path
        fill="#DE5353"
        stroke="#DE5353"
        strokeWidth="2"
        d="M263.736 207.155l.059-3.144 112.241 19.687c21.856 15.343-4.251 31.963-20.897 20.278zM84.265 243.973c-16.75 11.679-42.716-4.934-20.721-20.275l112.388-19.69.037 3.141zm111.395 14.286l.044-11.628 12.029-11.625-11.927-11.622 4.03-11.618-11.947-3.879-4.016 3.879.056-11.626 3.973 3.871 8.018-7.75 19.923 7.75h11.985l16.001-7.75 7.95 7.75 4.012-3.871-.056 11.626-3.973-3.879-11.993 3.879 3.947 11.618-12.034 11.622 11.93 11.625-.046 11.628zm-.019 3.876h47.909c3.977 3.869 7.949 7.749 7.93 11.624 4.979 0-27.11 77.265-32.084 77.265-4.876.242-36.856-77.018-31.787-77.265.017-3.875 4.023-7.755 8.032-11.624zm-16.011 7.749l-39.999 19.369-32.187 58.114-3.976-3.873 28.418-58.36 55.768-22.999zm71.901-7.749l55.546 22.999 27.946 58.36-4.023 3.873-31.698-58.112-39.816-19.558zm-60.083 46.489l-40.025 23.244-24.197 58.122-3.979-3.879 20.209-58.114 44.019-23.247zm59.898-3.874l43.823 23.247 19.714 58.117-4.008 3.876-23.712-58.116-39.818-23.246zm-51.349-127.857l-8.004 3.874 8.065-19.371-24.465-22.763 7.663-.158 24.787 22.921h27.942l24.063-23.246h7.981l-24.053 23.246 7.897 19.371-7.964-3.874-8.02 7.749h-27.945zm-12.343 11.625l-4.241 4.061-43.833-15.658-39.736-50.514-7.442 3.725 7.711-11.358 43.439 54.426zM296.401 173.2l43.896-54.426 7.615 11.355-7.422-3.722-40.156 50.514-44.517 15.468-3.975-3.871z"
        filter="url(#drop-shadow-filter-0)"
        transform="rotate(16.208 219.736 222.92)"
        bxOrigin="0.5 0.384"
      ></path>
    </svg>
  );
}

export default Icon;
