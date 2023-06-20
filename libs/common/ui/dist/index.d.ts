import * as React from "react";

export interface MovingTextProps {
    autofocus?: boolean;
    cancelKeyboardEventOnSelection?: boolean;
    className?: string;
    createFromSearch?(items: OptionValue[], search: string): OptionValue;
    defaultValue?: OptionValue;
    delimiters?: [any];
    disabled?: boolean;
  }

declare class MovingText extends React.Component<MovingTextProps, any> {}