import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Andres';

export const lastName = 'Del Rio';

export const description =
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rerum. Debitis accusantium deleniti enim iste dignissimos? Similique, exercitationem! Odit vero, numquam quae ratione maxime sunt reiciendis laudantium quaerat iure ipsum!';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/delrio12/' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/andresdelrio11/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/devrio11'
	},
	{
		platform: Platform.Email,
		link: 'addelrio11@gmail.com'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'svelte', 'ts', 'mongodb', 'sql');
