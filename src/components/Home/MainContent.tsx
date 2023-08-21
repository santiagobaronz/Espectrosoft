import React from 'react'
import { BsCodeSlash, BsFillLightningFill, BsGlobe, BsServer, BsWindowPlus, BsWrench } from 'react-icons/bs'

export default function MainContent() {
	return (
		<div className=' main-content'>
			<div className='mt-16 text-center container'>
				<div className="w-10 h-10 mb-8 ring-[8px] ring-[#EEF4FF] rounded-full bg-[#E0EAFF] flex items-center justify-center mx-auto">
					<div className='text-blue'>
						<BsFillLightningFill></BsFillLightningFill>
					</div>
				</div>
				<p className='text-dark-blue text-[16px] font-medium mb-3'>ANALIZAMOS, DESARROLLAMOS Y ENTREGAMOS</p>
				<h2 className='text-black text-4xl font-bold mb-4'>Power up your brand with software</h2>
				<p className='text-gray-200 text-[18px] w-4/6 mx-auto'>We help you build an identity on the internet for your business or brand. Take advantage of custom tools created especially for you.</p>

				<div className='flex justify-center gap-x-8 mt-8 px-14'>
					<div className='w-1/3 bg-[#EEF4FF] border-b-4 border-dark-blue rounded-md shadow-md shadow-text-color p-8 flex items-center gap-x-8 text-left'>
						<div className='w-1/6'>
							<div className='text-[42px] flex justify-center text-blue'>
								<BsWindowPlus></BsWindowPlus>
							</div>
						</div>
						<div className='w-5/6'>
							<h3 className='font-medium'></h3>
							<p className='text-sm'>Sitios web personalizados para tu negocio o marca.</p>
						</div>
					</div>
					<div className='w-1/3 bg-[#EEF4FF] border-b-4 border-dark-blue rounded-md shadow-md shadow-text-color p-8 flex items-center gap-x-8 text-left'>
						<div className='w-1/6'>
							<div className='text-[42px] flex justify-center text-blue'>
								<BsServer></BsServer>
							</div>
						</div>
						<div className='w-5/6'>
							<h3 className='font-medium'>Alojamiento web</h3>
							<p className='text-sm'>Almacena los datos de un proyecto y subelo a internet.</p>
						</div>
					</div>
					<div className='w-1/3 bg-[#EEF4FF] border-b-4 border-dark-blue rounded-md shadow-md shadow-text-color p-8 flex items-center gap-x-8 text-left'>
						<div className='w-1/6'>
							<div className='text-[42px] flex justify-center text-blue'>
								<BsGlobe></BsGlobe>
							</div>
						</div>
						<div className='w-5/6'>
							<h3 className='font-medium'>Diseno y desarrollo web</h3>
							<p className='text-sm'>Sitios web personalizados para tu negocio o marca.</p>
						</div>
					</div>
				</div>

				<div className='flex justify-center gap-x-8 mt-8 px-14'>
					<div className='w-1/3 bg-[#EEF4FF] border-b-4 border-dark-blue rounded-md shadow-md shadow-text-color p-8 flex items-center gap-x-8 text-left'>
						<div className='w-1/6'>
							<div className='text-[42px] flex justify-center text-blue'>
								<BsWrench></BsWrench>
							</div>
						</div>
						<div className='w-5/6'>
							<h3 className='font-medium'>Diseno y desarrollo web</h3>
							<p className='text-sm'>Sitios web personalizados para tu negocio o marca.</p>
						</div>
					</div>
					<div className='w-1/3 bg-[#EEF4FF] border-b-4 border-dark-blue rounded-md shadow-md shadow-text-color p-8 flex items-center gap-x-8 text-left'>
						<div className='w-1/6'>
							<div className='text-[42px] flex justify-center text-blue'>
								<BsCodeSlash></BsCodeSlash>
							</div>
						</div>
						<div className='w-5/6'>
							<h3 className='font-medium'>Diseno y desarrollo web</h3>
							<p className='text-sm'>Sitios web personalizados para tu negocio o marca.</p>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}
