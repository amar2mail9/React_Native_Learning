import { Text, View } from "react-native"


const Navbar = ()=>{

    const menu = [{
        name:"Home",
        
        
    },
{
    name:"Home1"
}]
    return <>
    <View>
        <Text>Navbar</Text>
        {
            menu.map(({name } , idx)=>{
                return <Text key={idx}>{name}</Text>
            })
        }
    </View>
    </>
}

export default Navbar