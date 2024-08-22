import style from '../list.module.css'
import Apps from './Apps'
import classNames from '@/utils/classnames'
import { getLocaleOnServer, useTranslation as translate } from '@/i18n/server'

const AppList = async () => {
  const locale = getLocaleOnServer()
  const { t } = await translate(locale, 'app')

  return (
    <div className='relative flex flex-col overflow-y-auto bg-gray-100 shrink-0 h-0 grow'>
      <Apps />
      <footer className='px-12 py-6 grow-0 shrink-0'>
        <h3 className='text-xl font-semibold leading-tight text-gradient'>MBM跨国财阀集团</h3>
        <p className='mt-1 text-sm font-normal leading-tight text-gray-700'>汇集全球顶尖人才，我们立志构筑一台前所未有的人工智能巨擘，其创新的力量将重新定义未来，震撼世界，引领人类进入一个崭新的智能时代。</p>
        <div className='flex items-center gap-2 mt-3'>
          <a className={style.socialMediaLink} target='_blank' rel='noopener noreferrer' href='https://openai.mbmzone.com'><span className={classNames(style.socialMediaIcon, style.githubIcon)} /></a>
          {/* <a className={style.socialMediaLink} target='_blank' rel='noopener noreferrer' href='https://discord.gg/FngNHpbcY7'><span className={classNames(style.socialMediaIcon, style.discordIcon)} /></a> */}
        </div>
      </footer>
    </div >
  )
}

export default AppList
