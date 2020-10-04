import { badgeSelectItemBuilder } from '../../src/BadgeSelectItemBuilder';

function badgeSelectItemBuilderWithAllProps() {
  const {id, value} = badgeSelectItemBuilder({ id: '1', skin: 'danger', text: 'text' });
}
