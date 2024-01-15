import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { faker } from '@faker-js/faker';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a
					href='https://vitejs.dev'
					target='_blank'
					rel='noreferrer'
					hidden='true'
				>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a>
					<img
						src={reactLogo}
						className='logo react'
						alt='React logo'
					/>
				</a>
			</div>

			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>

				<p>{count && <RandomPhase />}</p>
			</div>
		</>
	);
}

function RandomPhase() {
	return faker.hacker.phrase();
}

export default App;
