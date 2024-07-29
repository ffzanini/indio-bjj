/* eslint-disable @typescript-eslint/no-explicit-any */
const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

declare global {
  interface Window {
    fbq: (...args: any[]) => void
  }
}

export const initFacebookPixel = () => {
  if (!FACEBOOK_PIXEL_ID) {
    console.error('Facebook Pixel ID is not set')
    return
  }

  if (typeof window.fbq === 'undefined') {
    console.warn('Facebook Pixel not initialized')
    return
  }

  window.fbq('init', FACEBOOK_PIXEL_ID)
  window.fbq('track', 'PageView')
}

export const trackEvent = (
  event: string,
  options: Record<string, any> = {},
) => {
  if (typeof window.fbq === 'undefined') {
    console.warn('Facebook Pixel not initialized')
    return
  }

  window.fbq('track', event, options)
}
