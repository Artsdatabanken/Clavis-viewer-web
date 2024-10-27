import dynamic from 'next/dynamic'

const IdentificationInterface = dynamic(() => import('../components/IdentificationInterface'), {
  ssr: false,
})

export default function Home() {
  return <IdentificationInterface />
}
