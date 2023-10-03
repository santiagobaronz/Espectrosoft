import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import {
	BsFillClipboardCheckFill, BsFillGearFill,
	BsFillRocketTakeoffFill, BsHeartFill,
	BsPeopleFill
}
	from 'react-icons/bs'

export default function Main() {

	const tsHomepage = useTranslations('homePage')

	return (
		<div className='mt-20'>
			<div className='container relative z-10 max-lg:px-10'>
				<div className='bg-blue-bg md:px-8 px-4 py-2 lg:mx-auto rounded-full max-md:text-sm text-gray-200 flex items-center gap-x-2 w-fit'>
					<BsFillGearFill></BsFillGearFill>
					<p>Transformamos ideas en tecnología</p>
				</div>
				<h1 className='lg:text-6xl text-5xl leading-[1.10] font-semibold mb-8 mt-8 lg:text-center'>
					We build solutions for <span className='text-blue'>your business</span>
				</h1>
				<p className='xl:w-3/6 lg:w-4/6 mx-auto lg:text-center text-lg mb-10'>Somos un equipo apasionado de expertos en desarrollo de software, dedicados a convertir tus ideas en soluciones tecnológicas innovadoras y exitosas.</p>
			</div>

			<div className='mt-10'>
				<svg xmlns="http://www.w3.org/2000/svg" width="1440" className='w-full rotate-180 mt-20' height="42" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 152"><path fill="#0F172B" d="M126.597 138.74a165.412 165.412 0 0 1-67.38-52.76L0 0h1440s-20.02 25.84-59.85 32.958L211.382 150.811a165.765 165.765 0 0 1-84.785-12.071Z" /></svg>
				<div className='bg-blue-section py-28 bg-culture max-lg:px-10'>
					<div className='container text-white lg:flex gap-x-10'>
						<div className='lg:w-3/6'>
							<h2 className='text-3xl font-medium lg:mb-14 mb-16'>Nuestra cultura</h2>
							<div className="lg:grid grid-cols-2 grid-rows-2 gap-x-20 gap-y-12 mb-16">
								<div className=' max-lg:mb-16'>
									<div className='bg-[#233442] w-fit p-3 rounded'>
										<BsFillClipboardCheckFill className='text-2xl text-blue'></BsFillClipboardCheckFill>
									</div>
									<h3 className='mt-5 font-medium mb-3'>Calidad sobresaliente</h3>
									<p className='font-light'>Creando software excepcional, siempre superando expectativas con rendimiento confiable y diseño impecable.</p>
								</div>
								<div className=' max-lg:mb-16'>
									<div className='bg-[#233442] w-fit p-3 rounded'>
										<BsPeopleFill className='text-2xl text-blue'></BsPeopleFill>
									</div>
									<h3 className='mt-5 font-medium mb-3'>Innovación continua</h3>
									<p className='font-light'>Siempre en búsqueda de lo nuevo, exploramos tecnologías y enfoques innovadores para ofrecerte soluciones de vanguardia.</p>
								</div>
								<div className="row-start-2 mt-5 max-lg:mb-16">
									<div className='bg-[#233442] w-fit p-3 rounded'>
										<BsFillRocketTakeoffFill className='text-2xl text-blue'></BsFillRocketTakeoffFill>
									</div>
									<h3 className='mt-5 font-medium mb-3'>Colaboración efectiva</h3>
									<p className='font-light'>Trabajamos juntos para resultados sobresalientes, fusionando nuestras habilidades y conocimientos.</p>
								</div>
								<div className="row-start-2 mt-5 max-lg:mb-16">
									<div className='bg-[#233442] w-fit p-3 rounded'>
										<BsHeartFill className='text-2xl text-blue'></BsHeartFill>
									</div>
									<h3 className='mt-5 font-medium mb-3'>Compromiso con el cliente</h3>
									<p className='font-light'>Tu éxito es nuestra prioridad absoluta, brindándote soluciones que superan tus expectativas.</p>
								</div>
							</div>
							<Link href={''} className='bg-blue px-10 py-3 rounded text-white hover:px-11 hover:shadow-lg transition-all'>
								Solicita una reunión
							</Link>
						</div>
						<div className='lg:w-3/6'>
							<img src="https://imgur.com/o3Uz7gu.jpg" alt="Imagen cultura empresarial" className='h-full w-full lg:p-12 object-cover lg:rounded-[70px] max-lg:mt-16 max-lg:rounded' />
						</div>

					</div>
				</div>
			</div>

			<div className='mt-16 py-24 bg-[#F4F4F6] bg-stats'>
				<div className='container lg:flex justify-between max-lg:px-10'>
					<div className='lg:w-1/2'>
						<h2 className='font-bold text-4xl lg:w-2/3'>We promote your growth together</h2>
						<p className='mt-6 lg:w-5/6'>En Espectrosoft, nos dedicamos a transformar ideas en soluciones digitales innovadoras. Con una pasión por la tecnología y una profunda comprensión del panorama empresarial, nos especializamos en ofrecer aplicaciones web de vanguardia que impulsan la eficiencia y potencian el crecimiento.</p>

						<div className='flex justify-between lg:mb-12 w-3/4 mt-10'>
							<img src="https://imgur.com/AMrRL7v.png" alt="" className='lg:w-32 max-lg:hidden' />
							<img src="https://imgur.com/jK9nBP7.png" alt="" className='lg:w-32 max-lg:hidden' />
							<img src="https://imgur.com/IfGNB61.png" alt="" className='lg:w-32 max-lg:hidden' />

						</div>
						<div className='flex gap-x-16'>
							<img src="https://imgur.com/mTK8J8D.png" alt="" className='lg:w-32 max-lg:hidden' />
							<img src="https://imgur.com/XkmbqVt.png" alt="" className='lg:w-32 max-lg:hidden' />
							<p className='text-gray ml-8 opacity-80 max-lg:hidden'>10+ Alianzas</p>
						</div>
					</div>

					<div className='lg:w-1/2'>
						<div className="lg:grid grid-cols-2 grid-rows-3 gap-5">
							<div className='bg-white p-7 max-lg:mb-5 rounded-xl shadow-sm hover:translate-x-0.5 hover:-translate-y-0.5 transition-all hover:shadow-lg'>
								<h3 className='font-semibold text-xl'>15+</h3>
								<p className='text-gray-200 font-medium'>Profesionales a tu servicio</p>
							</div>
							<div className='bg-white p-7 max-lg:mb-5 rounded-xl shadow-sm hover:translate-x-0.5 hover:-translate-y-0.5 transition-all hover:shadow-lg'>
								<h3 className='font-semibold text-xl'>20+</h3>
								<p className='text-gray-200 font-medium'>Tecnologías en uso</p>
							</div>
							<div className="row-start-2 bg-white p-7 max-lg:mb-5 rounded-xl shadow-sm hover:translate-x-0.5 hover:-translate-y-0.5 transition-all hover:shadow-lg">
								<h3 className='font-semibold text-xl'>25+</h3>
								<p className='text-gray-200 font-medium'>Proyectos de software</p>
							</div>
							<div className="row-start-2 bg-white p-7 max-lg:mb-5 rounded-xl shadow-sm hover:translate-x-0.5 hover:-translate-y-0.5 transition-all hover:shadow-lg">
								<h3 className='font-semibold text-xl'>18+</h3>
								<p className='text-gray-200 font-medium'>Sitios web en línea</p>
							</div>
							<div className="row-start-3 bg-white p-7 max-lg:mb-5 rounded-xl shadow-sm hover:translate-x-0.5 hover:-translate-y-0.5 transition-all hover:shadow-lg">
								<h3 className='font-semibold text-xl'>325,000+</h3>
								<p className='text-gray-200 font-medium'>Líneas de código</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
