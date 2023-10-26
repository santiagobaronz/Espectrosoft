import Link from 'next/link'
import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { contactGold, contactPlatinum, contactSilver } from '../../../src/components/contact'

export default function Cards() {
	return (
		<div className='xl:flex justify-center gap-x-8 mt-[40px] '>
			<div className='xl:w-1/3 max-xl:mb-10 bg-[#bddeff] p-8 rounded-xl hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'>
				<h2 className='font-semibold text-[28px] mb-3'>Hosting web Silver</h2>
				<p className='text-sm font-medium mb-5'>Servicio rápido y confiable</p>

				<div className='item-main-card-blue mt-6'>
					<p className='text-sm inline-block'>Almacenamiento SSD de <span className='font-medium'>3GB</span></p>
					<p className='text-sm inline-block'><span className='font-medium'>25</span> cuentas de correo electrónico</p>
					<p className='text-sm inline-block'><span className='font-medium'>3</span> base de datos MySQL</p>
					<p className='text-sm inline-block'><span className='font-medium'>2GB</span> de memoria RAM</p>
					<p className='text-sm inline-block'>Dominios <span className='font-medium'>ilimitados</span></p>
					<p className='text-sm inline-block'><span className='font-medium'>3GB</span> de transferencia mensual</p>
					<p className='text-sm inline-block'>Certificado SSL <span className='font-medium'>incluido</span></p>
					<p className='text-sm inline-block'>Cuenta cPanel privada</p>
					<p className='text-sm inline-block'>Copias de seguridad <span className='font-medium'>diarias</span></p>
					<p className='text-sm inline-block'><span className='font-medium'>Activación inmediata</span></p>
				</div>

				<div>
					<div className='font-normal flex items-center mt-6 md:mb-6'>
						<BsCurrencyDollar className='text-[40px]'></BsCurrencyDollar>
						<div className='flex items-end'>
							<p className='text-[40px] font-medium -ml-1'>3,90</p>
							<p className='mb-3 ml-2 font-medium text-lg max-md:hidden'> + IVA / mensual</p>
						</div>
					</div>
					<p className='ml-2 font-normal md:hidden mb-8'>+ IVA / mensual</p>
				</div>


				<p className='font-normal text-sm'>cPanel de última generación, SSL gratis, activación inmediata y <strong>7 días de garantía</strong> de devolución.</p>

				<Link href={contactSilver} target='_blank'>
					<button className='w-full h-[52px] rounded-xl mt-10 text-white bg-[#1f6cf1] hover:bg-[#1755de] transition-all'>
						<p className='font-normal text-[17px]'>Hablar con asesor</p>
					</button>
				</Link>
			</div>
			<div className='xl:w-1/3 max-xl:mb-10 bg-[#90cbff] p-8 rounded-xl hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'>
				<h2 className='font-semibold text-[28px] mb-3'>Hosting web Gold</h2>
				<p className='text-sm font-medium mb-5'>Potencia y estabilidad garantizada</p>

				<div className='item-main-card-blue mt-6'>
					<p className='text-sm inline-block'>Almacenamiento SSD de <span className='font-medium'>5GB</span></p>
					<p className='text-sm inline-block'><span className='font-medium'>50</span> cuentas de correo electrónico</p>
					<p className='text-sm inline-block'><span className='font-medium'>5</span> base de datos MySQL</p>
					<p className='text-sm inline-block'><span className='font-medium'>2GB</span> de memoria RAM</p>
					<p className='text-sm inline-block'>Dominios <span className='font-medium'>ilimitados</span></p>
					<p className='text-sm inline-block'><span className='font-medium'>5GB</span> de transferencia mensual</p>
					<p className='text-sm inline-block'>Certificado SSL <span className='font-medium'>incluido</span></p>
					<p className='text-sm inline-block'>Cuenta cPanel privada</p>
					<p className='text-sm inline-block'>Copias de seguridad <span className='font-medium'>diarias</span></p>
					<p className='text-sm inline-block'><span className='font-medium'>Activación inmediata</span></p>
				</div>

				<div>
					<div className='font-normal flex items-center mt-6 md:mb-6'>
						<BsCurrencyDollar className='text-[40px]'></BsCurrencyDollar>
						<div className='flex items-end'>
							<p className='text-[40px] font-medium -ml-1'>6,90</p>
							<p className='mb-3 ml-2 font-medium text-lg max-md:hidden'> + IVA / mensual</p>
						</div>
					</div>
					<p className='ml-2 font-normal md:hidden mb-8'>+ IVA / mensual</p>
				</div>

				<p className='font-normal text-sm'>cPanel de última generación, SSL gratis, activación inmediata y <strong>7 días de garantía</strong> de devolución.</p>

				<Link href={contactGold} target='_blank'>
					<button className='w-full h-[52px] rounded-xl mt-10 text-white bg-[#1f6cf1] hover:bg-[#1755de] transition-all'>
						<p className='font-normal text-[17px]'>Hablar con asesor</p>
					</button>
				</Link>
			</div>
			<div className='xl:w-1/3 bg-[#bddeff] p-8 rounded-xl hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'>
				<h2 className='font-semibold text-[28px] mb-3'>Hosting web Platinum</h2>
				<p className='text-sm font-medium mb-5'>Máximo rendimiento y seguridad</p>

				<div className='item-main-card-blue mt-6'>
					<p className='text-sm inline-block'>Almacenamiento SSD de <span className='font-medium'>10GB</span></p>
					<p className='text-sm inline-block'>Cuentas de correo electrónico <span className='font-medium'>ilimitadas</span></p>
					<p className='text-sm inline-block'><span className='font-medium'>10</span> base de datos MySQL</p>
					<p className='text-sm inline-block'><span className='font-medium'>2GB</span> de memoria RAM</p>
					<p className='text-sm inline-block'>Dominios <span className='font-medium'>ilimitados</span></p>
					<p className='text-sm inline-block'>Transferencia mensual <span className='font-medium'>ilimitada</span></p>
					<p className='text-sm inline-block'>Certificado SSL <span className='font-medium'>incluido</span></p>
					<p className='text-sm inline-block'>Cuenta cPanel privada</p>
					<p className='text-sm inline-block'>Copias de seguridad <span className='font-medium'>diarias</span></p>
					<p className='text-sm inline-block'><span className='font-medium'>Activación inmediata</span></p>
				</div>

				<div>
					<div className='font-normal flex items-center mt-6 md:mb-6'>
						<BsCurrencyDollar className='text-[40px]'></BsCurrencyDollar>
						<div className='flex items-end'>
							<p className='text-[40px] font-medium -ml-1'>9,90</p>
							<p className='mb-3 ml-2 font-medium text-lg max-md:hidden'> + IVA / mensual</p>
						</div>
					</div>
					<p className='ml-2 font-normal md:hidden mb-8'>+ IVA / mensual</p>
				</div>

				<p className='font-normal text-sm'>cPanel de última generación, SSL gratis, activación inmediata y <strong>7 días de garantía</strong> de devolución.</p>

				<Link href={contactPlatinum} target='_blank'>
					<button className='w-full h-[52px] rounded-xl mt-10 text-white bg-[#1f6cf1] hover:bg-[#1755de] transition-all'>
						<p className='font-normal text-[17px]'>Hablar con asesor</p>
					</button>
				</Link>
			</div>
		</div>
	)
}
