export default function validateInfo(values) {
  let errors = {}

  if(!values.name.trim()) {
    errors.name = "Name Required"
  }

  // validar Email
  if(!values.email) {
    errors.email = "Email Required"
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email Required"
  }

  if(!values.message) {
    errors.message = "Message Required"
  }

  

  return errors;
}
