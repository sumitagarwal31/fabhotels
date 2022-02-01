import React from 'react';
import { SafeAreaView, View, Text, FlatList, Image } from 'react-native';
import { GlobalStyles } from '../../config/Globalstyles';
import { styles } from './DashboardStyles';

const Dashboard = ({ route }) => {
    const { data } = route.params;

    // render Data
    const renderData = ({ item }) => {
        return (
            <View style={styles.dataViewStyle}>
                <View style={[GlobalStyles.flexDirectionRow, { justifyContent: 'space-between' }]}>
                    <Text><Text style={styles.title}>Id:</Text> {item.id}</Text>
                    <Text><Text style={styles.title}>User Id: </Text>{item.userId}</Text>
                    <View style={GlobalStyles.flexDirectionRow}>
                        <Text><Text style={styles.title}>Completed: </Text> </Text>
                        <Image
                            source={item.completed ? require('../../assets/images/thumb-up.png') : require('../../assets/images/thumb-down.png')}
                            style={styles.completedImageStyle}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 5 }}>
                    <Text><Text style={styles.title}>Title: </Text>{item.title}</Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={GlobalStyles.safeAreaViewStyle}>
            <View style={GlobalStyles.container}>
                <FlatList
                    data={data}
                    renderItem={renderData}
                    keyExtractor={data.id}
                />
            </View>
        </SafeAreaView>
    )
}

export default Dashboard;