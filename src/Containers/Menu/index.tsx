import React, { useState } from 'react'
import BotaoMenu from '../../Components/Layouts/Menu/BotaoMenu'
import Logo from '../../Components/Layouts/Menu/Logo'
import { Header, MenuConfig, UlConfig } from './style'
import Container from '../../Components/Layouts/ContainerEstilo'
import DisplayNone from '../../Components/Layouts/DisplayNone'
import MenuMobile from '../../Components/Layouts/MenuMobile/BotaoMenuMobile'
import LinksMenuMobile from '../../Components/Layouts/MenuMobile/LinksMenuMobile'

const Menu = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null)

  const handleButtonClick = (index: number) => {
    setActiveButton(index)
  }

  return (
    <Header>
      <Container>
        <MenuConfig>
          <div>
            <h1>
              <Logo src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/corpweb-logo.png" />
            </h1>
          </div>
          <MenuMobile />
          <LinksMenuMobile />
          <DisplayNone>
            <nav>
              <UlConfig>
                <li>
                  <BotaoMenu
                    href="#inicio"
                    isActive={activeButton === 0}
                    onClick={() => handleButtonClick(0)}
                  >
                    Início
                  </BotaoMenu>
                </li>
                <li>
                  <BotaoMenu
                    href="#sobre"
                    isActive={activeButton === 1}
                    onClick={() => handleButtonClick(1)}
                  >
                    Sobre
                  </BotaoMenu>
                </li>
                <li>
                  <BotaoMenu
                    href="#vantagens"
                    isActive={activeButton === 2}
                    onClick={() => handleButtonClick(2)}
                  >
                    Vantagens
                  </BotaoMenu>
                </li>
                <li>
                  <BotaoMenu
                    href="#orcamento"
                    isActive={activeButton === 3}
                    onClick={() => handleButtonClick(3)}
                  >
                    Orçamento
                  </BotaoMenu>
                </li>
                <li>
                  <BotaoMenu
                    href="#contato"
                    isActive={activeButton === 4}
                    onClick={() => handleButtonClick(4)}
                  >
                    Contato
                  </BotaoMenu>
                </li>
              </UlConfig>
            </nav>
          </DisplayNone>
        </MenuConfig>
      </Container>
    </Header>
  )
}

export default Menu
