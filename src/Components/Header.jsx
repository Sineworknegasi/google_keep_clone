import React from 'react'

export default function Header(props) {

    const logo = <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="Logo" />
  return (
    <div className='header'>
        {logo}
        <h3>Keep</h3>
    </div>
  )
}
