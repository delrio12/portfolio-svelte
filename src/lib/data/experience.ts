import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	
	{
		slug: 'technical-support-advisor',
		company: 'Teleperformance',
		description: 'Provided effective technical assistance to customers by investigating and resolving tech issues to improve support processes.',
		contract: ContractType.FullTime,
		type: 'Tech Support',
		location: 'Home',
		period: { from: new Date(2021, 11, 1), to: new Date(2024, 0, 1) },
		skills: '',
		name: 'Technical Support Advisor',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Provided effective technical assistance to customers by investigating and resolving tech issues to improve support processes.'
	},
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2021, 0, 1), to: new Date() },
		skills: getSkills('css', 'html', 'js', 'ts', 'reactjs'),
		name: 'Junior Freelancer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	}
];

export const title = 'Experience';
