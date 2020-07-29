import { configure, storiesOf } from '@storybook/vue';
import StoryRouter from 'storybook-vue-router';

import UiButton from '~/components/ui-kit/UiButton/stories/UiButton.story.vue';
import UiIcons from '~/components/ui-kit/UiIcons/stories/UiIcons.story.vue';
import UiInput from '~/components/ui-kit/UiInput/stories/UiInput.story.vue';
import UiGrid from '~/components/ui-kit/UiGrid/stories/UiGrid.story.vue';
import UiLink from '~/components/ui-kit/UiLink/stories/UiLink.story.vue';
import UiList from '~/components/ui-kit/UiList/stories/UiList.story.vue';
import UiPopover from '~/components/ui-kit/UiPopover/stories/UiPopover.story.vue';

configure(() => {
    storiesOf('UI-kit', module)
        .addDecorator(StoryRouter())
        .add('UiButton', () => UiButton)
        .add('UiIcons', () => UiIcons)
        .add('UiInput', () => UiInput)
        .add('UiGrid', () => UiGrid)
        .add('UiLink', () => UiLink)
        .add('UiList', () => UiList)
        .add('UiPopover', () => UiPopover);
}, module);
