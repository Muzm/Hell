import * as React from 'react';
import { jumpTo } from '../lib/helper';

export interface JumpManProps {
  search: string;
}
export default class JumpMan extends React.Component<
  JumpManProps,
  { activeId: string }
> {
  constructor(props: JumpManProps) {
    super(props);
    this.state = { activeId: '' };
  }
  public updateActiveId(activeId: string) {
    jumpTo(activeId);
    this.setState({ activeId });
  }
  public render() {
    return this.props.children;
  }
}
