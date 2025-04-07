export function ValidateProjectForm(values){
    const errors = {};
    if (!values.projectName) {
      errors.projectName = 'Required';
    } else if (values.projectName.length > 15) {
      errors.projectName = 'Must be 15 characters or less';
    }
  
    if (!values.clientId) {
      errors.clientId = 'Required';
    }
  
    if (!values.userId) {
      errors.userId = 'Required';
    }
  
    return errors;
  
  }