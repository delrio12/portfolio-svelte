import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'JavaScript is a versatile programming language primarily used for creating dynamic and interactive content on websites. As a client-side scripting language, it runs directly in the web browser, enabling developers to manipulate the Document Object Model (DOM), handle events, and dynamically update content without reloading the entire page. JavaScript is essential for modern web development, powering everything from simple form validations to complex single-page applications (SPAs). With the advent of server-side JavaScript frameworks like Node.js, JavaScript has also gained prominence in backend development. Its flexibility, extensive ecosystem of libraries and frameworks (such as React, Angular, and Vue.js), and widespread adoption make it a cornerstone of web development.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'TypeScript is a statically typed superset of JavaScript developed by Microsoft. It adds optional static typing, classes, interfaces, and other advanced features to JavaScript, enhancing code quality and developer productivity, especially in larger projects. TypeScript compiles down to plain JavaScript, allowing developers to leverage new JavaScript features while catching type-related errors early in the development process. Its popularity has grown significantly, particularly in projects using Angular (which is built with TypeScript), as well as in backend applications with Node.js. The TypeScript community is vibrant, with strong support from Microsoft and the open-source community, ensuring continuous improvement and adoption in various domains.',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'yellow',
		description:
			'Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility. Guido van Rossum created Python in the late 1980s, and since then, it has gained immense popularity for its ease of learning and powerful features. Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming, making it suitable for a wide range of applications. Its comprehensive standard library provides modules and packages for tasks such as web development (Django, Flask), scientific computing (NumPy, SciPy), data analysis (Pandas), machine learning (TensorFlow, PyTorch), and automation (scripting). Python\'s readability and clean syntax promote code maintainability and collaboration among developers, contributing to its widespread use in academia, industry, and open-source projects worldwide.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'sql',
		color: 'blue',
		description:
			'Structured Query Language (SQL) is a domain-specific language used for managing and manipulating data within relational database management systems (RDBMS). SQL provides a standardized way to define, query, update, and manage databases, ensuring data integrity and consistency across applications. It supports operations such as creating and modifying database schema (DDL), querying data (DML), and managing access controls (DCL). SQL is essential for retrieving specific information from databases using queries like SELECT, filtering data with WHERE clauses, joining multiple tables, and aggregating results. Its declarative syntax allows developers and database administrators to focus on the logic and requirements of data retrieval and manipulation, making SQL a fundamental skill for anyone working with relational databases in software development and data analytics.',
		logo: Assets.PostgreSQL,
		name: 'SQL',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'Cascading Style Sheets (CSS) is a style sheet language used to describe the presentation of HTML (HyperText Markup Language) and XML (eXtensible Markup Language) documents. CSS defines how elements are displayed on screen, including their layout, colors, fonts, spacing, and other visual properties. By separating content from presentation, CSS enables web developers to create consistent and visually appealing websites across different devices and screen sizes. CSS consists of selectors that target HTML elements and declarations that specify the style rules applied to those elements. It supports various layout models (e.g., Flexbox, Grid) and provides mechanisms for responsive design, allowing websites to adapt to different viewport sizes dynamically. CSS preprocessors like Sass and LESS extend CSS with variables, mixins, and functions, enhancing code reusability and maintainability in large-scale projects.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'Hypertext Markup Language (HTML) is the standard markup language for creating documents designed to be displayed in a web browser. HTML defines the structure of web content using a system of tags and attributes that describe the semantic meaning of elements within a page. Elements such as headings, paragraphs, lists, links, images, forms, and tables are defined using HTML tags, which browsers interpret to render web pages visually and functionally. HTML documents are structured hierarchically with nested elements, forming the Document Object Model (DOM) that JavaScript interacts with to manipulate page content dynamically. HTML5, the latest version of HTML, introduced new elements and attributes for multimedia, form validation, offline web applications, and responsive design, reflecting the evolving capabilities and standards of web development.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'React (also known as React.js or ReactJS) is an open-source JavaScript library developed by Facebook for building user interfaces (UIs) or UI components. React allows developers to create reusable UI components that encapsulate their own state and render them in a declarative manner, making it easier to manage and update the UI when the data changes. React uses a virtual DOM (Document Object Model) to optimize updates by selectively rendering only the components that have changed. It encourages the component-based architecture, where applications are composed of independent and reusable components that manage their own state and can be composed to build complex user interfaces efficiently. React\'s ecosystem includes libraries like React Router for handling navigation, Redux for managing global state, and Axios for making HTTP requests, making it a popular choice for building single-page applications (SPAs) and dynamic web interfaces.',
		logo: Assets.ReactJs,
		name: 'ReactJs',
		category: 'library'
	}),
	defineSkill({
		slug: 'redux',
		color: 'purple',
		description:
			'Redux is a predictable state container for JavaScript applications, primarily used with libraries like React or Angular for managing application state in a predictable manner. Redux follows the principles of a single source of truth, where the entire state of an application is stored in an object tree within a single store. The state is read-only, and changes are made by dispatching actions, which are plain JavaScript objects describing what should change. Reducers are functions that specify how the application\'s state changes in response to actions, ensuring that state transitions are predictable and can be traced for debugging purposes. Redux facilitates the development of complex applications by centralizing state management and enabling time-travel debugging, where developers can inspect every state change that has occurred in the application over time. Its architecture promotes maintainability, testability, and scalability in large-scale applications with shared data and complex interaction flows.',
		logo: Assets.Redux,
		name: 'React Redux',
		category: 'library'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description:
			'MongoDB is a cross-platform, document-oriented NoSQL database program designed for scalability and flexibility. Unlike traditional relational databases, MongoDB stores data in JSON-like documents with dynamic schemas (BSON format), making it easier to represent complex hierarchical relationships and handle unstructured or semi-structured data. MongoDB\'s document model allows developers to store and retrieve data without rigid schemas or predefined structures, enabling faster development and iteration cycles in modern applications. It supports ad-hoc queries, indexing, aggregation, and data replication across distributed clusters, ensuring high availability and scalability for large-scale deployments. MongoDB is widely used in web development, mobile apps, content management systems (CMS), real-time analytics, and Internet of Things (IoT) applications where flexible data models and high-performance queries are essential.',
		logo: Assets.MongoDB,
		name: 'mongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'mui',
		color: 'blue',
		description:
			'Material-UI is a popular React framework that implements Google\'s Material Design principles to create responsive and aesthetic user interfaces. Material Design emphasizes clean, minimalistic design, with a focus on motion, depth, and intuitive interactions. Material-UI provides a set of pre-built, customizable React components (e.g., buttons, cards, dialogs, grids) styled according to Material Design guidelines, allowing developers to quickly build modern and consistent user interfaces. Components are designed to be responsive and accessible out-of-the-box, providing a seamless experience across different devices and screen sizes. Material-UI\'s theming and styling capabilities enable developers to customize components to match specific brand identities or design requirements, while its modular architecture promotes code reusability and maintainability in complex React applications.',
		logo: Assets.MaterialUI,
		name: 'Material UI',
		category: 'library'
	}),
	defineSkill({
		slug: 'firebase',
		color: 'yellow',
		description:
			'Firebase is a comprehensive platform developed by Google for building mobile and web applications quickly and effortlessly. Firebase offers a suite of backend services (e.g., real-time databases, authentication, cloud storage, hosting, functions) as a fully managed solution, eliminating the need for developers to manage infrastructure or server-side code. Firebase\'s real-time database (Firestore) and authentication services allow developers to build responsive, collaborative applications with minimal setup and configuration. It integrates seamlessly with frontend frameworks like React, Angular, and Vue.js, providing SDKs and libraries for easy integration and development. Firebase\'s scalability, real-time capabilities, and offline support make it ideal for applications requiring responsive data synchronization, real-time updates, and offline data access. Additionally, Firebase provides analytics, performance monitoring, and A/B testing tools to help developers optimize and improve app performance over time.',
		logo: Assets.Firebase,
		name: 'Firebase',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'styled-components',
		color: 'pink',
		description:
			'Styled-components is a library for React and React Native that allows developers to write CSS in JavaScript, using tagged template literals to style components. Styled-components are scoped to individual components rather than globally defined. This approach enhances modularity, encapsulation, and reusability in UI development by associating styles directly with components, making it easier to manage and maintain styling logic alongside component logic. Styled-components supports dynamic styling, theming, and props-based styling, allowing components to adapt their appearance based on application state or user interactions. It leverages the power of CSS-in-JS (JavaScript) to generate unique class names, ensuring style isolation and avoiding naming conflicts in complex applications. Styled-components has gained popularity for its developer experience, performance optimizations, and support for modern JavaScript features, becoming a preferred choice for styling React applications efficiently and effectively.',
		logo: Assets.StyledComponents,
		name: 'styled-components',
		category: 'library'
	}),
	
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
