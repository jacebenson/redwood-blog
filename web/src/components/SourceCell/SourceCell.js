import Source from 'src/components/Source'

export const QUERY = gql`
  query FIND_SOURCE_BY_ID($id: Int!) {
    source: source(id: $id) {
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

export const Empty = () => <div>Source not found</div>

export const Success = ({ source }) => {
  return <Source source={source} />
}
