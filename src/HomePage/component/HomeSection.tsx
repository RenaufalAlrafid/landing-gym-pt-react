import React from 'react'
import { Link } from 'react-router-dom'
import BenefitHome from './BenefitHome'

export default function HomeSection() {
  return (
    <div className='flex pt-20 pl-20 pb-16 '>
        <div className='pt-40'>
          <h4 className='text-lg'>Take Your Fitness to the</h4>
          <h1 className='text-[64px] text-primary-50 font-bold'>Next Level</h1>
          <p className='text-sm'>Join the best fitness program around. Sign up now for customized workouts today!</p>

          <Link
          to={"/"}
          className="bg-secondary-50 py-2 px-3 flex gap-2 text-neutral-0 rounded-lg hover:bg-secondary-90 mt-6 w-40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5l-5-5m9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14Z"
                />
              </svg>
              <span className="font-bold">Join Now</span>
          </Link>
        </div>
        <div id='HeroImage' className='mr-20 pt-3'>
          <img src="/Image/Hero.png" alt="" className='w-[538px] h-[480px]' />
        </div>
        <div className='flex flex-col pt-32 pr-[188px] gap-7'>
          <BenefitHome title='Science - based' description='programs by renowned coaches'></BenefitHome>
          <BenefitHome title='Custom Workout' description='tracker to log your training and create routines'></BenefitHome>
          <BenefitHome title='24/7 Consultation' description='to help you stay on track and motivated'></BenefitHome>
          <button className='py-3 px-12 flex gap-2 border-2 border-solid border-secondary-50 rounded-lg w-56 hover:bg-secondary-50 text-secondary-50 hover:text-primary-base'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.075 7.508c-1.329-.784-2.825.283-2.825 1.705v5.574c0 1.422 1.496 2.489 2.825 1.705l4.72-2.787c1.273-.752 1.273-2.658 0-3.41l-4.72-2.787ZM9.75 9.213c0-.198.096-.337.21-.408a.323.323 0 0 1 .352-.005l4.72 2.787a.465.465 0 0 1 .218.413a.465.465 0 0 1-.218.413l-4.72 2.787a.323.323 0 0 1-.353-.005a.467.467 0 0 1-.209-.408V9.213Z"/><path d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25ZM2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0Z"/></g></svg>
            <span className='font-bold'>Train Reels</span>
          </button>
        </div>
    </div>
  )
}
