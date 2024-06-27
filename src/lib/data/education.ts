import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Google Cybersecurity Specialization',
		description: '',
		location: 'Canada',
		logo: Assets.Unknown,
		name: '',
		organization: 'Google',
		period: { from: new Date(2024, 0, 1), to: new Date(2024, 6, 30) },
		shortDescription: '',
		slug: 'dummy-education-item-1',
		subjects: ['Python', 'SQL', 'SIEM tools', 'Intrusion Detection Systems']
	},
	{
		degree: 'Computer Programming Diploma',
		description: 'I have strong skills in both front-end and back-end development, which help me create dynamic, responsive, and data-driven applications. My solid understanding of these programming languages and technologies allows me to solve complex problems efficiently and develop effective solutions for various computing environments.',
		location: 'Canada',
		logo: Assets.Unknown,
		name: '',
		organization: 'Seneca Polytechnic',
		period: { from: new Date(2019, 0, 1), to: new Date(2021, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['C', 'C++', 'Java','Html5', 'CSS', 'JavaScript', 'SQL', 'Data Structures and Algorithms']
	},
	{
		degree: 'Bachelor of Financial Engineering',
		description: '',
		location: 'Colombia',
		logo: Assets.Unknown,
		name: '',
		organization: 'Uiversidad Autonoma de Bucaramanga',
		period: { from: new Date(2012, 0, 1), to: new Date(2017, 0, 1)},
		shortDescription: '',
		slug: 'dummy-education-item-3',
		subjects: ['VBA', 'Risk Management and Derivatives', 'Portfolio Management', 'Financial Modeling and Analysis', ]
	}
];

export const title = 'Education';
