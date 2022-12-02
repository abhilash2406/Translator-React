import React, { useEffect, useState } from 'react';
import Form from './Form';
import axios from 'axios';
import Display from './Display';
const App = () => {
  const [translateLanguageTo, setTranslateLanguageTo] = useState('fr');
  const [inputtext, setInputText] = useState('');
  const [outputtext, setOutputText] = useState('');

  useEffect(() => {
    getTranslatedText();
  }, [translateLanguageTo, inputtext]);
  const getTranslatedText = () => {
    axios
      .post(
        'https://translation.googleapis.com/language/translate/v2?key=AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
        {},
        {
          params: {
            q: inputtext,
            target: translateLanguageTo,
          },
        }
      )
      .then((data) => {
        setOutputText(data.data.data.translations[0].translatedText);
      });
  };
  return (
    <div>
      <Form
        inputtext={inputtext}
        translateLanguageTo={translateLanguageTo}
        getInputText={(inputtext) => setInputText(inputtext)}
        getTranslateLanguageTo={(translateLanguageTo) =>
          setTranslateLanguageTo(translateLanguageTo)
        }
      />
      <Display outputtext={outputtext} />
    </div>
  );
};

export default App;
