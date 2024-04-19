import type { FC } from 'react'
import classNames from 'classnames'

type LogoSiteProps = {
  className?: string
}

const LogoSite: FC<LogoSiteProps> = ({
  className,
}) => {
  return (
    <img
      src='https://mbm-oss1.oss-cn-shenzhen.aliyuncs.com/OpenAI/logo.png'
      className={classNames('block w-auto h-10', className)}
      alt='logo'
    />
  )
}

export default LogoSite
