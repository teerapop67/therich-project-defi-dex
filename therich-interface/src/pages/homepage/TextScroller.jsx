import React, { useState, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import { ContentBar } from './ContentBar'
const TextScroller = ({ children }) => {
  const [key, setKey] = useState(1)

  const scrolling = useCallback(
    useSpring({
      from: { transform: 'translate(150%,0)' },
      to: { transform: 'translate(-100%,0)' },
      config: { duration: 13000 },
      reset: true,
      //reverse: key % 2 == 0,
      onRest: () => {
        setKey(key + 1)
      }
    }),
    [key]
  )

  return (
    <ContentBar key={key} style={{ width: '100%' }}>
      <animated.div style={scrolling} className="slide">
        {children}
      </animated.div>
    </ContentBar>
  )
}

export default TextScroller
