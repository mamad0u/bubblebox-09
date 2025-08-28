interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 40, className = '' }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 40 40" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="8" fill="#1E6DE3"/>
      <text 
        x="20" 
        y="26" 
        textAnchor="middle" 
        fill="white" 
        fontSize="20" 
        fontWeight="bold"
        fontFamily="Inter, sans-serif"
      >
        B
      </text>
    </svg>
  );
}
