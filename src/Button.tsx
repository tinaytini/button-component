
// import { Star } from "./icons/Star"


interface ButtonProps {
    variant: keyof typeof variants,
    disabled?: boolean;
}

const focusStyles: string = "focus:outline-indigo-200 focus:outline-2"
const disabledStyles: string = `bg-neutral-100 cursor-not-allowed hover:bg-neutral-100 focus:bg-neutral-100`;


const variants = {
    'primary': `bg-indigo-700 text-white hover:bg-indigo-800 ${focusStyles} disabled:border-gray-200`,
    'secondary': `bg-white text-neutral-900 border-[0.5px] border-solid border-neutral-200 hover:bg-neutral-50 ${focusStyles} disabled:border-gray-200`,
    'tertiary': `text-indigo-700 hover:bg-neutral-50 ${focusStyles} disabled:border-gray-200`,
    'link-color': `text-indigo-700 hover:text-indigo-800 ${focusStyles} disabled:border-gray-200`,
    'link-grey': `text-neutral-600 hover:text-neutral-900 ${focusStyles} focus:text-neutral-900 disabled:border-gray-200`,
    'destructive': `bg-red-600 text-white hover:bg-red-700 focus:outline-red-200 focus:outline-2`
}


const Button: React.FC<ButtonProps> = ({variant, disabled}) => {
    return (
        <button className=
        {
        `${variants[variant]}
        py-2.5 px-3.5 rounded flex justify-center items-center gap-1 font-[Noto_Sans]
        ${disabled ? disabledStyles : ''}
        disabled=${disabled}
        `
        }
        >
            {/* <img src="/public/_Placeholder-icon.svg" className="text-red-500"/> */}
            <span className={`${disabled && 'text-neutral-400'} text-sm font-medium`}>Button CTA</span>
            {/* <Star/> */}
        </button>
    )
}

export default Button;