import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { FlatList } from 'react-native-gesture-handler';

const ResultsList = ({ title, results }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.restaurant.id}
                renderItem={({ item }) => {
                    return (
                        <ResultsDetail result={item.restaurant} />
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default ResultsList;