import React from 'react';
import { FlatList } from 'react-native';
import Row from "./row";

// const renderItem = ({item, goToCal})=> {
//     console.log("goToCalrenderItem", goToCal);
//     return <Row reserve={item} goToCal={goToCal} />
// }

export default ({ reserves, goToCal }) => (
    <FlatList
        data={reserves}
        renderItem={({ item }) => {
            return <Row reserve={item} goToCal={goToCal} />
        }}
    />
)