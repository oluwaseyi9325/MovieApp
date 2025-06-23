import React from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "./styles";
import { AppScreenProps } from "./interface";
// import Header from "../Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { moderateVerticalScale } from "react-native-size-matters";
import Size from "../../lib/utils/useResponsiveness";

const Appscreen: React.FC<AppScreenProps> = ({
  children,
  isNotScrollable,
  backDashboard,
  title,
  isNotHeader,
  ...props
}: any) => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.screen, { paddingTop: moderateVerticalScale(top) }]}>
      <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar barStyle="dark-content" />
        {/* {!isNotHeader && (
          <Header title={title} backDashboard={backDashboard} {...props} />
        )} */}
        {isNotScrollable ? (
          <View style={[styles.view, {paddingHorizontal: Size.calcWidth(20)}]}>{children}</View>
        ) : (
          <ScrollView
            overScrollMode="never"
            contentContainerStyle={{ paddingHorizontal: Size.calcWidth(20) }}
            showsVerticalScrollIndicator={false}
            style={styles.view}
          >
            {children}
          </ScrollView>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Appscreen;
