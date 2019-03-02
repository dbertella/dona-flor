import React from 'react'
import { StyleSheetManager } from 'styled-components'

// Hard to use with CSS-in-JS libs. #793
// This is a component taken from some github issues
// https://github.com/netlify/netlify-cms/issues/793
// https://github.com/netlify/netlify-cms/issues/1408
export class CSSInjector extends React.Component {
  state = {
    iframeRef: ''
  }

  componentDidMount() {
    const iframe = document.getElementsByTagName('iframe')[0]
    const iframeHeadElem = iframe.contentDocument.head;
    this.setState({ iframeRef: iframeHeadElem })
  }

  render() {
    return (
      <div>
        { this.state.iframeRef && (
          <StyleSheetManager target={this.state.iframeRef}>
            { this.props.children }
          </StyleSheetManager>
        )}
      </div>
    )
  }
}
