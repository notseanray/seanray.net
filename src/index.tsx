/* @refresh reload */
import "tailwindcss/tailwind.css";
import { render } from 'solid-js/web';

import './index.scss';
import App from './App';
import { Router } from "solid-app-router";

render(() => <Router><App /></Router>, document.getElementById('root') as HTMLElement);
