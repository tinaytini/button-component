interface IconProps {
    size?: string;
    color?: string;
}


export const Star: React.FC<IconProps> = ({size, color}) => {
    return (
    <svg 
        width="20" 
        height="20" 
        viewBox="0 0 20 20" 
        fill="currentColor"
        className={`${size} ${color}`}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M10.0004 14.3472L5.10221 17.089L6.19619 11.5833L2.07495 7.77208L7.64928 7.11115L10.0004 2.01389L12.3516 7.11115L17.9259 7.77208L13.8047 11.5833L14.8986 17.089L10.0004 14.3472ZM10.0004 12.7556L12.9495 14.4063L12.2909 11.0915L14.7722 8.7968L11.416 8.39884L10.0004 5.32987L8.58485 8.39884L5.22865 8.7968L7.70997 11.0915L7.0513 14.4063L10.0004 12.7556Z" 
        fill="currentColor"
        />
    </svg>

    )
}