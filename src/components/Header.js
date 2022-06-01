import React from 'react'

function Header() {
	return (
		<div>
			<nav className='navigation-border'>

				<img className='navigation-logo'
					src='https://cdn-images-1.medium.com/max/800/1*q3DEmm3wsZk5A550FDaaaA.png'
				/>

				<img className='navigation-home-icon'
					src='https://cdn-images-1.medium.com/max/800/1*VvggWFDcai6Sx5GmfpHabw.png'
				/>

				<img className='navigation-messenger-icon'
					src='https://cdn-images-1.medium.com/max/800/1*Mw63s4mm5NpFYCGAUV7qPg.png'
				/>

				<img className='navigation-add-post-icon'
					src='https://cdn-images-1.medium.com/max/800/1*x164-6MD9hFt9k_MbBDG_A.png'
				/>

				<img className='navigation-git-icon'
					src='https://cdn-images-1.medium.com/max/800/1*3aTtZKZ6xdgOjqwn375nfg.png'
				/>

				<img className='navigation-likes-icon'
					src='https://cdn-images-1.medium.com/max/800/1*vtFx84vFOMGI76SfQTGCVQ.png'
				/>

				<img className='navigation-user-icon'
					src='https://cdn-images-1.medium.com/max/800/1*oMTud7GTomqZT3vsX4_NsA.png'
				/>
			</nav>

			<div className='filter-box'>
				<img className='filter-box-cool'
					src='https://cdn-images-1.medium.com/max/800/1*dxqYYwASUE0JTX-svqgEFA.png' />

				<img className='filter-box-funny'
					src='https://cdn-images-1.medium.com/max/800/1*tY2nbxgv-6xA0eUHTih3JQ.png' />

				<img className='filter-box-shocking'
					src='https://cdn-images-1.medium.com/max/800/1*9PovJWTegJ87jLr0-Uw0MQ.png' />

				<img className='filter-box-questionable'
					src='https://cdn-images-1.medium.com/max/800/1*PFqWC7Y79cvJgvUZ6_G6SA.png' />
			</div>
		</div>
	)
}

export default Header