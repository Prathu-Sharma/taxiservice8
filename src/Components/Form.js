import React from 'react'
import Button from './Button'
import "./Form.css"

const Form = () => {
  return (
    <div className='booking_section'>
      <div className="container">
        <div className="booking-form">
            <h2 className='form-title'>Book your Ride</h2>
            <form action="#">
                <div className="form-row">
                    <div className="col-lg-3">
                        <div className="form-tab">
                            <label htmlFor="pickUp">Pick Up Location</label>
                            <input className='form-control' type="text" placeholder='Type Location'/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-tab">
                            <label htmlFor="pickUp">Pick Up Location</label>
                            <input className='form-control' type="text" placeholder='Type Location'/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-tab">
                            <label htmlFor="dropLocation">Drop Off Location</label>
                            <input className='form-control' type="text" placeholder='Type Location'/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-tab">
                            <label htmlFor="passengers">Passengers</label>
                            <input className='form-control' type="text" placeholder='Passengers'/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-tab">
                            <label htmlFor="cab_type">Cab Type</label>
                            <select name="select" id="cab_type">
                                <option value="0">Choose Cab</option>
                                <option value="1">All Type</option>
                                <option value="2">Hybrid</option>
                                <option value="3">Luxury</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-tab">
                            <label htmlFor="pickUpDate">Pick Up Date</label>
                            <input className='form-control' type="date" placeholder='MM|DD|YYYY'/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-tab">
                            <label htmlFor="pickUpDate">Pick Up Time</label>
                            <input className='form-control' type="time" placeholder='00:00 AM'/>
                        </div>
                    </div>
<<<<<<< HEAD
                    <div className="col-log">
                        <Button names="Submit"/>
=======
                    <div className="col-lg-3">
                        <Button styling='pos-btn'/>
>>>>>>> 17dc60656630d6d0eb9f66e948f873cbc5fdc596
                    </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Form
