import React from "react";

export type MainProps = {
    children: string | React.ReactElement,
}

const Main = ({ children }: MainProps) => <main style={{flex: '2', border: '1px solid green'}}>{children}</main>;

export default Main;