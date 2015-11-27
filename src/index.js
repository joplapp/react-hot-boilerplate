import React from 'react';
import ReactDOM from 'react-dom';
import RoutedApp from './components/router';

import {IntlProvider, addLocaleData} from 'react-intl';
import de from 'react-intl/dist/locale-data/de';
addLocaleData(de)

const deMessages = {
  'numbers headline': 'Zahlen',
  'numbers count': `{count} {count, plural,
    zero {Zahlen}
    one {Zahl}
    other {Zahlen}}`
}

const enMessages = {}


ReactDOM.render(<IntlProvider locale="de" messages={deMessages}>
    <RoutedApp />
</IntlProvider>, document.getElementById('root'));
