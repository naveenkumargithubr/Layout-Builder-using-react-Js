import {Component} from 'react'

import ConfigurationContext from './context/ConfigurationContext'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true} // step 3 when state is updated render method is called

  // step 4 this methos is updating the state comparing to prevState
  
  onToggleShowContent = () => {
    this.setState(prevState => ({showContent: !prevState.showContent}))
  }

   // step 4 this methos is updating the state comparing to prevState
  
  onToggleShowLeftNavbar = () => {
    this.setState(prevState => ({showLeftNavbar: !prevState.showLeftNavbar}))
  }

   // step 4 this methos is updating the state comparing to prevState
  
  onToggleShowRightNavbar = () => {
    this.setState(prevState => ({showRightNavbar: !prevState.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent, // step3 this method is called onToggleShowContent 
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar, // step3 this method is called onToggleShowLeftNavbar
          onToggleShowRightNavbar: this.onToggleShowRightNavbar, // step3 this method is called onToggleShowRightNavbar
        }}
      >
        <div className="layout-main-container">
          <ConfigurationController /> 
          <Layout />
        </div>
      </ConfigurationContext.Provider>  // step5 finally Provider is update the latest value and based on the this value context is updated
    )
  }
}

export default App
