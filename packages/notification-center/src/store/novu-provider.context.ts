import React from 'react';
import { ITeleflowProviderContext } from '../shared/interfaces';

export const TeleflowContext = React.createContext<ITeleflowProviderContext | null>(null);
