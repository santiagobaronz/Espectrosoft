import React from 'react'
import { createStyles, Title, Text, Button, Container, rem } from '@mantine/core';
import { Dots } from './utils/Dots';
import Link from 'next/link';
import Translation from '@/src/translation/Translation';

const useStyles = createStyles((theme) => ({
	wrapper: {
		position: 'relative',
		marginTop: rem(0),
		paddingBottom: rem(50),

		[theme.fn.smallerThan('sm')]: {
			paddingTop: rem(40),
			paddingBottom: rem(40),
		},
	},

	inner: {
		position: 'relative',
		zIndex: 1,
	},

	dots: {
		position: 'absolute',
		color: '#228be61b',

		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	dotsLeft: {
		left: 0,
		top: 0,
	},

	title: {
		textAlign: 'center',
		fontWeight: 700,
		fontSize: rem(50),
		marginRight: '200px',
		marginLeft: '200px',
		letterSpacing: -1,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		marginBottom: theme.spacing.xs,

		[theme.fn.smallerThan('md')]: {
			marginRight: '30px',
			marginLeft: '30px',
			marginBottom: '40px'
		},

		[theme.fn.smallerThan('xs')]: {
			fontSize: rem(40),
			textAlign: 'left',
		},
	},

	highlight: {
		color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
	},

	description: {
		textAlign: 'center',

		[theme.fn.smallerThan('xs')]: {
			marginRight: '30px',
			marginLeft: '30px',
			textAlign: 'left',
			fontSize: theme.fontSizes.md,
		},
	},

	controls: {
		marginTop: theme.spacing.lg,
		display: 'flex',
		justifyContent: 'center',
	},

	control: {
		'&:not(:first-of-type)': {
			marginLeft: theme.spacing.md,
		},

		[theme.fn.smallerThan('xs')]: {
			height: rem(42),
			fontSize: theme.fontSizes.md,

			'&:not(:first-of-type)': {
				marginTop: theme.spacing.md,
				marginLeft: 0,
			},
		},

	},
}));

export default function Introduction() {
	const { classes } = useStyles();

	return (
		<Container className={`${classes.wrapper} md:pt-10 md:pb-32`} size={1400}>
			<Dots className={classes.dots} style={{ left: 0, top: 0 }} />
			<Dots className={classes.dots} style={{ left: 60, top: 0 }} />
			<Dots className={classes.dots} style={{ left: 0, top: 140 }} />
			<Dots className={classes.dots} style={{ right: 0, top: 60 }} />

			<div className={classes.inner}>

				<div className='flex justify-center items-center gap-x-6 mb-8 max-md:hidden'>
					<h2><Translation section='homePage' translationKey='category' /></h2>
					<div className='flex'>
						<Link href={'#'} className='bg-dark-blue text-sm rounded px-2 py-1 mr-3 text-white'>
							<Translation section='homePage' translationKey='web_design' />
						</Link>
						<Link href={'#'} className='bg-dark-blue text-sm rounded px-2 py-1 mr-3 text-white'>
							<Translation section='homePage' translationKey='hosting' />
						</Link>
						<Link href={'#'} className='bg-dark-blue text-sm rounded px-2 py-1 mr-3 text-white'>
							<Translation section='homePage' translationKey='domains' />
						</Link>
					</div>
				</div>

				<Title className={classes.title}>
					<Translation section='homePage' translationKey='main_title_1' />{' '}
					<Text component="span" className={classes.highlight} inherit>
						<Translation section='homePage' translationKey='main_title_2' />
					</Text>{' '}
					<Translation section='homePage' translationKey='main_title_3' />{' '}
					<Text component="span" className={classes.highlight} inherit>
						<Translation section='homePage' translationKey='main_title_4' />
					</Text>{' '}
					<Translation section='homePage' translationKey='main_title_5' />
				</Title>

				<Container p={0} size={850}>
					<Text size="lg" color="dimmed" className={classes.description}>
						<Translation section='homePage' translationKey='main_description' />
					</Text>
				</Container>

				<div className='md:flex justify-center gap-x-3 mt-8 max-md:ml-8'>
					<Button className='font-medium max-md:mb-3 max-md:mr-5 bg-white' size="lg" variant="default">
						<Translation section='homePage' translationKey='view_portfolio' />
					</Button>
					<button className='bg-dark-blue font-medium text-white px-6 max-md:py-4 rounded hover:px-8 transition-all'>
						<Translation section='homePage' translationKey='contact_sells' />
					</button>
				</div>
			</div>

			<hr className='text-[#D7E3F2] w-1/2 m-auto mt-12' />

			<div className='mt-3 pt-8 container max-sm:px-8'>
				<p className='text-center text-sm text-gray'>
					<Translation section='homePage' translationKey='about_brands' />
				</p>
				<div className='sm:flex justify-center gap-x-10 mt-10'>
					<div className='flex sm:gap-x-10 max-sm:mb-2'>
						<img src="/logos/wordpress.png" alt="" className='w-28 select-none max-sm:mx-auto max-sm:mb-3 max-sm:w-24' />
						<img src="/logos/cpanel.png" alt="" className='w-28 select-none max-sm:mx-auto max-sm:mb-3 max-sm:w-24' />
					</div>

					<div className='flex sm:gap-x-10 max-sm:mb-3'>
						<img src="/logos/litespeed.png" alt="" className='w-28 select-none max-sm:mx-auto max-sm:mb-3 max-sm:w-24' />
						<img src="/logos/gsuite.png" alt="" className='w-28 select-none max-sm:mx-auto max-sm:mb-3 max-sm:w-24' />
					</div>


					<img src="/logos/cloudflare.png" alt="" className='w-28 select-none max-sm:mx-auto max-sm:mb-3 max-sm:w-24' />
				</div>
			</div>

		</Container>
	);
}
