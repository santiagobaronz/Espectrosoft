'use client'

import MainContent from '@/src/components/Home/MainContent'
import Introduction from '@/src/components/Home/Introduction'
import React from 'react'
import AboutUs from '@/src/components/Home/AboutUs'
import Main from '@/src/components/Home/Main'

export default function HomePage() {

	return (
		<div className='md:pt-10'>
			<Main></Main>
			<Introduction></Introduction>
			<AboutUs></AboutUs>
		</div>
	)
}
