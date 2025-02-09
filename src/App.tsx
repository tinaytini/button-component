
import './App.css'
import Button from './Button'

function App() {
  return (
    <div className='w-[695px] mx-auto my-0 flex flex-col justify-center items-center gap-16'>
      <div className="flex justify-between items-center gap-5">
        {}
        <Button 
          variant='primary'
        />
        <Button 
          variant='primary'
          disabled={true}
        />
      </div>

      <div className="flex justify-between items-center gap-5">
        <Button 
          variant='secondary'
        />
        <Button 
          variant='secondary'
          disabled={true}
        />
      </div>

      <div className="flex justify-between items-center gap-5">
        <Button 
          variant='tertiary'
        />
        <Button 
          variant='tertiary'
          disabled={true}
        />
      </div>

      <div className="flex justify-left items-center gap-5">
        <Button 
          variant='link-color'
        />
        <Button 
          variant='link-color'
          disabled={true}
        />
      </div>

      <div className="flex justify-left items-center gap-5">
        <Button 
          variant='link-grey'
        />
        <Button 
          variant='link-grey'
          disabled={true}
        />
      </div>

      <div className="flex justify-center items-center gap-5">
        <Button 
          variant='destructive'
        />
        <Button 
          variant='destructive'
          disabled={true}
        />
      </div>

    </div>
  )
}

export default App
