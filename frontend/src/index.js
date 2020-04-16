import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import common_es from './translations/es/common.json';
import common_en from './translations/en/common.json';

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // language to use
  resources: {
    en: {
      common: common_en, // 'common' is our custom namespace
    },
    es: {
      common: common_es,
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
