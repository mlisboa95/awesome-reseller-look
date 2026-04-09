interface WaveDividerProps {
  type: "exit" | "entry";
  color?: "secondary" | "background";
  className?: string;
}

const WaveDivider = ({ type, color = "background", className = "" }: WaveDividerProps) => {
  const fillColor = "hsl(201, 100%, 37%)";
  const strokeColor = "rgba(255, 255, 255, 0.3)";
  const strokeWidth = 2;
  
  if (type === "exit") {
    // Wave going down into black section - only stroke the curved part
    return (
      <div className={`w-full overflow-hidden leading-none ${className}`}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[40px] md:h-[60px] lg:h-[80px]"
        >
          {/* Fill the shape */}
          <path
            d="M0,60 Q360,120 720,60 T1440,60 L1440,120 L0,120 Z"
            fill={fillColor}
          />
          {/* Only stroke the curved line, not the bottom */}
          <path
            d="M0,60 Q360,120 720,60 T1440,60"
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        </svg>
      </div>
    );
  }

  // Wave going up out of black section - only stroke the curved part
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[40px] md:h-[60px] lg:h-[80px]"
      >
        {/* Fill the shape */}
        <path
          d="M0,0 L0,60 Q360,0 720,60 T1440,60 L1440,0 Z"
          fill={fillColor}
        />
        {/* Only stroke the curved line, not the top */}
        <path
          d="M0,60 Q360,0 720,60 T1440,60"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
