import React from 'react'
import CallToAction from '../../src/components/CallToAction';
import Table from './components/Table';
import Cards from './components/Cards';
import PricingFeatures from './components/PricingFeatures';
import Link from 'next/link';
import { contactCustomWeb } from '../../src/components/contact';

export default function page() {
	return (
		<div>
			<div className='xl:mb-20'>
				<div className='bg-blue-section xl:h-[650px] py-20 pricing-web max-lg:px-10'>
					<div className='container relative z-10'>
						<div className='m-auto max-w-4xl'>
							<h1 className='text-center xl:text-6xl sm:text-5xl text-4xl max-sm:text-left font-bold text-white text-title-space'>Planes y precios para servicios de Desarrollo Web</h1>
							<p className='text-center text-lg mt-5 text-white md:mx-10 max-sm:text-left'>
								Ofrecemos soluciones flexibles y escalables adaptadas a tu negocio. Descubre nuestros planes elaborados para cada tipo de persona o empresa. Desde emprendimientos en crecimiento hasta corporaciones establecidas.
							</p>
						</div>
						<Cards></Cards>
					</div>
				</div>

				<svg xmlns="http://www.w3.org/2000/svg" className='relative z-0 max-xl:hidden' width="100%" height="152" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 152">
					<path fill="#0F172B" d="M126.597 138.74a165.412 165.412 0 0 1-67.38-52.76L0 0h1440s-20.02 25.84-59.85 32.958L211.382 150.811a165.765 165.765 0 0 1-84.785-12.071Z" />
				</svg>

				<div className='container xl:mt-72 max-xl:mb-20 max-sm:px-10'>
					<div className='bg-blue-section p-10 mt-14 rounded-xl lg:flex items-center justify-between bg-lights'>
						<div>
							<h3 className='text-white font-medium text-2xl'>¿Necesitas un plan aún más personalizado?</h3>
							<p className='text-white max-lg:mb-7'>Ofrecemos planes a la medida con los mejores precios del mercado.</p>
						</div>
						<Link href={contactCustomWeb} target='_blank' className='bg-dark-blue py-3 px-12 text-white rounded-lg max-md:block max-lg:text-center'> Contactar con ventas</Link>
					</div>
				</div>
			</div>

			<PricingFeatures></PricingFeatures>

			<div className='lg:my-28 my-20 container max-lg:px-10'>
				<div className='lg:flex justify-between gap-x-20 items-center'>
					<div className='lg:w-1/2 w-full order-2 max-md:mb-10'>
						<p className='font-medium text-[#8C8C8C] text-[16px]'>ANALIZAMOS, CONSTRUIMOS Y ENTREGAMOS</p>
						<h3 className='font-semibold text-4xl mt-6 mb-6'>Creamos soluciones que hagan crecer tu negocio o marca personal</h3>

						<p className='mb-5 text-lg'>En el mundo digital actual, destacarse es crucial. En nuestra plataforma de desarrollo web, no solo creamos sitios,
							creamos experiencias que transforman negocios y elevan marcas personales. Entendemos que cada proyecto es único,
							por eso nos dedicamos a diseñar soluciones a medida que se adaptan a tus necesidades específicas. Nuestro equipo apasionado de desarrolladores
							y diseñadores trabaja incansablemente para crearplataformas web que no solo son visualmente atractivas, sino también funcionales y efectivas.
						</p>
					</div>
					<div className='lg:w-1/2 w-full order-1'>
						<img src="https://i.imgur.com/p09nwQs.jpg" alt="Imagen sección desarrollo web" className='rounded-2xl' />
					</div>
				</div>
			</div>


			<div className='bg-blue-section py-32'>
				<div className='container max-lg:px-10'>
					<h2 className='text-center mb-10 text-3xl font-semibold text-white'>Todas las características de los planes</h2>
					<Table></Table>
				</div>

			</div>


			<CallToAction></CallToAction>
		</div>
	)
}
