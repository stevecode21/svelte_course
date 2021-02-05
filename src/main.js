import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Steve',
		lastName: 'Suarez'
	}
});

export default app;