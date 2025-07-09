import { Navbar, NavbarContent, NavbarItem } from '@heroui/navbar'
import { Button } from '@heroui/button'
import { Link } from '@heroui/link'

const NavBar = () => {

  return(
    <div className='w-screen'>
      <Navbar>
        <NavbarContent justify='start'>
          <NavbarItem>
            <Link href='/'>Home</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='center'>
          <NavbarItem>
            XIV Armory
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'>
          <NavbarItem>
            <Button color='secondary'>Sign in with Discord</Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  )
}

export default NavBar