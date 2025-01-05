import { SvgProps } from "@/types/svg-props";

export const ChevronRight = ({ className }: SvgProps) => (
    <svg
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
        d="M8 5L15.57 11.6237C15.7976 11.8229 15.7976 12.1771 15.57 12.3763L8 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        />
    </svg>
);
