interface IProps{
title:string
}
const Alert = ({title}:IProps) => {
  return (
    <div>
      {title}

    </div>
  )
}

export default Alert
