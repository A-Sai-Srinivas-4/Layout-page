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

      const onChangeContent = () => onToggleShowContent()

      const onChangeLeftNavbar = event =>
        onToggleShowLeftNavbar(event.target.value)

      const onChangeRightNavbar = event =>
        onToggleShowRightNavbar(event.target.value)

      return (
        <div className="configuration-container">
          <div className="title-input-container">
            <h1 className="heading">Layout</h1>
            <div className="checkbox-input-container">
              <div className="input-container">
                <input
                  checked={showContent}
                  onChange={onChangeContent}
                  type="checkbox"
                  id="content"
                  className="checkbox-input"
                />
                <label htmlFor="content" className="label">
                  Content
                </label>
              </div>
              <div className="input-container">
                <input
                  checked={showLeftNavbar}
                  onChange={onChangeLeftNavbar}
                  type="checkbox"
                  id="leftNavbar"
                  className="checkbox-input"
                />
                <label htmlFor="leftNavbar" className="label">
                  Left Navbar
                </label>
              </div>
              <div className="input-container">
                <input
                  checked={showRightNavbar}
                  onChange={onChangeRightNavbar}
                  type="checkbox"
                  id="rightNavbar"
                  className="checkbox-input"
                />
                <label htmlFor="rightNavbar" className="label">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
