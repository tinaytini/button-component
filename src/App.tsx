
import './App.css'
import Primary from './GroupComponents.tsx/Primary';
import Secondary from './GroupComponents.tsx/Secondary';
import Tertiary from './GroupComponents.tsx/Tertiary';
import LinkColor from './GroupComponents.tsx/LinkColor';
import LinkGrey from './GroupComponents.tsx/LinkGrey';
import Destructive from './GroupComponents.tsx/Destructive';



function App() {
  return (
    <div className=' flex flex-col justify-center content-center items-center gap-12'>
      <Primary/>
      <Secondary />
      <Tertiary />
      <LinkColor />
      <LinkGrey />
      <Destructive />
    </div>

  )
}

export default App
