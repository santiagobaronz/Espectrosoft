'use client'

import MainContent from '@/src/components/Home/MainContent'
import Introduction from '@/src/components/Home/Introduction'
import React from 'react'
import AboutUs from '@/src/components/Home/AboutUs'

export default function HomePage() {

	return (
		<div>
			<div className='md:pt-10'>
				<Introduction></Introduction>
			</div>
			<AboutUs></AboutUs>
		</div>
	)
}
