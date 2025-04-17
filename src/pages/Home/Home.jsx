import Layout from '../../components/Layout'
import { auth } from '../../firebase/config'
import styles from './Home.module.css'

const Home = () => {
  return (
    <Layout>
      <h1>Olá <span>{auth.currentUser.displayName}</span></h1>
      <h2>Veja os posts mais recentes</h2>
      <form className={styles.search_form}>
        <input
          type="text"
          placeholder='Ou busque por tags...'
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
    </Layout>
  )
}

export default Home