import Footer from './Footer';
import Header from './Header';
import Page1 from './Page1';

export default function MyApp() {
	return (
		<div className='App'>
			<h1><Header/></h1>
			<ul> 
				<li>I live in London</li>
				<li>I'm a mathematician</li>
				<li>And a musician</li>
			</ul>
			<Footer/>
			<p style = {{color: 'blue', fontSize: 20}}>This was done with modular components</p>
			<img src = {require('./erenler.jpg')} style={{width: 350, height: 250}}></img>
			<br/><br/>

			<a href="Page1.js">Click to see Array</a>

		</div>
	)
}