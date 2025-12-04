import React from 'react'

function SportLabel({ sport }) {
  const map = {
    football: 'Football',
    basketball: 'Basketball',
    tennis: 'Tennis',
    running: 'Course',
    calisthenics: 'Calisthenics',
    outdoor_gym: 'Gym extérieure',
    other: 'Autre'
  }
  return map[sport] || sport
}

export default function SpotList({ spots = [] }) {
  if (spots.length === 0) return <div><h2>Spots</h2><p>Aucun spot partagé pour le moment.</p></div>

  return (
    <div className="spot-list">
      <h2>Spots partagés</h2>
      {spots.map(s => (
        <article className="spot" key={s.id}>
          <div className="spot-header">
            <strong>{s.title}</strong>
            <span className="sport">{SportLabel({ sport: s.sport })}</span>
          </div>
          <div className="spot-meta">{s.city} — {s.createdAt ? new Date(s.createdAt).toLocaleString() : ''}</div>
          {s.description && <p className="spot-desc">{s.description}</p>}
        </article>
      ))}
    </div>
  )
}
