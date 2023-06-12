import React from 'react'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
 function Tech() {
  return (
    <div >
    <h2 className={`${styles.heroHeadText} mb-10`}>My Tech Stacks</h2>
    <div className='flex flex-wrap justify-center gap-10'>
      
      {technologies.map((technology)=>(
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
    </div>
    
  )
}


export default SectionWrapper(Tech)