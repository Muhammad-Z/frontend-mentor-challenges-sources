import React, { useEffect } from 'react';
import { useTasks } from './TasksContext.jsx';

export default function StrengthView() {
  const tasks = useTasks();
  let strength = 0;

  Object.keys(tasks).map(elem => {
    if (tasks.passLeng > 8)
      if (elem !== 'passLeng' && tasks[elem]) strength += 1;
  })

  useEffect(() => {
    let i = 0;
    for (let elem of document.getElementById('bars-container').children) {
      if (elem.tagName === "SPAN") continue;
      if (i < strength) {
        elem.classList.add('bar-filled');
        i++;
      }
      else elem.classList.remove('bar-filled');
    }
  }, [tasks])

  console.log('strng is ', strength);

  return (
    <div className="strength-view row">
      Strength
      <div id="bars-container" className="bars-container">
        <span class="meter">{["", "weak", "meduim", "good", "strong"][strength]}</span>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}