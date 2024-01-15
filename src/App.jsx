import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
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
				<button>count is</button>
			</div>
		</>
	);
}

export default App;
