import React from 'react'
import Cards from './components/Cards'
import Link from 'next/link'
import PricingFeatures from './components/PricingFeatures'
import CallToAction from '../../src/components/CallToAction'
import { contactCustomHosting } from '../../src/components/contact'

export default function page() {
	return (
		<div>
			<div className='xl:mb-20'>
				<div className='bg-hosting-web xl:h-[650px] py-20 max-lg:px-10 bg-hosting-web-decoration'>
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

				<div className='container xl:mt-[300px] max-xl:mb-20 max-sm:px-10'>
					<div className='bg-blue-section p-10 mt-14 rounded-xl lg:flex items-center justify-between bg-lights'>
						<div>
							<h3 className='text-white font-medium text-2xl'>¿Necesitas un plan aún más personalizado?</h3>
							<p className='text-white max-lg:mb-7'>Ofrecemos planes a la medida con los mejores precios del mercado.</p>
						</div>
						<Link href={contactCustomHosting} target='_blank' className='bg-dark-blue py-3 px-12 text-white rounded-lg max-md:block max-lg:text-center'> Contactar con ventas</Link>
					</div>
				</div>
			</div>

			<PricingFeatures></PricingFeatures>

			<div className='lg:my-28 my-20 container max-lg:px-10'>
				<div className='lg:flex justify-between gap-x-20 items-center'>
					<div className='lg:w-1/2 w-full order-1 max-md:mb-10'>
						<p className='font-medium text-[#8C8C8C] text-[16px]'>TU PROYECTO, NUESTRO COMPROMISO</p>
						<h3 className='font-semibold text-4xl mt-6 mb-6'>Potencia tus ideas con un Hosting web flexible y escalable</h3>
						<p className='mb-5 text-lg'>Descubre la libertad de crear sin límites con nuestro servicio de hosting versátil. Desde las plataformas de
							gestión de contenido más populares hasta las aplicaciones de desarrollo más avanzadas.
						</p>
						<p className='mb-8'>Espectrosoft da <strong>soporte</strong> para aplicaciones en:</p>
						<div className='md:flex gap-x-28 max-lg:mb-10'>
							<ul className='features-list'>
								<li>Wordpress</li>
								<li>Joomla</li>
								<li>PrestaShop</li>
								<li>Perl</li>
							</ul>

							<ul className='features-list'>
								<li>Moodle</li>
								<li>Node.js</li>
								<li>PHP Frameworks</li>
								<li>Python</li>
							</ul>
						</div>
					</div>
					<div className='lg:w-1/2 w-full order-2'>
						<img src="https://i.imgur.com/pmCeACR.jpg" alt="Imagen sección desarrollo web" className='rounded-2xl' />
					</div>
				</div>
			</div>

			<CallToAction></CallToAction>

		</div>
	)
}
