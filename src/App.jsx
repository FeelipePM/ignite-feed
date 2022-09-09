import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'

export function App () {
  return (
    <>
      <Header />
      <Post
        author='John Doe'
        content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet saepe vero, ducimus quos, beatae nesciunt impedit numquam deserunt labore rerum cumque fugit illo recusandae, quaerat unde doloremque. Impedit, necessitatibus a.' />
    </>
  )
}