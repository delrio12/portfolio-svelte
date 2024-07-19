import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'twitter-clone',
		color: '#65743A',
		description:
			'I created a clone of the Twitter website that allows users to write tweets and save them in a database. This project was completed using ReactJS, CSS for styling, Firestore from Firebase as a real-time database, Material-UI for icons and designs, and react-flip-move to enhance the website with dynamic transitions and animations.',
		shortDescription:
			'I created a clone of the Twitter website that allows users to write tweets and save them in a database.',
		links: [{ to: 'https://delrio12.github.io/twitter-clone/', label: 'Website' },
				{ to: 'https://github.com/delrio12/twitter-clone', label: 'GitHub' }
		],
		logo: Assets.ReactJs,
		name: 'Twitter clone',
		period: {
			from: new Date("2021-02-15"),
			to: new Date("2021-03-08")
		},
		skills: getSkills('reactjs', 'css', 'js', 'firebase', 'mui'),
		type: 'Website App'
	},
	{
		slug: 'tesla-clone',
		color: '#5e95e3',
		description:
			'I created a clone of the main page of the Tesla website. For this project, I used styled-components library to write CSS directly in the components, enhancing the overall readability of the code. Additionally, I utilized the React Redux library to manage states across the website, and incorporated react-reveal for animations.',
		shortDescription:
			'I created a clone of the main page of the Tesla website using ReactJS and React Redux.',
		links: [{ to: 'https://delrio12.github.io/tesla-clone-redux/', label: 'Website' },
				{ to: 'https://github.com/delrio12/tesla-clone-redux', label: 'GitHub' }
		],
		logo: Assets.ReactJs,
		name: 'Tesla clone',
		period: {
			from: new Date("2024-07-01"),
			to: new Date("2024-07-15")
		},
		skills: getSkills('reactjs', 'css', 'redux', 'ts', 'js'),
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
		slug: 'crypto-app',
		color: '#ff3e00',
		description:
			'Created a website that shows basic information about the Cryptocurrency market. It has a list of the most important cryptocurrencies in the market and also includes a News page updated in real time! For this project I used ReactJS, CSS.',
		shortDescription:
			'Created a website that shows basic information about the Cryptocurrency market.',
		links: [{ to: 'https://delrio12.github.io/crypto-app/', label: 'Website' },
				{ to: 'https://github.com/delrio12/crypto-app', label: 'GitHub' }
		],
		logo: Assets.ReactJs,
		name: 'CryptoRiver app',
		period: {
			from: new Date("2022-06-29"),
			to: new Date("2022-07-06")
		},
		skills: getSkills('reactjs', 'ts', 'css', 'js'),
		type: 'Website App'
	},
	{
		slug: 'article-preview-component-master',
		color: '#65743A',
		description:
			'I created an article preview component for a Front-End Mentor challenge using HTML, CSS and JavaScript.',
		shortDescription:
			'I created an article preview component for a Front-End Mentor challenge using HTML, CSS and JavaScript.',
		links: [{ to: 'https://delrio12.github.io/article-preview-component-master/', label: 'Website' },
				{ to: 'https://github.com/delrio12/article-preview-component-master', label: 'GitHub' }
		],
		logo: Assets.CSS,
		name: 'Article preview component',
		period: {
			from: new Date("2024-04-03"),
			to: new Date("2024-04-11")
		},
		skills: getSkills('js', 'html', 'css'),
		type: 'Component'
	},
	{
		slug: 'newsletter-sign-up-with-success-message-main',
		color: '#5e95e3',
		description:
			'Created a Newsletter sign-up component for a Front-End Mentor challenge using HTML, CSS and JavaScript.',
		shortDescription:
			'Created a Newsletter sign-up component for a Front-End Mentor challenge using HTML, CSS and JavaScript.',
		links: [{ to: 'https://delrio12.github.io/newsletter-sign-up-with-success-message-main/', label: 'Website' },
				{ to: 'https://github.com/delrio12/newsletter-sign-up-with-success-message-main', label: 'GitHub' }
		],
		logo: Assets.CSS,
		name: 'Newsletter sign-up component',
		period: {
			from: new Date("2024-06-24"),
			to: new Date()
		},
		skills: getSkills('js', 'html', 'css'),
		type: 'Component'
	},
	{
		slug: 'newsletter-email',
		color: '#ff3e00',
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
			from: new Date("2024-02-02"),
			to: new Date("2024-02-04")
		},
		skills: getSkills('html', 'css'),
		type: 'Email'
	},
];

export const title = 'Projects';
