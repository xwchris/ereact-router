import React from 'react';

export const LinkContext = React.createContext({ onChangeRouteContext: () => {} });

export const RouteContext = React.createContext({ path: '/' });
