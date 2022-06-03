import React, { useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
import shallow from 'zustand/shallow'

import { Box, useStore } from './Ani/Box'
import { Stars } from './Ani/Stars'

export const F4=()=>{
  const [boxes, mutate] = useStore(state => [state.boxes, state.mutate], shallow)

  useEffect(() => {
    function animate() {
      mutate()
      requestAnimationFrame(animate)
    }
    animate()
  }, [mutate])

  return (
    <Canvas>
      {boxes.map(id => <Box key={id} id={id} />)}
      <Stars />
    </Canvas>
  )
}



