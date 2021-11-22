import React from 'react';
import { FlatList } from 'react-native';
import Row from "./row";

const renderItem = ({item})=> {
    return <Row reserve={item} />
}

export default ({ reserves }) => (
    <FlatList
        data={reserves}
        renderItem={renderItem}
    />
)