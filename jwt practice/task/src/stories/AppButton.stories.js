import AppButton from "../components/core/AppButton";

export default {
    title:"Button",
    component:AppButton
}

const Template= args =><AppButton {...args}/>

export const Primary=Template.bind({})

Primary.args={
    backgroundColor:"cornflowerblue",
    color:"white",
    size:"sm",
}