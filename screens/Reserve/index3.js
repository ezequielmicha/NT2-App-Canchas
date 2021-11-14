import React from "react";
import { Button, StyleSheet, View } from 'react-native';

const Wizard = ({ children }) => {
  const [activePageIndex, setActivePageIndex] = React.useState(0);
  const pages = React.Children.toArray(children);
  const currentPage = pages[activePageIndex];

  const goNextPage = () => {
    setActivePageIndex(index => index + 1);
  };

  const goPrevPage = () => {
    setActivePageIndex(index => index - 1);
  };

  const ButtonPrev = () => {
      return (
          activePageIndex > 0 ? (
            <Button
              onPress={goPrevPage}
              title="Atras"/>
          ) : null
      )
  }


  const ButtonNext = () =>
    activePageIndex < pages.length - 1 ? (
      <Button
        onPress={goNextPage}
        title="Siguiente"/>
    ) : null;

  return (
    <View style={styles.container}>
            {currentPage}
        <View style = {styles.button} >
    {/* <div className="wizard">
      <div className="wizard__content">{currentPage}</div>
      <div className="wizard__buttons"> */}
        <ButtonPrev />
        <ButtonNext />
      {/* </div>
    </div> */}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        margin:10
        
    },
    button: {
        flex: 1,
        margin: 80,
        flexDirection: 'column',
        justifyContent: 'space-between',
        
    }
});

export default Wizard;
