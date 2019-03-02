import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('thanks', AboutPagePreview)
CMS.registerPreviewTemplate('music', AboutPagePreview)
CMS.registerPreviewTemplate('news', BlogPostPreview)
