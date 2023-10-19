import React from 'react'

export default function PricingFeatures() {
	return (
		<div className='bg-[#F4F4F6] pricing-features'>
			<div className='container py-16'>
				<h2 className='text-3xl font-semibold'>Todos nuestros planes incluyen</h2>
				<div className='flex mt-10 gap-x-32'>
					<ul className='features-list'>
						<li>Dominio y hosting por un <strong>año</strong></li>
						<li>Certificado SSL gratuito de por vida</li>
						<li>Panel de control administrable <strong>cPanel</strong></li>
						<li>Recursos escalables según la demanda</li>
						<li>Integración con servicios de <strong>GSuite</strong></li>
					</ul>
					<ul className='features-list'>
						<li>Copias de seguridad <strong>automáticas</strong></li>
						<li><strong>Protección</strong> contra malware y virus</li>
						<li>Asesoramiento y recursos de uso</li>
						<li>Soporte técnico <strong>especializado</strong> 24/7</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
