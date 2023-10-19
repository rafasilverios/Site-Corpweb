import React, { useState } from 'react'
import { MenuMobileEstilo } from './styles'
import LinksMenuMobile from '../LinksMenuMobile'

const MenuMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const AlternarMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const AbreFechaMenu = () =>
    isMenuOpen
      ? 'https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/icons/fechar-menu-3.png'
      : 'https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/icons/menu-mobile-3.png'

  return (
    <>
      <MenuMobileEstilo
        src={AbreFechaMenu()}
        onClick={AlternarMenu}
        data-bs-toggle="collapse"
        data-bs-target="#menuMobile"
      />
      <div className={`collapse`} id="menuMobile">
        <LinksMenuMobile />
      </div>
    </>
  )
}

export default MenuMobile
