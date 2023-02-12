import HeadTag from '@/src/components/HeadTag'
import ListPart from '@/src/components/ListPart'
import QueryPart from '@/src/components/QueryPart'
import SiteView from '@/src/components/SiteView'
import { sitesList } from '@/src/utils'
import { siteName } from '@/src/__env'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Home = ({ queryx, initial }: any) => {
  const router = useRouter()
  const [query, setQuery] = useState(queryx)
  const [useAnimations, setUseAnimations] = useState(initial)
  const [site, setSite] = useState(query ? sitesList.find(si => si.slug === query) : undefined)
  useEffect(() => {
    setQuery(router.asPath.split("/?site=")[1])
    const query = router.asPath.split("/?site=")[1]
    if (query) setSite(sitesList.find(si => si.slug === query))
    else setSite(undefined)
  }, [router.asPath])

  return (

    <HomeStyles>

      {typeof site === "undefined" && <HeadTag />}

      {typeof site !== "undefined" && <HeadTag title={site.name} description={site.description} />}

      <QueryPart />

      <ListPart sUA={setUseAnimations} />

      {typeof query === "string" && <SiteView slug={query} ua={useAnimations} />}

    </HomeStyles>

  )

}

export async function getServerSideProps(context: any) {
  return {
    props: {
      queryx: context.query?.site ? context.query?.site : null,
      initial: context.query?.site ? false : true
    },
  }
}

const HomeStyles = styled.div`
  display: flex;
  flex-direction: row;
  /* background: linear-gradient(135deg, #fafafa, #f0f0f0); */
  background: #fff;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`

export default Home
