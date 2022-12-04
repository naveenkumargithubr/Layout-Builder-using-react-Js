// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext' // first we import the React Context when we create the context component

import './index.css'

const ConfigurationController = () => (
  
  // step1 here we can access the values from the react context 
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

  
  // in this method we updating the content eighter true / false if it is true it will display the content
      const onChangeContent = event => {
        onToggleShowContent(event.target.value)
      }

  // same process here also we updating the leftnavbar 
      
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

  // same process here also we updating the rightnavbar
      
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuaration-control-main-container">
          <div className="configuration-responsive-container">
            <h1 className="layout-heading">Layout</h1>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="content"
                checked={showContent}  // this method shows the data when it is true
                onChange={onChangeContent} // step 2 updating the checkbox content
              />
              <label htmlFor="content" className="content-heading">
                Content
              </label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="leftnavbar"
                checked={showLeftNavbar} // this method shows the data when it is true
                onChange={onChangeLeftNavbar} // step 2 updating the checkbox content
              />
              <label htmlFor="leftnavbar" className="content-heading">
                Left Navbar
              </label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="rightnavbar"
                checked={showRightNavbar} // this method shows the data when it is true
                onChange={onChangeRightNavbar}  // step 2 updating the checkbox content
              />
              <label htmlFor="rightnavbar" className="content-heading">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
