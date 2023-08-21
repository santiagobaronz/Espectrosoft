'use client'

import Introduction from '@/src/components/Home/Introduction'
import React from 'react'
import AboutUs from '@/src/components/Home/AboutUs'
import Main from '@/src/components/Home/Main'


export default async function HomePage() {

	return (
		<div className='md:pt-10'>
			<Main></Main>
			<Introduction></Introduction>
			<AboutUs></AboutUs>
		</div>
	)
}
