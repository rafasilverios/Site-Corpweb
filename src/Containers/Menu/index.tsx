import BotaoMenu from '../../Components/Layouts/BotaoMenu'
import Logo from '../../Components/Layouts/Logo'
import { Header, MenuConfig, UlConfig } from './style'

const Menu = () => (
  <Header>
    <MenuConfig>
      <div>
        <h1>
          <Logo />
        </h1>
      </div>
      <nav>
        <UlConfig>
          <li>
            <BotaoMenu href="#">Início</BotaoMenu>
          </li>
          <li>
            <BotaoMenu href="#">Sobre</BotaoMenu>
          </li>
          <li>
            <BotaoMenu href="#">Vantagens</BotaoMenu>
          </li>
          <li>
            <BotaoMenu href="#">Orçamento</BotaoMenu>
          </li>
          <li>
            <BotaoMenu href="#">Contato</BotaoMenu>
          </li>
        </UlConfig>
      </nav>
    </MenuConfig>
  </Header>
)

export default Menu
