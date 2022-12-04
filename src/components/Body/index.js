// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar">
              <h1 className="left-heading">Left Navbar Menu</h1>
              <ul className="unorder-list-items">
                <li className="list-item">Item1</li>
                <li className="list-item">Item2</li>
                <li className="list-item">Item3</li>
                <li className="list-item">Item4</li>
              </ul>
            </div>
          ) : null}

          {showContent ? (
            <div className="content-container">
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed to
                elusmod tempor incididunt ut labore et dolore magna allqua. Ut
                enlm ad minim Veniam
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="right-navbar">
              <h1>Right Navbar</h1>
              <div className="ad-box-container">
                <p className="box">Ad 1</p>
                <p className="box">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
