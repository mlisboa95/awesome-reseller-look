interface GeoDividerProps {
  flip?: boolean;
  className?: string;
}

const GeoDivider = ({ flip = false, className = "" }: GeoDividerProps) => {
  return (
    <div className={`relative w-full h-16 md:h-24 overflow-hidden ${className}`} style={{ transform: flip ? 'scaleY(-1)' : undefined }}>
      {/* Base triangle */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background layer */}
        <polygon
          points="0,96 720,0 1440,96"
          fill="hsl(200, 100%, 47%)"
          opacity="0.06"
        />
        {/* Middle layer - offset */}
        <polygon
          points="100,96 750,12 1340,96"
          fill="hsl(210, 100%, 50%)"
          opacity="0.04"
        />
        {/* Top accent line */}
        <polyline
          points="0,96 720,0 1440,96"
          fill="none"
          stroke="hsl(200, 100%, 47%)"
          strokeWidth="1"
          opacity="0.15"
        />
      </svg>
    </div>
  );
};

export default GeoDivider;
