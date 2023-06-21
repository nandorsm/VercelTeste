import { useState } from 'react'
import CenteredCard from './components/Card'

import styles from './components/Card/style.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.CardRow}>
      <CenteredCard>
        <h1>Children 1</h1>
      </CenteredCard>
      <CenteredCard>
        <h1>Children 2</h1>
      </CenteredCard>
      <CenteredCard>
        <h1>Children 3</h1>
      </CenteredCard>
    </div>
      

  )
}

export default App
