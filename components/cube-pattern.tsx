export function CubePattern() {
  return (
    <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden pointer-events-none hidden lg:block">
      <svg
        className="absolute right-20 top-20 w-[600px] h-[600px]"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="cube-animation">
          {/* Main horizontal lines */}
          <path
            d="M200 200 L600 200"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gray-300/20 dark:text-gray-300/10"
          />
          <path
            d="M200 400 L600 400"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gray-300/20 dark:text-gray-300/10"
          />

          {/* Main vertical lines */}
          <path
            d="M300 100 L300 500"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gray-300/20 dark:text-gray-300/10"
          />
          <path
            d="M500 100 L500 500"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gray-300/20 dark:text-gray-300/10"
          />

          {/* Isometric lines - emerald */}
          <path
            d="M200 200 L300 150"
            stroke="currentColor"
            strokeWidth="1"
            className="text-emerald-500/20 dark:text-emerald-500/40"
          />
          <path
            d="M300 150 L500 150"
            stroke="currentColor"
            strokeWidth="1"
            className="text-emerald-500/20 dark:text-emerald-500/40"
          />
          <path
            d="M500 150 L600 200"
            stroke="currentColor"
            strokeWidth="1"
            className="text-emerald-500/20 dark:text-emerald-500/40"
          />
          <path
            d="M300 350 L500 350"
            stroke="currentColor"
            strokeWidth="1"
            className="text-emerald-500/20 dark:text-emerald-500/40"
          />
          <path
            d="M500 350 L600 400"
            stroke="currentColor"
            strokeWidth="1"
            className="text-emerald-500/20 dark:text-emerald-500/40"
          />
          <path
            d="M200 400 L300 350"
            stroke="currentColor"
            strokeWidth="1"
            className="text-emerald-500/20 dark:text-emerald-500/40"
          />

          {/* Intersection dots */}
          <circle cx="300" cy="150" r="2" className="fill-emerald-500/20 dark:fill-emerald-500/40" />
          <circle cx="500" cy="150" r="2" className="fill-emerald-500/20 dark:fill-emerald-500/40" />
          <circle cx="300" cy="350" r="2" className="fill-emerald-500/20 dark:fill-emerald-500/40" />
          <circle cx="500" cy="350" r="2" className="fill-emerald-500/20 dark:fill-emerald-500/40" />
          <circle cx="200" cy="200" r="2" className="fill-emerald-500/20 dark:fill-emerald-500/40" />
          <circle cx="600" cy="200" r="2" className="fill-emerald-500/20 dark:fill-emerald-500/40" />
          <circle cx="200" cy="400" r="2" className="fill-emerald-500/20 dark:fill-emerald-500/40" />
          <circle cx="600" cy="400" r="2" className="fill-emerald-500/20 dark:fill-emerald-500/40" />
        </g>
      </svg>
    </div>
  )
}

