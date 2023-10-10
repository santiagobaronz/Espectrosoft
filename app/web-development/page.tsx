import Link from 'next/link';
import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { PiCurrencyDollar } from "react-icons/pi";

export default function page() {
	return (
		<div>
			<div className='mb-56'>
				<div className='bg-blue-section h-[650px] py-24'>
					<div className='container relative z-10'>
						<div className='m-auto max-w-4xl'>
							<h1 className='text-center text-6xl font-bold text-white leading-[1.18]'>Planes y Precios para Servicios de Desarrollo Web</h1>
							<p className='text-center text-lg mt-5 text-white mx-10'>
								Ofrecemos soluciones flexibles y escalables adaptadas a tu negocio. Descubre nuestros planes elaborados para cada tipo de persona o empresa. Desde emprendimientos en crecimiento hasta corporaciones establecidas.
							</p>
						</div>

						<div className='flex justify-center gap-x-8 mt-28'>
							<div className='w-1/3 bg-[#BEEBFA] p-8 rounded-xl'>
								<h2 className='font-semibold text-[28px] mb-3'>Profesional</h2>
								<p className='text-sm font-medium mb-5'>Facilidad de uso, experiencia ampliada</p>
								<p className='text-[15px]'>¿Estás dando tus primeros pasos? El plan Profesional es una excelente opción para emprendimientos o marcas pequeñas en crecimiento.</p>
								<div className='font-normal flex items-center mt-6 mb-6'>
									<BsCurrencyDollar className='text-[40px]'></BsCurrencyDollar>
									<div className='flex items-end'>
										<p className='text-[40px] font-medium -ml-1'>160</p>
										<p className='mb-3 ml-2 font-medium text-lg'>/ pago único</p>
									</div>
								</div>
								<p className='font-normal text-sm'>Incluye dominio y hosting por un año, al segundo año se hace un cobro de $75.00 anuales.</p>

								<Link href={'#'}>
									<button className='w-full h-[52px] rounded-xl mt-10 bg-[#1bb3f7] hover:bg-[#089EE1] transition-all'>
										<p className='font-medium text-[17px]'>Hablar con asesor</p>
									</button>
								</Link>
							</div>
							<div className='w-1/3 bg-[#BBFABB] p-8 rounded-xl'>
								<h2 className='font-semibold text-[28px] mb-3'>Empresarial</h2>
								<p className='text-sm font-medium mb-5'>Diseños profesionales para tu empresa</p>
								<p className='text-[15px]'>¿Buscas expandirte? El plan Empresarial es ideal para negocios en ascenso, ofreciendo herramientas avanzadas para impulsar tu crecimiento.</p>
								<div className='font-normal flex items-center mt-6 mb-6'>
									<BsCurrencyDollar className='text-[40px]'></BsCurrencyDollar>
									<div className='flex items-end'>
										<p className='text-[40px] font-medium -ml-1'>380</p>
										<p className='mb-3 ml-2 font-medium text-lg'>/ pago único</p>
									</div>
								</div>
								<p className='font-normal text-sm'>Incluye dominio y hosting por un año, al segundo año se hace un cobro de $105.00 anuales.</p>

								<Link href={'#'}>
									<button className='w-full h-[52px] rounded-xl mt-10 bg-[#54de62] hover:bg-[#32D743] transition-all'>
										<p className='font-medium text-[17px]'>Hablar con asesor</p>
									</button>
								</Link>
							</div>
							<div className='w-1/3 bg-[#E9D7FA] p-8 rounded-xl'>
								<h2 className='font-semibold text-[28px] mb-3'>Corporativo</h2>
								<p className='text-sm font-medium mb-5'>Moderno y funcional a gran escala</p>
								<p className='text-[15px]'>¿Diriges una gran corporación? Nuestro plan Corporativo proporciona soluciones escalables para empresas consolidadas en busca de un éxito continuo.</p>
								<div className='font-normal flex items-center mt-6 mb-6'>
									<BsCurrencyDollar className='text-[40px]'></BsCurrencyDollar>
									<div className='flex items-end'>
										<p className='text-[40px] font-medium -ml-1'>550</p>
										<p className='mb-3 ml-2 font-medium text-lg'>/ pago único</p>
									</div>
								</div>
								<p className='font-normal text-sm'>Incluye dominio y hosting por un año, al segundo año se hace un cobro de $140.00 anuales.</p>

								<Link href={'#'}>
									<button className='w-full h-[52px] rounded-xl mt-10 bg-[#907aff] hover:bg-[#6E51FF] transition-all'>
										<p className='font-medium text-[17px]'>Hablar con asesor</p>
									</button>
								</Link>
							</div>
						</div>

					</div>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" className='relative z-0' width="100%" height="152" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 152">
					<path fill="#0F172B" d="M126.597 138.74a165.412 165.412 0 0 1-67.38-52.76L0 0h1440s-20.02 25.84-59.85 32.958L211.382 150.811a165.765 165.765 0 0 1-84.785-12.071Z" />
				</svg>
			</div>


		</div>
	)
}
