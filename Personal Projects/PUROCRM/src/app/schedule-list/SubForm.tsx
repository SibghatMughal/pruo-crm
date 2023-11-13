import { Button, Checkbox } from '@mui/material'
import React from 'react'

const SubForm = () => {
  return (
    <div className='sub-form-main'>
      <p>Ask prospects and customers a few qualifying questions as they are booking meetings with you.</p>

      <div className='form-fields'>
        <div>
          <input placeholder='First Name' />
          <Checkbox defaultChecked />
        </div>

        <div>
          <input placeholder='Last Name' />
          <Checkbox defaultChecked />
        </div>

        <div>
          <input placeholder='Email' />
          <Checkbox defaultChecked />
        </div>

        <div>
          <input placeholder='Phone Number' />
          <Checkbox defaultChecked />
        </div>
        <div className='new-field-add'>+ Add new field</div>
      </div>
      <Button className='save-btn'>Save Details</Button>
    </div>
  )
}

export default SubForm
