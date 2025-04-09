
import { useEffect } from 'react'

const useTitle = (title) => {
    useEffect(() => {
      document.title=`${title}-Codebook`
    }, [title])
    
  return null
    
}

export default useTitle
