import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const SourceForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.source?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="author"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Author
        </Label>
        <TextField
          name="author"
          defaultValue={props.source?.author}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="author" className="rw-field-error" />

        <Label
          name="created"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Created
        </Label>
        <TextField
          name="created"
          defaultValue={props.source?.created}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="created" className="rw-field-error" />

        <Label
          name="lastRun"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Last run
        </Label>
        <TextField
          name="lastRun"
          defaultValue={props.source?.lastRun}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="lastRun" className="rw-field-error" />

        <Label
          name="sourceType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Source type
        </Label>
        <TextField
          name="sourceType"
          defaultValue={props.source?.sourceType}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="sourceType" className="rw-field-error" />

        <Label
          name="url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url
        </Label>
        <TextField
          name="url"
          defaultValue={props.source?.url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="url" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default SourceForm
