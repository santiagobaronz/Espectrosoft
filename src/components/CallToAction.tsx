import React from 'react'

export default function CallToAction() {
	return (
		<div className="container max-w-7xl mt-20 ">
			<div className="overflow-hidden xl:rounded-2xl bg-cta shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
				<div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
					<div className="lg:self-center">
						<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
							<span className="block">Potencia tu presencia en línea con nosotros</span>
						</h2>
						<p className="mt-5 leading-6 text-white mb-8">Nuestro equipo de expertos en desarrollo web y software está listo para convertir tu visión en realidad. Descubre cómo podemos ayudarte a destacar en línea.</p>
						<a href="#" className="px-10 py-3 bg-blue rounded-md text-white">¡Empecemos ahora!</a>
					</div>
				</div>
				<div className="px-6 pb-6 p-aspect-w-5 aspect-h-3 md:-mt-6 md:aspect-w-2 md:aspect-h-1"><div className="transform object-cover object-left-top sm:translate-x-16 lg:translate-y-20">
					<img src="https://imgur.com/QofS1xN.jpg" alt="" className='rounded-2xl max-lg:hidden' />
				</div>
				</div>
			</div>
		</div>
	)
}
