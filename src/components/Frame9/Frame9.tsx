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

import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Frame9Props } from 'src/types';

 
const Frame91: any = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: "100%",  
  height: `155px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  overflow: `hidden`,  
});
  
const FormControlLabel1: any = styled(FormControlLabel)({  
  position: `absolute`,  
  left: `61px`,  
  top: `50px`,  
  margin: `0px`,  
});
  
const TextFieldStandard: any = styled(TextField)({  
  width: `220px`,  
  position: `absolute`,  
  left: `241px`,  
  top: `44px`,  
});
 
function Frame9(props: Frame9Props): JSX.Element {
  return (
    <Frame91 className={props.className} >
      <FormControlLabel1 control={<Checkbox defaultChecked={false} size="medium" color="primary" />} label={`Label`} />
      <TextFieldStandard variant="standard" size="medium"  label={`Label`}    />
    </Frame91>
  );
}

export default Frame9;