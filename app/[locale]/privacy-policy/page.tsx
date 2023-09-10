'use client'

import React from 'react'
import CallToAction from '../../../src/components/CallToAction'

export default function PrivacyPolicy() {
	return (
		<div className=''>
			<div className='bg-blue-section max-lg:px-10 md:h-72 max-md:py-16 flex items-center'>
				<div className='container'>
					<div className='xl:mx-20'>
						<div className='flex items-center justify-between flex-wrap'>
							<div className='md:order-1 order-2 md:w-2/3 w-full'>
								<h1 className='text-4xl text-white font-medium'>Política de privacidad de los datos</h1>
								<p className='text-white text-sm rounded-md bg-dark-blue w-fit px-8 py-2 mt-3 max-sm:py-3 max-sm:my-5'><span className='max-sm:hidden'>Efectiva desde: </span>Septiembre 10, 2023</p>
								<p className='text-gray mt-3'>Nuestra politica de privacidad ha sido actualizada</p>
							</div>
							<div className='md:order-2 order-1 md:w-1/3 flex md:justify-end w-full max-md:mb-8'>
								<img src="https://imgur.com/ZIyZSrF.png" alt="Logo Espectrosoft" className='md:w-24 w-16 ring-1 rounded-lg p-2 bg-white bg-opacity-90' />
							</div>
						</div>

					</div>
				</div>
			</div>

			<div className='container max-sm:px-10'>

				<div className='xl:mx-20'>

					<div className='my-12'>
						<p>En Espectrosoft S.A.S, valoramos y respetamos tu privacidad. Esta Política de Privacidad describe cómo recopilamos, utilizamos, divulgamos y protegemos la información personal que obtenemos a través de nuestros servicios de software, hosting y registro de dominios. Al utilizar nuestros servicios, aceptas los términos y condiciones de esta Política de Privacidad.</p>
					</div>

					<div className='mb-12'>
						<h2 className='text-2xl font-medium mb-2'>Información que Recopilamos</h2>

						<p className='mb-5'>Podemos recopilar la siguiente información personal:</p>

						<ol className='list-decimal md:pl-10 pl-8'>
							<li className='mb-5'>Información de Identificación: Esto puede incluir tu nombre, dirección, número de teléfono, dirección de correo electrónico y otra información similar que nos proporcionas al crear una cuenta o utilizar nuestros servicios.</li>
							<li className='mb-5'>Información de Pago: Si realizas compras a través de nuestros servicios, recopilamos información de pago, como números de tarjeta de crédito o débito, así como otra información necesaria para procesar los pagos.</li>
							<li className='mb-5'>Información Técnica: Recopilamos información técnica sobre tu dispositivo y cómo interactúas con nuestros servicios. Esto puede incluir direcciones IP, datos de registro, tipo de navegador, sistema operativo y otra información similar.</li>
							<li className='mb-5'>Información de Uso: Recopilamos información sobre cómo utilizas nuestros servicios, como las páginas que visitas, el tiempo que pasas en nuestro sitio web y las acciones que realizas.</li>
							<li className='mb-5'>Información de Dominio: Si registras un dominio a través de nuestros servicios, recopilamos información relacionada con ese registro, incluyendo tu nombre, dirección y otra información de contacto.</li>
						</ol>
					</div>

					<div className='mb-12'>
						<h2 className='text-2xl font-medium mb-2'>Cómo Utilizamos tu Información</h2>

						<p className='mb-5'>Utilizamos la información personal que recopilamos para los siguientes fines:</p>

						<ol className='list-decimal md:pl-10 pl-8'>
							<li className='mb-5'>Proporcionar Servicios: Utilizamos tu información para brindarte nuestros servicios, incluyendo la creación y administración de cuentas, la prestación de servicios de hosting y dominios, y la atención al cliente.</li>
							<li className='mb-5'>Procesamiento de Pagos: Utilizamos información de pago para procesar tus transacciones y facturación.</li>
							<li className='mb-5'>Mejora de Servicios: Utilizamos información técnica y de uso para mejorar la calidad y funcionalidad de nuestros servicios.</li>
							<li className='mb-5'>Comunicación: Podemos utilizar tu información para comunicarnos contigo sobre cuestiones relacionadas con tu cuenta o nuestros servicios, así como para enviar noticias, actualizaciones y promociones.</li>
						</ol>
					</div>

					<div className='mb-12'>
						<h2 className='text-2xl font-medium mb-2'>Divulgación de Información</h2>

						<p className='mb-5'>No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en las siguientes circunstancias:</p>

						<ol className='list-decimal md:pl-10 pl-8'>
							<li className='mb-5'>Proveedores de Servicios: Podemos compartir información con proveedores de servicios de confianza que necesiten acceder a la información para brindar servicios en nuestro nombre (por ejemplo, proveedores de hosting o registradores de dominios).</li>
							<li className='mb-5'>Cumplimiento Legal: Podemos divulgar información cuando sea necesario para cumplir con las leyes y regulaciones aplicables, responder a solicitudes legales válidas o proteger nuestros derechos legales.</li>
						</ol>
					</div>

					<div className='mb-12'>
						<h2 className='text-2xl font-medium mb-2'>Cumplimiento con el Reglamento General de Protección de Datos (RGPD) de la Unión Europea y la Ley Orgánica de Protección de Datos Personales del Ecuador</h2>

						<p className='mb-5'>n Espectrosoft S.A.S, nos comprometemos a cumplir con las regulaciones de protección de datos tanto a nivel internacional como local. Esto incluye el cumplimiento con el RGPD de la Unión Europea y la Ley Orgánica de Protección de Datos Personales del Ecuador. Nuestro compromiso incluye:</p>

						<ol className='list-decimal md:pl-10 pl-8'>
							<li className='mb-5'>Obtención de consentimiento informado.</li>
							<li className='mb-5'>Transparencia en el manejo de datos.</li>
							<li className='mb-5'>Reconocimiento y respeto de los derechos de los usuarios.</li>
							<li className='mb-5'>Implementación de medidas de seguridad para proteger datos personales.</li>
						</ol>
					</div>

					<div className='mb-12'>
						<h2 className='text-2xl font-medium mb-2'>Seguridad de la Información</h2>

						<p className='mb-5'>Tomamos medidas de seguridad adecuadas para proteger tu información personal contra pérdida, robo, acceso no autorizado y divulgación no autorizada. Sin embargo, ten en cuenta que ninguna medida de seguridad en línea es completamente infalible.</p>
					</div>

					<div className='mb-12'>
						<h2 className='text-2xl font-medium mb-2'>Cambios en esta Política</h2>

						<p>Podemos actualizar esta Política de Privacidad ocasionalmente para reflejar cambios en nuestras prácticas de recopilación y manejo de información. Te notificaremos de cualquier cambio significativo a través de una notificación en nuestro sitio web.</p>
						<p>l utilizar nuestros servicios después de cualquier cambio en esta Política de Privacidad, aceptas las revisiones y modificaciones realizadas en la misma.</p>
					</div>

					<div className='mb-12'>
						<h2 className='text-2xl font-medium mb-2'>Contacto</h2>

						<p className='mb-5'>Si tienes preguntas o preocupaciones sobre esta Política de Privacidad, o si deseas ejercer tus derechos de privacidad, contáctanos a través de espectrosoft@gmail.com</p>

						<p>Gracias por confiar en Espectrosoft S.A.S. Tu privacidad es importante para nosotros y haremos todo lo posible para proteger tus datos personales.</p>
					</div>

				</div>
			</div>

			<CallToAction></CallToAction>
		</div>
	)
}
