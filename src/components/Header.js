import React from 'react'
import { Link } from 'react-router-dom'

function Header({ handleSearch }) {
	
	const handleChange = (e) => handleSearch(e.target.value)
	
	return (
		<div>
			<nav className='navigation-border'>

				<Link exact to='/'>
					<img className='navigation-logo'
					src='https://cdn-images-1.medium.com/max/800/1*q3DEmm3wsZk5A550FDaaaA.png' />
				</Link>
				
					<img className='navigation-user-icon'
					src='https://cdn-images-1.medium.com/max/800/1*oMTud7GTomqZT3vsX4_NsA.png' />

				<Link to='favorites'>
					<img className='navigation-likes-icon'
					src='https://cdn-images-1.medium.com/max/800/1*vtFx84vFOMGI76SfQTGCVQ.png' />
				</Link>

				<a href = "https://github.com/danchan020/Phase-2-Project-Memestegram/blob/first-branch/README.md">
				<img className='navigation-git-icon'
					src='https://cdn-images-1.medium.com/max/800/1*3aTtZKZ6xdgOjqwn375nfg.png' />
				</a>

				<Link to="form">
					<img className='navigation-add-post-icon'
					src='https://cdn-images-1.medium.com/max/800/1*x164-6MD9hFt9k_MbBDG_A.png' />
				</Link>

				<img className='navigation-messenger-icon'
					src='https://cdn-images-1.medium.com/max/800/1*Mw63s4mm5NpFYCGAUV7qPg.png' />

				<Link exact to="/">
					<img className='navigation-home-icon'
					src='https://cdn-images-1.medium.com/max/800/1*VvggWFDcai6Sx5GmfpHabw.png' />
				</Link>
				
				<input className='navigation-search-input'
				placeholder='Search' onChange={handleChange}></input>
				
				
			</nav>
		</div>
	)
}

export default Header