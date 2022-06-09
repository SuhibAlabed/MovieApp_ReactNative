import React,{useEffect,useState} from 'react';
import {View,ActivityIndicator,FlatList,Text,Image,TouchableHighlight,Button} from 'react-native';
import styles from '../Styles/styles';




const HomeScreen = ({navigation}) => {
    const [isLoading,setLoading]=useState(true);
    const [data,setData]=useState([]);
    const [dataMovieGenres,setDataMovieGenres]=useState([]);
    const [movieType,setMovieType]=useState("upcoming") //top_rated,popular,upcoming


    const getMoviesGenres = async () => {
        try {
         const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=f1b8d194dba80bd94de376afc7c19763&language=en-US`);
         const json = await response.json();
         setDataMovieGenres(json.genres);
        console.log(json.genres)
       } catch (error) {
         console.error(error);
       } finally {
         setLoading(false);
       }
     }

    const getMovies = async (type) => {
        setMovieType(type);
        try {
         const response = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=f1b8d194dba80bd94de376afc7c19763&language=en-US&page=1`);
         const json = await response.json();
         setData(json.results);
        //console.log(json.results)
       } catch (error) {
         console.error(error);
       } finally {
         setLoading(false);
       }
     }

     useEffect(()=>{
        getMoviesGenres();
        getMovies(movieType);
        
     },[])


     const genresList=(GenresArryOfObj)=>{
        if( GenresArryOfObj!= undefined && GenresArryOfObj !=null && dataMovieGenres != undefined && dataMovieGenres !=null){
            return(
                GenresArryOfObj.map((item,index)=>{
                    return ( <View key={index} ><Text style={styles.genresitemHome}>{dataMovieGenres.find(x=>x['id']==item)["name"]}</Text></View>)
                })
               
            )
        }
    }
     const renderItem=({item})=>{
        return(
            <TouchableHighlight  underlayColor="#ddd" onPress={()=>navigation.navigate('Details',{MovieId:item["id"]})}>
                <View style={styles.card}>
                    <View style={{display:"flex",flexDirection:"row"}}>
                        <View style={styles.imgContainer}>
                        {/* poster image here */}
                        <Image style={styles.img} source={{uri: `https://image.tmdb.org/t/p/w500/${item["poster_path"]}`}}/>
                        </View>
                        <View style={styles.info}>
                            {
                                item['title'].length>=14?
                                <Text style={styles.movieTitle}>{item['title'].substr(1,14)+" ..."}</Text>:
                                <Text style={styles.movieTitle}>{item['title']}</Text>
                            }
                            <Text style={styles.date}>{item['release_date']}</Text>
                            <View style={styles.GenresContainerList}>
                                {genresList(item["genre_ids"])}
                            </View>
                        </View>
                    </View>
                    <View style={styles.rate}>
                        {/* Rate */}
                        <Text style={styles.rate}>{(item["vote_average"]*10)+"%"}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
     }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
               
            <TouchableHighlight  onPress={()=>getMovies("upcoming")} underlayColor="#ddd"
                style={movieType=="upcoming"?styles.Activebtn:styles.NotActivebtn}>
                     <Text style={movieType=="upcoming"?styles.btnText:styles.NotActiveBtnText}>Upcoming</Text>
                </TouchableHighlight>


                <TouchableHighlight  onPress={()=>getMovies("popular")} underlayColor="#ddd"
                style={movieType=="popular"?styles.Activebtn:styles.NotActivebtn}>
                     <Text style={movieType=="popular"?styles.btnText:styles.NotActiveBtnText}>Popular</Text>
                </TouchableHighlight>


                <TouchableHighlight  onPress={()=>getMovies("top_rated")} underlayColor="#ddd"
               style={movieType=="top_rated"?styles.Activebtn:styles.NotActivebtn}>
                     <Text style={movieType=="top_rated"?styles.btnText:styles.NotActiveBtnText}>top Rated</Text>
                </TouchableHighlight>
            </View>
            {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={renderItem}
        />
      )}
        </View>
    );
}


export default HomeScreen;
