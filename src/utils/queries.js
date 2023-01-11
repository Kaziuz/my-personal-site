import gql from 'graphql-tag'

const ALL_POSTS = gql `
  query {
    posts {
      nodes {
        portafolio {
          url
          titleWeb
          date
        }
      }
    }
  }
`

const ALL_PAGES = gql `
  query {
    pages {
      nodes {
        welcome_page {
          text
          image {
            sourceUrl
            uri
            id
          }
        }
      }
    }
  }
`

export {
  ALL_POSTS,
  ALL_PAGES
}
