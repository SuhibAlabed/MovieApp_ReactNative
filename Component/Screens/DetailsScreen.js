import React,{useEffect,useState} from 'react';
import {View, StyleSheet,Text,Image,ScrollView} from 'react-native';
import styles from '../Styles/styles';
const DetailsScreen = ({ navigation, route }) => {
    const [isLoading,setLoading]=useState(true);
    const [data,setData]=useState([]);
    const [dataCredits,setDataCerdits]=useState();

    const getMoviesDetails = async () => {
        try {
         const response = await fetch(`https://api.themoviedb.org/3/movie/${route.params.MovieId}?api_key=f1b8d194dba80bd94de376afc7c19763&language=en-US`);
         const json = await response.json();
         setData(json);
         console.log(json)
       } catch (error) {
         console.error(error);
       } finally {
         setLoading(false);
       }
     }

     const getCredits = async ()=>{
         try{
             const response = await fetch(`https://api.themoviedb.org/3/movie/${route.params.MovieId}/credits?api_key=f1b8d194dba80bd94de376afc7c19763&language=en-US`);
             const json = await response.json();
             setDataCerdits(json.cast);
             console.log(json.cast);
         }catch(error){
             console.log(error);
         }finally{
             setLoading(false);
         }
     }

     useEffect(()=>{
        getMoviesDetails();
        getCredits();
     },[])

    const genresList=()=>{
        if( data["genres"] != undefined){
            return(
                data["genres"].map((ele,index)=>{
                    return (<Text key={index} style={styles.genresitem}>{ele['name']}</Text>)
                })
            )
    }
    }

    const creditsList=()=>{
        if( dataCredits != undefined && dataCredits != null){
            return(
                dataCredits.map((ele,index)=>{
                    return(
                    <View  style={styles.creditsItems} key={index}>
                       <Image style={styles.creditsImg} source={{uri: `https://image.tmdb.org/t/p/w500/${ele["profile_path"]}`}} />
                       <Text style={styles.Genres}>{ele["name"].split(" ")[0]}</Text>
                    </View>
                    )
                })
            )
    }
    }
    return (
        <ScrollView>
            <View style={styles.section1}>
                <Image style={styles.ImgDetails} source={{uri: `https://image.tmdb.org/t/p/w500/${data["poster_path"]}`}}/>
                <Text style={styles.titleDetails}>{data["title"]}</Text>
                <Text style={styles.rateDetails}>{(data["vote_average"]*10)+"%"}</Text>
               
             </View>
             <View style={styles.section2}>
                <View style={styles.item1} >
                    <Text style={styles.overviewTitle}>Overview</Text>
                    <Text style={styles.overview}>{data["overview"]}</Text>
                </View>
                <View style={styles.item2}>
                    <Text style={styles.Genres}>Genres</Text>
                    <View style={styles.GenresContainerList}>
                        {genresList()}
                    </View>
                </View>
                <View style={styles.item3}>
                    <Text style={styles.Gredits}>Gredits</Text>
                            <View style={styles.CreditsContainerList}>
                                <ScrollView horizontal={true}>
                                    {creditsList()}
                                </ScrollView>
                            </View>
                </View>
             </View>
        </ScrollView>
    );
}

export default DetailsScreen;
