import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Andres';

export const lastName = 'Del Rio';

export const description =
	'I am a web developer that enjoys learning and creating innovating websites.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/delrio12/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/andresdelrio11/'
	},
	{
		platform: Platform.Email,
		link: 'addelrio11@gmail.com'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'svelte', 'ts', 'mongodb', 'sql');
