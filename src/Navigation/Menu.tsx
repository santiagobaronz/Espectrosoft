'use client'

import {
	HoverCard, Group, Button, UnstyledButton, Text,
	SimpleGrid, ThemeIcon, Anchor, Divider, Center, Box,
	Burger, Drawer, Collapse, ScrollArea, rem, useMantineTheme,
} from '@mantine/core';

import Link from 'next/link';
import { FiChevronDown } from "react-icons/fi";
import { RiTranslate2 } from 'react-icons/ri';
import { infoMenu } from './Items/InfoMenu';
import { BsArrowRightShort, BsBell } from 'react-icons/bs';
import classes from '../styles/Header.module.css';
import { useDisclosure } from '@mantine/hooks';

export default function Menu() {

	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
	const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
	const theme = useMantineTheme();



	const links = infoMenu.services.map((item) => (
		<Link key={item.title['es']} href={item.url} target={item.newTab ? '_blank' : '_self'} onClick={toggleDrawer}>
			<UnstyledButton className={classes.subLink}>
				<Group wrap="nowrap" align="flex-start">
					<ThemeIcon size={34} variant="default" radius="md">
						<item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
					</ThemeIcon>
					<div>
						<Text className='text-[13px]' fw={500}>
							<span>{item.title['es']}</span>
						</Text>
						<Text className='text-[12px]' c="dimmed">
							{item.description['es']}
						</Text>
					</div>
				</Group>
			</UnstyledButton>
		</Link>
	));


	return (
		<Box className='border-header'>
			<div className='bg-dark-blue w-full h-11 flex items-center max-lg:py-10 text-center max-lg:px-8'>
				<div className='container flex text-sm text-white justify-center items-center gap-x-3'>
					<div className='max-lg:hidden'>
						<BsBell></BsBell>
					</div>
					<div>Consigue un 10% de descuento con el código ESPECTROWEB en servicios de desarrollo web</div>
				</div>
			</div>

			<header className={`${classes.header} border-none container`}>
				<Group justify="space-between" h="100%">

					<Link href={'/'}>
						<img
							src={'https://i.imgur.com/YiRVCbI.png'}
							width={212}
							height={30}
							alt='Logo de Espectrosoft'
						></img>
					</Link>

					<Group h="100%" gap={25} visibleFrom="xl">
						<a href="/about-us" className={`${classes.link} text-[14.7px]`}>
							Nosotros
						</a>

						<HoverCard width={650} position="bottom" radius="md" shadow="md" withinPortal>
							<HoverCard.Target>
								<div className={`${classes.link} text-[14.7px] cursor-pointer`}>
									<Center inline>
										<Box component="span" mr={5}>
											Servicios y precios
										</Box>
										<FiChevronDown size={16} color={'#1B75B0'} />
									</Center>
								</div>
							</HoverCard.Target>

							<HoverCard.Dropdown style={{ overflow: 'hidden' }}>
								<Group justify="space-between" px="md">
									<Text fw={500} className='mt-1 text-[15.3px]'>
										Servicios y precios
									</Text>
								</Group>

								<Divider
									my="sm"
									mx="-md"
									color={'gray.1'}
								/>

								<SimpleGrid cols={2} spacing={5}>
									{links}
								</SimpleGrid>

								<div className={classes.dropdownFooter}>
									<Group justify="space-between">
										<div>
											<Text fw={500} className='text-[13px]'>
												Comienza ahora con tu proyecto
											</Text>
											<Text className='text-xs' c="dimmed">
												Estamos encantados de ayudarte en tu solicitud.
											</Text>
										</div>
										<Button variant="default" className='font-medium text-[13px]'>
											Contactar con ventas
											<BsArrowRightShort className='text-lg ml-2'></BsArrowRightShort>
										</Button>
									</Group>
								</div>
							</HoverCard.Dropdown>
						</HoverCard>

						<a href="#" className={`${classes.link} text-[14.7px]`}>
							Portafolio
						</a>
						<a href="#" className={`${classes.link} text-[14.7px]`}>
							Contactanos
						</a>

					</Group>

					<Group visibleFrom="xl">
						<div className='border-user w-11 h-11 flex justify-center items-center rounded-md cursor-pointer text-gray-200'>
							<RiTranslate2 className='text-xl opacity-50'></RiTranslate2>
						</div>

						<Link href={'#'} className='flex justify-center items-center gap-x-2 border-user px-4 py-2 rounded-md border text-gray'>
							<div className='font-normal text-[15px]'>
								Clientes
							</div>
						</Link>

						<Link href={'#'} className='bg-dark-blue px-7 py-2 rounded-md'>
							<div className='text-white font-medium text-[15px] my-[1px]'>
								<div className='flex justify-center items-center'>
									Cotizar ahora
								</div>

							</div>
						</Link>
					</Group>

					<Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="xl" className="max-md:mr-5" color='#000' />
				</Group>
			</header>

			<Drawer
				title={'Menú de navegación'}
				opened={drawerOpened}
				onClose={closeDrawer}
				size="85%"
				padding="40px"
				hiddenFrom="xl"
				zIndex={1000000}
			>
				<ScrollArea h={`calc(100vh - ${rem(120)})`} mx="-md" px={'0px'}>
					<Divider my="2px" color='#21232E43' w={'100%'} />

					<a href="/about-us" className={`${classes.link} mb-8 mt-5 !font-normal`} onClick={toggleDrawer}>
						Nosotros
					</a>
					<UnstyledButton className={`${classes.link} mb-4 mt-5 !font-normal`} onClick={toggleLinks}>
						<Center inline>
							<Box component="span" mr={5}>
								Servicios y precios
							</Box>
							<FiChevronDown size={16} color={'#1B75B0'} />
						</Center>
					</UnstyledButton>
					<Collapse in={linksOpened}>{links}</Collapse>
					<a href="#" className={`${classes.link} mb-8 mt-8 !font-normal`} onClick={toggleDrawer}>
						Portafolio
					</a>
					<a href="#" className={`${classes.link} mb-8 mt-5 !font-normal`} onClick={toggleDrawer}>
						Contactanos
					</a>

					<Divider my="sm" color='#21232E43' />


					<div className='mt-6 md:flex gap-x-3'>
						<Link href={'#'}>
							<button className='bg-light-blue text-white px-5 py-[9px] rounded-md max-md:w-full max-md:mb-3'>
								Clientes
							</button>
						</Link>

						<Link href={'#'}>
							<button className='bg-dark-blue text-white px-5 py-[9px] rounded-md max-md:w-full max-md:mb-3'>
								Cotizar ahora
							</button>
						</Link>
					</div>
				</ScrollArea>
			</Drawer>
		</Box>
	);
}