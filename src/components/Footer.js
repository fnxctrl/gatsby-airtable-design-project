import React from "react"
import styled from "styled-components"
const Footer = () => {
  return (
    <Wrapper>
      <p>
        &copy; {new Date().getFullYear()} John Smilga. All rights reserved.
        Built with Gatsby
      </p>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  height: 5rem;
  display: grid;
  place-items: center;
  background: var(--clr-black);
  text-align: center;
  p {
    color: var(--clr-white);
    margin-bottom: 0;
  }
`
export default Footer
