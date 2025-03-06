// Quelle: https://github.com/liptonzuma/React-Native-Dropdown

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Platform,
  Image,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { ChevronUp, ChevronDown } from 'lucide-react-native';

type OptionItem = {
  value: string;
  label: string | React.JSX.Element;
};

interface DropDownProps {
  data: OptionItem[];
  onChange: (item: OptionItem) => void;
  placeholder: string;
}

export default function IngredientSelect({
  data,
  onChange,
  placeholder,
}: DropDownProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = useCallback(() => setExpanded(!expanded), [expanded]);

  const [selectedItem, setSelectedItem] = useState<OptionItem | null>(null);

  const buttonRef = useRef<View>(null);

  const [top, setTop] = useState(0);
  const [width, setWidth] = useState(0);

  const onSelect = useCallback((item: OptionItem) => {
    onChange(item);
    setSelectedItem(item);
    setExpanded(false);
  }, []);

  return (
    <View
      ref={buttonRef}
      onLayout={(event) => {
        const layout = event.nativeEvent.layout;
        const topOffset = layout.y;
        const heightOfComponent = layout.height;
        const widthOfComponent = layout.width;

        const finalValue =
          topOffset + heightOfComponent + (Platform.OS === "android" ? -32 : 3);

        setTop(finalValue);
        setWidth(widthOfComponent);
      }}
    >
      <TouchableOpacity
        className="h-[55px] w-full bg-lightbackground flex-row items-center justify-between rounded-[15px] px-[12px]"
        activeOpacity={0.8}
        onPress={toggleExpanded}
      >
        {selectedItem ? (
          typeof selectedItem.label === 'string' ? (
            <Text className="text-[16px] font-robotoMedium leading-[25px] text-white">{selectedItem.label}</Text>
          ) : (
            selectedItem.label
          )
        ) : (
          <Text className="text-[16px] font-robotoMedium leading-[25px] text-white text-opacity-50">{placeholder}</Text>
        )}
         {expanded ? <ChevronUp color="white"/> : <ChevronDown color="white"/>}
      </TouchableOpacity>
      {expanded ? (
        <Modal visible={expanded} transparent>
          <TouchableWithoutFeedback onPress={() => setExpanded(false)}>
            <View className="flex-1">
              <View
                className="absolute bg-lightbackground pl-[12px] rounded-[15px] max-h-[250px]"
                style={{ top, width }}
              >
                <FlatList
                  keyExtractor={(item) => item.value}
                  data={data}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      className="h-[55px] flex justify-center border-b border-darkbackground"
                      onPress={() => onSelect(item)}
                    >
                      {typeof item.label === 'string' ? (
                        <Text className="text-white font-robotoMedium leading-[25px]">{item.label}</Text>
                      ) : (
                        item.label
                      )}
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      ) : null}
    </View>
  );
}