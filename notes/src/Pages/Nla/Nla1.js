import React from 'react'
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
const Nla1 = () => {
  return (
    <div className='flex flex-col w-full justify-center'>
      <div className='Introduction mx-auto flex flex-col font-bold text-[30px] w-[300px] mt-[40px] mb-[30px]'>
        <div className='w-auto mx-auto '>NLA: Chapter 1</div>
        <div className='w-auto mx-auto text-[25px]'>Later</div>
      </div>
      <div className='subHeader'>
        Little Introduction
      </div>
      <div className='section'>
        <p>This subject is an excellent mixture of mathematics and programming to solve real life problems,
          at least I was very happy when I got introduced to this class, since it shows how deeply math and coding
          are connected to each other. NLA helps us model and apply our theoretical knowledge in reality.
        </p>
        <p className='note'>Prerequisites: Linear algebra (Basic) </p>
      </div>
      <div className='subHeader'>
        Vectors
      </div>
      <div className='section'>
        An ordered set of numbers ls called a vector, the numbers themselves are called the components
        of the vector, A lowercase italic letter is usually used lo denote a vector. A vector
        v having n components has the form:
        <div className="math text-center">
          <InlineMath className='text-[10px] w-auto mx-auto' >{`
        \\textit{v} =
        \\begin{bmatrix}
        \\textit{v}_1 \\\\
        \\textit{v}_2 \\\\
        \\vdots \\\\
        \\textit{v}_n \\\\
        \\end{bmatrix}
        `}</InlineMath>
        </div>
        <div className="section">
          <div className="math text-[15px] text-center">
            <InlineMath className=''>{`
            \\textbf{Definition 2.1}: \\text{if \\textit{u} and \\textit{v} are two row vectors in }
             \\mathbb{R}^n \\text{, then their sum is defined by: }
            `}</InlineMath>
            <InlineMath className='mx-auto '>{`
             u+v = \\left (u_1 + v_1,u_2+v_2, \\dots , u_m +v_n\\right ) ^T`}</InlineMath>
          </div>
          <div className="math text-[15px]">
            <InlineMath className=''>{`
            \\textbf{Definition 2.2}: \\text{if \\textit{c} is a scalar, then: }
             cu = \\left (cu_1, cu_2, \\dots, cu_n \\right ) ^T
            `}</InlineMath>
            <p className='note'>T is a transpose</p>
          </div>
          <div className="math text-[15px]">
            <InlineMath className=''>{`
            \\textbf{The inner product} \\text{of two vectors \\textit{u} and \\textit{v} is the scalar given by : }
            `}</InlineMath>
            <InlineMath>{`uv^T = \\left (u_1v_1 + u_2v_2 + \\dots + u_nv_n \\right ) ^T`}</InlineMath>
            <p className='note'>T is a transpose</p>
          </div>
          <div className="math text-[15px]">
            <InlineMath className=''>{`
            \\text{The length of a vector \\textit{v}, denoted by } \\left\\Vert v \\right \\Vert 
            \\text{ is } \\sqrt{v^T v}\\text{, Euclidean length of v is: } \\sqrt{v_1 ^ 2 + v_2 ^ 2 + \\dots + v_n ^ 2}
            `}</InlineMath>
          </div>
          <div className="math text-[15px] text-center">
            <BlockMath className=''>{`
            \\text{A set of vectors} \\left \\{ m_1,\\dots, m_k \\right \\} \\text{in } \\mathbb{R}^n 
            \\text{ is said to be linearly dependent if there exist scalars } c_1,\\dots,c_k \\text{ not all zero, such that :}
            `}</BlockMath>
            <BlockMath>{`
            c_1m_1 + \\dots + c_km_k = 0 \\text{ (zero vector)}
            
            `}</BlockMath>
            <BlockMath>{`\\newline \\text{Otherwise, the set is called linearly independent}`}</BlockMath>
          </div>
        </div>
        <div className="section">
          <div className="subHeader">Otrhogonality, Subspace and Basis</div>
          <p>Orthogonality of two vectors</p>
          <div className="math text-[15px]">
            <BlockMath>{`
            \\text{The angle } \\theta \\text{ between two vectors \\textit{u} and \\textit{v} is given by: }
            `}</BlockMath>
            <BlockMath>{`
              \\cos \\theta = \\frac{u^T v}{\\Vert u \\Vert \\Vert v\\Vert}
            `}</BlockMath>
            <BlockMath>{`
            \\text{Two vectors \\textit{u} and \\textit{v} are orthogonal if } \\theta = 90^\\circ,
            \\newline \\text{ that is, } u^Tv = 0. \\text{The symbol }\\perp \\text{ is used to denote orthogonality}
            `}</BlockMath>
          </div>
          <div className="math text-[15px]">
            <BlockMath>
              {`
              \\text{A set of vectors} \\{u_1,\\dots, u_n\\} \\text{is orthonormal if each vector has unit length and they are pairwise
              orthogonal;}
              `}
            </BlockMath>
          </div>

        </div>
      </div>

      TO BE CONTINUED, OR NOT, TAKES LONG TIME
    </div>
  )
}

export default Nla1