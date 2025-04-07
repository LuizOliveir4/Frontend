import React from 'react'
import { useFormik } from 'formik';
import { ValidateProjectForm } from '../forms/ValidateProjectForm'

const CreateProjectForm = ({ createProject }) => {

  const formik = useFormik({
    initialValues: {
      projectName: '',
      description: '',
      startDate: '',
      endDate: '',
      budget: '',
      clientId: '',
      statusId: '',
      userId: ''

    },
    validate: ValidateProjectForm,
    onSubmit: values => {
      console.log("New Project Data:", values); // Log to check data format
      createProject(values)
      formik.resetForm()
      location.reload()
    },
  });

  return (
    <div className="admin-form">
        <h2>Enter a Project:</h2>
        <form onSubmit={formik.handleSubmit}>
            <input id="projectName" name="projectName" type="text" placeholder="Name of the project" onChange={formik.handleChange} value={formik.values.projectName}/>
            <div> {formik.errors.projectName ? <span className="error">{formik.errors.projectName}</span> : null} </div>

            <input id="description" name="description" type="text" placeholder="Description" onChange={formik.handleChange} value={formik.values.description}/>

            <input id="startDate" name="startDate" type="text" placeholder="Start date" onChange={formik.handleChange} value={formik.values.startDate}/>

            <input id="endDate" name="endDate" type="text" placeholder="End date" onChange={formik.handleChange} value={formik.values.endDate}/>

            <input id="budget" name="budget" type="text" placeholder="Budget" onChange={formik.handleChange} value={formik.values.budget}/>

            <input id="clientId" name="clientId" type="text" placeholder="clientId" onChange={formik.handleChange} value={formik.values.clientId}/>
            <div> {formik.errors.clientId ? <span className="error">{formik.errors.clientId}</span> : null} </div>

            <input id="statusId" name="statusId" type="text" placeholder="1 = STARTED or 2 = COMPLETED" onChange={formik.handleChange} value={formik.values.statusId}/>

            <input id="userId" name="userId" type="text" placeholder="Member id" onChange={formik.handleChange} value={formik.values.userId}/>
            <div> {formik.errors.userId ? <span className="error">{formik.errors.userId}</span> : null} </div>
            <button className="submit" type="submit" >Create Project</button>
        </form>
    </div>
  )
}

export default CreateProjectForm