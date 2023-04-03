import React,{useRef} from 'react';
import { View,StyleSheet, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputListing({imageUris=[], onRemoveImage,onAddImage}) {
    const scrollView= useRef();
   
   return (
    <View>
    <ScrollView horizontal ref={scrollView} onContentSizeChange={()=>  scrollView.current.scrollToEnd()}>
    <View style={styles.container}>
{imageUris.map((uri)=> (
<View style={styles.image}  key={uri} >
<ImageInput key={uri} 
 imageUri={uri} 
onChangeImage={()=> onRemoveImage(uri)}/>
</View>
))}
<ImageInput onChangeImage={uri => onAddImage(uri)}/>
    </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
container:{ 
    flexDirection:'row',  
 },
 image:{
    margin:10
 }
})
export default ImageInputListing;