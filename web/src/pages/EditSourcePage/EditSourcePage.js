import SourcesLayout from 'src/layouts/SourcesLayout'
import EditSourceCell from 'src/components/EditSourceCell'

const EditSourcePage = ({ id }) => {
  return (
    <SourcesLayout>
      <EditSourceCell id={id} />
    </SourcesLayout>
  )
}

export default EditSourcePage
