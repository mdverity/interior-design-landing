import { useState } from 'react'

const useForm = () => {
  const [values, setValues] = useState({
    email: '',
    message: '',
    services: false,
    estimate: false,
    products: false,
    consultation: false,
  })

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  //   const handleChange = (e) => {
  //     const { name, value } = e.target
  //     setValues({
  //       ...values,
  //       [name]: value,
  //     })
  //   }

  const handleChange = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setValues({
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() => {
        setValues({
          email: '',
          message: '',
          services: false,
          estimate: false,
          products: false,
          consultation: false,
        })
        alert("Thank you! I'll be in touch.")
      })
      .catch((error) => alert(error))

    e.preventDefault()
  }

  return { handleChange, values, handleSubmit }
}

export default useForm
