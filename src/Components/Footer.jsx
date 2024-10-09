import { LinkMenu } from './NavBar'

const routes = [
  { to: "/", text: "Home" },
  { to: "/cities", text: "Cities" },
  { to: "/about", text: "About" },
  { to: "/contact", text: "Contact" },
]


export default function Footer() {
  return (
    <>
      <footer className="text-center p-4 bg-gradient-to-t from-black mt-14 static bottom-0 w-full flex flex-col sm:flex-row justify-between items-center">
        <div className="sm:pr-3">
          <ul className="space-x-3 flex text-white items-center justify-center sm:justify-start">
            <LinkMenu routes={routes}></LinkMenu>
          </ul>
        </div>
        <p className='text-base text-white mt-3 sm:mt-0'>&copy; 2024 MyTinerary. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-3 sm:mt-0">
          <a href="#" className="text-base text-white hover:underline">Privacy Policy</a>
          <a href="#" className="text-base text-white hover:underline">Terms of Service</a>
          <a href="#" className="text-base text-white hover:underline">Social Media</a>
        </div>
      </footer>
    </>
  )
}
