import styled from "styled-components/native";
import { UrlText } from "@components/index";
import { View, Text } from "react-native";
// import { tmpToken } from "@style/textToken";

const Login = () => {
  return (
    // <Container>
    //   <View></View>
    //   <View></View>
    //   <UrlText
    //     text={"이용하시는 데에 어려움이 있나요?"}
    //     url=""
    //     token={tmpToken}
    //     color={`#858585`}
    //   />
    // </Container>
    <View>
      <Text>이준규 파이팅</Text>
    </View>
  );
};

export default Login;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
