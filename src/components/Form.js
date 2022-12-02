import React from 'react';

const Form = ({
  inputtext,
  translateLanguageTo,
  getInputText,
  getTranslateLanguageTo,
}) => {
  return (
    <div>
      <div className="d-flex">
        <div>
          <textarea
            cols="40"
            rows="6"
            onChange={(e) => getInputText(e.target.value)}
            value={inputtext}
          ></textarea>
        </div>
        <div>
          To
          <select
            onChange={(e) => getTranslateLanguageTo(e.target.value)}
            value={translateLanguageTo}
          >
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="ml">Malayalam</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Form;
