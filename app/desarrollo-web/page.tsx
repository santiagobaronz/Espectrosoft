import React from 'react'
import CallToAction from '../../src/components/CallToAction';
import Table from './components/Table';
import Cards from './components/Cards';
import PricingFeatures from './components/PricingFeatures';
import Link from 'next/link';

export default function page() {
	return (
		<div>
			<div className='mb-[500px]'>
				<div className='bg-blue-section h-[650px] py-20 pricing-web'>
					<div className='container relative z-10'>
						<div className='m-auto max-w-4xl'>
							<h1 className='text-center text-6xl font-bold text-white leading-[1.18]'>Planes y Precios para Servicios de Desarrollo Web</h1>
							<p className='text-center text-lg mt-5 text-white mx-10'>
								Ofrecemos soluciones flexibles y escalables adaptadas a tu negocio. Descubre nuestros planes elaborados para cada tipo de persona o empresa. Desde emprendimientos en crecimiento hasta corporaciones establecidas.
							</p>
						</div>
						<Cards></Cards>

						<div className='bg-blue-section p-10 mt-14 rounded-xl flex items-center justify-between bg-lights'>
							<div>
								<h3 className='text-white font-medium text-2xl'>¿Necesitas un plan aún más personalizado?</h3>
								<p className='text-white'>Ofrecemos planes a la medida con los mejores precios del mercado</p>
							</div>
							<Link href={'#'} className='bg-dark-blue py-3 px-12 text-white rounded-lg'> Contactar con ventas</Link>
						</div>

					</div>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" className='relative z-0' width="100%" height="152" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 152">
					<path fill="#0F172B" d="M126.597 138.74a165.412 165.412 0 0 1-67.38-52.76L0 0h1440s-20.02 25.84-59.85 32.958L211.382 150.811a165.765 165.765 0 0 1-84.785-12.071Z" />
				</svg>
			</div>

			<PricingFeatures></PricingFeatures>

			<div className='container mt-20'>
				<h2 className='text-center mb-16 text-3xl font-semibold'>Todas las características de los planes</h2>
				<Table></Table>
			</div>

			<CallToAction></CallToAction>
		</div>
	)
}
