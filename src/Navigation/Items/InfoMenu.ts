import { BsCart4, BsCodeSlash, BsGlobe, BsServer, BsWindowPlus, BsWrench, } from "react-icons/bs";

export const infoMenu = {
	'services': [
		{
			icon: BsWindowPlus,
			title: {
				es: 'Diseño y desarrollo web',
				en: 'Web development',
			},
			description: {
				es: 'Construimos sitios web para que impulses tu marca.',
				en: 'We build websites for you to boost your brand.',
			},
			url: '/desarrollo-web',
			newTab: false
		},
		{
			icon: BsCart4,
			title: {
				es: 'E-commerce',
				en: 'E-commerce',
			},
			description: {
				es: 'Ofrece tus productos en internet mediante una tienda virtual.',
				en: 'Offer your products on the internet through a virtual store.',
			},
			url: '/e-commerce',
			newTab: false
		},
		{
			icon: BsServer,
			title: {
				es: 'Alojamiento web',
				en: 'Web Hosting ',
			},
			description: {
				es: 'Almacena los datos de un proyecto y subelo a internet.',
				en: 'Store the data of a project and upload it to the internet.',
			},
			url: '/hosting-web',
			newTab: false
		},
		{
			icon: BsGlobe,
			title: {
				es: 'Dominios',
				en: 'Domains',
			},
			description: {
				es: 'Un dominio es la dirección para encontrar tu sitio web en internet.',
				en: 'Store the data of a project and upload it to the internet.',
			},
			url: '/desarrollo-web',
			newTab: false
		},
		{
			icon: BsWrench,
			title: {
				es: 'Mantenimiento web',
				en: 'Web maintenance',
			},
			description: {
				es: 'Actualizamos, optimizamos y arreglamos tu aplicación.',
				en: 'We update, optimize and fix your app.',
			},
			url: '/desarrollo-web',
			newTab: false
		},
		{
			icon: BsCodeSlash,
			title: {
				es: 'Soluciones empresariales',
				en: 'Enterprise Solutions',
			},
			description: {
				es: 'Software especializado diseñado para impulsar tu negocio.',
				en: 'Specialized software designed to boost your business.',
			},
			url: '/desarrollo-web',
			newTab: false
		}
	]
}