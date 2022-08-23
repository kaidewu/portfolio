import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import Chakra from '../components/chakra'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
          <Component {...pageProps} key={router.route} />
      </Layout>
    </Chakra>
  )
}

export default Website