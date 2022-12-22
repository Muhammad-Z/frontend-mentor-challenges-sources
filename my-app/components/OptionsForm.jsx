import React, { useState } from 'react';
import { useTasksDispatch } from './TasksContext.jsx';

export default function OptionsForm() {
  const dispatch = useTasksDispatch();
  const [ lengNum, setLengNum ] = useState(8);

  function handleFormClick(e) {
    if (e.target.type === "checkbox") {
      dispatch({
        type: 'toggle',
        payload: e.target.name,
      })
    }

  }

  function handleSliderInput(e) {
    dispatch({
      type: 'changeLength',
      payload: e.target.value,
    })
    setLengNum(e.target.value);
    return;
  }

  return (
    <form className="row" onClick={handleFormClick}>
      <div class="form-length-container"
        data-val={ lengNum } >
        <label>
          Character Length <br />
          <input id="passLeng-range" type="range" name="passLeng" min="0" max="24"
            onInput={handleSliderInput} />
        </label> <br />
      </div>

      <label>
        <input type="checkbox" name="upper" />
        Include Uppercase Letters
      </label> <br />

      <label>
        <input type="checkbox" name="lower" />
        Include Lowercase Letters
      </label> <br />

      <label>
        <input type="checkbox" name="numbers" />
        Include Numbers
      </label> <br />

      <label>
        <input type="checkbox" name="symbols" />
        Include Symbols
      </label> <br />
    </form>
  )
}