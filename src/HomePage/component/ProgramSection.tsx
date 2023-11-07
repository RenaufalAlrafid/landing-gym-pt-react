import React from 'react'
import ProgramCard from './ProgramCard'

export default function ProgramSection() {
  let propsProgramCard = [
    {
      "image":"gym1.png",
      "title":"Program A",
      "description":"Program description Program description Program Program description Program description Program Program description Program description Program Program description Program description Program"
    },
    {
      "image":"gym1.png",
      "title":"Program B",
      "description":"Program description Program description Program Program description Program description Program Program description Program description Program Program description Program description Program"
    },
    {
      "image":"gym1.png",
      "title":"Program C",
      "description":"Program description Program description Program Program description Program description Program Program description Program description Program Program description Program description Program"
    },
    {
      "image":"gym1.png",
      "title":"Program D",
      "description":"Program description Program description Program Program description Program description Program Program description Program description Program Program description Program description Program"
    }
  ]


  return (
    <div className='bg-primary-70 pt-12 pb-20'>
      <h1 className='text-white text-3xl font-bold text-center'>Unlock Your Potential!</h1>
      <div className='flex gap-5 mt-9 px-20'>
        {
          propsProgramCard.map(props => {
            return(
              <ProgramCard image={props.image} title={props.title} description={props.description}></ProgramCard>
            )
          })
        }
      </div>
    </div>
  )
}
