import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
container:{
        flex:1,
        paddingTop:10,
        backgroundColor:"#fafafa"
    },
   buttonContainer:{
       display:"flex",
       flexDirection:"row",
       justifyContent:"space-around",
       paddingRight:10,
       paddingLeft:10,
       marginBottom:10
   },
   Activebtn:{
    borderRadius:50,
    borderWidth: 0,
    paddingLeft:15,
    paddingRight:15,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:"#47b612",
    width:"30%",
    shadowColor: "#333",
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity:  0.21,
    shadowRadius: 8.19,
    elevation: 11
   },
   NotActivebtn:{
    borderRadius:50,
    borderWidth: 0,
    paddingLeft:15,
    paddingRight:15,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:"#eee",
    width:"30%",
   },
   btnText:{
        fontWeight:"bold",
        color:"white",
        borderWidth:0,
        textAlign:"center",
        fontSize:15
   },
   NotActiveBtnText:{
    fontWeight:"bold",
    color:"#333",
    borderWidth:0,
    textAlign:"center",
    fontSize:15
},
   card:{
       display:"flex",
       flexDirection:"row",
       marginTop:10,
       marginBottom:10,
       marginLeft:15,
       marginRight:15,
       paddingLeft:10,
       paddingRight:10,
       justifyContent:"space-between",
       backgroundColor:"#fff",
       borderRadius:20,
       paddingTop:10,
       paddingBottom:10,
       shadowColor: "#a9a9a9",
       shadowColor: "#828181",
       shadowOffset: {
         width: 0,
         height: 8,
       },
       shadowOpacity:  0.21,
       shadowRadius: 8.19,
       elevation: 11
   },
   info:{
        marginLeft:10,
        width:"100%"
   },   
   img:{
    width:100,
    height:140,
    borderRadius:20,
    

   },
   rate:{
       fontWeight:"900",
       fontSize:20,
       display:"flex",
       flexDirection:"column",
       justifyContent:"flex-end",
       color:"#47b612",
       paddingRight:5,
       position:"absolute",
       right:5,
       bottom:5

   },
   movieTitle:{
    fontWeight:"bold",
    fontSize:20,
    color:"#333"
   },

//    DetailsScreen Style

ImgDetails:{
    width:200,
    height:310,
    borderRadius:15,
    marginBottom:10
},
section1:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:20
},
titleDetails:{
    fontWeight:"900",
    color:"#333",
    fontSize:20,
    textAlign:"center"
},
rateDetails:{
     fontWeight:"900",
     fontSize:20,
     color:"#47b612",
},
section2:{
    padding:0,
},
overviewTitle:{
    fontWeight:"900",
    color:"#333",
    fontSize:17
},
Genres:{
    fontWeight:"900",
    color:"#333",
    fontSize:17
},
item1:{
    padding:15
},
item2:{
    padding:15
},
item3:{
    marginTop:10,
    paddingLeft:15
},
genresitem:{
    backgroundColor:"#d8d8d8",
    borderRadius:50,
    fontWeight:"bold",
    color:"#333",
    marginRight:10,
    marginBottom:10,
    marginTop:10,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5,
    
},
genresitemHome:{
    backgroundColor:"#d8d8d8",
    borderRadius:50,
    fontWeight:"bold",
    color:"#333",
    marginRight:5,
    marginBottom:8,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:3,
    paddingBottom:3,
    
},
GenresContainerList:{
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    width:"55%"
},
Gredits:{
    fontWeight:"900",
    color:"#333",
    fontSize:17
},
creditsItems:{
    marginRight:20,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
},
creditsImg:{
    width:90,
    height:90,
    borderRadius:100
}
})

export default styles