import React from 'react'
import { BsBarChartFill, BsFillLightningChargeFill, BsFillShieldLockFill, BsGrid1X2Fill, BsHeadset, BsLockFill, BsStars } from 'react-icons/bs'

export default function PricingFeatures() {
	return (
		<div className='bg-[#F4F4F6]'>
			<div className='container py-16 max-lg:px-10'>
				<h2 className='text-3xl font-semibold'>¿Por qué elegir los servicios de <span className='text-blue'>Espectrosoft</span>?</h2>
				<div className='lg:flex mt-16 lg:gap-x-32'>
					<ul className='lg:w-1/2'>
						<li>
							<div className='lg:flex gap-x-10 items-center mb-12'>
								<div className=''>
									<BsFillLightningChargeFill className='text-6xl text-white bg-blue p-4 rounded-lg max-lg:mb-8'></BsFillLightningChargeFill>
								</div>
								<div>
									<h3 className='font-semibold mb-3'>Rendimiento y velocidad óptimos</h3>
									<p>Ofrecemos hosting de alta tecnología con almacenamiento SSD para sitios web rápidos y eficientes, mejorando la experiencia del usuario y el SEO.</p>
								</div>
							</div>
						</li>
						<li>
							<div className='lg:flex gap-x-10 items-center mb-12'>
								<div className=''>
									<BsFillShieldLockFill className='text-6xl text-white bg-blue p-4 rounded-lg max-lg:mb-8'></BsFillShieldLockFill>
								</div>
								<div>
									<h3 className='font-semibold mb-3'>Seguridad Avanzada</h3>
									<p>Garantizamos la seguridad con sistemas de vanguardia y certificados SSL gratuitos, protegiendo la privacidad de los usuarios y las transacciones en línea.</p>
								</div>
							</div>
						</li>
						<li>
							<div className='lg:flex gap-x-10 items-center mb-12'>
								<div className=''>
									<BsBarChartFill className='text-6xl text-white bg-blue p-4 rounded-lg max-lg:mb-8'></BsBarChartFill>
								</div>
								<div>
									<h3 className='font-semibold mb-3'>Flexibilidad y Escalabilidad</h3>
									<p>Nuestros planes son flexibles y escalables, adaptándose a las necesidades cambiantes de tu proyecto sin interrupciones en el servicio.</p>
								</div>
							</div>
						</li>
					</ul>
					<ul className='lg:w-1/2'>
					<li>
							<div className='lg:flex gap-x-10 items-center mb-12'>
								<div className=''>
									<BsHeadset className='text-6xl text-white bg-blue p-4 rounded-lg max-lg:mb-8'></BsHeadset>
								</div>
								<div>
									<h3 className='font-semibold mb-3'>Soporte Técnico Profesional</h3>
									<p> Ofrecemos asistencia técnica experta para ayudarte a elegir el plan adecuado y resolver problemas rápidamente, asegurando un funcionamiento sin problemas de tu sitio web.</p>
								</div>
							</div>
						</li>
						<li>
							<div className='lg:flex gap-x-10 items-center mb-12'>
								<div className=''>
									<BsGrid1X2Fill className='text-6xl text-white bg-blue p-4 rounded-lg max-lg:mb-8'></BsGrid1X2Fill>
								</div>
								<div>
									<h3 className='font-semibold mb-3'>Fácil Administración con cPanel</h3>
									<p>Accede a cPanel, una interfaz fácil de usar para gestionar correos electrónicos, archivos y bases de datos, ideal para principiantes y usuarios avanzados por igual.</p>
								</div>
							</div>
						</li>
						<li>
							<div className='lg:flex gap-x-10 items-center mb-12'>
								<div className=''>
									<BsStars className='text-6xl text-white bg-blue p-4 rounded-lg max-lg:mb-8'></BsStars>
								</div>
								<div>
									<h3 className='font-semibold mb-3'>Garantía de Devolución y Activación Instantánea</h3>
									<p>Ofrecemos una garantía de devolución de 7 días para una experiencia sin riesgos y activación inmediata para comenzar rápidamente tu presencia en línea.</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
