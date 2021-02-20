import NextLink from 'next/link'

import styles from './Header.module.css'
import Burger from './Burger'
import BurgerItems from './BurgerItems'
import React, { useState, useRef } from 'react'
import { useOnClickOutside } from '../hooks/useOnClickOutside'
// const [open, setOpen] = useState(false);
const Header = props => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <header role="banner" className={styles.Header}>
      <div className={styles.HeaderContainer}>
        <ul className={styles.HeaderContainer}>
          <li className="not-text-link">
            <NextLink href="/" as="/">
              <a>
                <h1 className={styles.Title}>Santa Barbara Reentry</h1>
              </a>
            </NextLink>
          </li>
          <li className={styles.NavListItem}>
            <NextLink href="/checklist" as="/success-stories">
              <a>
                <h2 className={styles.Title}>72 Hour Checklist</h2>
              </a>
            </NextLink>
          </li>
          <li className={styles.NavListItem}>
            <NextLink href="/success-stories" as="/success-stories">
              <a>
                <h2 className={styles.Title}>Success Stories</h2>
              </a>
            </NextLink>
          </li>
          <li className={styles.NavListItem}>
            <NextLink href="/about-us" as="/know-your-rights">
              <a>
                <h2 className={styles.Title}>Know your rights</h2>
              </a>
            </NextLink>
          </li>
          <li className={styles.NavListItem}>
            <NextLink href="/about-us" as="/success-stories">
              <a>
                <h2 className={styles.Title}>About Us</h2>
              </a>
            </NextLink>
          </li>
        </ul>
        <img
          src="/images/logo192.png"
          alt="County of Santa Barbara Public Defender's Office Logo"
          className={styles.Logo}
        />
      </div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <BurgerItems open={open} />
      </div>
    </header>
  )
}

export default Header
