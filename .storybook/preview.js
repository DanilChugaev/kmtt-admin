import { configure, storiesOf } from '@storybook/vue';

import UiList from '../src/components/ui-kit/UiList/stories/UiList.vue';

configure(() => {
    storiesOf('UI-kit', module)
        .add('UiList', () => UiList);
}, module);
