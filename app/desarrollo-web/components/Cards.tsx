import Link from 'next/link'
import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { contactBussines, contactCorporate, contactProfesional } from '../../../src/components/contact'

export default function Cards() {
	return (
		<div className='xl:flex justify-center gap-x-8 mt-[60px]'>
			<div className='xl:w-1/3 max-xl:mb-10 bg-[#BEEBFA] p-8 rounded-xl hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'>
				<h2 className='font-semibold text-[28px] mb-3'>Profesional</h2>
				<p className='text-sm font-medium mb-5'>Facilidad de uso, experiencia ampliada</p>
				<p className='text-[15px]'>¿Estás dando tus primeros pasos? El plan Profesional es una excelente opción para emprendimientos o marcas pequeñas en crecimiento.</p>

				<div className='item-main-card-blue mt-6'>
					<p className='text-sm inline-block'>Hasta 5 secciones personalizadas</p>
					<p className='text-sm inline-block'>3GB de almacenamiento SSD</p>
					<p className='text-sm inline-block'>1 base de datos en la nube</p>
					<p className='text-sm inline-block'>Hasta 25 correos corporativos</p>
					<p className='text-sm inline-block'>Diseño personalizado y adaptable</p>
				</div>

				<div>
					<div className='font-normal flex items-center mt-6 md:mb-6'>
						<BsCurrencyDollar className='text-[40px]'></BsCurrencyDollar>
						<div className='flex items-end'>
							<p className='text-[40px] font-medium -ml-1'>199,99</p>
							<p className='mb-3 ml-2 font-medium text-lg max-md:hidden'>/ pago único</p>
						</div>
					</div>
					<p className='ml-2 font-normal md:hidden mb-8'>(IVA Incluido) pago único</p>
				</div>


				<p className='font-normal text-sm'>Dominio y hosting <strong>incluidos</strong> por un año, a partir del segundo año se hace un cobro de $109.99 anuales.</p>

				<Link href={contactProfesional} target='_blank'>
					<button className='w-full h-[52px] rounded-xl mt-10 bg-[#1bb3f7] hover:bg-[#089EE1] transition-all'>
						<p className='font-medium text-[17px]'>Hablar con asesor</p>
					</button>
				</Link>
			</div>
			<div className='xl:w-1/3 max-xl:mb-10 bg-[#BBFABB] p-8 rounded-xl hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'>
				<h2 className='font-semibold text-[28px] mb-3'>Empresarial</h2>
				<p className='text-sm font-medium mb-5'>Diseños profesionales para tu empresa</p>
				<p className='text-[15px]'>¿Buscas expandirte? El plan Empresarial es ideal para negocios en ascenso, ofreciendo herramientas avanzadas para impulsar tu crecimiento.</p>

				<div className='item-main-card-green mt-6'>
					<p className='text-sm inline-block'>Hasta 15 secciones personalizadas</p>
					<p className='text-sm inline-block'>5GB de almacenamiento SSD</p>
					<p className='text-sm inline-block'>3 bases de datos en la nube</p>
					<p className='text-sm inline-block'>Hasta 50 correos corporativos</p>
					<p className='text-sm inline-block'>Diseño personalizado y adaptable</p>
				</div>

				<div>
					<div className='font-normal flex items-center mt-6 md:mb-6'>
						<BsCurrencyDollar className='text-[40px]'></BsCurrencyDollar>
						<div className='flex items-end'>
							<p className='text-[40px] font-medium -ml-1'>479,99</p>
							<p className='mb-3 ml-2 font-medium text-lg max-md:hidden'>/ pago único</p>
						</div>
					</div>
					<p className='ml-2 font-normal md:hidden mb-8'>(IVA Incluido) pago único</p>
				</div>

				<p className='font-normal text-sm'>Dominio y hosting <strong>incluidos</strong> por un año, a partir del segundo año se hace un cobro de $159.99 anuales.</p>

				<Link href={contactBussines} target='_blank'>
					<button className='w-full h-[52px] rounded-xl mt-10 bg-[#54de62] hover:bg-[#32D743] transition-all'>
						<p className='font-medium text-[17px]'>Hablar con asesor</p>
					</button>
				</Link>
			</div>
			<div className='xl:w-1/3 bg-[#E9D7FA] p-8 rounded-xl hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'>
				<h2 className='font-semibold text-[28px] mb-3'>Corporativo</h2>
				<p className='text-sm font-medium mb-5'>Moderno y funcional a gran escala</p>
				<p className='text-[15px]'>¿Diriges una gran corporación? Nuestro plan Corporativo proporciona soluciones escalables para empresas consolidadas en busca de un éxito continuo.</p>

				<div className='item-main-card-purple mt-6'>
					<p className='text-sm inline-block'>Hasta 30 secciones personalizadas</p>
					<p className='text-sm inline-block'>8GB de almacenamiento SSD</p>
					<p className='text-sm inline-block'>5 bases de datos en la nube</p>
					<p className='text-sm inline-block'>Correos corporativos ilimitados</p>
					<p className='text-sm inline-block'>Diseño personalizado y adaptable</p>
				</div>

				<div>
					<div className='font-normal flex items-center mt-6 md:mb-6'>
						<BsCurrencyDollar className='text-[40px]'></BsCurrencyDollar>
						<div className='flex items-end'>
							<p className='text-[40px] font-medium -ml-1'>619,99</p>
							<p className='mb-3 ml-2 font-medium text-lg max-md:hidden'>/ pago único</p>
						</div>
					</div>
					<p className='ml-2 font-normal md:hidden mb-8'>(IVA Incluido) pago único</p>
				</div>

				<p className='font-normal text-sm'>Dominio y hosting <strong>incluidos</strong> por un año, a partir del segundo año se hace un cobro de $249.99 anuales.</p>

				<Link href={contactCorporate} target='_blank'>
					<button className='w-full h-[52px] rounded-xl mt-10 bg-[#907aff] hover:bg-[#6E51FF] transition-all'>
						<p className='font-medium text-[17px]'>Hablar con asesor</p>
					</button>
				</Link>
			</div>
		</div>
	)
}
