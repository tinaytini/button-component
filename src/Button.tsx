interface ButtonProps {
    variant: keyof typeof variants,
    disabled?: boolean;
    children: JSX.Element;
    size: keyof typeof sizes;
}

const focusStyles: string = "focus:outline-indigo-200 focus:outline-2";
const sizes = {
    'M': 'px-3.5 py-2.5 text-sm',
    'L': 'px-4 py-2.5 text-base',
    'XL': 'px-5 py-3 text-base',
    '2XL':'px-6 py-4 text-lg',
}

const variants = {
    'primary': `bg-indigo-700 text-white hover:bg-indigo-800 ${focusStyles} disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed`,
    'secondary': `bg-white text-neutral-900 border-[0.5px] border-neutral-200 hover:bg-neutral-50 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-neutral-100 disabled:cursor-not-allowed ${focusStyles}`,
    'tertiary': `text-indigo-700 hover:bg-neutral-50 disabled:text-neutral-400 disabled:hover:bg-white disabled:cursor-not-allowed ${focusStyles}`,
    'link-color': `text-indigo-700 hover:text-indigo-800 disabled:text-neutral-400 disabled:cursor-not-allowed ${focusStyles}`,
    'link-grey': `text-neutral-600 hover:text-neutral-900 disabled:text-neutral-400 disabled:text-neutral-400 disabled:cursor-not-allowed ${focusStyles}`,
    'destructive': `bg-red-600 text-white hover:bg-red-700 disabled:bg-white disabled:text-neutral-400 disabled:cursor-not-allowed focus:outline-red-200 focus:outline-2`
};

const Button: React.FC<ButtonProps> = ({ variant, disabled, size, children }) => {
    return (
        <button
            className={`
                ${variants[variant]} 
                ${sizes[size]} rounded flex justify-center items-center gap-1
            `}
            disabled={disabled}
        >
            <div className="font-medium">{children}</div>
        </button>
    );
};

export default Button;
