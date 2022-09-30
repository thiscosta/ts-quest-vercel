/**********************************************************************
*
*   Component generated by Quest
*
*   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts. 
*   To preseve that abilty, always export from Quest to regenerate this file.
*   To setup props, bindings and actions, use the Quest editor
*   Code Logic goes in the hook associated with this component
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import { styled } from '@mui/material/styles';
import ImageImage from 'src/assets/images/WorngLayoutTest_Image.png';
import { WorngLayoutTestProps } from 'src/types';

 
const Property1Default: any = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  boxShadow: `0px 4px 6px rgba(3, 0, 161, 0.2)`,  
  borderRadius: `8px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  height: `460px`,  
  width: `410px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
});
  
const Image: any = styled("div")({  
  backgroundImage: `url(${ImageImage})`,  
  backgroundPosition: `center`,  
  backgroundSize: `cover`,  
  backgroundRepeat: `no-repeat`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  alignSelf: `stretch`,  
  height: `257px`,  
  margin: `0px`,  
  overflow: `hidden`,  
});
  
const TextButton: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-end`,  
  alignItems: `flex-end`,  
  padding: `0px 40px`,  
  boxSizing: `border-box`,  
  margin: `30px 0px 0px 0px`,  
});
  
const LoremIpsumTestToBeSe: any = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `20px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  width: `297.86px`,  
  zIndex: `0`,  
  margin: `0px`,  
});
 
function WorngLayoutTest(props: WorngLayoutTestProps): JSX.Element {
  return (
    <Property1Default className={props.className} >
      <Image >
      </Image>
      <TextButton >
        <LoremIpsumTestToBeSe >
          {`Lorem ipsum test to be seen and not read for placement only. Lorem ipsum test to be seen.`}
            </LoremIpsumTestToBeSe>
      </TextButton>
    </Property1Default>
  );
}

export default WorngLayoutTest;
