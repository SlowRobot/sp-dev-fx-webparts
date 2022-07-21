import * as React from 'react';
import styles from './Layouts.module.scss';
import { ILayoutProps } from './ILayoutProps';
import * as strings from 'PageHierarchyWebPartStrings';
import { Nav, INavStyles, INavStyleProps } from 'office-ui-fabric-react';

const navStyles = (props: INavStyleProps): Partial<INavStyles> => ({
  chevronIcon: [
    props.isExpanded ? { transform: 'rotate(0deg)' } : { transform: 'rotate(-90deg)' }
  ],
  chevronButton: [
    props.isSelected ? { backgroundColor: props.theme.semanticColors.buttonBackgroundPressed } : {},
    {
      selectors: {
        '&::after': {
          borderLeft: 'none',
        }
      },
    }
  ]
});

export const TreeLayout: React.FunctionComponent<ILayoutProps> = props => {
  return (
    <div className={styles.layouts}>
      {props.nav ? (
        <ul className={styles.listLayout}>
          {<Nav styles={navStyles} groups={[{ links: [props.nav] }]} selectedKey={(props.pageId ?? '1').toString()} />}
        </ul>
      ) : (
        <span>{strings.Message_NoChildrenFound}</span>
      )}
    </div>);
};
