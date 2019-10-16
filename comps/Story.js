import React,{useState} from 'react';
import {View,Text,Switch} from 'react-native';
import styles from '../styles/StoryStyles';

function Changemode(){
  const [nightMode, setNightMode]=useState(false);

return(
<View style={{backgroundColor: nightMode ? '#000000':'#b3f0ff'}} >
<View style={styles.bg}>
<Text style={{color:nightMode ? '#FFFFFF':'#000000'}}>Night Mode</Text>
<Switch trackColor={{false:'#E1E1E1',true:'#10E316'}}
        value = {nightMode}
        onValueChange ={()=>setNightMode(!nightMode)}
/>
</View>
<Text style={{color:nightMode ? '#FFFFFF':'#000000'}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel magna id erat molestie finibus. Mauris at venenatis nulla. Nullam tristique metus quis sodales tempor. In vel consectetur tortor. Duis sit amet ipsum vitae est porttitor lobortis. Aliquam fringilla faucibus ultrices. Nunc ornare pellentesque molestie. Etiam commodo erat ac augue tempus, in condimentum ipsum condimentum. Mauris libero orci, viverra non placerat maximus, scelerisque id dolor. Maecenas pulvinar ultricies finibus. Proin est est, condimentum a efficitur non, imperdiet vel augue. Suspendisse feugiat eros in eros cursus dictum.
Aliquam sit amet imperdiet velit. Phasellus a semper ex, ut cursus risus. Phasellus id ante sed sem posuere sagittis. Proin elit ex, sodales et tortor eget, euismod suscipit est. Pellentesque ut dolor sed velit viverra tincidunt quis eu urna. Nulla id suscipit arcu. Pellentesque ut leo maximus justo aliquet interdum. In dui ex, semper at arcu ac, porta consectetur ligula. Duis sed rutrum turpis. Curabitur neque libero, congue eu vestibulum id, tristique id mauris. Maecenas malesuada semper ante.
</Text>

</View>
);
}

export default Changemode;
