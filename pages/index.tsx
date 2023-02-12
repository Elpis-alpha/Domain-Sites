import ListPart from '@/src/components/ListPart'
import QueryPart from '@/src/components/QueryPart'
import SiteView from '@/src/components/SiteView'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const Home = () => {
  const router = useRouter()
  const query = router?.query?.site

  return (

    <HomeStyles>

      <QueryPart />

      <ListPart />

      {typeof query === "string" && <SiteView slug={query} />}

    </HomeStyles>

  )

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
