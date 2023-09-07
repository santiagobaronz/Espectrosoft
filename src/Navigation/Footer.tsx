import { useTranslations } from 'next-intl'
import React from 'react'

export default function Footer() {

	const tsHomepage = useTranslations('footer')

	return (
		<footer className="bg-white mt-10" aria-labelledby="footer-heading">
			<h2 id="footer-heading" className="sr-only">{tsHomepage('description')}</h2>
			<div className="container max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<div className="space-y-4 xl:col-span-1">
						<img className="h-auto w-[194px] -ml-3" src="https://imgur.com/YiRVCbI.png" alt="Logo de Espectrosoft" />
						<p className="text-base text-gray-200 lg:mr-20 pb-5">{tsHomepage('description')}</p>
						<div className="flex space-x-6">
							<a href="https://twitter.com/PraiseHive" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
								<span className="sr-only">Twitter</span>
								<svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6 text-gray-200" aria-hidden="true">
									<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
									</path>
								</svg>
							</a>
							<a href="https://www.youtube.com/@PraiseHive" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
								<span className="sr-only">YouTube</span>
								<svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6 text-gray-200" aria-hidden="true"><path d="M23.7609 7.20005C23.7609 7.20005 23.5266 5.54536 22.8047 4.8188C21.8906 3.86255 20.8688 3.85786 20.4 3.80161C17.0438 3.55786 12.0047 3.55786 12.0047 3.55786H11.9953C11.9953 3.55786 6.95625 3.55786 3.6 3.80161C3.13125 3.85786 2.10938 3.86255 1.19531 4.8188C0.473438 5.54536 0.24375 7.20005 0.24375 7.20005C0.24375 7.20005 0 9.14536 0 11.086V12.9047C0 14.8454 0.239062 16.7907 0.239062 16.7907C0.239062 16.7907 0.473437 18.4454 1.19062 19.1719C2.10469 20.1282 3.30469 20.0954 3.83906 20.1985C5.76094 20.3813 12 20.4375 12 20.4375C12 20.4375 17.0438 20.4282 20.4 20.1891C20.8688 20.1329 21.8906 20.1282 22.8047 19.1719C23.5266 18.4454 23.7609 16.7907 23.7609 16.7907C23.7609 16.7907 24 14.85 24 12.9047V11.086C24 9.14536 23.7609 7.20005 23.7609 7.20005ZM9.52031 15.1125V8.36724L16.0031 11.7516L9.52031 15.1125Z">
								</path>
								</svg>
							</a>
							<a href="https://www.instagram.com/PraiseHive/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
								<span className="sr-only">Instagram</span>
								<svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6 text-gray-200" aria-hidden="true">
									<path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd">
									</path>
								</svg>
							</a>
						</div>
					</div>
					<div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-base font-medium text-gray-900">{tsHomepage('solutions')}</h3>
								<ul role="list" className="mt-4 space-y-4">
									<li>
										<a href="/#features" className="text-base text-gray-500 hover:text-gray-900">Features</a>
									</li>
									<li>
										<a href="/#integrations" className="text-base text-gray-500 hover:text-gray-900">Integrations</a>
									</li>
									<li>
										<a href="/pricing" className="text-base text-gray-500 hover:text-gray-900">Pricing</a>
									</li>
								</ul>
							</div>
							<div className="mt-12 md:mt-0"><h3 className="text-base font-medium text-gray-900">{tsHomepage('support')}</h3>
								<ul role="list" className="mt-4 space-y-4"><li>
									<a href="mailto:hello@praisehive.com" className="text-base text-gray-500 hover:text-gray-900">Contact</a>
								</li>
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-8"><div>
							<h3 className="text-base font-medium text-gray-900">{tsHomepage('resources')}</h3>
							<ul role="list" className="mt-4 space-y-4">
								<li>
									<a href="/blog" className="text-base text-gray-500 hover:text-gray-900">Blog</a>
								</li>
								<li>
									<a href="/guides" className="text-base text-gray-500 hover:text-gray-900">Guides</a>
								</li>
							</ul>
						</div>
							<div className="mt-12 md:mt-0">
								<h3 className="text-base font-medium text-gray-900">{tsHomepage('legal')}</h3>
								<ul role="list" className="mt-4 space-y-4">
									<li>
										<a href="/privacy" className="text-base text-gray-500 hover:text-gray-900">Privacy policy</a>
									</li>
									<li>
										<a href="/terms" className="text-base text-gray-500 hover:text-gray-900">Terms of Service</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-12 border-t border-gray border-opacity-20 pt-8">
					<p className="text-base text-gray-200 xl:text-center">© 2023 Espectrosoft S.A.S. Todos los derechos reservados.</p>
				</div>
			</div>
		</footer>
	)
}
