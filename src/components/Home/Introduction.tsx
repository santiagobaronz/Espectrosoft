import React from 'react'
import { createStyles, Title, Text, Button, Container, rem } from '@mantine/core';
import { Dots } from './utils/Dots';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
	wrapper: {
		position: 'relative',
		paddingTop: rem(30),
		paddingBottom: rem(50),

		[theme.fn.smallerThan('sm')]: {
			paddingTop: rem(80),
			paddingBottom: rem(60),
		},
	},

	inner: {
		position: 'relative',
		zIndex: 1,
	},

	dots: {
		position: 'absolute',
		color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

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

		[theme.fn.smallerThan('xs')]: {
			fontSize: rem(28),
			textAlign: 'left',
		},
	},

	highlight: {
		color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
	},

	description: {
		textAlign: 'center',

		[theme.fn.smallerThan('xs')]: {
			textAlign: 'left',
			fontSize: theme.fontSizes.md,
		},
	},

	controls: {
		marginTop: theme.spacing.lg,
		display: 'flex',
		justifyContent: 'center',

		[theme.fn.smallerThan('xs')]: {
			flexDirection: 'column',
		},
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
		<Container className={`${classes.wrapper} mt-12`} size={1400}>
			<Dots className={classes.dots} style={{ left: 0, top: 0 }} />
			<Dots className={classes.dots} style={{ left: 60, top: 0 }} />
			<Dots className={classes.dots} style={{ left: 0, top: 140 }} />
			<Dots className={classes.dots} style={{ right: 0, top: 60 }} />

			<div className={classes.inner}>

				<div className='flex justify-center gap-x-7 mb-8'>
					<h2>Categorias en tendencia</h2>
					<div>
						<Link href={'#'} className='bg-dark-blue text-sm rounded px-2 py-1 mr-3 text-white'>Diseño web</Link>
						<Link href={'#'} className='bg-dark-blue text-sm rounded px-2 py-1 mr-3 text-white'>Hosting</Link>
						<Link href={'#'} className='bg-dark-blue text-sm rounded px-2 py-1 mr-3 text-white'>Dominios</Link>
					</div>
				</div>

				<Title className={classes.title}>
					Soluciones{' '}
					<Text component="span" className={classes.highlight} inherit>
						web
					</Text>{' '}
					hechas a la medida:{' '}
					<Text component="span" className={classes.highlight} inherit>
						Impulsa
					</Text>{' '}
					tu éxito en internet
				</Title>

				<Container p={0} size={850}>
					<Text size="lg" color="dimmed" className={classes.description}>
						El futuro de tu negocio se encuentra en la web, y nosotros estamos aquí para
						construirlo. Te ofrecemos soluciones web personalizadas, basadas en tecnología
						de vanguardia y diseñadas para impulsar tu crecimiento y éxito.
					</Text>
				</Container>

				<div className='flex justify-center gap-x-3 mt-8'>
					<Button className='font-medium' size="lg" variant="default" color="gray">
						Ver portafolio
					</Button>
					<button className='bg-dark-blue font-medium text-white px-6 rounded hover:px-8 transition-all'>
						Contactar con ventas
					</button>
				</div>
			</div>
		</Container>
	);
}
