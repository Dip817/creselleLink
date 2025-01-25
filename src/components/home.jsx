import React from 'react'
import '../assets/css/home.css'
import kodaiLogo from '../assets/images/kodaiLogo.png'

function home() {
    return (
        <>
            <div className=' banner w-100 align-items-center'>
                <div className='banner-inner container w-100 mt-5'>
                    <img src={kodaiLogo} alt='kodai-logo' />
                </div>
                <p>Hey there! <br/>These are our social media profiles. Hope you like it</p>
                <div className='social-links' id='insta'>
                    <i class='bx bxl-instagram-alt'></i>
                    <a href='https://www.instagram.com/koadai_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>Instagram</a>
                </div>
                <div className='social-links' id='facebook'>
                    <i class='bx bxl-facebook-circle'></i>
                    <a href='https://www.facebook.com/people/Koadai/61570458852555/'>Facebook</a>
                    </div>
                <div className='social-links' id='linkedIn'>
                    <i class='bx bxl-linkedin-square' ></i>
                    <a href='https://in.linkedin.com/company/koadai'>LinkedIn</a></div>
                <div className='social-links' id='pinterest'>
                    <i class='bx bxl-pinterest' ></i>
                    <a href='https://in.pinterest.com/srtglobalsolutions/?invite_code=362c552e7cb140b28d2aec9cc0b06c35&sender=986429262041124269'>Pinterest</a>
                    </div>
                <div className='social-links' id='website'>
                    <i class='bx bx-globe-alt' ></i>
                    <a href='https://koadai.com/'>Website</a>
                    </div>
                    <button className='mt-5' id='btn'><a href='tel: +917043661691'>Get in touch</a></button>
                    <p id='thank-p' className='pb-5'>Thank you! For your interest</p>
            </div>
        </>
    )
}

export default home