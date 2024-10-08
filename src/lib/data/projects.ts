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
		type: 'Website App',
		screenshots: [
			{
				label: 'Desktop view',
				src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-svelte-3d3e0.appspot.com/o/GitHub%20Storage%2Ftwitter-clone%2Ftwitter-clone-1.jpg?alt=media&token=7a41d5c8-12f2-4b82-bb02-edd00fb5e4d7'
			},
		]
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
		screenshots: [
			{
				label: 'Desktop view',
				src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-svelte-3d3e0.appspot.com/o/GitHub%20Storage%2Ftesla-clone%2Ftwitter-clone-1.jpg?alt=media&token=b154c8b5-7883-4c35-a8c6-4d2aa9dde5ee'
			},
			{
				label: 'Desktop view menu',
				src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-svelte-3d3e0.appspot.com/o/GitHub%20Storage%2Ftesla-clone%2Ftwitter-clone-3.jpg?alt=media&token=7983b5c0-c982-4aa7-a022-3c0bb9e79c56'
			},
			{
				label: 'Mobile view',
				src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-svelte-3d3e0.appspot.com/o/GitHub%20Storage%2Ftesla-clone%2Ftwitter-clone-2.jpg?alt=media&token=b13e9218-08ae-44b4-96a5-11a310298242'
			},
			{
				label: 'Mobile view menu',
				src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-svelte-3d3e0.appspot.com/o/GitHub%20Storage%2Ftesla-clone%2Ftwitter-clone-4.jpg?alt=media&token=61666f99-ae6d-4851-94b9-b1aa3b6eb059'
			}
		]
	},
	{
		slug: 'crypto-app',
		color: '#ff3e00',
		description:
			'Created a website that displays basic information about the cryptocurrency market. It features a list of the most important cryptocurrencies and includes a news page updated in real-time. For this project, I used ReactJS and CSS. Redux was implemented to manage the app state. I used Rapid API to connect to the Coinranking API for real-time cryptocurrency information and the Bing News Search API to retrieve news about crypto. The ant-design library was used for icons and design elements, Chart.js for charts, and the moment.js and millify libraries to parse times and transform numbers into readable strings.',
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
		skills: getSkills('reactjs', 'ts', 'css', 'js', 'redux'),
		type: 'Website App',
		screenshots: [
			{
				label: 'Desktop view',
				src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-svelte-3d3e0.appspot.com/o/GitHub%20Storage%2Fcrypto-app%2Fcrypto-app-1.jpg?alt=media&token=aa9cabde-fbdd-4a05-986c-333e886518db'
			},
			{
				label: 'Desktop view menu',
				src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-svelte-3d3e0.appspot.com/o/GitHub%20Storage%2Fcrypto-app%2Fcrypto-app-2.jpg?alt=media&token=f8cb2917-be02-480f-b14a-4ab1e91f6445'
			},
			{
				label: 'Mobile view',
				src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-svelte-3d3e0.appspot.com/o/GitHub%20Storage%2Fcrypto-app%2Fcrypto-app-3.jpg?alt=media&token=c0490271-97c8-478c-abb7-e3aa633f7db5'
			}
		]
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
		type: 'Component',
		screenshots: [
			{
				label: 'Desktop view',
				src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-svelte-3d3e0.appspot.com/o/GitHub%20Storage%2Farticle-preview-component%2Farticle-preview-component-1.jpg?alt=media&token=455533e7-e08d-48bd-9869-07aca12ee2b0'
			},
			{
				label: 'Mobile view',
				src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-svelte-3d3e0.appspot.com/o/GitHub%20Storage%2Farticle-preview-component%2Farticle-preview-component-2.jpg?alt=media&token=168e98dd-58ec-4cc0-b5fb-c4ef667d92a4'
			},
		]
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
		type: 'Email',
		screenshots: [
			{
				label: 'Desktop view',
				src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-svelte-3d3e0.appspot.com/o/GitHub%20Storage%2Fnewsletter-email%2Fnewsletter-email.jpg?alt=media&token=0d98bb8b-7d0e-4f17-877d-75e5d6c58701'
			},
		]
		
	},
	{
		slug: 'dr-fit',
		color: '#5e95e3',
		description:
			'Created a website that allow users to find fitness exercises by name, muscle group and equipment. This project was built using ReactJS. I used Material UI for the user interface. I also implemented \'ExerciseDB\' API to fetch exercise images and \'Youtube search and download\' API to suggest instructional videos for each exercise. I used rapidAPI to integrate APIs',
		shortDescription:
			'Created a website that allow users to find fitness exercises by name, muscle group and equipment. This project was built using mainly ReactJS.',
		links: [{ to: 'https://delrio12.github.io/dr-fit', label: 'Website' },
				{ to: 'https://github.com/delrio12/dr-fit', label: 'GitHub' }
		],
		logo: Assets.ReactJs,
		name: 'Fitness Exercises Finder',
		period: {
			from: new Date("2024-07-08"),
			to: new Date("2024-08-01")
		},
		skills: getSkills('reactjs', 'js', 'html', 'css'),
		type: 'Website App'
	},
];

export const title = 'Projects';
