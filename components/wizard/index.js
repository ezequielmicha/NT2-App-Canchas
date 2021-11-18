
import React, { useRef, useState } from "react"
import { SafeAreaView, Button, View, Text } from "react-native"
import Wizard from "react-native-wizard"

import Step1 from "../../screens/Reserve/SelectSize";
import Step2 from "../../screens/Reserve/SelectDate";
import Step3 from "../../screens/Reserve/SelectShift";
import Step4 from "../../screens/Pay";

export default () => {
  const wizard = useRef()
  const [isFirstStep, setIsFirstStep] = useState(true)
  const [isLastStep, setIsLastStep] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const stepList = [
    {
      content: <Step1/>,
    },
    {
      content: <Step2/>,
    },
    {
      content: <Step3/>,
    },
    {
      content: <Step4/>,
    },
  ]

  return (
    <View>
      <SafeAreaView style={{ backgroundColor: "#FFF" }}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor: "#FFF",
            borderBottomColor: "#dedede",
            borderBottomWidth: 1,
            marginTop: 30
          }}>
          <Button disabled={isFirstStep} title="Anterior" onPress={() => wizard.current.prev()} />
          <Text >Reserva paso {currentStep + 1}</Text>
          <Button disabled={isLastStep} title="Siguiente" onPress={() => wizard.current.next()} />
        </View>
      </SafeAreaView>
      <View style={{ flex: 2, flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Wizard
          ref={wizard}
          steps={stepList}
          isFirstStep={val => setIsFirstStep(val)}
          isLastStep={val => setIsLastStep(val)}
          onNext={() => {
            console.log("Next Step Called")
          }}
          onPrev={() => {
            console.log("Previous Step Called")
          }}
          currentStep={({ currentStep, isLastStep, isFirstStep }) => {
            setCurrentStep(currentStep)
          }}
        />
        <View style={{ flexDirection: "row", margin: 18 }}>
          {stepList.map((val, index) => (
            <View
              key={"step-indicator-" + index}
              style={{
                width: 10,
                marginHorizontal: 6,
                height: 10,
                borderRadius: 5,
                backgroundColor: index === currentStep ? "#fc0" : "#000",
                marginTop: 80
              }}
            />
          ))}
        </View>
      </View>
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
// });
