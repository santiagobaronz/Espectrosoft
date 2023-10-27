import Link from 'next/link'
import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { contactPhoneNumber } from '../../src/components/contact'

export default function page() {
	return (
		<div className='xl:mb-20 transition-all'>
			<div className='bg-e-commerce xl:h-[650px] py-20 max-lg:px-10 flex items-center justify-center'>
				<div className='container lg:flex gap-x-20 items-center'>
					<div className='lg:w-1/2'>
						<div className='bg-[#12824E] rounded w-min'>
							<BsFillCartFill className='text-6xl p-3 text-e-commerce'></BsFillCartFill>
						</div>

						<h1 className='md:text-5xl text-4xl text-[#071A2B] font-bold leading-tight my-8'>Publica tu tienda en linea y expande el crecimiento de tu marca</h1>

						<div className='md:w-min'>
							<Link href={contactPhoneNumber} target='_blank' className='w-min'>
								<div className=' my-[1px] menu-green-button py-3 rounded-xl md:w-72 text-center font-medium text-lg hover:bg-[#32D743]'>
									<p>Cotizar tu tienda ahora</p>
								</div>
							</Link>
						</div>
					</div>
					<div className='lg:w-1/2 lg:p-10 max-lg:mt-10'>
						<img src="https://i.imgur.com/vNHZMvo.png" alt="Publica tu tienda en linea y expande el crecimiento de tu marca" />
					</div>
				</div>
			</div>

			<svg xmlns="http://www.w3.org/2000/svg" className='relative z-0 max-xl:hidden' width="100%" height="152" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 152">
				<path fill="#BBFABB" d="M126.597 138.74a165.412 165.412 0 0 1-67.38-52.76L0 0h1440s-20.02 25.84-59.85 32.958L211.382 150.811a165.765 165.765 0 0 1-84.785-12.071Z" />
			</svg>
		</div>
	)
}
