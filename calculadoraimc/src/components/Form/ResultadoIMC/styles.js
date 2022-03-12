import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   resultImc:{
       flex:1,
       marginTop:20,
       paddingTop:15,
       alignItems:"center",
       width:"100%"
   },
   nroImc:{
       fontSize:26,
       fontWeight:"bold",
       color:"#ff0043",
   },
   informacao:{
       fontSize:18,
       fontWeight:"bold",
       color: "#ff0043",
   },
   boxShared:{
        width:"100%",
        alignItems: "center",
        marginBottom: 10,
   },
   textShared:{
       color: "#ffffff",
       fontWeight: "bold",
       paddingHorizontal:30,
   },
   botaoShared:{
       backgroundColor:"#1877f2",
       borderRadius:50,
       paddingTop:5,
       paddingBottom:5,
       marginLeft:2,
       marginTop:1,
   }

});

export default styles