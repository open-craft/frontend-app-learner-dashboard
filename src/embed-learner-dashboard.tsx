import React from 'react';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import { AppContext, ErrorBoundary, PageWrap } from '@edx/frontend-platform/react';
import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import messages from './i18n';
import store from './data/store';

import App from './App';
import NoticesWrapper from './components/NoticesWrapper';

export const LearnerDashboardApp = () => {

  const { locale } = React.useContext(AppContext);

  // TODO: some way to specify {requireAuthenticatedUser: true} ?

  return (
    <IntlProvider locale={locale} messages={messages}>
      <ErrorBoundary>
        <Provider store={store}>
          <NoticesWrapper>
            <Routes>
              <Route path="/" element={<PageWrap><App /></PageWrap>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </NoticesWrapper>
        </Provider>
      </ErrorBoundary>
    </IntlProvider>
  );
};

export default LearnerDashboardApp;
