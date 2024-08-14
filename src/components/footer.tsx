import Link from "next/link"

const routes = [
  {
    name: "Terms & Conditions",
    path: "/terms-conditions"
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy"
  }
]

const Footer = () => {
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small>&copy; 2050 UnicornMedia. All rights reserved.</small>
    
      <nav className="space-x-3 sm:space-x-8">
        {routes.map((route) => (
          <Link key={route.path} href={route.path}>{route.name}</Link>
        ))}
      </nav>

    </footer>
  )
}

export default Footer