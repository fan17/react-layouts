import React from "react";

export type SidebarProps = {
    children: string | React.ReactElement,
}

const Sidebar = ({children}: SidebarProps) => <aside style={{ border: '1px red solid', flex: 1 }}><h2>Sidebar</h2>{children}</aside>;

export default Sidebar;