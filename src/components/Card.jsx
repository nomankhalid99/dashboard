import React from 'react'
import {Card as ChakraCard} from '@chakra-ui/react'

const Card = ({children, showCard = false , ...props}) => {
  return (
    <ChakraCard
    bg={{
        base:showCard ? "white" : "transparent",
        md:"white"
    }}
    p={{
        base:showCard ? "4" : "0",
        md:"6",
    }}
    borderRadius={{
        base:showCard ? "16px" : "none",
        md:"16px"
    }}
    boxShadow={{
      base:showCard ? "md" : "none",
        md:"lg"
    }}
    width='456px'
    {...props}
    >{children}
    </ChakraCard>
  )
}

export default Card