import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'crypto-app',
		color: '#5e95e3',
		description:
			'Created a website that shows basic information about the Cryptocurrency market. It has a list of the most important cryptocurrencies in the market and also includes a News page updated in real time!',
		shortDescription:
			'Created a website that shows basic information about the Cryptocurrency market. It has a list of the most important cryptocurrencies in the market and also includes a News page updated in real time!',
		links: [{ to: 'https://delrio12.github.io/crypto-app/', label: 'Website' },
				{ to: 'https://github.com/delrio12/crypto-app', label: 'GitHub' }
		],
		logo: Assets.ReactJs,
		name: 'CryptoRiver App',
		period: {
			from: new Date()
		},
		skills: getSkills('reactjs', 'ts', 'css'),
		type: 'Website App'
	},
	{
		slug: 'tesla-clone',
		color: '#ff3e00',
		description:
			'A Clone of the mainpage of Telsa website. For this project I used styled-components library to write a CSS script in the component and improve overall readability of the script, React Redux library to manage states used in the website, and react-reveal for the animations part.',
		shortDescription:
			'A Clone of the mainpage of Telsa website. For this project I used styled-components, React Redux, and react-reveal libraries.',
		links: [{ to: 'https://delrio12.github.io/tesla-clone-redux/', label: 'Website' },
				{ to: 'https://github.com/delrio12/tesla-clone-redux', label: 'GitHub' }
		],
		logo: Assets.ReactJs,
		name: 'Tesla Mainpage Clone',
		period: {
			from: new Date("2021-07-01")
		},
		skills: getSkills('reactjs', 'css', 'html', 'redux', 'ts'),
		type: 'Website App',
		/* screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]*/
	},
	{
		slug: 'twitter-clone',
		color: '#65743A',
		description:
			'Created a Twitter clone that has a few features that allows users to tweet and attach a GIF or URL.',
		shortDescription:
			'Created a Twitter clone that has a few features that allows users to tweet and attach a GIF or URL.',
		links: [{ to: 'https://delrio12.github.io/twitter-clone/', label: 'Website' },
				{ to: 'https://github.com/delrio12/twitter-clone', label: 'GitHub' }
		],
		logo: Assets.ReactJs,
		name: 'Twitter Clone',
		period: {
			from: new Date("2022-08-01"),
			to: new Date("2022-12-01")
		},
		skills: getSkills('reactjs', 'ts', 'css', 'reactjs'),
		type: 'Website App'
	},
	{
		slug: 'article-preview-component-master',
		color: '#EFDD8D',
		description:
			'Created an article preview component for Front-End Mentor first challenge.',
		shortDescription:
			'Created an article preview component for Front-End Mentor first challenge.',
		links: [{ to: 'https://delrio12.github.io/article-preview-component-master/', label: 'Website' },
				{ to: 'https://github.com/delrio12/article-preview-component-master', label: 'GitHub' }
		],
		logo: Assets.CSS,
		name: 'Article Preview Component',
		period: {
			from: new Date("2024-01-01"),
			to: new Date("2024-01-03")
		},
		skills: getSkills('javascript', 'html', 'css'),
		type: 'Component'
	},
	{
		slug: 'newsletter-sign-up-with-success-message-main',
		color: '#EFDD8D',
		description:
			'Created a Newsletter sign-up component for Front-End Mentor second challenge.',
		shortDescription:
			'Created a Newsletter sign-up component for Front-End Mentor second challenge.',
		links: [{ to: 'https://delrio12.github.io/newsletter-sign-up-with-success-message-main/', label: 'Website' },
				{ to: 'https://github.com/delrio12/newsletter-sign-up-with-success-message-main', label: 'GitHub' }
		],
		logo: Assets.CSS,
		name: 'Newsletter sign-up component',
		period: {
			from: new Date("2024-01-01"),
			to: new Date("2024-01-03")
		},
		skills: getSkills('javascript', 'html', 'css'),
		type: 'Component'
	},
	{
		slug: 'newsletter-email',
		color: '#59114D',
		description:
			'Created a newsletter email using HTML and CSS only.',
		shortDescription:
			'Created a newsletter email using HTML and CSS only.',
		links: [{ to: 'https://delrio12.github.io/newsletter-email/', label: 'Website' },
				{ to: 'https://github.com/delrio12/newsletter-email', label: 'GitHub' }
		],
		logo: Assets.HTML,
		name: 'Newsletter Email',
		period: {
			from: new Date("2021-08-01"),
			to: new Date("2024-08-03")
		},
		skills: getSkills('html', 'css'),
		type: 'Email'
	},
];

export const title = 'Projects';
