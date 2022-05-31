const React = require('react')

function Index () {
  return (
    <div></div>
  )
}

export async function getServerSideProps (context) {
  const { req, res } = context
  if (req.url === '/') {
    res.setHeader('location', '/Home')
    res.statusCode = 302
    res.end()
  }
  return { props: {} }
}

export default Index
