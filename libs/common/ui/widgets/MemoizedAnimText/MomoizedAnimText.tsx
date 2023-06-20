import React from "react";
import AnimatedText from 'react-animated-text-content';

function AnimText(text : any) {
  return (
    <AnimatedText
      type="chars" // animate words or chars
      animation={{
        x: '0px',
        y: '0px',
        scale: 1,
        ease: 'linear',
      }}
      animationType="lights"
      interval={0.06}
      duration={0.8}
      tag="span"
      className="animated-paragraph"
      threshold={1}
    >
      {text.text}
    </AnimatedText>
  )
}

export const MemoizedAnimText = React.memo(AnimText);

export default MemoizedAnimText;