import { array } from 'i/lib/util';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import AT1 from './Algorithms/T1';
var Latex = require('react-latex');

const chapters = {
  AT1,
}
const Algorithms = () => {
  const latFont = `textsf{Sans serif text}`
  const params = useParams()
  const Chapter = chapters["AT" + params.id]
  console.log(Chapter)
  return (
    <div className='flex flex-col w-full justify-center'>

      {!params.id && (
        <>
          <div className='Introduction mx-auto flex flex-col font-bold text-[30px] w-[300px] mt-[40px] mb-[30px]'>
            <div className='w-auto mx-auto '>Algorithms</div>
          </div>
          <div className='section'>
            Here are Algorithms and Data structures' notes based on my university materials.
          </div>
          <div className='section'>
            <Link to="/algorithms/1" className='Ll'>Chapter 1 - Efficient Algorithms</Link>
          </div>
        </>
      )
      }
      {params.id && (
        <Chapter/>
      )
      }



    </div>
  )
}

export default Algorithms