'use client'

import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';

import {
	createStyles, Header, HoverCard, Group, UnstyledButton,
	Text, SimpleGrid, ThemeIcon, Anchor, Divider, Center, Box, Burger,
	Drawer, Collapse, ScrollArea, rem, Button,
} from '@mantine/core';

import Link from 'next/link';

import { FiChevronDown, FiLoader, FiX } from "react-icons/fi";
import { RiTranslate2 } from 'react-icons/ri';
import { useState } from 'react';
import { infoMenu } from './Items/InfoMenu';
import { useGlobalContext } from '../context/translations';
import Translation from '../translation/Translation';
import { BsArrowRight, BsArrowRightShort, BsBell, BsFillPersonFill } from 'react-icons/bs';



const useStyles = createStyles((theme) => ({
	link: {
		display: 'flex',
		alignItems: 'center',
		height: '100%',
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
		textDecoration: 'none',
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		fontWeight: 500,
		fontSize: '15.5px',

		[theme.fn.smallerThan('sm')]: {
			height: rem(42),
			display: 'flex',
			alignItems: 'center',
			width: '100%',
		},

	},

	subLink: {
		width: '100%',
		padding: `${theme.spacing.xs} ${theme.spacing.md}`,
		borderRadius: theme.radius.md,

		...theme.fn.hover({
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
		}),

		'&:active': theme.activeStyles,
	},

	dropdownFooter: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
		margin: `calc(${theme.spacing.md} * -1)`,
		marginTop: theme.spacing.sm,
		padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
		paddingBottom: theme.spacing.xl,
		borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
			}`,
	},

	hiddenMobile: {
		[theme.fn.smallerThan(1400)]: {
			display: 'none',
		},
	},

	hiddenDesktop: {
		[theme.fn.largerThan(1400)]: {
			display: 'none',
		},
	},
}));


export default function Menu() {

	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
	const [isLoading, setIsLoading] = useState<Boolean>(false)
	const { selectedLanguage, setSelectedLanguage } = useGlobalContext();


	const { classes } = useStyles();
	const [linksOpened, setLinksOpened] = useState({
		services: false,
	});


	const handleLanguageSelection = () => {
		(selectedLanguage == 'spanish') ? setSelectedLanguage('english') : setSelectedLanguage('spanish');
	};

	const handleToggle = (key: any) => {
		setLinksOpened((prevState) => ({
			...prevState,
			//@ts-ignore
			[key]: !prevState[key],
		}));
	};

	const generateSubMenu = (menu: string) => {

		let menuSelected: any;

		switch (menu) {
			case 'services': menuSelected = infoMenu.services; break;
		}

		return menuSelected.map((item: any) => (
			<Link key={item.title[selectedLanguage]} href={item.url} target={item.newTab ? '_blank' : '_self'}>
				<UnstyledButton className={classes.subLink} key={item.title}>
					<Group noWrap align="flex-start">
						<ThemeIcon size={34} className={`bg-white border-[#ccc] rounded-md`} >
							<item.icon size={rem(22)} color={'#1B75B0'} />
						</ThemeIcon>
						<div>
							<Text size="sm" fw={500}>
								{item.title[selectedLanguage]}
							</Text>
							<Text size="xs" color="dimmed">
								{item.description[selectedLanguage]}
							</Text>
						</div>
					</Group>
				</UnstyledButton>
			</Link>
		))
	}

	if (isLoading) {
		return (
			<div className='container p-5 flex gap-x-5'>
				<div className='bg-gray w-1/5 h-14 rounded-xl opacity-20 skeleton-animation'></div>
				<div className='bg-gray w-3/5 h-14 rounded-xl opacity-20 skeleton-animation'></div>
				<div className='bg-gray w-1/5 h-14 rounded-xl opacity-20 skeleton-animation'></div>
			</div>
		);
	}

	return (
		<Box className='border-header'>

			<div className='bg-dark-blue w-full h-11 flex items-center max-lg:py-10 text-center max-lg:px-8'>
				<div className='container flex text-sm text-white justify-center items-center gap-x-3'>
					<div className='max-lg:hidden'>
						<BsBell></BsBell>
					</div>
					<Translation section='settings' translationKey='main_alert' />
				</div>
			</div>

			<Header height={85} px="md" bg={'none'} className='border-none container'>
				<Group position="apart" sx={{ height: '100%' }}>

					<Link href={'/'}>
						<Image
							src={'/logo.svg'}
							width={212}
							height={30}
							alt='Logo de Espectrosoft'
						></Image>
					</Link>


					<Group sx={{ height: '100%', width: '45%', justifyContent: 'space-around' }} spacing={0} className={classes.hiddenMobile}>


						<HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
							<HoverCard.Target>
								<Link href={"#"} className={classes.link}>
									<Center inline>
										<Box component="span" mr={5}>
											<Translation section='header' translationKey='about' />
										</Box>
									</Center>
								</Link>
							</HoverCard.Target>
						</HoverCard>


						<HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
							<HoverCard.Target>
								<Link href={"#"} className={classes.link}>
									<Center inline>
										<Box component="span" mr={5}>
											<Translation section='header' translationKey='services' />
										</Box>
										<FiChevronDown size={16} color={'#1B75B0'} />
									</Center>
								</Link>
							</HoverCard.Target>

							<HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
								<Group position="apart" px="md">
									<Text fw={500}>
										<Translation section='header' translationKey='services' />
									</Text>
								</Group>

								<Divider
									my="sm"
									mx="-md"
									color={'gray.1'}
								/>

								<SimpleGrid cols={2} spacing={0}>
									{generateSubMenu('services')}
								</SimpleGrid>

								<div className={classes.dropdownFooter}>
									<Group position="apart">
										<div>
											<Text fw={500} fz="sm">
												<Translation section='header' translationKey='start_project' />
											</Text>
											<Text size="xs" color="dimmed">
												<Translation section='header' translationKey='start_project_description' />
											</Text>
										</div>
										<Button variant='default'>
											<Translation section='header' translationKey='contact_sells' />
											<BsArrowRightShort className='text-lg ml-2'></BsArrowRightShort>
										</Button>


									</Group>
								</div>
							</HoverCard.Dropdown>
						</HoverCard>

						<HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
							<HoverCard.Target>
								<Link href={"#"} className={classes.link}>
									<Center inline>
										<Box component="span" mr={5}>
											<Translation section='header' translationKey='portfolio' />
										</Box>
									</Center>
								</Link>
							</HoverCard.Target>
						</HoverCard>

						<HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
							<HoverCard.Target>
								<Link href={"#"} className={classes.link}>
									<Center inline>
										<Box component="span" mr={5}>
											<Translation section='header' translationKey='contact' />
										</Box>
									</Center>
								</Link>
							</HoverCard.Target>
						</HoverCard>

					</Group>

					<Group className={classes.hiddenMobile}>

						<div className='border-user w-11 flex justify-center items-center h-11 rounded-md cursor-pointer text-gray-200' onClick={handleLanguageSelection}>
							<RiTranslate2 className='text-xl opacity-50'></RiTranslate2>
						</div>

						<Link href={'#'} className='flex justify-center items-center gap-x-2 border-user px-4 py-2 rounded border text-gray'>
							<BsFillPersonFill></BsFillPersonFill>
							<div className='font-medium'>
								<Translation section='header' translationKey='customers' />
							</div>
						</Link>

						<Link href={'#'} className='bg-dark-blue px-5 py-2 rounded'>
							<div className='text-white font-medium my-[1px]'>
								<div className='flex justify-center items-center'>
									<Translation section='header' translationKey='contact_us' />
									<BsArrowRight className='text-lg ml-2'></BsArrowRight>
								</div>

							</div>
						</Link>

					</Group>

					<Burger opened={drawerOpened} onClick={toggleDrawer} className={`${classes.hiddenDesktop} max-md:mr-5`} color='#000' />
				</Group>
			</Header>

			<Drawer 
				title={<Translation section='header' translationKey='menu' />}
				opened={drawerOpened}
				onClose={closeDrawer}
				size="85%"
				padding="40px"
				className={classes.hiddenDesktop}
				zIndex={1000000}

			>
				<ScrollArea h={`calc(100vh - ${rem(120)})`} mx="-md" px={'0px'}>
					<Divider my="2px" color='#21232E43' w={'100%'} />

					<UnstyledButton className={`${classes.link} mb-8 mt-5`}>
						<Center inline>
							<Box component="span" mr={5}>
								<Translation section='header' translationKey='about' />
							</Box>
						</Center>
					</UnstyledButton>


					<UnstyledButton className={`${classes.link} mb-8 mt-5`} onClick={() => handleToggle('services')}>
						<Center inline>
							<Box component="span" mr={5}>
								<Translation section='header' translationKey='services' />
							</Box>
							<FiChevronDown size={16} color={'#1B75B0'} />
						</Center>
					</UnstyledButton>
					<Collapse in={linksOpened['services']}>{generateSubMenu('services')}</Collapse>

					<UnstyledButton className={`${classes.link} mb-8 mt-5`}>
						<Center inline>
							<Box component="span" mr={5}>
								<Translation section='header' translationKey='portfolio' />
							</Box>
						</Center>
					</UnstyledButton>

					<UnstyledButton className={`${classes.link} mb-8 mt-5`}>
						<Center inline>
							<Box component="span" mr={5}>
								<Translation section='header' translationKey='contact' />
							</Box>
						</Center>
					</UnstyledButton>

					<Divider my="sm" color='#21232E43' />

					<div className='mt-6'>
						<Link href={'#'}>
							<button className='bg-light-blue text-white px-5 py-[9px] rounded-md max-md:w-full max-md:mb-3'>
								<Translation section='header' translationKey='customers' />
							</button>
						</Link>

						<Link href={'#'}>
							<button className='bg-dark-blue text-white px-5 py-[9px] rounded-md max-md:w-full max-md:mb-3'>
								<Translation section='header' translationKey='contact_us' />
							</button>
						</Link>

						<div className='md:flex gap-x-5 justify-center mt-1 flex-wrap'>
							<div onClick={handleLanguageSelection} className='border p-2 rounded-md opacity-40 cursor-pointer flex max-md:justify-center max-md:gap-x-5 items-center max-md:mb-3'>
								<RiTranslate2 className='text-xl'></RiTranslate2>
								{/*@ts-ignore*/}
								<div className='md:hidden text-black'>
									<Translation section='settings' translationKey='language' />
								</div>
							</div>
						</div>
					</div>

				</ScrollArea>
			</Drawer>
		</Box>
	);
}