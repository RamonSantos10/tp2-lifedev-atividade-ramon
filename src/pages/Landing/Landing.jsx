import Layout from '../../layouts/MainLayout'
import { auth } from '../../firebase/config'
import styles from './Landing.module.css'

const Landing = () => {
  return (
    <Layout>
      <h1>Life Dev</h1>
      <h3>Entre na nossa plataforma e venha ver o dia a dia de um dev!</h3>
    </Layout>
  )
}

export default Landing