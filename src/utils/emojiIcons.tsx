import React from 'react'

export const Emoji = props =>
  <span role="img" className="emoji" aria-label={props.label ?? ''} aria-hidden={props.label ? "false" : "true"}>{props.symbol}</span>
  