import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Home() {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <div>
      <h1>{t('test')}</h1>
      <Link href={router.pathname} locale='es'>
        <button>espanhol</button>
      </Link>
      <Link href={router.pathname} locale='pt-BR'>
        <button>português</button>
      </Link>
    </div>
  )
}