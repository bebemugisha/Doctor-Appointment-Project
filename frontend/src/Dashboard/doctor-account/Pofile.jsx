import { useState } from 'react'

const Pofile = () => {
  const [FormData, setFormData] = useState({
    name: '',
    email: '',
  })

  const handleInputChange = (e) => {}

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Profile Information
      </h2>

      <form>
        <div className="mb-5">
          <p className="form_label">Name+</p>
          <input
            type="text"
            name="name"
            value={FormData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form_input"
          />
        </div>

        <div className="mb-5">
          <p className="form_label">Email+</p>
          <input
            type="text"
            name="email"
            value={FormData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form_input"
            readOnly
            aria-readonly
            disabled='true'
          />
        </div>
      </form>
    </div>
  )
}

export default Pofile
