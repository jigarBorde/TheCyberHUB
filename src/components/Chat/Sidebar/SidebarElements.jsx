import styled from "styled-components";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
    background-color: #0e0e0e;
    border-right: 1px solid #282828;
    color: #ecf0f1;
    padding: 15px;
    min-width: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;

    transition: all 0.3s ease-in-out;
`;

export const SidebarHeader = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border-bottom: 1px solid #252525;
`;

export const SidebarSection = styled.div`
    margin-bottom: 20px;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100%;
`;

export const RouteLink = styled(Link)`
    text-decoration: none;
    color: #ecf0f1;
    margin-bottom: 10px;
`;

export const SidebarTitle = styled.h3`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 5px 0;
    padding: 10px 0;
`;

export const ChannelList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ChannelItem = styled.div`
    padding: 12px 0;
`;

export const UserList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const UserItem = styled.div`
    padding: 12px 0;
    cursor: pointer;
    &:hover {
        background-color: #34495e;
    }
`;

export const ExpandIcon = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
`;

export const BsChevronDownIcon = styled(BsChevronDown)`
    margin-left: auto;
`;

export const BsChevronUpIcon = styled(BsChevronUp)`
    margin-left: auto;
`;