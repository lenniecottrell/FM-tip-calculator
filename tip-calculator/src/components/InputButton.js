import React from 'react';


const InputButton = ({tipPercent, setTipPercent, percentActive, setPercentActive, handlePercentChange, index}) => {
 
  return <button id={index} className={`inputBtn`} value={tipPercent} onClick={handlePercentChange}>{tipPercent}%</button>;
};

export default InputButton;

/*
const tips = [5, 10, 15, 25, 50];
  const [selectedTip, setSelectedTip] = useState(15);

  return (
    <fieldset>
      <legend>Choose Tip</legend>
      {tips.map((tip) => (
        <label key={tip} className={selectedTip === tip ? 'selected-tip' : ''}>
          <input
            checked={tip === selectedTip}
            onChange={() => setSelectedTip(tip)}
            type="radio"
            name="tip-selector"
            value={tip}
          />
          {tip}
        </label>
      ))}
    </fieldset>
  );

input[type="radio"]:checked {
  color: red;
  ... whatever styles you want the checked one to have
}

// or on the class name
.selected-tip {
  some styles...
}

The key thing here is that the selectedTip state is not boolean, it's the actual tip id that you've selected. Then all of the rest of the logic is based on that

*/
 