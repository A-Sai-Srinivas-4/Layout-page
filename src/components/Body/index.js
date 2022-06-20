import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <nav className="nav">
              <h1 className="nav-heading">Left Navbar Menu</h1>
              <ul className="item-list">
                <li className="item">item 1</li>
                <li className="item">item 2</li>
                <li className="item">item 3</li>
                <li className="item">item 4</li>
              </ul>
            </nav>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="description">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusomed tempor incididuent ut labore et elusomed tempor
                incididuent ut labore et tempor incididuent ut labore et
                elusomed tempor incididuent ut labore et
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <nav className="nav">
              <h1 className="nav-heading">Right Navbar Menu</h1>
              <div className="item-list">
                <p className="ad-item">Ad 1</p>
                <p className="ad-item">Ad 2</p>
              </div>
            </nav>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
