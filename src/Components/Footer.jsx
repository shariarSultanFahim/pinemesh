import { Facebook, Twitter, Instagram, DiscIcon as Discord } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    categories: [
      { name: 'Nutrition and diet', href: '#' },
      { name: 'Fitness training', href: '#' },
      { name: 'Mindfulness', href: '#' },
      { name: 'Mental health', href: '#' },
      { name: 'Personal growth', href: '#' },
      { name: 'Social well-being', href: '#' },
    ],
    about: [
      { name: 'About us', href: '#' },
      { name: 'Our partners', href: '#' },
      { name: 'Investors', href: '#' },
      { name: 'Career', href: '#' },
    ],
    resources: [
      { name: 'FAQ', href: '#' },
      { name: 'Refund policies', href: '#' },
      { name: 'Terms and conditions', href: '#' },
      { name: 'Cookie', href: '#' },
      { name: 'Latest posts', href: '#' },
    ],
    support: [
      { name: 'Get in touch', href: '#' },
      { name: 'Visit our forum', href: '#' },
    ],
  }

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Discord', icon: Discord, href: '#' },
  ]

  return (
    <footer className="bg-gray-50">
      <div className="max-w-screen-xl container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className='mx-auto text-center md:text-left md:mx-0 '>
            <h3 className="text-sm font-semibold text-gray-900">Categories</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='mx-auto text-center md:text-left md:mx-0 '>
            <h3 className="text-sm font-semibold text-gray-900">About</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='mx-auto text-center md:text-left md:mx-0'>
            <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='mx-auto text-center md:text-left md:mx-0 '>
            <h3 className="text-sm font-semibold text-gray-900">Support</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-400 border-dashed pt-8 flex flex-col md:flex-row justify-between">
          <h3 className="text-sm font-semibold text-gray-900 m-auto md:mx-0 md:my-auto">Join our official channels</h3>
          <div className="mt-4 flex  space-x-6 m-auto md:mx-0 md:my-auto">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900"
                  aria-label={`Follow us on ${item.name}`}
                >
                  <Icon className="h-6 w-6" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-400 border-dashed pt-8">
          <p className="text-sm text-gray-600 text-center md:text-left">© 2024 EduPath. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}