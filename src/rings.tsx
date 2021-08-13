import React from "react";
import { View ,Text} from "react-native";
import ActivityRings from "react-native-activity-rings";  
 
const Rings = () => {
 
 const activityData = [ 
   { value: 0.8 }, 
   { value: 0.6 }, 
   { value: 0.2 }
 ];
 
 const activityConfig = { 
   width: 150,  
   height: 150
 };
 
 return (
  <View style={{flex:1}}>

      <View style={{height:"50%",justifyContent:"center",alignItems:"center",marginVertical:10}}>
      <ActivityRings data={activityData} config={activityConfig} /> 

      </View>
<View style={{height:"50%",justifyContent:"center",alignItems:"center",padding:20}}>
    <Text style={{color:"red"}}> 
only support upto 100 and color type hex only no gradient
    </Text>
</View>

  </View>
  );
}  
export default Rings;