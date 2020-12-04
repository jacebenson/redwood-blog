import SourcesLayout from 'src/layouts/SourcesLayout'
import SourceCell from 'src/components/SourceCell'

const SourcePage = ({ id }) => {
  return (
    <SourcesLayout>
      <SourceCell id={id} />
    </SourcesLayout>
  )
}

export default SourcePage
