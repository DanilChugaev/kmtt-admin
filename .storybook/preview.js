import { configure, storiesOf } from '@storybook/vue';

import UiButton from '~/components/ui-kit/UiButton/stories/UiButton.story.vue';
import UiIcons from '~/components/ui-kit/UiIcons/stories/UiIcons.story.vue';
import UiLink from '~/components/ui-kit/UiLink/stories/UiLink.story.vue';
import UiList from '~/components/ui-kit/UiList/stories/UiList.story.vue';

configure(() => {
    storiesOf('UI-kit', module)
        .add('UiButton', () => UiButton)
        .add('UiIcons', () => UiIcons)
        .add('UiLink', () => UiLink)
        .add('UiList', () => UiList);
}, module);
