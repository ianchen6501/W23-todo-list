import React from 'react'
import './RoundCheckbox.css'


export default function RoundCheckbox() {
  return (
    <div class="container">
      <div class="round">
        <input type="checkbox" id="checkbox" />
        <label for="checkbox"></label>
      </div>
    </div>
  )
}