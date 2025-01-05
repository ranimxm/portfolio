import { SvgProps } from "@/types/svg-props";

export const ArrowDown = ({ className }: SvgProps) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="48"
    viewBox="0 0 24 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    >
    <line x1="12" y1="5" x2="12" y2="35"></line>
    <polyline points="19 28 12 35 5 28"></polyline>
    </svg>

);
