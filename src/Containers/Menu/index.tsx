import React, { useState } from 'react'
import BotaoMenu from '../../Components/Layouts/Menu/BotaoMenu'
import Logo from '../../Components/Layouts/Menu/Logo'
import { Header, MenuConfig, UlConfig } from './style'
import Container from '../../Components/Layouts/ContainerEstilo'

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
              <Logo />
            </h1>
          </div>
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
                  href="#"
                  isActive={activeButton === 1}
                  onClick={() => handleButtonClick(1)}
                >
                  Sobre
                </BotaoMenu>
              </li>
              <li>
                <BotaoMenu
                  href="#"
                  isActive={activeButton === 2}
                  onClick={() => handleButtonClick(2)}
                >
                  Vantagens
                </BotaoMenu>
              </li>
              <li>
                <BotaoMenu
                  href="#"
                  isActive={activeButton === 3}
                  onClick={() => handleButtonClick(3)}
                >
                  Orçamento
                </BotaoMenu>
              </li>
              <li>
                <BotaoMenu
                  href="#"
                  isActive={activeButton === 4}
                  onClick={() => handleButtonClick(4)}
                >
                  Contato
                </BotaoMenu>
              </li>
            </UlConfig>
          </nav>
        </MenuConfig>
      </Container>
    </Header>
  )
}

export default Menu
