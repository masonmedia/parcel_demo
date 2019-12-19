import 'bootstrap';
import Swup from 'swup';
// import SwupSlideTheme from '@swup/slide-theme';
import SwupFadeTheme from '@swup/fade-theme';
import './src/scss/styles.scss'; // Import precompiled Bootstrap css
import '@fortawesome/fontawesome-free/css/all.css';

const swup = new Swup({
    plugins: [new SwupFadeTheme()]
  });