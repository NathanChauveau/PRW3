import { useState } from 'react'
import { anecdotes } from './anecdotes'

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const nextAnecdotes = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length))
  const addVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }
  const mostVoted = votes.indexOf(Math.max(...votes))

  return (
    <>
      <header>
        <h2>Anecdote of the day</h2>
      </header>
      <main>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <button onClick={addVote}>vote</button>
        <button onClick={nextAnecdotes}>next anecdote</button>
      </main>
      <footer>
        <h2>Anecdote with the most votes</h2>
        <p>{anecdotes[mostVoted]}</p>
        <p>has {votes[mostVoted]} votes</p>
      </footer>
    </>
  )
}

export default App
