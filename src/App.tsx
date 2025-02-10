
import './App.css'
import Button from './Button'
import { Star } from './icons/Star';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link-color' | 'link-grey' | 'destructive';


interface ButtonConfig {
  size: 'M' | 'L' | 'XL' | '2XL';
  showStar: boolean;
  starPosition: null | 'left' | 'right' | 'center';
  starSize?: string
}

const buttonVariants: ButtonVariant[] = ['primary', 'secondary', 'tertiary', 'link-color', 'link-grey', 'destructive'];


const buttons: ButtonConfig[] = [
  { size: 'M', showStar: false, starPosition: null },
  { size: 'L', showStar: true, starPosition: 'left' },
  { size: 'XL', showStar: true, starPosition: 'right' },
  { size: '2XL', showStar: false, starPosition: null },
  { size: '2XL', showStar: true, starPosition: 'center', starSize: 'h-6 w-6' },
]



function App() {
  return (
    <>
      {buttonVariants.map((variant) => (<div className='mx-auto my-12 flex justify-center items-center gap-12'>
        {buttons.map(({ size, showStar, starPosition, starSize }, index) => (
          <Button key={index} variant={variant} size={size}>

            <div className='flex items-center gap-2'>
              {(showStar && starPosition === 'left') && <Star />}
              {starPosition !== 'center' && 'Button CTA'}
              {(showStar && starPosition === 'center') && <Star size={starSize} />}
              {(showStar && starPosition === 'right') && <Star />}
            </div>

          </Button>
        ))}
      </div>))
      }
    </>

  )
}

export default App
