import NextLink from 'next/link'

import styles from './Header.module.css'
import { bool, func } from 'prop-types'
import { StyledBurgerItems } from './BurgerItems.module.js'
import React, { useState } from 'react'

const BurgerItems = ({ open }) => {
  // const [open, setOpen] = useState(false);
  // const BurgerProps={
  //     open: open
  // }return
  return (
    <StyledBurgerItems open={open}>
      <NextLink href="/checklist" as="/success-stories">
        <a>
          <h2>72 Hour Checklist</h2>
        </a>
      </NextLink>
      <NextLink href="/success-stories" as="/success-stories">
        <a>
          <h2>Success Stories</h2>
        </a>
      </NextLink>
      <NextLink href="/about-us" as="/know-your-rights">
        <a>
          <h2>Know your rights</h2>
        </a>
      </NextLink>
      <NextLink href="/about-us" as="/success-stories">
        <a>
          <h2>About Us</h2>
        </a>
      </NextLink>
    </StyledBurgerItems>
  )
}
BurgerItems.propTypes = {
  open: bool.isRequired,
}
export default BurgerItems
