/* istanbul ignore next */
/* tslint:disable:no-empty */
/**
 * Default values
 */
export default {
  autoActivateFirstSuggest: false,
  children: undefined,
  defaultsHidden: true,
  disabled: false,
  fixtures: [],
  getSuggestLabel: (suggest: any) => suggest.description,
  highlightMatch: true,
  ignoreEnter: false,
  ignoreTab: false,
  initialValue: '',
  maxFixtures: 10,
  minLength: 1,
  onKeyDown: () => {},
  onKeyPress: () => {},
  placeholder: 'Search places',
  queryDelay: 250,
  skipSuggest: () => false,
  style: {},
};
