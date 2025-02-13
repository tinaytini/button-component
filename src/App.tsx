
import './App.css'
import Primary from './GroupComponents.tsx/Primary';
import Secondary from './GroupComponents.tsx/Secondary';
import Tertiary from './GroupComponents.tsx/Tertiary';
import LinkColor from './GroupComponents.tsx/LinkColor';
import LinkGrey from './GroupComponents.tsx/LinkGrey';
import Destructive from './GroupComponents.tsx/Destructive';



function App() {
  return (
    <div className='h-[768px] w-[1440px] flex flex-col items-center bg-white py-28'>
      <div className='flex flex-col justify-center items-start gap-12'>
        <Primary />
        <Secondary />
        <Tertiary />
        <LinkColor />
        <LinkGrey />
        <Destructive />
      </div>
    </div>
  )
}

export default App
