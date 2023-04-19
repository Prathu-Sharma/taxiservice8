import React from 'react'
import Button from './Button'

const Form = () => {
  return (
    <div className='booking_section'>
      <div className="container">
        <div className="booking-form">
            <h2>Book your Ride</h2>
            <form action="#">
                <div className="form-row">
                    <div className="col-lg-3">
                        <div className="form-tab">
                            <label htmlFor="pickUp">Pick Up Location</label>
                            <input type="text" placeholder='Type Location'/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-tab">
                            <label htmlFor="pickUp">Pick Up Location</label>
                            <input type="text" placeholder='Type Location'/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-tab">
                            <label htmlFor="dropLocation">Drop Off Location</label>
                            <input type="text" placeholder='Type Location'/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-tab">
                            <label htmlFor="passengers">Passengers</label>
                            <input type="text" placeholder='Passengers'/>
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
                            <input type="date" placeholder='MM|DD|YYYY'/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="form-tab">
                            <label htmlFor="pickUpDate">Pick Up Time</label>
                            <input type="time" placeholder='00:00 AM'/>
                        </div>
                    </div>
                    <div className="col-log">
                        <Button />
                    </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Form
