/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { I18nManager, StatusBar } from 'react-native';
import WindowStack from './src/lib/windowStack';
import { QueryClient, QueryClientProvider } from 'react-query'

const App = () => {
  useEffect(() => { I18nManager.allowRTL(false); }, []);
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <StatusBar backgroundColor="#f1f1f1" barStyle="light-content" animated />
      <WindowStack />
    </QueryClientProvider>
  );
};

export default App;