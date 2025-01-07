import { SvgProps } from "@/types/svg-props";

export const ArrowDown = ({ className }: SvgProps) => (
    <svg
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <line
            x1="12"
            y1="5"
            x2="12"
            y2="15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
        <path
            d="M6 15L12 21L18 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>

);
