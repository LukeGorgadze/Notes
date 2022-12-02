import React from 'react'
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
const AT1 = () => {
    const latFont = `textsf{Sans serif text}`
    return (
        <div className='flex flex-col w-full justify-center'>
            <div className='Introduction mx-auto flex flex-col font-bold text-[30px] w-[300px] mt-[40px] mb-[30px]'>
                <div className='w-auto mx-auto '>Algorithms: Chapter 1</div>
                <div className='w-auto mx-auto text-[25px]'>Efficient algorithms</div>
            </div>
            <div className='section'>
                <div className='subHeader'>O-Notation: growth of complexity for large n</div>
                <div>Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity.</div>
                <div className='section'>What is O notation in data structure?
                    Big O Notation in Data Structure is used to express algorithmic complexity using algebraic terms. It describes the upper bound of an algorithm's runtime and calculates the time and amount of memory needed to execute the algorithm for an input value.
                </div>
                <div className='math text-[12px] md:text-[20px] z-[0]'>
                    <InlineMath className='z-0'>{`f \\left(n \\right) = O \\left( g \\left( n \\right) \\right) \\leftrightarrow \\left(\\exists n_o \\in \\mathbb{N}, c > 0. \\forall n \\geq n_0. \\quad f \\left(n \\right) \\leq c * g \\left(n \\right) \\right)`}</InlineMath>
                </div>
                <div className='expln'>
                    <p>🥸 Upper formula says that you can find a coefficient c for which f(n) will be smaller than cg(n) at any given point after <InlineMath>{'n_0'}</InlineMath></p>
                    <p>Note: we are comparing functions' growth rates, not actual values, one may even consider the following formula: <InlineMath>{`\\lvert f \\left(n \\right) \\rvert \\leq \\lvert c * g \\left(n \\right) \\rvert `}</InlineMath></p>
                </div>
                <div className='example'>
                    <p>🤯 Let's say that f(n) = 10n and g(n) = n, we can choose c = 10, so f(n) &#60; 10g(n) </p>
                </div>
                <div className='section'>
                    Lemma:
                </div>
                <div className='math text-[12px] md:text-[20px] z-[0]'>
                    <BlockMath className='z-0'>{`\\text{Let } f_1 \\left(n \\right) = O \\left( g_1 \\left( n \\right) \\right) \\text{ and } f_1 \\left(n \\right) = O \\left( g_2 \\left( n \\right) \\right) \\text{and } d \\geq 0 \\newline`}</BlockMath>
                    <BlockMath className='z-0'>{`\\text{Then: } d f_1 \\left(n \\right) = O\\left(g_1\\left(n\\right)\\right) \\newline`}</BlockMath>
                    <BlockMath className='z-0'>{`\\left(f_1\\left(n\\right) + f_2\\left(n\\right)\\right) = O\\left(max\\{g_1\\left(n\\right),g_2\\left(n\\right)\\}\\right)`}</BlockMath>
                    <BlockMath className='z-0'>{`\\left(f_1\\left(n\\right) * f_2\\left(n\\right)\\right) = O\\left(g_1\\left(n\\right)*g_2\\left(n\\right)\\right)`}</BlockMath>
                </div>
                <div className='section'>
                    <p>Few more definitions:</p>
                    <p>f grows asymptotically</p>
                    <li className='mt-5'>
                        at most as g
                        <div className='math text-[15px]'>
                            <InlineMath className='text-[10px]'>{`f\\left(n\\right) = O\\left(g\\left(n\\right)\\right) \\leftrightarrow \\exists c > 0, n_0 \\in \\mathbb{N}. \\forall n \\geq n_0. f\\left(n\\right) \\leq c*g\\left(n\\right)`}</InlineMath>
                        </div>
                    </li>

                    <li>
                        at least as g
                    </li>
                </div>

            </div>

            TO BE CONTINUED, OR NOT, TAKES LONG TIME
        </div>
    )
}

export default AT1