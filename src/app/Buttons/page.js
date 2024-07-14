import React from 'react'
import { Button } from '@nextui-org/react'
const Buttons = () => {
  return (
    <>
    <div className='items-center mx-[200px] my-10'>
        <Button
      isLoading
      color="secondary" 
      spinner={
        <svg
          className="animate-spin h-5 w-5 text-current"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            fill="currentColor"
          />
        </svg>
      }
    >
      Loading
    </Button>
    </div>  

<div className="flex flex-wrap gap-4 items-center mx-[200px]">
<Button color="default">
  Default
</Button>
<Button color="primary">
  Primary
</Button>  
<Button color="secondary">
  Secondary
</Button>  
<Button color="success">
  Success
</Button>  
<Button color="warning">
  Warning
</Button>  
<Button color="danger">
  Danger
</Button>  
</div>


<Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      Button
    </Button>
</>
  )
}

export default Buttons
