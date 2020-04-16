import React, { useState } from 'react';
import {
  Dropdown,
  DropdownOpen,
  ButtonsContainer,
  Button,
} from './translator-button.styles';
import i18next from 'i18next';
import { withTranslation, Trans } from 'react-i18next';

function ButtonTranslate({ t }) {
  const [state, setState, buttonClick, setButtonClick] = useState(false);

  const onChange = () => {
    setState(!state);
  };

  return (
    <div>
      {state === true ? (
        <DropdownOpen
          onClick={() => {
            setState((previousState) => !previousState);
          }}
          onChange={onChange}
          data-testid="toggle"
        >
          {t('button-translator.title')}
          <ButtonsContainer>
            <Button onClick={() => i18next.changeLanguage('en')} type="button">
              English
            </Button>
            <Button onClick={() => i18next.changeLanguage('es')} type="button">
              Español
            </Button>
          </ButtonsContainer>
        </DropdownOpen>
      ) : (
        <Dropdown
          onClick={() => {
            setState((previousState) => !previousState);
          }}
          onChange={onChange}
          data-testid="toggle"
        >
          {t('button-translator.title')}
        </Dropdown>
      )}
    </div>
  );
}

export default withTranslation('common')(ButtonTranslate);
