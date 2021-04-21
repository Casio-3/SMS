import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Student Manage System'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
