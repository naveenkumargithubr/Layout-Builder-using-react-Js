// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
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

      const onChangeContent = event => {
        onToggleShowContent(event.target.value)
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

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
                checked={showContent}
                onChange={onChangeContent}
              />
              <label htmlFor="content" className="content-heading">
                Content
              </label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="leftnavbar"
                checked={showLeftNavbar}
                onChange={onChangeLeftNavbar}
              />
              <label htmlFor="leftnavbar" className="content-heading">
                Left Navbar
              </label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="rightnavbar"
                checked={showRightNavbar}
                onChange={onChangeRightNavbar}
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
