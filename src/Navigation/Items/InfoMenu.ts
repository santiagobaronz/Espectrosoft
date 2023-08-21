import { BsCart4, BsCodeSlash, BsGlobe, BsServer, BsWindowPlus, BsWrench, } from "react-icons/bs";

export const infoMenu = {
	'services': [
		{
			icon: BsWindowPlus,
			title: {
				spanish: 'Diseño y desarrollo web',
				english: 'Web development',
			},
			description: {
				spanish: 'Construimos sitios web para que impulses tu marca.',
				english: 'We build websites for you to boost your brand.',
			},
			url: '/desarrollo-web',
			newTab: false
		},
		{
			icon: BsCart4,
			title: {
				spanish: 'E-commerce',
				english: 'E-commerce',
			},
			description: {
				spanish: 'Ofrece tus productos en internet mediante una tienda virtual.',
				english: 'Offer your products on the internet through a virtual store.',
			},
			url: '/desarrollo-web',
			newTab: false
		},
		{
			icon: BsServer,
			title: {
				spanish: 'Alojamiento web',
				english: 'Web Hosting ',
			},
			description: {
				spanish: 'Almacena los datos de un proyecto y subelo a internet.',
				english: 'Store the data of a project and upload it to the internet.',
			},
			url: '/desarrollo-web',
			newTab: false
		},
		{
			icon: BsGlobe,
			title: {
				spanish: 'Dominios',
				english: 'Domains',
			},
			description: {
				spanish: 'Un dominio es la dirección para encontrar tu sitio web en internet.',
				english: 'Store the data of a project and upload it to the internet.',
			},
			url: '/desarrollo-web',
			newTab: false
		},
		{
			icon: BsWrench,
			title: {
				spanish: 'Mantenimiento web',
				english: 'Web maintenance',
			},
			description: {
				spanish: 'Actualizamos, optimizamos y arreglamos tu sitio web.',
				english: 'We update, optimize and fix your website.',
			},
			url: '/desarrollo-web',
			newTab: false
		},
		{
			icon: BsCodeSlash,
			title: {
				spanish: 'Soluciones empresariales',
				english: 'Enterprise Solutions',
			},
			description: {
				spanish: 'Software especializado diseñado para impulsar tu negocio.',
				english: 'Specialized software designed to boost your business.',
			},
			url: '/desarrollo-web',
			newTab: false
		}
	]
}