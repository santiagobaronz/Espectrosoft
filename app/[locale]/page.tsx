'use client'

import React from 'react'
import Main from '../../src/components/Home/Main'
import Introduction from '../../src/components/Home/Introduction'
import AboutUs from '../../src/components/Home/AboutUs'
import Services from '../../src/components/Home/Services'

export default async function HomePage() {

	return (
		<div>
			<Main></Main>
			<Introduction></Introduction>
			<AboutUs></AboutUs>
			<Services></Services>
		</div>
	)
}
