import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'

const TaskForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.task?.id)
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
          name="summary"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Summary
        </Label>
        <TextField
          name="summary"
          defaultValue={props.task?.summary}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="summary" className="rw-field-error" />

        <Label
          name="created"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Created
        </Label>
        <TextField
          name="created"
          defaultValue={props.task?.created}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="created" className="rw-field-error" />

        <Label
          name="due"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Due
        </Label>
        <TextField
          name="due"
          defaultValue={props.task?.due}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="due" className="rw-field-error" />


        <Label
          name="completed"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Completed
        </Label>
        <TextField
          name="completed"
          defaultValue={props.task?.completed}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: false }}
        />
        <FieldError name="completed" className="rw-field-error" />

        <Label
          name="details"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Details
        </Label>
        <TextAreaField
          name="details"
          defaultValue={props.task?.details}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: false }}
        />
        <FieldError name="details" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TaskForm
