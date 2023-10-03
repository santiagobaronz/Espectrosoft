import { useTranslations } from 'next-intl';
import { useRouter } from 'next-intl/client';

import {
	HoverCard, Group, Button, UnstyledButton, Text,
	SimpleGrid, ThemeIcon, Anchor, Divider, Center, Box,
	Burger, Drawer, Collapse, ScrollArea, rem, useMantineTheme,
} from '@mantine/core';

import Link from 'next/link';
import { FiChevronDown, FiLoader, FiX } from "react-icons/fi";
import { RiTranslate2 } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { infoMenu } from './Items/InfoMenu';
import { BsArrowRightShort, BsBell } from 'react-icons/bs';
import classes from '../styles/Header.module.css';
import { useDisclosure } from '@mantine/hooks';

export default function Menu() {

	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
	const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
	const theme = useMantineTheme();

	const tsSettings = useTranslations('settings')
	const tsHeader = useTranslations('header')
	const router = useRouter()


	const handleLanguageSelection = () => {
		if (tsSettings('lg') == 'es') {
			router.push('/', { locale: 'en' });
		} else {
			router.push('/', { locale: 'es' });
		}
	};


	const links = infoMenu.services.map((item) => (
		<Link key={item.title[tsSettings('lg')]} href={item.url} target={item.newTab ? '_blank' : '_self'} onClick={toggleDrawer}>
			<UnstyledButton className={classes.subLink}>
				<Group wrap="nowrap" align="flex-start">
					<ThemeIcon size={34} variant="default" radius="md">
						<item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
					</ThemeIcon>
					<div>
						<Text className='text-[13px]' fw={500}>
							{item.title[tsSettings('lg')]}
						</Text>
						<Text className='text-[12px]' c="dimmed">
							{item.description[tsSettings('lg')]}
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
					{tsSettings('main_alert')}
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
							{tsHeader('about')}
						</a>

						<HoverCard width={650} position="bottom" radius="md" shadow="md" withinPortal>
							<HoverCard.Target>
								<a href="#" className={`${classes.link} text-[14.7px]`}>
									<Center inline>
										<Box component="span" mr={5}>
											{tsHeader('services')}
										</Box>
										<FiChevronDown size={16} color={'#1B75B0'} />
									</Center>
								</a>
							</HoverCard.Target>

							<HoverCard.Dropdown style={{ overflow: 'hidden' }}>
								<Group justify="space-between" px="md">
									<Text fw={500} className='mt-1 text-[15.3px]'>
										{tsHeader('services')}
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
												{tsHeader('start_project')}
											</Text>
											<Text className='text-xs' c="dimmed">
												{tsHeader('start_project_description')}
											</Text>
										</div>
										<Button variant="default" className='font-medium text-[13px]'>
											{tsHeader('contact_sales')}
											<BsArrowRightShort className='text-lg ml-2'></BsArrowRightShort>
										</Button>
									</Group>
								</div>
							</HoverCard.Dropdown>
						</HoverCard>

						<a href="#" className={`${classes.link} text-[14.7px]`}>
							{tsHeader('portfolio')}
						</a>
						<a href="#" className={`${classes.link} text-[14.7px]`}>
							{tsHeader('contact')}
						</a>

					</Group>

					<Group visibleFrom="xl">
						<div className='border-user w-11 h-11 flex justify-center items-center rounded-md cursor-pointer text-gray-200' onClick={handleLanguageSelection}>
							<RiTranslate2 className='text-xl opacity-50'></RiTranslate2>
						</div>

						<Link href={'#'} className='flex justify-center items-center gap-x-2 border-user px-4 py-2 rounded-md border text-gray'>
							<div className='font-normal text-[15px]'>
								{tsHeader('customers')}
							</div>
						</Link>

						<Link href={'#'} className='bg-dark-blue px-7 py-2 rounded-md'>
							<div className='text-white font-medium text-[15px] my-[1px]'>
								<div className='flex justify-center items-center'>
									{tsHeader('contact_us')}
								</div>

							</div>
						</Link>
					</Group>

					<Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="xl" className="max-md:mr-5" color='#000' />
				</Group>
			</header>

			<Drawer
				title={tsHeader('menu')}
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
						{tsHeader('about')}
					</a>
					<UnstyledButton className={`${classes.link} mb-4 mt-5 !font-normal`} onClick={toggleLinks}>
						<Center inline>
							<Box component="span" mr={5}>
								{tsHeader('services')}
							</Box>
							<FiChevronDown size={16} color={'#1B75B0'} />
						</Center>
					</UnstyledButton>
					<Collapse in={linksOpened}>{links}</Collapse>
					<a href="#" className={`${classes.link} mb-8 mt-8 !font-normal`} onClick={toggleDrawer}>
						{tsHeader('portfolio')}
					</a>
					<a href="#" className={`${classes.link} mb-8 mt-5 !font-normal`} onClick={toggleDrawer}>
						{tsHeader('contact')}
					</a>

					<Divider my="sm" color='#21232E43' />


					<div className='mt-6 md:flex gap-x-3'>
						<Link href={'#'}>
							<button className='bg-light-blue text-white px-5 py-[9px] rounded-md max-md:w-full max-md:mb-3'>
								{tsHeader('customers')}
							</button>
						</Link>

						<Link href={'#'}>
							<button className='bg-dark-blue text-white px-5 py-[9px] rounded-md max-md:w-full max-md:mb-3'>
								{tsHeader('contact_us')}
							</button>
						</Link>

						<div className='md:flex gap-x-5 justify-center mt-1 flex-wrap'>
							<div onClick={handleLanguageSelection} className='border p-2 rounded-md opacity-40 cursor-pointer flex max-md:justify-center max-md:gap-x-5 items-center max-md:mb-3'>
								<RiTranslate2 className='text-xl'></RiTranslate2>
								<div className='md:hidden text-black'>
									{tsHeader('translate')}
								</div>
							</div>
						</div>
					</div>

				</ScrollArea>
			</Drawer>
		</Box>
	);
}