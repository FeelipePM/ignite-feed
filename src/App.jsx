import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import { Post } from './Post'

import styles from './App.module.css'

import './global.css'

export function App () {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Felipe Machado'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, perspiciatis! Cumque molestiae, soluta, accusamus, iusto in esse placeat quibusdam quia delectus rerum eligendi nostrum ratione nulla perspiciatis labore. Rem, laudantium!'
          />
        </main>
      </div>
    </>
  )
}