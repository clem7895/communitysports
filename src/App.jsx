import React, { useState, useEffect } from 'react'
import SpotList from './components/SpotList'

const STORAGE_KEY = 'communitysports.spots'

export default function App() {
  const [spots, setSpots] = useState([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setSpots(JSON.parse(raw))
    } catch (e) {
      console.error('Failed to load spots from localStorage', e)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(spots))
  }, [spots])

  function addSpot(spot) {
    setSpots(prev => [spot, ...prev])
  }

  function removeSpot(id) {
    setSpots(prev => prev.filter(s => s.id !== id))
  }

  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Community Sports — Spots gratuits dehors</h1>
        <p>Liste des lieux extérieurs où pratiquer un sport (lecture seule)</p>
      </header>
      <main className="container single-column">
        <SpotList spots={spots} />
      </main>
    </div>
  )
}
