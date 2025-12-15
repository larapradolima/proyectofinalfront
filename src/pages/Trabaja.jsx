import { useState } from 'react'
import './Trabaja.css'

function Trabaja() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo no es válido'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido'
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'El teléfono debe tener 10 dígitos'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'La experiencia es requerida'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    console.log('Datos del formulario:', formData)
    alert(`¡Gracias ${formData.name}! Tu solicitud ha sido enviada. Nos pondremos en contacto contigo pronto.`)
    handleClear()
  }

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
    setErrors({})
  }

  return (
    <div className="trabaja">
      <header className="nosotros">
        <h1>¡Trabaja con nosotros!</h1>
      </header>

      <div className="intro-text">
        <h2>Rellena el formulario y nos pondremos en contacto.</h2>
      </div>

      <form className="formulario" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre y Apellido *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ej: Juan Pérez"
            className={errors.name ? 'error-input' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ej: juan@email.com"
            className={errors.email ? 'error-input' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Número de Contacto *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Ej: 3624837463"
            className={errors.phone ? 'error-input' : ''}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Breve Experiencia *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Cuéntanos sobre tu experiencia laboral..."
            rows="5"
            className={errors.message ? 'error-input' : ''}
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        <div className="button-group">
          <button className="enviar" type="submit">
            ✉️ Enviar
          </button>
          <button className="limpiar" type="button" onClick={handleClear}>
            🗑️ Limpiar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Trabaja