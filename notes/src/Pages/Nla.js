import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Nla1 from './Nla/Nla1'

const chapters = {
  Nla1,
}
const Nla = () => {
  const params = useParams()
  const Chapter = chapters["Nla" + params.id]
  return (
    <div className='flex flex-col w-full justify-center'>

      {!params.id && (
        <>
          <div className='Introduction mx-auto flex flex-col font-bold text-[30px] w-[350px] mt-[40px] mb-[30px]'>
            <div className='w-auto mx-auto '>Numerical Linear Algebra</div>
          </div>
          <div className='section'>
            Here are NLA notes based on my university materials.
          </div>
          <div className='section'>
            <Link to="/nla/1" className='Ll'>Chapter 1 </Link>
          </div>
        </>
      )
      }
      {params.id && (
        <Chapter />
      )
      }



    </div>
  )
}

export default Nla