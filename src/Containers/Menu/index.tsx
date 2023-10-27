import React, { useState } from 'react'
import BotaoMenu from '../../Components/Layouts/Menu/BotaoMenu'
import Logo from '../../Components/Layouts/Menu/Logo'
import { Header, MenuConfig, UlConfig } from './style'
import Container from '../../Components/Layouts/ContainerEstilo'
import DisplayNone from '../../Components/Layouts/DisplayNone'
import MenuMobile from '../../Components/Layouts/MenuMobile/BotaoMenuMobile'

type HeaderProps = {
  id: string
}

const Menu = ({ id }: HeaderProps) => {
  const [activeButton] = useState<number | null>(null)

  // const handleButtonClick = (index: number) => {
  //   setActiveButton(index)
  // }

  return (
    <Header id={id}>
      <Container>
        <MenuConfig>
          <div>
            <h1>
              <Logo
                width="86.11px"
                height="65px"
                alt="Logo da CorpWeb site para empresas"
                src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/Servidor%20de%20Imagens/CorpWeb/img/logos/site%20para%20empresas%20logo.png"
              />
            </h1>
          </div>
          <MenuMobile />
          <DisplayNone>
            <nav>
              <UlConfig>
                <li>
                  <BotaoMenu
                    href="#top"
                    aria-label="Início"
                    isActive={activeButton === 0}
                    // onClick={() => handleButtonClick(0)}
                  >
                    Início
                  </BotaoMenu>
                </li>
                <li>
                  <BotaoMenu
                    href="#sobre"
                    aria-label="Sobre"
                    isActive={activeButton === 1}
                    // onClick={() => handleButtonClick(1)}
                  >
                    Sobre
                  </BotaoMenu>
                </li>
                <li>
                  <BotaoMenu
                    href="#vantagens"
                    aria-label="Vantagens"
                    isActive={activeButton === 2}
                    // onClick={() => handleButtonClick(2)}
                  >
                    Vantagens
                  </BotaoMenu>
                </li>
                <li>
                  <BotaoMenu
                    href="#orcamento"
                    aria-label="Orçamento"
                    isActive={activeButton === 3}
                    // onClick={() => handleButtonClick(3)}
                  >
                    Orçamento
                  </BotaoMenu>
                </li>
                <li>
                  <BotaoMenu
                    href="#contato"
                    aria-label="Contato"
                    isActive={activeButton === 4}
                    // onClick={() => handleButtonClick(4)}
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
