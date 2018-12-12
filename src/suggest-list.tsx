import * as React from 'react';
import classnames from 'classnames';
import SuggestItem from './suggest-item';
import ISuggest from './types/suggest';
import { userInfo } from 'os';

interface IProps {
  readonly children?: React.ReactNodeArray,
  readonly isHidden: boolean;
  readonly suggests: ISuggest[];
  readonly suggestsClassName?: string;
  readonly hiddenClassName?: string;
  readonly suggestItemClassName?: string;
  readonly suggestItemActiveClassName?: string;
  readonly activeSuggest: ISuggest | null;
  readonly style: any;
  readonly suggestItemStyle: any;
  readonly userInput: string;
  readonly isHighlightMatch: boolean;
  readonly onSuggestNoResults: () => void;
  readonly renderSuggestItem?: (suggest: ISuggest, userInput: string) => JSX.Element | string;
  readonly onSuggestSelect: (suggest: ISuggest) => void;
  readonly onSuggestMouseDown: (event: React.MouseEvent) => void;
  readonly onSuggestMouseOut: (event: React.MouseEvent) => void;
}

/**
 * The list with suggestions.
 */
export default class extends React.PureComponent<IProps, {}> {
  /**
   * Whether or not it is hidden
   */
  isHidden(): boolean {
    if (this.props.children) {
      return this.props.isHidden;
    }
  
    return this.props.isHidden || this.props.suggests.length === 0;
  }

  /**
   * There are new properties available for the list
   */
  componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.suggests !== this.props.suggests) {
      if (nextProps.suggests.length === 0) {
        this.props.onSuggestNoResults();
      }
    }
  }

  /**
   * Render the view
   * @return {Function} The React element to render
   */
  render(): JSX.Element {
    const classes = classnames(
      'geosuggest__suggests',
      this.props.suggestsClassName,
      {'geosuggest__suggests--hidden': this.isHidden()},
      {
        [this.props.hiddenClassName || '']: this.props.hiddenClassName
          ? this.isHidden()
          : null
      }
    );

    if (!this.props.userInput && !!this.props.children) {
      const childWithProp = React.Children.map(this.props.children, (child) => {
        if (child ===  null) {
          return null;
        }

        return React.cloneElement(child as React.ReactElement<any>, {
          onMouseDown: this.props.onSuggestMouseDown,
          onMouseOut: this.props.onSuggestMouseOut
        });
      });
      return (<ul className={classes} style={this.props.style}>{childWithProp}</ul>);
    }

    return (
      <ul className={classes} style={this.props.style}>
        {this.props.suggests.map(suggest => {
          const isActive =
            this.props.activeSuggest &&
            suggest.placeId === this.props.activeSuggest.placeId || false;

          return (
            <SuggestItem
              key={suggest.placeId}
              className={suggest.className || ''}
              userInput={this.props.userInput}
              isHighlightMatch={this.props.isHighlightMatch}
              suggest={suggest}
              style={this.props.suggestItemStyle}
              suggestItemClassName={this.props.suggestItemClassName}
              isActive={isActive}
              activeClassName={this.props.suggestItemActiveClassName}
              onMouseDown={this.props.onSuggestMouseDown}
              onMouseOut={this.props.onSuggestMouseOut}
              onSelect={this.props.onSuggestSelect}
              renderSuggestItem={this.props.renderSuggestItem}
            />
          );
        })}
      </ul>
    );
  }
}
