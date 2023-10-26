import { BotaoWhatsEstilo } from './styles'
import React, { useEffect } from 'react'

const BotaoWhats = () => {
  useEffect(() => {
    const button = document.querySelector('.BotaoWhatsEstilo')

    if (button) {
      const shakeButton = () => {
        button.classList.add('shake')
        setTimeout(() => {
          button.classList.remove('shake')
        }, 500)
      }

      const intervalId = setInterval(shakeButton, 2000)

      return () => {
        clearInterval(intervalId)
      }
    }
  }, [])

  return (
    <BotaoWhatsEstilo
      className="BotaoWhatsEstilo"
      href="https://wa.me/5541984424733?text=Ol%C3%A1%2C+tudo+bem%3F%0AQuero+mais+informações+sobre+os+planos+oferecidos+para+desenvolver+um+site+para+minha+empresa.+Seria+poss%C3%ADvel+fornecer+mais+informações+sobre+os+detalhes+dos+planos+e+como+eles+podem+beneficiar+o+meu+neg%C3%B3cio%3F"
      target="_blank"
      // aria-label="Botão do WhatsApp"
      rel="noreferrer"
    >
      <p>2</p>
    </BotaoWhatsEstilo>
  )
}

export default BotaoWhats
