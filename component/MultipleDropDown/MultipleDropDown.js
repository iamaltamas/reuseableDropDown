import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import item from '../../listData.json';

const MultipleDropDown = () => {
  const [optionValue, setOptionValue] = useState(false);
  const [optionValueData, setOptionValueData] = useState([]);
  const [ternaryOp, setTernaryOp] = useState(null);
  console.log('optionValueData ', optionValueData, ternaryOp);
  const optionHandle = () => {
    setOptionValue(!optionValue);
  };
  const listHandle = (valueName, id) => {
    const update = [...optionValueData];
    update.push({value: valueName, id: id});
    setTernaryOp(valueName);
    setOptionValueData(update);
  };
  const closeHandle = id => {
    const filterData = optionValueData?.filter(item => item?.id !== id);
    // setOptionValueData(filterData);
    setOptionValueData(filterData);
  };
  useEffect(() => {
    setTernaryOp(null);
  }, [optionValueData == null]);
  return (
    <View style={{marginTop: 20, alignItems: 'center'}}>
      <View
        style={{
          width: '80%',
          borderColor: '#000',
          borderRadius: 10,
          borderWidth: 1,
          flexDirection: 'column',
        }}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
          }}
          onPress={optionHandle}>
          {ternaryOp ? (
            <View>
              {optionValueData?.map((item, index) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: 60,
                    }}>
                    <Text style={{color: '#000'}}>{item?.value}</Text>
                    <TouchableOpacity onPress={() => closeHandle(item?.id)}>
                      <AntDesign name="close" size={15} color="#000" />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          ) : (
            <Text style={{color: '#000'}}>Select Value</Text>
          )}

          {optionValue ? (
            <AntDesign name="caretup" size={20} color="#000" />
          ) : (
            <AntDesign name="caretdown" size={20} color="#000" />
          )}
        </TouchableOpacity>
      </View>
      {optionValue ? (
        <View
          style={{
            width: '80%',
            borderColor: '#000',
            borderRadius: 10,
            borderWidth: 1,
            height: '60%',
            marginTop: 5,
          }}>
          <ScrollView nestedScrollEnabled={true}>
            <View>
              {item?.map(item => {
                return (
                  <TouchableOpacity
                    onPress={() => listHandle(item?.value, item.id)}
                    style={{
                      padding: 15,

                      borderBottomWidth: 1,
                      borderBottomColor: '#000',
                    }}>
                    <Text>{item?.value}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
};

export default MultipleDropDown;
