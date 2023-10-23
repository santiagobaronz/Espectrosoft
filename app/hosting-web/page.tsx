import React from 'react'
import Cards from './components/Cards'

export default function page() {
	return (
		<div>
			<div className='xl:mb-20'>
				<div className='bg-hosting-web xl:h-[650px] py-20 max-lg:px-10'>
					<div className='container relative z-10'>
						<div className='m-auto max-w-4xl'>
							<h1 className='text-center xl:text-6xl sm:text-5xl text-4xl max-sm:text-left font-bold text-black leading-[1.18]'>Paquetes de Hosting web para tu proyecto</h1>
							<p className='text-center text-lg mt-8 text-gray-200 md:mx-10 max-sm:text-left'>
								Utilizamos servidores de última tecnología y sistemas de seguridad de vanguardia. Te ofrecemos planes flexibles y escalables que se adaptan en todo momento a las necesidades de tu proyecto.
							</p>
						</div>

						<Cards></Cards>
					</div>

				</div>

				<svg xmlns="http://www.w3.org/2000/svg" className='relative z-0 max-xl:hidden' width="100%" height="152" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 152">
					<path fill="#EBEFFF" d="M126.597 138.74a165.412 165.412 0 0 1-67.38-52.76L0 0h1440s-20.02 25.84-59.85 32.958L211.382 150.811a165.765 165.765 0 0 1-84.785-12.071Z" />
				</svg>

			</div>
		</div>
	)
}
