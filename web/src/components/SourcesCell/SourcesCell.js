import { Link, routes } from '@redwoodjs/router'

import Sources from 'src/components/Sources'

export const QUERY = gql`
  query SOURCES {
    sources {
      id
      author
      created
      lastRun
      sourceType
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No sources yet. '}
      <Link to={routes.newSource()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ sources }) => {
  return <Sources sources={sources} />
}
