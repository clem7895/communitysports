import React, { useState } from 'react'

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2,8)
}

export default function SpotForm({ onAdd }) {
  const [sport, setSport] = useState('running')
  const [title, setTitle] = useState('')
  const [city, setCity] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim() || !city.trim()) return
    const spot = {
      id: uid(),
      sport,
      title: title.trim(),
      city: city.trim(),
      description: description.trim(),
      createdAt: new Date().toISOString()
    }
    onAdd(spot)
    setTitle('')
    setCity('')
    setDescription('')
  }

  return (
    <form className="spot-form" onSubmit={handleSubmit}>
      <h2>Partager un spot</h2>
      <label>Nom du spot / petit titre
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Ex: Parc des Buttes" />
      </label>
      <label>Sport
        <select value={sport} onChange={e => setSport(e.target.value)}>
          <option value="football">Football</option>
          <option value="basketball">Basketball</option>
          <option value="tennis">Tennis</option>
          <option value="running">Course à pied</option>
          <option value="calisthenics">Calisthenics</option>
          <option value="outdoor_gym">Gym extérieure</option>
          <option value="other">Autre</option>
        </select>
      </label>
      <label>Ville / Adresse
        <input value={city} onChange={e => setCity(e.target.value)} placeholder="Ville ou adresse" />
      </label>
      <label>Description (optionnel)
        <textarea value={description} onChange={e => setDescription(e.target.value)} rows={3} placeholder="Donne des détails : équipement, niveau, heures recommandées..."></textarea>
      </label>
      <div className="form-actions">
        <button type="submit">Partager</button>
      </div>
    </form>
  )
}
