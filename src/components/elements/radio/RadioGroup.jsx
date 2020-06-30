import React from 'react'

const RadioGroup = ({ donationFrequency, setDonationFrequency }) => {
  const onRadioClick = value => {
    setDonationFrequency(value)
  }

  return (
    <div class="w-full max-w-sm mx-auto mb-6">
      <div className="flex justify-center relative">
        <hr className="border-1 w-8/12 xl:w- absolute my-4 ml-6 mr-0" />
        <div>
          <input
            className="border"
            type="radio"
            id="monthly"
            name="frequency"
            value="monthly"
            checked={donationFrequency === 'monthly' ? true : false}
            onClick={() => onRadioClick('monthly')}
          />
          <label
            style={{ color: '#232323' }}
            className="text-black-900"
            for="monthly"
          >
            <p className="mt-10 text-12 font-bold">monthly</p>
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="quarterly"
            name="frequency"
            value="quarterly"
            checked={donationFrequency === 'quarterly' ? true : false}
            onClick={() => onRadioClick('quarterly')}
          />
          <label
            style={{ color: '#232323' }}
            className="text-black-900"
            for="quarterly"
          >
            <p className="mt-10 text-12 font-bold">quarterly</p>
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="yearly"
            name="frequency"
            value="yearly"
            checked={donationFrequency === 'yearly' ? true : false}
            onClick={() => onRadioClick('yearly')}
          />
          <label
            style={{ color: '#232323' }}
            className="text-black-900"
            for="yearly"
          >
            <p className="mt-10 text-12 font-bold">yearly</p>
          </label>
        </div>
      </div>
    </div>
  )
}

export default RadioGroup
