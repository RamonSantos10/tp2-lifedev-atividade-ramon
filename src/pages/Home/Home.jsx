import Layout from '../../components/Layout'
import styles from './Home.module.css'

const Home = () => {
  return (
    <Layout>
      <h1>Veja os posts mais recentes</h1>
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