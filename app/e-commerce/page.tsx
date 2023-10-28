import Link from 'next/link'
import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { contactPhoneNumber } from '../../src/components/contact'

export default function page() {

	const logosSlider = [
		'https://i.imgur.com/IfGNB61.png',
		'https://i.imgur.com/UTtHJhT.png',
		'https://i.imgur.com/XprATCg.png',
		'https://i.imgur.com/NVK3cAQ.png',
		'https://i.imgur.com/vwBHgms.png',
		'https://i.imgur.com/uXDw85c.png',
	];



	return (
		<div className='xl:mb-20 transition-all'>
			<div className='bg-e-commerce xl:h-[650px] py-20 max-lg:px-10 flex items-center justify-center ecommerce-decoration'>
				<div className='container lg:flex gap-x-20 items-center'>
					<div className='lg:w-1/2'>
						<div className='bg-[#12824E] rounded w-min'>
							<BsFillCartFill className='text-6xl p-3 text-e-commerce'></BsFillCartFill>
						</div>

						<h1 className='md:text-5xl text-4xl text-[#071A2B] font-bold leading-tight my-8'>Pública tu tienda en línea y expande el crecimiento de tu marca</h1>

						<p className='text-lg mb-10'>En Espectrosoft, convertimos tus sueños empresariales en realidad digital. Es el momento de llevar tu negocio al mundo en línea y expandir el crecimiento de tu marca.</p>

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

			<svg xmlns="http://www.w3.org/2000/svg" className='relative z-0 max-xl:hidden' width="100%" height="80" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 152">
				<path fill="#BBFABB" d="M126.597 138.74a165.412 165.412 0 0 1-67.38-52.76L0 0h1440s-20.02 25.84-59.85 32.958L211.382 150.811a165.765 165.765 0 0 1-84.785-12.071Z" />
			</svg>


			<div className='container mt-20'>
				<div className='max-lg:px-10 lg:flex gap-x-20 items-center'>

					<div className='lg:w-1/2 order-2'>
						<p className="font-medium text-[#8C8C8C] text-[16px] mb-6">PLANIFICA, PUBLICA Y VENDE TUS PRODUCTOS</p>
						<h2 className='font-semibold text-4xl mb-8'>Impulsa las ventas de tus productos con tu nueva tienda virtual</h2>
						<p className=' text-lg mb-8'>
							Sumergirse en el mundo del comercio electrónico es más que simplemente vender productos en línea; es una oportunidad
							para transformar por completo la presencia de tu marca. Una tienda virtual bien diseñada no solo ofrece productos,
							sino también una experiencia de compra envolvente que atrae y retiene a los clientes.
						</p>

						<Link href={contactPhoneNumber} target='_blank'>
							<div className=' my-[1px] menu-green-button py-3 rounded-xl md:w-64 max-lg:mb-10 text-center font-medium text-lg hover:bg-[#32D743]'>
								<p>Asesorate gratis</p>
							</div>
						</Link>
					</div>
					<div className='lg:w-1/2 bg-blue-bg md:rounded-3xl rounded-md order-1'>
						<img src="https://i.imgur.com/aF1exe7.jpg" alt="Fotografia tienda virtual" className='md:p-10 p-5 md:rounded-[70px] rounded-[25px]' />
					</div>
				</div>
			</div>

			<div className='container mt-20'>
				<div className=" relative m-auto w- overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
					<div className="animate-infinite-slider flex w-[calc(250px*10)] gap-x-20">
						{logosSlider.map((logo, index) => (
							<div className="slide flex w-[125] items-center justify-center" key={index}>
								<img src={logo} alt={`Logo de la marca ${index}`}  />
							</div>
						))}
						{logosSlider.map((logo, index) => (
							<div className="slide flex w-[125] items-center justify-center" key={index} >
								<img src={logo} alt={`Logo de la marca ${index}`}  />
							</div>
						))}
					</div>
				</div>
			</div>

		</div>
	)
}
