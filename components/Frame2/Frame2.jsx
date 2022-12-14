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

import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button1 from 'components/Button1/Button1';

 
const Frame21 = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: "100%",  
  height: "100%",  
  justifyContent: `flex-end`,  
  alignItems: `flex-end`,  
  padding: `0px 22px`,  
  boxSizing: `border-box`,  
});
  
const LoremIpsumTestToBeSe = styled("div")({  
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
  width: `492px`,  
  height: `189px`,  
  margin: `0px`,  
});
  
const Avatar1 = styled(Avatar)({  
  margin: `0px 0px 0px 10px`,  
  width: `40px`,  
  height: `40px`,  
});
  
const Button2 = styled(Button1)(({ theme }) =>({  
  width: `228px`,  
  height: `107px`,  
  margin: `0px 0px 0px 10px`,  
}));
 
function Frame2(props) {
  return (
    <Frame21 className={props.className} >
      <LoremIpsumTestToBeSe >
        {`Lorem ipsum test to be seen and not read for placement only. Lorem ipsum test to be seen.`}
          </LoremIpsumTestToBeSe>
      <Avatar1 variant="circular"  >OP</Avatar1>
      <Button2   />
    </Frame21>
  );
}

export default Frame2;
