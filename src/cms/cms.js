import React from 'react'
import CMS from 'netlify-cms-app'
import { CSSInjector } from './CSSInjector'

import HomePagePreview from './preview-templates/HomePagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'


CMS.registerPreviewTemplate('about', props => (
  <CSSInjector>
    <AboutPagePreview {...props} />
  </CSSInjector>
))

CMS.registerPreviewTemplate('concerti', props => (
  <CSSInjector>
    <AboutPagePreview {...props} />
  </CSSInjector>
))
CMS.registerPreviewTemplate('music', props => (
  <CSSInjector>
    <AboutPagePreview {...props} />
  </CSSInjector>
))
CMS.registerPreviewTemplate('contact', props => (
  <CSSInjector>
    <ContactPagePreview {...props} />
  </CSSInjector>
))
CMS.registerPreviewTemplate('news', props => (
  <CSSInjector>
    <BlogPostPreview {...props} />
  </CSSInjector>
))
CMS.registerPreviewTemplate('thanks', props => (
  <CSSInjector>
    <AboutPagePreview {...props} />
  </CSSInjector>
))

CMS.registerPreviewTemplate('home', props => (
  <CSSInjector>
    <HomePagePreview {...props} />
  </CSSInjector>
))
