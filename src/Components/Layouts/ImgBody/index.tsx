type ImgProps = {
  scr: string
  width?: string
}

const ImgBody = ({ scr, width }: ImgProps) => {
  return <img src={scr} width={width} />
}

export default ImgBody
