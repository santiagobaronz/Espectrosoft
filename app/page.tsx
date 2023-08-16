'use client'

import Introduction from '@/src/components/Home/Introduction'
import Services from '@/src/components/Home/Services'
import React from 'react'

export default function HomePage() {

	return (
		<div className='pt-10'>
			<Introduction></Introduction>
			<Services></Services>
		</div>
	)
}
